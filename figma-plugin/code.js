"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
figma.showUI(__html__, { width: 800, height: 700, themeColors: true });
figma.ui.onmessage = (msg) => __awaiter(void 0, void 0, void 0, function* () {
    if (msg.type === 'import-component') {
        const { payload, settings } = msg;
        yield figma.loadFontAsync({ family: "Inter", style: "Regular" });
        yield figma.loadFontAsync({ family: "Inter", style: "Medium" });
        yield figma.loadFontAsync({ family: "Inter", style: "Semi Bold" });
        yield figma.loadFontAsync({ family: "Inter", style: "Bold" });
        yield figma.loadFontAsync({ family: "Inter", style: "Black" });
        // 1. Handle Selected Variants
        const payloads = Array.isArray(payload) ? payload : [payload];
        const components = [];
        for (const p of payloads) {
            const component = figma.createComponent();
            component.name = p.variant;
            buildComponentUI(component, p, settings);
            components.push(component);
        }
        // 2. Create Component Set if multiple
        let finalNode;
        if (components.length > 1) {
            const componentSet = figma.combineAsVariants(components, figma.currentPage);
            componentSet.name = payloads[0].component;
            componentSet.layoutMode = "HORIZONTAL";
            componentSet.itemSpacing = 40;
            componentSet.paddingLeft = 40;
            componentSet.paddingRight = 40;
            componentSet.paddingTop = 40;
            componentSet.paddingBottom = 40;
            finalNode = componentSet;
        }
        else {
            finalNode = components[0];
        }
        // 3. Create Doc Shell
        if (settings.docFrame) {
            const docShell = createSigmaDocShell(finalNode, payloads[0]);
            figma.viewport.scrollAndZoomIntoView([docShell]);
        }
        else {
            figma.viewport.scrollAndZoomIntoView([finalNode]);
        }
        figma.notify(`✅ Imported ${payloads.length} variants!`);
    }
});
function buildComponentUI(node, payload, settings) {
    node.layoutMode = "HORIZONTAL";
    // FIX: Use HUG to ensure the component takes its natural height/width from library
    node.primaryAxisSizingMode = "HUG";
    node.counterAxisSizingMode = "HUG";
    node.counterAxisAlignItems = "CENTER";
    node.primaryAxisAlignItems = "CENTER";
    node.paddingLeft = 24;
    node.paddingRight = 24;
    node.paddingTop = 12;
    node.paddingBottom = 12;
    node.cornerRadius = settings.radius;
    const hex = settings.accent.replace('#', '');
    const r = parseInt(hex.substring(0, 2), 16) / 255;
    const g = parseInt(hex.substring(2, 4), 16) / 255;
    const b = parseInt(hex.substring(4, 6), 16) / 255;
    node.fills = [{ type: 'SOLID', color: { r, g, b } }];
    const text = figma.createText();
    text.fontName = { family: "Inter", style: "Bold" };
    text.characters = payload.variant;
    text.fontSize = 14;
    text.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }];
    node.appendChild(text);
}
function createSigmaDocShell(targetNode, payload) {
    const shell = figma.createFrame();
    shell.name = `Sigma Studio • ${payload.component}`;
    shell.resize(1200, 800);
    shell.layoutMode = "VERTICAL";
    shell.primaryAxisSizingMode = "HUG"; // Let it grow vertically
    shell.itemSpacing = 48;
    shell.paddingLeft = 80;
    shell.paddingRight = 80;
    shell.paddingTop = 80;
    shell.paddingBottom = 80;
    shell.cornerRadius = 40;
    shell.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }];
    shell.effects = [{
            type: "DROP_SHADOW",
            color: { r: 0, g: 0, b: 0, a: 0.05 },
            offset: { x: 0, y: 10 },
            radius: 40,
            visible: true,
            blendMode: "NORMAL"
        }];
    const header = figma.createFrame();
    header.layoutMode = "VERTICAL";
    header.itemSpacing = 16;
    header.fills = [];
    header.layoutAlign = "STRETCH";
    const badge = figma.createFrame();
    badge.layoutMode = "HORIZONTAL";
    badge.primaryAxisSizingMode = "HUG";
    badge.counterAxisSizingMode = "HUG";
    badge.paddingLeft = 16;
    badge.paddingRight = 16;
    badge.paddingTop = 8;
    badge.paddingBottom = 8;
    badge.cornerRadius = 12;
    badge.fills = [{ type: 'SOLID', color: { r: 0.39, g: 0, b: 0.89 } }];
    const badgeText = figma.createText();
    badgeText.fontName = { family: "Inter", style: "Black" };
    badgeText.characters = "SIGMA STUDIO V2.0";
    badgeText.fontSize = 12;
    badgeText.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }];
    badge.appendChild(badgeText);
    header.appendChild(badge);
    const title = figma.createText();
    title.fontName = { family: "Inter", style: "Bold" };
    title.characters = payload.component.replace(/-/g, ' ').toUpperCase();
    title.fontSize = 56;
    title.letterSpacing = { value: -2, unit: "PIXELS" };
    title.fills = [{ type: 'SOLID', color: { r: 0.06, g: 0.09, b: 0.16 } }];
    header.appendChild(title);
    const meta = figma.createText();
    meta.fontName = { family: "Inter", style: "Medium" };
    meta.characters = `Official Library Asset  •  Type: Component Set  •  Version: 1.0`;
    meta.fontSize = 16;
    meta.fills = [{ type: 'SOLID', color: { r: 0.39, g: 0.45, b: 0.55 } }];
    header.appendChild(meta);
    shell.appendChild(header);
    const preview = figma.createFrame();
    preview.layoutMode = "VERTICAL";
    preview.primaryAxisSizingMode = "HUG"; // Let it grow with the component height
    preview.primaryAxisAlignItems = "CENTER";
    preview.counterAxisAlignItems = "CENTER";
    preview.paddingTop = 100;
    preview.paddingBottom = 100;
    preview.fills = [{ type: 'SOLID', color: { r: 0.98, g: 0.99, b: 1 } }];
    preview.cornerRadius = 32;
    preview.layoutAlign = "STRETCH";
    preview.appendChild(targetNode);
    shell.appendChild(preview);
    return shell;
}
