# UIX Design Library • Master Guidelines

## 1. Typography Governance (STRICT)
*   **Website Branding**: Use `Nexa` for all headings, body text, labels, and documentation pages.
*   **Component Scope**: Use `Inter` exclusively for library components, their variants, and their internal text.
*   **Enforcement**: All components must be wrapped in a `.font-inter` container to ensure branding never leaks into component space.

## 2. Figma Plugin (UIX Bridge) Standards
*   **Native Generation**: The plugin must generate native `ComponentNode` or `ComponentSetNode` objects.
*   **Layout Logic**: Every component must use **Auto-Layout** with `Hug Contents` (HUG) on both axes. Fixed sizes are prohibited.
*   **Branding Shell**: Every import (if toggled) must be wrapped in the official **Sigma Studio Documentation Shell** (1200px wide, 40px radius).

## 3. Subscription Model (Freemium)
### Free Tier
*   **Import Limit**: Single variant import only.
*   **Customization**: Basic radius and default branding.
*   **Doc Shell**: Standard "Free Version" watermark.

### Pro Tier
*   **Import All**: Enable "Batch Import" of entire component sets.
*   **Customization**: Full access to the Property Inspector (Advanced padding, custom branding, accent overrides).
*   **Download Source**: Access to raw component source code downloads.
*   **Support**: Priority updates for new variant releases.

## 4. UI/UX Rules for the Bridge
*   **Triple-Pane Layout**: (Navigator | Canvas | Inspector) layout is mandatory for professional efficiency.
*   **Live Sync**: Always use `iframe` previews to ensure 1:1 fidelity with the React library.
*   **Visual Feedback**: Active variants must be highlighted in the navigator and real-time updates must reflect in the canvas.
