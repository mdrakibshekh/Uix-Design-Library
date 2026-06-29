var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
figma.showUI(__html__, { width: 800, height: 700, themeColors: true });
// SMART TOKEN MAP: Derived from Uix colors.json
// This maps HEX values to your Figma Variable IDs
var COLOR_TOKEN_MAP = {
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
figma.ui.onmessage = function (msg) { return __awaiter(_this, void 0, void 0, function () {
    var payload, settings, payloads, components, componentName, _i, payloads_1, p, component, finalNode, componentSet, docShell;
    var _a, _b, _c, _d, _e, _f, _g;
    return __generator(this, function (_h) {
        switch (_h.label) {
            case 0:
                if (!(msg.type === 'import-component')) return [3 /*break*/, 6];
                payload = msg.payload, settings = msg.settings;
                return [4 /*yield*/, figma.loadFontAsync({ family: "Inter", style: "Regular" })];
            case 1:
                _h.sent();
                return [4 /*yield*/, figma.loadFontAsync({ family: "Inter", style: "Medium" })];
            case 2:
                _h.sent();
                return [4 /*yield*/, figma.loadFontAsync({ family: "Inter", style: "Semi Bold" })];
            case 3:
                _h.sent();
                return [4 /*yield*/, figma.loadFontAsync({ family: "Inter", style: "Bold" })];
            case 4:
                _h.sent();
                return [4 /*yield*/, figma.loadFontAsync({ family: "Inter", style: "Black" })];
            case 5:
                _h.sent();
                payloads = Array.isArray(payload) ? payload : [payload];
                components = [];
                componentName = ((_a = payloads[0]) === null || _a === void 0 ? void 0 : _a.componentName) || ((_b = payloads[0]) === null || _b === void 0 ? void 0 : _b.component) || ((_d = (_c = payloads[0]) === null || _c === void 0 ? void 0 : _c.properties) === null || _d === void 0 ? void 0 : _d.componentName) || ((_f = (_e = payloads[0]) === null || _e === void 0 ? void 0 : _e.properties) === null || _f === void 0 ? void 0 : _f.componentId) || 'Imported Component';
                for (_i = 0, payloads_1 = payloads; _i < payloads_1.length; _i++) {
                    p = payloads_1[_i];
                    component = figma.createComponent();
                    component.name = p.variant || p.name || ((_g = p.properties) === null || _g === void 0 ? void 0 : _g.variantId) || 'Imported Variant';
                    if (p.figmaLayers || p.layers) {
                        // RENDERED BRIDGE: Reconstruct native layers
                        reconstructNode(component, p.figmaLayers || p.layers, settings);
                    }
                    else {
                        // FALLBACK: Simple UI builder
                        buildSimpleUI(component, p, settings);
                    }
                    components.push(component);
                }
                finalNode = void 0;
                if (components.length > 1) {
                    componentSet = figma.combineAsVariants(components, figma.currentPage);
                    componentSet.name = componentName;
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
                if (settings.docFrame) {
                    docShell = createSigmaDocShell(finalNode, payloads[0]);
                    figma.viewport.scrollAndZoomIntoView([docShell]);
                }
                else {
                    figma.viewport.scrollAndZoomIntoView([finalNode]);
                }
                figma.notify("\u2705 Imported ".concat(payloads.length, " variants with Token Sync!"));
                _h.label = 6;
            case 6: return [2 /*return*/];
        }
    });
}); };
function reconstructNode(target, layer, settings) {
    return __awaiter(this, void 0, void 0, function () {
        var hex, _i, _a, childData, textNode, frameNode;
        return __generator(this, function (_b) {
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
                hex = rgbToHex(layer.backgroundColor);
                bindVariableToFill(target, hex);
            }
            // RECURSIVE CHILDREN
            if (layer.children) {
                for (_i = 0, _a = layer.children; _i < _a.length; _i++) {
                    childData = _a[_i];
                    if (childData.type === "TEXT") {
                        textNode = figma.createText();
                        textNode.characters = childData.text || "Text";
                        textNode.fontSize = childData.fontSize || 14;
                        textNode.fontName = { family: "Inter", style: "Medium" };
                        target.appendChild(textNode);
                    }
                    else {
                        frameNode = figma.createFrame();
                        reconstructNode(frameNode, childData, settings);
                        target.appendChild(frameNode);
                    }
                }
            }
            return [2 /*return*/];
        });
    });
}
function bindVariableToFill(node, hex) {
    var tokenID = COLOR_TOKEN_MAP[hex.toUpperCase()];
    if (tokenID) {
        try {
            var variable = figma.variables.getVariableById(tokenID);
            if (variable) {
                node.fills = [figma.variables.setBoundVariableForPaint({ type: 'SOLID', color: hexToRgb(hex) }, 'color', variable)];
                return;
            }
        }
        catch (e) {
            console.log("Token binding failed, falling back to hex", e);
        }
    }
    // Fallback to Solid Color
    node.fills = [{ type: 'SOLID', color: hexToRgb(hex) }];
}
function buildSimpleUI(node, payload, settings) {
    node.layoutMode = "HORIZONTAL";
    node.primaryAxisSizingMode = "HUG";
    node.counterAxisSizingMode = "HUG";
    node.paddingLeft = 24;
    node.paddingRight = 24;
    node.paddingTop = 12;
    node.paddingBottom = 12;
    node.cornerRadius = settings.radius;
    node.fills = [{ type: 'SOLID', color: hexToRgb(settings.accent) }];
    var text = figma.createText();
    text.characters = payload.variant;
    text.fontSize = 14;
    text.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }];
    node.appendChild(text);
}
// UTILS
function rgbToHex(rgb) {
    if (typeof rgb === 'string')
        return rgb; // Already hex
    var r = Math.round(rgb.r * 255).toString(16).padStart(2, '0');
    var g = Math.round(rgb.g * 255).toString(16).padStart(2, '0');
    var b = Math.round(rgb.b * 255).toString(16).padStart(2, '0');
    return "#".concat(r).concat(g).concat(b).toUpperCase();
}
function hexToRgb(hex) {
    hex = hex.replace('#', '');
    return {
        r: parseInt(hex.substring(0, 2), 16) / 255,
        g: parseInt(hex.substring(2, 4), 16) / 255,
        b: parseInt(hex.substring(4, 6), 16) / 255
    };
}
function createSigmaDocShell(targetNode, payload) {
    var _a, _b;
    var shell = figma.createFrame();
    var shellName = payload.component || payload.componentName || ((_a = payload.properties) === null || _a === void 0 ? void 0 : _a.componentName) || ((_b = payload.properties) === null || _b === void 0 ? void 0 : _b.componentId) || 'Imported Component';
    shell.name = "Sigma Studio \u2022 ".concat(shellName);
    shell.resize(1200, 800);
    shell.layoutMode = "VERTICAL";
    shell.primaryAxisSizingMode = "HUG";
    shell.itemSpacing = 48;
    shell.paddingLeft = 80;
    shell.paddingRight = 80;
    shell.paddingTop = 80;
    shell.paddingBottom = 80;
    shell.cornerRadius = 40;
    shell.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }];
    shell.effects = [{ type: "DROP_SHADOW", color: { r: 0, g: 0, b: 0, a: 0.05 }, offset: { x: 0, y: 10 }, radius: 40, visible: true, blendMode: "NORMAL" }];
    var header = figma.createFrame();
    header.layoutMode = "VERTICAL";
    header.itemSpacing = 16;
    header.fills = [];
    header.layoutAlign = "STRETCH";
    var badge = figma.createFrame();
    badge.layoutMode = "HORIZONTAL";
    badge.primaryAxisSizingMode = "HUG";
    badge.counterAxisSizingMode = "HUG";
    badge.paddingLeft = 16;
    badge.paddingRight = 16;
    badge.paddingTop = 8;
    badge.paddingBottom = 8;
    badge.cornerRadius = 12;
    badge.fills = [{ type: 'SOLID', color: { r: 0.39, g: 0, b: 0.89 } }];
    var badgeText = figma.createText();
    badgeText.characters = "SIGMA STUDIO V2.0";
    badgeText.fontSize = 12;
    badgeText.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }];
    badge.appendChild(badgeText);
    header.appendChild(badge);
    var title = figma.createText();
    title.characters = payload.component.replace(/-/g, ' ').toUpperCase();
    title.fontSize = 56;
    title.fills = [{ type: 'SOLID', color: { r: 0.06, g: 0.09, b: 0.16 } }];
    header.appendChild(title);
    shell.appendChild(header);
    var preview = figma.createFrame();
    preview.layoutMode = "VERTICAL";
    preview.primaryAxisSizingMode = "HUG";
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
