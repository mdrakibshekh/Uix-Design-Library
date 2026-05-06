# UIX Bridge • Integration Blueprint
**Feature: High-Fidelity React-to-Figma Import**

This document provides the full technical context for integrating the "Copy to Figma" bridge into the **UIS: Design System Generator | V2** plugin.

---

## 1. Architecture Overview
The bridge works by serializing React components in the browser and reconstructing them as native Figma nodes.

1.  **Source (Website)**: Traverses the DOM, captures computed styles, and packages them into a "Layer JSON" tree.
2.  **Plugin UI (Library Tab)**: Receives the JSON, provides a staging area for variants, and allows property overrides (Radius, Accent Color).
3.  **Plugin Logic (code.ts)**: Recursively recreates Figma nodes (Frames, Text, Rects) and **binds them to Figma Design Tokens** (Variables).

---

## 2. Phase 1: Website Serialization (app.tsx)
Add this logic to the "Copy to Figma" handler on your library website.

```typescript
const serializeToFigma = (el: HTMLElement) => {
  const styles = window.getComputedStyle(el);
  return {
    type: "FRAME",
    name: "Component Name",
    width: el.offsetWidth,
    height: el.offsetHeight,
    backgroundColor: styles.backgroundColor,
    borderRadius: parseInt(styles.borderRadius) || 0,
    padding: {
      top: parseInt(styles.paddingTop),
      right: parseInt(styles.paddingRight),
      bottom: parseInt(styles.paddingBottom),
      left: parseInt(styles.paddingLeft)
    },
    children: Array.from(el.children).map(child => ({
      type: child.tagName === "SPAN" || child.tagName === "P" ? "TEXT" : "FRAME",
      text: child.textContent,
      fontSize: parseInt(window.getComputedStyle(child).fontSize),
      backgroundColor: window.getComputedStyle(child as HTMLElement).backgroundColor
    }))
  };
};

// Inclusion in payload
const payload = {
  source: "UIX_DESIGN_LIBRARY",
  variant: "Default",
  figmaLayers: serializeToFigma(componentContainerRef.current)
};
```

---

## 3. Phase 2: Plugin UI (ui.html)
The plugin should feature a **Triple-Pane Layout** for the "Library" tab:
-   **Left**: Navigator (Catalog of staged variants).
-   **Middle**: Canvas (Iframe preview of the live component).
-   **Right (Overlay)**: Inspector (Radius, Color, Doc-Shell toggles).

---

## 4. Phase 3: Smart Reconstruction (code.ts)
This is the core logic that should be added to your main plugin's `code.ts`.

### Token Mapper (Update with your IDs)
```typescript
const COLOR_TOKEN_MAP: Record<string, string> = {
  "#6C2BD9": "VariableID:2075:85", // primary-500
  "#F6F3FC": "VariableID:2075:50", // primary-50
  // ... maps your library hex colors to existing Figma Variable IDs
};
```

### Recursive Builder
```typescript
async function reconstructNode(target: FrameNode | ComponentNode, layer: any) {
  target.layoutMode = layer.type === "FRAME" ? "HORIZONTAL" : "NONE";
  target.primaryAxisSizingMode = "HUG";
  target.counterAxisSizingMode = "HUG";
  
  if (layer.padding) {
    target.paddingTop = layer.padding.top;
    target.paddingRight = layer.padding.right;
    target.paddingBottom = layer.padding.bottom;
    target.paddingLeft = layer.padding.left;
  }

  // Token Binding Logic
  if (layer.backgroundColor) {
    const hex = rgbToHex(layer.backgroundColor);
    const tokenID = COLOR_TOKEN_MAP[hex.toUpperCase()];
    if (tokenID) {
      const variable = figma.variables.getVariableById(tokenID);
      if (variable) {
        target.fills = [figma.variables.setBoundVariableForPaint(
          { type: 'SOLID', color: hexToRgb(hex) }, 'color', variable
        )];
      }
    }
  }

  // Recursively build children...
}
```

---

## 5. Summary for the Next Agent
"The goal is to add a 'High-Fidelity Import' feature to the Library tab of this plugin. Use the provided serialization logic to read component data from the clipboard, reconstruct it as native Figma nodes with Auto-Layout enabled, and bind all colors to the existing Design System Variables defined in the project."
