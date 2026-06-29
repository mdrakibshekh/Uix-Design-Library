/**
 * Component Grouping & Export Utility
 * 
 * This utility organizes individual variant payloads into logical groups
 * for easier consumption by the Figma plugin and external APIs.
 */

export interface ComponentGroup {
  id: string;
  name: string;
  description?: string;
  category: 'Foundations' | 'Base' | 'Application';
  variants: ComponentVariantPayload[];
}

export interface ComponentVariantPayload {
  source: 'UIX_DESIGN_LIBRARY';
  version: '1.0';
  component: string;
  componentId: string;
  componentName: string;
  variant: string;
  variantId: string;
  variantGroup?: string;
  variantType?: string;
  variantSize?: string;
  variantModifiers?: string[];
  variantTags?: string[];
  labelText: string;
  labelColor: string;
  backgroundColor: string;
  theme: 'light' | 'dark';
  timestamp: number;
  previewUrl: string;
  figmaLayers: any;
  visualPreview: {
    label: string;
    text: string;
    color: string;
    textColor: string;
    width: number;
    height: number;
  };
  properties?: Record<string, any>;
}

/**
 * Mapping of component IDs to their metadata
 */
const COMPONENT_METADATA: Record<string, { name: string; category: 'Foundations' | 'Base' | 'Application'; description?: string }> = {
  // Base Components
  'buttons': {
    name: 'Buttons',
    category: 'Base',
    description: 'Primary interactive element with multiple style variants (Primary, Secondary, Tertiary, Destructive) and sizes (xs, sm, md, lg, xl)'
  },
  'inputs': {
    name: 'Inputs',
    category: 'Base',
    description: 'Text input fields with validation states (default, invalid, disabled) and sizes (sm, md, lg)'
  },
  'selects': {
    name: 'Select',
    category: 'Base',
    description: 'Dropdown selection components with single, multi, and combobox variants'
  },
  'checkboxes': {
    name: 'Checkbox',
    category: 'Base',
    description: 'Binary selection control with checked, unchecked, and indeterminate states'
  },
  'radio-buttons': {
    name: 'Radio Button',
    category: 'Base',
    description: 'Mutually exclusive selection control in a group'
  },
  'toggles': {
    name: 'Toggle',
    category: 'Base',
    description: 'On/off switch component with sizes (sm, md)'
  },
  'avatars': {
    name: 'Avatar',
    category: 'Base',
    description: 'User profile image or placeholder with sizes (xs, sm, md, lg, xl, 2xl) and status indicators'
  },
  'badges': {
    name: 'Badge',
    category: 'Base',
    description: 'Status indicator with types (default, with dot, with icon), colors, and sizes'
  },
  'tags': {
    name: 'Tags',
    category: 'Base',
    description: 'Removable label component with colors and sizes'
  },
  'button-groups': {
    name: 'Button Group',
    category: 'Base',
    description: 'Grouped buttons for related actions'
  },
  'sliders': {
    name: 'Slider',
    category: 'Base',
    description: 'Range selection control with optional labels'
  },
  'tooltips': {
    name: 'Tooltip',
    category: 'Base',
    description: 'Contextual hint display with arrow and supporting text options'
  },
  'progress-indicators': {
    name: 'Progress Indicator',
    category: 'Base',
    description: 'Linear and circular progress visualization'
  },
  'textareas': {
    name: 'Textarea',
    category: 'Base',
    description: 'Multi-line text input with validation states'
  },
  'alerts': {
    name: 'Alert',
    category: 'Base',
    description: 'Message display with types (solid, soft, outline, ghost) and severity levels'
  },
  'dropdowns': {
    name: 'Dropdown',
    category: 'Base',
    description: 'Context menu with selection, icons, and submenu support'
  },
  'flags': {
    name: 'Flag',
    category: 'Base',
    description: 'Country flag component in grid, compact, or list layouts'
  },
  'text-editors': {
    name: 'Text Editor',
    category: 'Base',
    description: 'Rich text editor with full, compact, and minimal toolbar variants'
  },
  'social-buttons': {
    name: 'Social Button',
    category: 'Base',
    description: 'Authentication buttons for multiple social platforms'
  },
  'utility-buttons': {
    name: 'Utility Button',
    category: 'Base',
    description: 'Lightweight buttons for secondary actions'
  },

  // Application Components
  'date-pickers': {
    name: 'Date Picker',
    category: 'Application',
    description: 'Calendar-based date selection with single date, range, and datetime variants'
  },
  'tabs': {
    name: 'Tabs',
    category: 'Application',
    description: 'Content tab switcher with button-style tabs'
  },
  'pagination': {
    name: 'Pagination',
    category: 'Application',
    description: 'Page navigation controls for data lists'
  },
  'tables': {
    name: 'Table',
    category: 'Application',
    description: 'Data display table with sorting, filtering, and multiple layout styles'
  },
  'file-uploads': {
    name: 'File Upload',
    category: 'Application',
    description: 'Drag-and-drop file upload with progress indicators'
  },
  'carousels': {
    name: 'Carousel',
    category: 'Application',
    description: 'Image carousel with navigation and indicators'
  },
  'charts': {
    name: 'Charts',
    category: 'Application',
    description: 'Data visualization including bar, line, pie, radar, and scatter charts'
  },
  'loading-indicators': {
    name: 'Loading Indicator',
    category: 'Application',
    description: 'Animated loading spinners with labels'
  },
  'app-navigation': {
    name: 'App Navigation',
    category: 'Application',
    description: 'Header and sidebar navigation components'
  },
  'modals': {
    name: 'Modal',
    category: 'Application',
    description: 'Overlay dialogs for forms, confirmations, and alerts'
  },
  'authentication': {
    name: 'Authentication',
    category: 'Application',
    description: 'Multi-factor authentication code entry components'
  },
  'credit-cards': {
    name: 'Credit Card',
    category: 'Application',
    description: 'Payment card display with multiple visual themes'
  },
  'qr-codes': {
    name: 'QR Code',
    category: 'Application',
    description: 'Branded QR code generator with customizable themes'
  },
  'empty-states': {
    name: 'Empty State',
    category: 'Application',
    description: 'Placeholder for empty lists or search results'
  },
  'mobile-app-buttons': {
    name: 'Mobile App Buttons',
    category: 'Application',
    description: 'App store badge components'
  },

  // Foundation Components
  'featured-icons': {
    name: 'Featured Icon',
    category: 'Foundations',
    description: 'Decorative icon container with multiple themes and colors'
  },
  'icons': {
    name: 'Icons',
    category: 'Foundations',
    description: '1100+ design system icons from Untitled UI'
  },
};

/**
 * Group individual variant payloads by component type
 * 
 * @param payloads - Array of individual variant payloads
 * @returns Array of component groups with grouped variants
 */
export function groupVariantsByComponent(
  payloads: ComponentVariantPayload[]
): ComponentGroup[] {
  const groups: Record<string, ComponentGroup> = {};

  for (const payload of payloads) {
    const componentId = payload.componentId;
    const metadata = COMPONENT_METADATA[componentId];

    if (!groups[componentId]) {
      groups[componentId] = {
        id: componentId,
        name: metadata?.name || componentId,
        description: metadata?.description,
        category: metadata?.category || 'Base',
        variants: []
      };
    }

    groups[componentId].variants.push(payload);
  }

  return Object.values(groups).sort((a, b) => {
    // Sort by category first, then by name
    const categoryOrder = { 'Foundations': 0, 'Base': 1, 'Application': 2 };
    const categoryDiff = categoryOrder[a.category] - categoryOrder[b.category];
    if (categoryDiff !== 0) return categoryDiff;
    return a.name.localeCompare(b.name);
  });
}

/**
 * Generate library data export format for the API
 * 
 * @param payloads - Array of individual variant payloads
 * @returns Formatted library data response
 */
export function generateLibraryExport(
  payloads: ComponentVariantPayload[],
  timestamp?: string
) {
  const groups = groupVariantsByComponent(payloads);
  
  return {
    success: true,
    data: groups,
    stats: {
      totalComponents: groups.length,
      totalVariants: payloads.length,
      byCategory: {
        Foundations: groups.filter(g => g.category === 'Foundations').length,
        Base: groups.filter(g => g.category === 'Base').length,
        Application: groups.filter(g => g.category === 'Application').length,
      }
    },
    updatedAt: timestamp || new Date().toISOString()
  };
}

/**
 * Filter variants by category
 */
export function filterByCategory(
  groups: ComponentGroup[],
  category: 'Foundations' | 'Base' | 'Application'
): ComponentGroup[] {
  return groups.filter(g => g.category === category);
}

/**
 * Get all variants for a specific component
 */
export function getComponentVariants(
  groups: ComponentGroup[],
  componentId: string
): ComponentVariantPayload[] {
  const group = groups.find(g => g.id === componentId);
  return group?.variants || [];
}

/**
 * Search components by name or description
 */
export function searchComponents(
  groups: ComponentGroup[],
  query: string
): ComponentGroup[] {
  const lowerQuery = query.toLowerCase();
  return groups.filter(g =>
    g.name.toLowerCase().includes(lowerQuery) ||
    g.description?.toLowerCase().includes(lowerQuery) ||
    g.variants.some(v => v.variant.toLowerCase().includes(lowerQuery))
  );
}

/**
 * Get variant count by component
 */
export function getVariantStats(groups: ComponentGroup[]): Record<string, number> {
  const stats: Record<string, number> = {};
  for (const group of groups) {
    stats[group.id] = group.variants.length;
  }
  return stats;
}
