# UIX Design Library → Figma Plugin API Integration

## Overview

This document describes the complete **API contract** between the UIX Design Library (React components) and the **UIX Bridge Figma Plugin**. The plugin fetches component variants individually via the published API, enabling real-time synchronization of design-to-code workflows.

---

## Architecture

### 1. **Library Payload Pipeline**

```
React Components (app.tsx)
         ↓
    [Serialization]
         ↓
    Variant Payloads
    (figmaLayers + metadata)
         ↓
    [Automation Script]
    (sync-library.js)
         ↓
    Public API Endpoint
    (public/api/library_data.json)
         ↓
    Figma Plugin UI
    (figma-plugin/ui.html)
         ↓
    Figma Layer Import
    (figma-plugin/code.ts)
```

### 2. **Payload Structure**

Each component variant follows this schema:

```typescript
interface ComponentVariantPayload {
  // Identification
  source: 'UIX_DESIGN_LIBRARY';
  version: '1.0';
  component: string;           // e.g., "buttons"
  componentId: string;         // kebab-case ID
  componentName: string;       // e.g., "Button"
  variant: string;             // e.g., "Primary Large"
  variantId: string;           // Stable ID: "buttons|primary-large"

  // Styling
  labelText: string;
  labelColor: string;          // HEX or oklch()
  backgroundColor: string;
  theme: 'light' | 'dark';

  // Preview & Documentation
  timestamp: number;
  previewUrl: string;          // Full URL to component preview
  figmaLayers: FigmaLayerNode; // Serialized HTML → Figma structure

  // Visual Metadata
  visualPreview: {
    label: string;
    text: string;
    color: string;
    textColor: string;
    width: number;
    height: number;
  };
}
```

### 3. **FigmaLayerNode Structure**

Serialized from rendered React component HTML:

```typescript
interface FigmaLayerNode {
  type: 'FRAME' | 'TEXT' | 'RECT';
  name: string;
  width: number;
  height: number;
  x: number;
  y: number;

  // Styling
  backgroundColor: string;           // CSS color
  borderRadius: number;              // pixels
  border: {
    width: number;
    color: string;
    style: string;
  };
  boxShadow: string | null;

  // Layout
  layoutMode: 'HORIZONTAL' | 'VERTICAL' | 'NONE';
  padding: {
    top: number;
    right: number;
    bottom: number;
    left: number;
  };

  // Hierarchy
  children: FigmaLayerNode[];
}
```

---

## API Endpoints

### **1. Library Data API**
- **URL**: `https://uix.sigmastudioo.com/api/library_data.json`
- **Method**: GET
- **Response Format**: JSON

**Response Schema:**
```typescript
interface LibraryDataResponse {
  success: boolean;
  data: ComponentGroup[];
  updatedAt: string;
}

interface ComponentGroup {
  id: string;                    // e.g., "buttons"
  name: string;                  // e.g., "Buttons"
  variants: ComponentVariantPayload[];
}
```

**Example Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": "buttons",
      "name": "buttons",
      "variants": [
        {
          "source": "UIX_DESIGN_LIBRARY",
          "version": "1.0",
          "component": "buttons",
          "componentId": "buttons",
          "componentName": "Button",
          "variant": "Primary Small",
          "variantId": "buttons|primary-small",
          "labelText": "Primary Small",
          "labelColor": "#0f172a",
          "backgroundColor": "#ffffff",
          "theme": "light",
          "timestamp": 1778069886493,
          "previewUrl": "http://localhost:3333/?preview=true&component=buttons&variant=Primary%20Small&theme=light",
          "figmaLayers": {
            "type": "FRAME",
            "name": "Button",
            "width": 120,
            "height": 40,
            "x": 0,
            "y": 0,
            "backgroundColor": "#6301E4",
            "borderRadius": 8,
            "border": { "width": 0, "color": "#000000", "style": "solid" },
            "boxShadow": null,
            "layoutMode": "HORIZONTAL",
            "padding": { "top": 8, "right": 16, "bottom": 8, "left": 16 },
            "children": [
              {
                "type": "TEXT",
                "text": "Click me",
                "fontSize": 14,
                "color": "#ffffff",
                "fontFamily": "Inter",
                "fontWeight": "600"
              }
            ]
          },
          "visualPreview": {
            "label": "Primary Small",
            "text": "Click me",
            "color": "#6301E4",
            "textColor": "#ffffff",
            "width": 120,
            "height": 40
          }
        }
      ]
    }
  ],
  "updatedAt": "2025-05-09T12:00:00Z"
}
```

---

## Figma Plugin Integration

### **1. Plugin UI (figma-plugin/ui.html)**

The plugin interface provides three methods to load component variants:

#### A. **Load from Published API**
```javascript
async function loadLibraryFromApi() {
  const response = await fetch('https://uix.sigmastudioo.com/api/library_data.json');
  const json = await response.json();
  renderVariants(json.data);
}
```

#### B. **Manual Paste (Clipboard)**
Users can copy variant JSON from the library website and paste into the modal.

#### C. **Auto-clipboard Detection**
On plugin load, checks clipboard for UIX JSON and auto-imports.

### **2. Variant Rendering**

Each variant becomes a selectable item in the sidebar:
- **Preview thumbnail** (colored by background)
- **Variant name** (e.g., "Primary Small")
- **Component name** (e.g., "buttons")
- **Click to preview** in iframe

### **3. Import to Figma (figma-plugin/code.ts)**

When user clicks "IMPORT TO FIGMA":

```javascript
figma.ui.onmessage = async (msg) => {
  if (msg.type === 'import-component') {
    const payloads = msg.payload;
    const components = [];

    for (const p of payloads) {
      const component = figma.createComponent();
      component.name = p.variant;
      reconstructNode(component, p.figmaLayers, msg.settings);
      components.push(component);
    }

    const componentSet = figma.combineAsVariants(components, figma.currentPage);
    figma.viewport.scrollAndZoomIntoView([componentSet]);
  }
};
```

---

## Synchronization Flow

### **Phase 1: Library Serialization (app.tsx)**

1. User browses component library
2. Each demo block renders in an iframe
3. `buildPayload()` fires on mount:
   - Serializes DOM to `figmaLayers`
   - Captures styling (colors, fonts, layout)
   - Generates stable `variantId`
   - Stores in `automationDataRef`

### **Phase 2: Sync to Cloud (sync-library.js)**

1. Dev runs: `npm run sync-library`
2. Script starts local dev server
3. Puppeteer visits automation URL
4. Waits for `window.__UIX_LIBRARY_DATA__` to populate
5. Extracts `__UIX_LIBRARY_DATA__` object
6. Writes to `public/api/library_data.json`
7. (Optional) POSTs to backend for persistence

### **Phase 3: Plugin Retrieval (ui.html)**

1. User opens "UIX Bridge" plugin in Figma
2. Clicks "Load Library API"
3. Plugin fetches `library_data.json`
4. Normalizes payload structure (handles both single and grouped)
5. Renders sidebar with all variants

### **Phase 4: Figma Import (code.ts)**

1. User selects variant(s) in sidebar
2. Clicks "IMPORT TO FIGMA"
3. Plugin receives payload via `postMessage`
4. For each variant:
   - Creates `ComponentNode`
   - Calls `reconstructNode()` to build layers
   - Binds colors to Figma Design Tokens (if configured)
5. Combines multiple variants into `ComponentSetNode`
6. Zooms viewport to show result

---

## Variant Identification Strategy

### **Stable IDs**

Each variant has a unique, deterministic ID:

```
variantId = "{componentId}|{variant-name-kebab-case}"

Examples:
- buttons|primary-small
- inputs|disabled
- select|multi-select-large
```

This ensures:
- ✅ Same variant always has same ID
- ✅ Plugin can deduplicate on re-import
- ✅ Easy to map back to source component
- ✅ Works across light/dark themes separately

### **Grouping Strategy**

Variants are grouped by component in the API response:

```
Group structure:
ComponentGroup
  ├─ buttons
  │   ├─ Primary Small
  │   ├─ Primary Large
  │   └─ Secondary Medium
  ├─ inputs
  │   ├─ Default
  │   └─ Disabled
  └─ select
      ├─ Multi-select Large
      └─ Single-select Small
```

This allows:
- Bulk importing by component type
- UI organization by category
- Easy filtering and search

---

## Configuration

### **Library API URL**
Edit in `figma-plugin/ui.html`:
```javascript
const LIBRARY_API_URL = 'https://uix.sigmastudioo.com/api/library_data.json';
```

### **Backend Endpoint** (Optional)
For persistence, set in `app.tsx`:
```javascript
const response = await fetch('https://uix.sigmastudioo.com/api/library/publish', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ success: true, data: Object.values(grouped) })
});
```

### **Sync Command**
Run from project root:
```bash
npm run sync-library
```

Or publish directly:
```bash
npm run publish-library
```

---

## Error Handling

### **Plugin-Side**
```javascript
async function loadLibraryFromApi() {
  try {
    const response = await fetch(LIBRARY_API_URL);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const json = await response.json();
    if (!json.success || !Array.isArray(json.data)) {
      throw new Error('Invalid library payload');
    }
    renderVariants(json.data);
  } catch (err) {
    alert('Unable to load UIX library API. Please verify the endpoint and try again.');
    console.error(err);
  }
}
```

### **Common Issues**

| Issue | Solution |
|-------|----------|
| `HTTP 404` | Ensure `public/api/library_data.json` exists and is accessible |
| `Invalid payload` | Check that payload includes `success: true` and `data` is array |
| `No variants loaded` | Verify library is synced with `npm run sync-library` |
| `Clipboard empty` | Make sure to copy JSON before opening paste modal |

---

## Best Practices

### **For Library Developers**

1. **Keep variantIds stable** – Don't rename/reorganize components mid-project
2. **Publish frequently** – Run `npm run sync-library` after adding new variants
3. **Test the plugin** – Verify round-trip: Library → API → Plugin → Figma
4. **Document variants** – Add descriptive labels that make sense in Figma

### **For Figma Designers**

1. **Load API regularly** – Plugin fetches live, re-importing gives fresh variants
2. **Organize by component** – Designers can work on buttons, inputs, etc. separately
3. **Use preview iframe** – Hover over variants to see live component before importing
4. **Customize on import** – Adjust Border Radius, Brand Color in the drawer before importing

---

## Future Enhancements

### **Phase 2: Design Tokens**
- Bind imported colors/spacing to Figma Design Variables
- Support theme switching in plugin UI
- Auto-generate component documentation

### **Phase 3: Bi-directional Sync**
- Plugin-to-Code: Export component changes back to React
- Version tracking for each variant
- Change log in Figma

### **Phase 4: Code Generation**
- Click "Generate Code" to emit React component JSX
- TypeScript prop inference
- Accessibility audit integration

---

## Support & Debugging

### **Check Library Data**
```bash
# In dev environment, visit:
http://localhost:3333/?automation=true

# Open browser console:
console.log(window.__UIX_LIBRARY_DATA__)
console.log(window.__UIX_CURRENT_COUNT__)
```

### **Verify API Endpoint**
```bash
curl https://uix.sigmastudioo.com/api/library_data.json | jq '.data | length'
```

### **Plugin Console Logs**
- Figma Plugin: **Cmd+Option+I** (Mac) or **Ctrl+Shift+I** (Windows)
- Check "Plugins" tab for console output

---

## API Versioning

Current version: **1.0**

All payloads include:
```json
{ "version": "1.0" }
```

Breaking changes will increment to `1.1`, `2.0`, etc.
Consumers should validate version before importing.

---

## Contact & Issues

- **Docs**: [https://library.uix.design/docs](https://library.uix.design/docs)
- **GitHub**: [UIX Design Library](https://github.com/mdrakibshekh/Uix-Design-Library)
- **Figma Plugin**: UIX Bridge (published to Figma Community)
