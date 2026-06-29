figma.showUI(__html__, { width: 800, height: 700, themeColors: true });

// SMART TOKEN MAP: Derived from Uix colors.json
// This maps HEX values to your Figma Variable IDs
const COLOR_TOKEN_MAP: Record<string, string> = {
  "#F6F3FC": "VariableID:2075:50", // primary-50
  "#E7DEF7": "VariableID:2075:57", // primary-100
  "#C9B3EE": "VariableID:2075:64", // primary-200
  "#AA87E5": "VariableID:2075:71", // primary-300
  "#8B5ADF": "VariableID:2075:78", // primary-400
  "#6C2BD9": "VariableID:2075:85", // primary-500 (Base)
  "#571FB5": "VariableID:2075:92", // primary-600
  "#42178C": "VariableID:2075:99", // primary-700
  "#2E0F63": "VariableID:2075:106", // primary-800
  "#1A0839": "VariableID:2075:113", // primary-900
  "#100524": "VariableID:2075:120", // primary-950
  // Add other scales (neutral, error, warning) as needed...
};

figma.ui.onmessage = async (msg) => {
  if (msg.type === 'import-component') {
    const { payload, settings } = msg;
    
    await figma.loadFontAsync({ family: "Inter", style: "Regular" });
    await figma.loadFontAsync({ family: "Inter", style: "Medium" });
    await figma.loadFontAsync({ family: "Inter", style: "Semi Bold" });
    await figma.loadFontAsync({ family: "Inter", style: "Bold" });
    await figma.loadFontAsync({ family: "Inter", style: "Black" });

    const payloads = Array.isArray(payload) ? payload : [payload];
    const components: ComponentNode[] = [];
    const componentName = payloads[0]?.componentName || payloads[0]?.component || payloads[0]?.properties?.componentName || payloads[0]?.properties?.componentId || 'Imported Component';

    for (const p of payloads) {
      const component = figma.createComponent();
      component.name = p.variant || p.name || p.properties?.variantId || 'Imported Variant';
      
      if (p.figmaLayers || p.layers) {
        // RENDERED BRIDGE: Reconstruct native layers
        reconstructNode(component, p.figmaLayers || p.layers, settings);
      } else {
        // FALLBACK: Simple UI builder
        buildSimpleUI(component, p, settings);
      }
      
      components.push(component);
    }

    let finalNode: SceneNode;
    if (components.length > 1) {
      const componentSet = figma.combineAsVariants(components, figma.currentPage);
      componentSet.name = componentName;
      componentSet.layoutMode = "HORIZONTAL";
      componentSet.itemSpacing = 40;
      componentSet.paddingLeft = 40; componentSet.paddingRight = 40;
      componentSet.paddingTop = 40; componentSet.paddingBottom = 40;
      finalNode = componentSet;
    } else {
      finalNode = components[0];
    }

    if (settings.docFrame) {
      const docShell = createSigmaDocShell(finalNode, payloads[0]);
      figma.viewport.scrollAndZoomIntoView([docShell]);
    } else {
      figma.viewport.scrollAndZoomIntoView([finalNode]);
    }

    figma.notify(`✅ Imported ${payloads.length} variants with Token Sync!`);
  }
};

async function reconstructNode(target: FrameNode | ComponentNode | InstanceNode, layer: any, settings: any) {
  // Apply Layout
  target.layoutMode = layer.type === "FRAME" ? "HORIZONTAL" : "NONE";
  target.primaryAxisSizingMode = "HUG";
  target.counterAxisSizingMode = "HUG";
  
  if (layer.padding) {
    target.paddingTop = layer.padding.top;
    target.paddingRight = layer.padding.right;
    target.paddingBottom = layer.padding.bottom;
    target.paddingLeft = layer.padding.left;
  }

  target.cornerRadius = layer.borderRadius || settings.radius;

  // SMART TOKEN BINDING
  if (layer.backgroundColor) {
    const hex = rgbToHex(layer.backgroundColor);
    bindVariableToFill(target, hex);
  }

  // RECURSIVE CHILDREN
  if (layer.children) {
    for (const childData of layer.children) {
      if (childData.type === "TEXT") {
        const textNode = figma.createText();
        textNode.characters = childData.text || "Text";
        textNode.fontSize = childData.fontSize || 14;
        textNode.fontName = { family: "Inter", style: "Medium" };
        target.appendChild(textNode);
      } else {
        const frameNode = figma.createFrame();
        reconstructNode(frameNode, childData, settings);
        target.appendChild(frameNode);
      }
    }
  }
}

function bindVariableToFill(node: any, hex: string) {
  const tokenID = COLOR_TOKEN_MAP[hex.toUpperCase()];
  
  if (tokenID) {
    try {
      const variable = figma.variables.getVariableById(tokenID);
      if (variable) {
        node.fills = [figma.variables.setBoundVariableForPaint(
          { type: 'SOLID', color: hexToRgb(hex) },
          'color',
          variable
        )];
        return;
      }
    } catch (e) {
      console.log("Token binding failed, falling back to hex", e);
    }
  }

  // Fallback to Solid Color
  node.fills = [{ type: 'SOLID', color: hexToRgb(hex) }];
}

function buildSimpleUI(node: any, payload: any, settings: any) {
  node.layoutMode = "HORIZONTAL";
  node.primaryAxisSizingMode = "HUG";
  node.counterAxisSizingMode = "HUG";
  node.paddingLeft = 24; node.paddingRight = 24;
  node.paddingTop = 12; node.paddingBottom = 12;
  node.cornerRadius = settings.radius;
  node.fills = [{ type: 'SOLID', color: hexToRgb(settings.accent) }];

  const text = figma.createText();
  text.characters = payload.variant;
  text.fontSize = 14;
  text.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }];
  node.appendChild(text);
}

// UTILS
function rgbToHex(rgb: any): string {
  if (typeof rgb === 'string') return rgb; // Already hex
  const r = Math.round(rgb.r * 255).toString(16).padStart(2, '0');
  const g = Math.round(rgb.g * 255).toString(16).padStart(2, '0');
  const b = Math.round(rgb.b * 255).toString(16).padStart(2, '0');
  return `#${r}${g}${b}`.toUpperCase();
}

function hexToRgb(hex: string): { r: number, g: number, b: number } {
  hex = hex.replace('#', '');
  return {
    r: parseInt(hex.substring(0, 2), 16) / 255,
    g: parseInt(hex.substring(2, 4), 16) / 255,
    b: parseInt(hex.substring(4, 6), 16) / 255
  };
}

function createSigmaDocShell(targetNode: SceneNode, payload: any) {
  const shell = figma.createFrame();
  const shellName = payload.component || payload.componentName || payload.properties?.componentName || payload.properties?.componentId || 'Imported Component';
  shell.name = `Sigma Studio • ${shellName}`;
  shell.resize(1200, 800);
  shell.layoutMode = "VERTICAL";
  shell.primaryAxisSizingMode = "HUG";
  shell.itemSpacing = 48;
  shell.paddingLeft = 80; shell.paddingRight = 80;
  shell.paddingTop = 80; shell.paddingBottom = 80;
  shell.cornerRadius = 40;
  shell.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }];
  shell.effects = [{ type: "DROP_SHADOW", color: { r: 0, g: 0, b: 0, a: 0.05 }, offset: { x: 0, y: 10 }, radius: 40, visible: true, blendMode: "NORMAL" }];

  const header = figma.createFrame();
  header.layoutMode = "VERTICAL";
  header.itemSpacing = 16;
  header.fills = [];
  header.layoutAlign = "STRETCH";
  
  const badge = figma.createFrame();
  badge.layoutMode = "HORIZONTAL";
  badge.primaryAxisSizingMode = "HUG";
  badge.counterAxisSizingMode = "HUG";
  badge.paddingLeft = 16; badge.paddingRight = 16; badge.paddingTop = 8; badge.paddingBottom = 8;
  badge.cornerRadius = 12;
  badge.fills = [{ type: 'SOLID', color: { r: 0.39, g: 0, b: 0.89 } }];
  
  const badgeText = figma.createText();
  badgeText.characters = "SIGMA STUDIO V2.0";
  badgeText.fontSize = 12;
  badgeText.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }];
  badge.appendChild(badgeText);
  header.appendChild(badge);

  const title = figma.createText();
  title.characters = payload.component.replace(/-/g, ' ').toUpperCase();
  title.fontSize = 56;
  title.fills = [{ type: 'SOLID', color: { r: 0.06, g: 0.09, b: 0.16 } }];
  header.appendChild(title);

  shell.appendChild(header);

  const preview = figma.createFrame();
  preview.layoutMode = "VERTICAL";
  preview.primaryAxisSizingMode = "HUG";
  preview.primaryAxisAlignItems = "CENTER";
  preview.counterAxisAlignItems = "CENTER";
  preview.paddingTop = 100; preview.paddingBottom = 100;
  preview.fills = [{ type: 'SOLID', color: { r: 0.98, g: 0.99, b: 1 } }];
  preview.cornerRadius = 32;
  preview.layoutAlign = "STRETCH";
  
  preview.appendChild(targetNode);
  shell.appendChild(preview);

  return shell;
}
