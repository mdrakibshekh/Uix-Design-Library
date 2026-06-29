# UIX Design Library Integration Guide

This guide provides step-by-step instructions for integrating the React component library with the Figma plugin system to enable bidirectional design-to-code workflows.

## Table of Contents

1. [Quick Start](#quick-start)
2. [Architecture Overview](#architecture-overview)
3. [Component Serialization Pipeline](#component-serialization-pipeline)
4. [API Grouping & Export](#api-grouping--export)
5. [Figma Plugin Integration](#figma-plugin-integration)
6. [Production Deployment](#production-deployment)
7. [Troubleshooting](#troubleshooting)

---

## Quick Start

### For Local Development

```bash
# 1. Start the development server
npm run dev

# 2. In a separate terminal, generate library data
npm run sync

# This will:
# - Start Vite on port 3333
# - Launch Puppeteer to extract all components
# - Group variants by component type
# - Generate public/api/library_data.json with statistics
```

### Load in Figma Plugin

1. Open the Figma plugin UI
2. Click **"Load Library API"** button
3. Select a component variant from the sidebar
4. Review the preview and component properties
5. Click **"Import to Figma"** to insert the component

---

## Architecture Overview

```
┌─────────────────────────────────────────────────────────────┐
│                    React Component Library                   │
│  (40+ components across Base, Application, and Foundations)  │
└──────────────────────────┬──────────────────────────────────┘
                           │
                    app.tsx - buildPayload()
                    • Adds componentId, componentName
                    • Generates deterministic variantId
                    • Serializes to DOM → figmaLayers JSON
                           │
┌──────────────────────────▼──────────────────────────────────┐
│           Serialization to window.__UIX_LIBRARY_DATA__       │
│         (Array of 100+ individual variant payloads)          │
└──────────────────────────┬──────────────────────────────────┘
                           │
                  scripts/sync-library.js
                  • Puppeteer automation
                  • Full library extraction
                  • Component grouping logic
                           │
┌──────────────────────────▼──────────────────────────────────┐
│        public/api/library_data.json (Grouped Output)         │
│  - ComponentGroup[] with variants array per component        │
│  - Statistics (totalComponents, totalVariants, byCategory)   │
│  - updatedAt timestamp for cache invalidation               │
└──────────────────────────┬──────────────────────────────────┘
                           │
          ┌─────────────────┼─────────────────┐
          │                 │                 │
   ┌──────▼─────┐  ┌────────▼───────┐  ┌─────▼──────┐
   │  Figma UI  │  │  Manual Paste  │  │  Clipboard │
   │  "Load API"│  │  JSON support  │  │  Auto-load │
   └──────┬─────┘  └────────┬───────┘  └─────┬──────┘
          │                 │                 │
          └─────────────────┼─────────────────┘
                            │
                figma-plugin/ui.html
                • loadLibraryFromApi()
                • normalizePayloads()
                • renderVariants()
                • selectVariant()
                │
                ├─ Preview Iframe
                ├─ Sidebar (Variant List)
                └─ Drawer (Properties)
                            │
                   postMessage to code.ts
                            │
        ┌───────────────────▼───────────────────┐
        │     figma-plugin/code.ts              │
        │  • reconstructNode() recursion        │
        │  • bindVariableToFill() for colors    │
        │  • Font loading (Inter family)        │
        │  • Layout and sizing adjustment       │
        │  • Design token variable mapping      │
        └───────────────────┬───────────────────┘
                            │
            ┌───────────────▼───────────────┐
            │  Figma Document               │
            │  ✅ Imported Component        │
            │  ✅ Styled with tokens        │
            │  ✅ Ready for refinement      │
            └───────────────────────────────┘
```

---

## Component Serialization Pipeline

### Step 1: Component Registration in app.tsx

Each component is registered with a unique `componentId`:

```typescript
// app.tsx
const componentPages: ComponentPage[] = [
  {
    name: 'Buttons',
    id: 'buttons',  // ← This becomes the componentId
    path: '/buttons',
    demo: ButtonsDemo,
    demoBlocks: [
      { name: 'Primary Button', key: 'primary-small' },
      { name: 'Secondary Button', key: 'secondary-md' },
      // ...
    ]
  },
  // ... 50+ more components
];
```

### Step 2: Variant ID Generation

When a component serializes, `buildPayload()` generates a deterministic `variantId`:

```typescript
// Format: {componentId}|{variant-kebab-case}
variantId: `${componentId}|${variant.toLowerCase().replace(/\s+/g, '-')}`

// Examples:
'buttons|primary-small'
'inputs|invalid-large'
'date-pickers|calendar-dark-mode'
```

### Step 3: DOM Serialization

The serialization process converts React components to JSON:

```typescript
// app.tsx - DemoCard component
const serializedLayers = serializeDOM(demoElement);
const payload = {
  source: 'UIX_DESIGN_LIBRARY',
  version: '1.0',
  component: 'Button',
  componentId: 'buttons',
  componentName: 'Button',
  variant: 'Primary Small',
  variantId: 'buttons|primary-small',
  figmaLayers: serializedLayers,  // ← Full DOM tree
  visualPreview: {
    label: 'Primary Small',
    width: 120,
    height: 40
  },
  timestamp: Date.now()
};

// Push to global array
window.__UIX_LIBRARY_DATA__.push(payload);
```

### Step 4: Aggregation

`window.__UIX_LIBRARY_DATA__` accumulates all variant payloads during app execution.

Track completion with counters:

```typescript
window.__UIX_TOTAL_VARIANTS__ = 120;  // Set once
window.__UIX_CURRENT_COUNT__ = 45;    // Incremented per variant
```

---

## API Grouping & Export

### Grouping Logic

The `sync-library.js` script automatically groups variants by component:

```javascript
// Input: Array of 100+ individual payloads
[
  { component: 'Button', variant: 'Primary Small', ... },
  { component: 'Button', variant: 'Primary Large', ... },
  { component: 'Input', variant: 'Default', ... },
  // ...
]

// Output: Grouped structure
[
  {
    id: 'buttons',
    name: 'Buttons',
    variants: [
      { component: 'Button', variant: 'Primary Small', ... },
      { component: 'Button', variant: 'Primary Large', ... }
    ]
  },
  {
    id: 'inputs',
    name: 'Input',
    variants: [
      { component: 'Input', variant: 'Default', ... }
    ]
  }
]
```

### API Response Format

**Endpoint**: `https://uix.sigmastudioo.com/api/library_data.json`

```json
{
  "success": true,
  "data": [
    {
      "id": "buttons",
      "name": "Buttons",
      "description": "Primary interactive element...",
      "category": "Base",
      "variants": [
        {
          "source": "UIX_DESIGN_LIBRARY",
          "version": "1.0",
          "component": "Button",
          "componentId": "buttons",
          "componentName": "Button",
          "variant": "Primary Small",
          "variantId": "buttons|primary-small",
          "figmaLayers": { /* ... */ },
          "timestamp": 1704067200000
        }
      ]
    }
  ],
  "stats": {
    "totalComponents": 40,
    "totalVariants": 150,
    "byCategory": {
      "Foundations": 3,
      "Base": 20,
      "Application": 17
    }
  },
  "updatedAt": "2024-01-01T12:00:00.000Z"
}
```

---

## Figma Plugin Integration

### Loading from API

The plugin UI (`figma-plugin/ui.html`) implements three loading strategies:

#### 1. API Loading (Recommended)

```javascript
const LIBRARY_API_URL = 'https://uix.sigmastudioo.com/api/library_data.json';

async function loadLibraryFromApi() {
  try {
    const response = await fetch(LIBRARY_API_URL);
    const json = await response.json();
    
    if (!json.success || !Array.isArray(json.data)) {
      throw new Error('Invalid library payload');
    }
    
    const payloads = normalizePayloads(json.data);
    renderVariants(payloads);
  } catch (err) {
    alert('Unable to load UIX library. Verify endpoint and try again.');
  }
}
```

#### 2. Manual JSON Paste

```javascript
function processPaste(jsonStr) {
  try {
    const parsed = JSON.parse(jsonStr);
    const payloads = normalizePayloads(parsed);
    renderVariants(payloads);
  } catch (err) {
    alert('Invalid JSON format');
  }
}
```

#### 3. Clipboard Auto-Detect

```javascript
async function checkClipboard() {
  try {
    const text = await navigator.clipboard.readText();
    if (text.startsWith('{') || text.startsWith('[')) {
      processPaste(text);
    }
  } catch (err) {
    // Clipboard not available or empty
  }
}
```

### Variant Rendering

```javascript
function renderVariants(payloads) {
  // Handle both grouped (ComponentGroup[]) and flat (Payload[]) formats
  const normalized = normalizePayloads(payloads);
  
  variantList.innerHTML = '';
  normalized.forEach((payload, index) => {
    const item = document.createElement('div');
    item.className = 'variant-item';
    item.textContent = payload.componentName + ' / ' + payload.variant;
    item.addEventListener('click', () => selectVariant(index, normalized));
    variantList.appendChild(item);
  });
}

function selectVariant(index, payloads) {
  currentPayloads = payloads;
  selectedIndex = index;
  const payload = payloads[index];
  
  // Update preview iframe
  previewFrame.srcdoc = `<div>${payload.labelText}</div>`;
  
  // Update info panel
  infoPanel.innerHTML = `
    <strong>${payload.componentName}</strong><br/>
    Variant: ${payload.variant}<br/>
    ID: ${payload.variantId}
  `;
}
```

### Importing to Figma

```javascript
importBtn.onclick = () => {
  if (selectedIndex === undefined) {
    alert('Please select a variant first');
    return;
  }
  
  const payload = currentPayloads[selectedIndex];
  
  // Send to plugin code.ts for reconstruction
  parent.postMessage({
    pluginMessage: {
      type: 'IMPORT_COMPONENT',
      payload: payload
    }
  }, '*');
};
```

---

## Production Deployment

### 1. Build Optimization

```bash
# Generate production build with all components
npm run build

# This will:
# - Compile TypeScript
# - Optimize bundle size
# - Generate source maps
```

### 2. Sync Library Data

```bash
# Generate comprehensive library JSON
npm run sync

# Outputs: public/api/library_data.json (~2-5MB)
# Contains all component variants with:
# - Serialized DOM trees
# - Visual metadata
# - Typography information
# - Color values
```

### 3. Deploy to Server

Configure backend server (`backend-php/index.php`) to serve the JSON:

```php
<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Cache-Control: max-age=3600');

$libraryFile = __DIR__ . '/library_data.json';
if (file_exists($libraryFile)) {
    echo file_get_contents($libraryFile);
} else {
    http_response_code(404);
    echo json_encode(['error' => 'Library data not found']);
}
```

### 4. Verify Endpoint

Test from Figma plugin console:

```javascript
fetch('https://uix.sigmastudioo.com/api/library_data.json')
  .then(r => r.json())
  .then(data => console.log('✅ API working:', data.stats));
```

### 5. Performance Optimization

**For Large Libraries (100+ Components):**

- Implement pagination: `?page=1&limit=10`
- Add gzip compression in server headers
- Cache API responses for 1 hour
- Consider splitting by category:
  - `/api/library_data/base.json`
  - `/api/library_data/application.json`
  - `/api/library_data/foundations.json`

---

## Troubleshooting

### Issue: "Unable to load UIX library API"

**Causes:**
- CORS headers not configured
- Endpoint URL incorrect
- Server not running

**Solutions:**
```javascript
// Check CORS headers
fetch('https://uix.sigmastudioo.com/api/library_data.json', {
  headers: { 'Accept': 'application/json' }
})
.then(r => {
  console.log('Headers:', r.headers);
  return r.json();
});

// Verify endpoint
curl -i https://uix.sigmastudioo.com/api/library_data.json

// Enable CORS in server
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, OPTIONS');
```

### Issue: Empty Variant List in Plugin

**Causes:**
- API response format incorrect
- `normalizePayloads()` failed to parse

**Solutions:**
```javascript
// Debug payload structure
const payloads = normalizePayloads(json.data);
console.log('Normalized payloads:', payloads);
console.log('First payload:', payloads[0]);

// Verify both formats are supported
const isGrouped = json.data[0]?.variants;
const isFlat = json.data[0]?.component;
console.log('Format:', isGrouped ? 'grouped' : isFlat ? 'flat' : 'unknown');
```

### Issue: Sync Library Script Hangs

**Causes:**
- Components not registering in app.tsx
- `window.__UIX_LIBRARY_DATA__` not populated

**Solutions:**
```bash
# Debug locally
npm run dev  # Opens http://localhost:3333

# In browser console:
console.log('Total variants:', window.__UIX_TOTAL_VARIANTS__);
console.log('Current count:', window.__UIX_CURRENT_COUNT__);
console.log('Data:', window.__UIX_LIBRARY_DATA__?.length);

# Increase Puppeteer timeout in sync-library.js
await page.waitForFunction(() => {
  return window.__UIX_CURRENT_COUNT__ >= window.__UIX_TOTAL_VARIANTS__;
}, { timeout: 120000 });  // 2 minutes
```

### Issue: Components Import But Styling is Missing

**Causes:**
- Tailwind CSS not applied
- Font loading failed
- Color tokens not resolved

**Solutions:**
```typescript
// In figma-plugin/code.ts, ensure fonts are loaded
await figma.loadFontAsync({ family: "Inter", style: "Regular" });
await figma.loadFontAsync({ family: "Inter", style: "Semi Bold" });

// Verify color token mapping
console.log('Color tokens:', COLOR_TOKEN_MAP);

// Test serialization locally
const element = document.querySelector('[data-name="button-demo"]');
console.log('Serialized:', serializeDOM(element));
```

---

## Next Steps

### Short Term
1. ✅ Verify API endpoint is serving correct JSON
2. ✅ Test Figma plugin can fetch and display variants
3. ✅ Import a few components and verify styling

### Medium Term
1. Enhance Figma plugin code.ts for better fidelity
2. Add component metadata (props, types, documentation links)
3. Implement design token variable binding

### Long Term
1. Build bi-directional sync (Figma → Code → Figma)
2. Auto-generate TypeScript types from Figma variants
3. Create continuous deployment pipeline
4. Support multiple design systems in one plugin

---

For more information, see:
- [FIGMA_PLUGIN_API_GUIDE.md](./FIGMA_PLUGIN_API_GUIDE.md) - Deep API architecture
- [COMPONENT_MAPPING.md](./COMPONENT_MAPPING.md) - Complete component inventory
- [CLAUDE.md](./CLAUDE.md) - Project guidelines and conventions
