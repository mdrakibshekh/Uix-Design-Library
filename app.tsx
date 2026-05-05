import React, { useState } from "react";
import { Copy, Moon, Sun, Eye, Code, Search, Menu, ChevronRight, BookOpen, Settings, Rocket, Maximize2, X, Download, Share2, Check, RotateCcw } from "lucide-react";
import { Variants as ButtonVariantsDemo, Sizes as ButtonSizesDemo, Icons as ButtonIconsDemo, States as ButtonStatesDemo } from "./components/base/buttons/buttons.demo";
import { DefaultDemo as InputDefaultDemo, DisabledDemo as InputDisabledDemo, InvalidDemo as InputInvalidDemo } from "./components/base/input/inputs.demo";
import { DefaultDemo as CheckboxDefaultDemo, SizesDemo as CheckboxSizesDemo, Checkboxes as CheckboxListDemo } from "./components/base/checkbox/checkbox.demo";
import { DefaultDemo as SelectDefaultDemo, DisabledDemo as SelectDisabledDemo, SizesDemo as SelectSizesDemo } from "./components/base/select/select.demo";
import { DefaultDemo as AvatarDefaultDemo, VerifiedDemo as AvatarVerifiedDemo, GroupDemo as AvatarGroupDemo } from "./components/base/avatar/avatar.demo";
import { Default as BadgeDefaultDemo, PillColor as BadgePillColorDemo, BadgeColor as BadgeColorDemo, WithDot as BadgeWithDotDemo } from "./components/base/badges/badges.demo";
import { DefaultDemo as TagsDefaultDemo, CloseXDemo as TagsCloseXDemo, SizesDemo as TagsSizesDemo, CheckboxDemo as TagsCheckboxDemo, CountDemo as TagsCountDemo } from "./components/base/tags/tags.demo";
import { LeadingIcon as ButtonGroupLeadingIconDemo, ButtonGroupDot as ButtonGroupDotDemo, DisabledIndividualButton as ButtonGroupDisabledIndividualDemo, SelectedItem as ButtonGroupSelectedDemo, MultipleSelectedItems as ButtonGroupMultipleDemo } from "./components/base/button-group/button-group.demo";
import { WithLabelDemo as RadioWithLabelDemo, WithLabelAndHintDemo as RadioWithLabelAndHintDemo, DisabledDemo as RadioDisabledDemo, RadioButtons as RadioButtonsDemo } from "./components/base/radio-buttons/radio-buttons.demo";
import { DefaultDemo as ToggleDefaultDemo, WithLabelAndHintDemo as ToggleWithLabelAndHintDemo, DisabledDemo as ToggleDisabledDemo, SizesDemo as ToggleSizesDemo } from "./components/base/toggle/toggle.demo";
import { DefaultDemo as TextareaDefaultDemo, DisabledDemo as TextareaDisabledDemo, InvalidDemo as TextareaInvalidDemo } from "./components/base/textarea/textarea.demo";
import { Default as SliderDefault, BottomLabel as SliderBottomLabel, TopFloating as SliderTopFloating, SingleThumb as SliderSingleThumb } from "./components/base/slider/slider.demo";
import { DefaultDemo as TooltipDefaultDemo, WithArrowDemo as TooltipWithArrowDemo, WithSupportingTextDemo as TooltipWithSupportingTextDemo } from "./components/base/tooltip/tooltip.demo";
import { ProgressBarDefault, ProgressBarTextRight, CircleProgressBar, CircleProgressBarLabel } from "./components/base/progress-indicators/progress-indicators.demo";
import { CalendarDemo, CalendarCardDemo, DatePickerDemo, DatePickerControlledDemo, DateTimePickerDemo, RangeCalendarDemo, RangeCalendarCardDemo, DateRangePickerDemo, DatePickerCardDemo, DatePickerMinimalDemo } from "./components/application/date-picker/date-picker.demo";
import { ButtonBrandHorizontalDemo, ButtonBrandVerticalDemo, ButtonGrayHorizontalDemo } from "./components/application/tabs/tabs.demo";
import { PaginationPageDefault, PaginationPageMinimalCenter, PaginationCardDefault, PaginationCardMinimalCenterAligned } from "./components/application/pagination/pagination.demo";
import { Table01DividerLine, Table01AlternatingFills, Table02DividerLine, Table03DividerLine, Table04DividerLine, Table05ProjectManagement, TablePreview } from "./components/application/table/table.demo";
import { ImagesOnlyDemo, MaxSizeLimitDemo, CompactVariantDemo, ModernVariantDemo, MinimalVariantDemo, ImageVariantDemo } from "./components/application/file-upload/file-upload.demo";
import { CarouselMd, CarouselLg } from "./components/application/carousel/carousel.demo";
import { BarChart, BarChart02, BarChart03 } from "./components/application/charts/bar-charts.demo";
import { LineChart01, LineChart02, LineChart03, LineChart04 } from "./components/application/charts/line-charts.demo";
import { PieChartMd, PieChartLg } from "./components/application/charts/pie-charts.demo";
import { RadarChart } from "./components/application/charts/radar-charts.demo";
import { ActivityGaugeMd } from "./components/application/charts/activity-gauges.demo";
import { ProgressCircleMd } from "./components/application/charts/progress-circles.demo";
import { ComposedChart01, ComposedChartPreview } from "./components/application/charts/composed-charts.demo";
import { ScatterChart01, ScatterChartPreview } from "./components/application/charts/scatter-charts.demo";
import { DefaultDemo as LoadingDefaultDemo, LineSimpleWithLabelDemo, LineSpinnerWithLabelDemo, DotCircleWithLabelDemo } from "./components/application/loading-indicator/loading-indicator.demo";
import { HeaderNavigationSimpleDemo, HeaderNavigationDualTierDemo, HeaderNavigationPreview } from "./components/application/app-navigation/header-navigation.demo";
import { DefaultDemo as FeaturedIconDefaultDemo, LightDemo as FeaturedIconLightDemo, GradientDemo as FeaturedIconGradientDemo } from "./components/foundations/featured-icon/featured-icon.demo";
import { LucideIconsDemo, TablerIconsDemo, UntitledIconsDemo, IconsPreview } from "./components/foundations/icons/icons.demo";
import { DocumentationIntroDemo, DocumentationDesignDemo } from "./components/foundations/documentation/documentation.demo";
import { SocialButtonPreview, SocialButtonGroupBrandDemo, SocialButtonGroupColorDemo, SocialButtonGroupGrayDemo, SocialButtonGroupsMD, SocialButtonGroupsLG } from "./components/base/buttons/social-buttons.demo";
import { MobileAppButtonsPreview, MobileAppButtonsBlackDemo, MobileAppButtonsWhiteDemo, MobileAppButtonsGlassDemo, MobileAppButtonsOutlineDemo } from "./components/application/mobile-app-buttons/mobile-app-buttons.demo";
import { CreditCardPreview, CreditCardBrandDemo, CreditCardGradientDemo, CreditCardGlassDemo, CreditCardDarkLightDemo, CreditCardInteractiveDemo } from "./components/application/credit-card/credit-card.demo";
import { BrandedQRCodePreview, BrandedQRCodeBrandDemo, BrandedQRCodeDarkDemo, BrandedQRCodeLightDemo, BrandedQRCodeColorfulDemo, BrandedQRCodeMinimalDemo, BrandedQRCodeClassicDemo, BrandedQRCodeModernDemo, BrandedQRCodeElegantDemo } from "./components/application/qr-code/qr-code.demo";
import { EmptyStateDefaultDemo, EmptyStateCardDemo, EmptyStateMinimalDemo, EmptyStateColorfulDemo } from "./components/application/empty-state/empty-state.demo";
import { UtilityButtonsPreview, UtilityButtonsStandardDemo, UtilityButtonsTertiaryDemo, UtilityButtonsXSDemo } from "./components/base/buttons/utility-buttons.demo";
import { TextEditorPreview, TextEditorFullDemo, TextEditorCompactDemo, TextEditorMinimalDemo } from "./components/base/text-editor/text-editor.demo";
import { ColorsDemo as TagsColorsDemo } from "./components/base/tags/tags.demo";
import { MultiSelectChipsDemo } from "./components/base/select/select.demo";
import { ProfileDropdownDemo, MegaMenuDemo, SimpleDropdownDemo, DropdownWithIconsDemo, DropdownWithSelectionDemo } from "./components/base/dropdown/dropdown.demo";


type ComponentPage = {
  id: string;
  title: string;
  description: string;
  category: "Foundations" | "Base" | "Application";
  keyFeatures: string[];
  demoBlocks: Array<{ label: string; Demo: React.ComponentType<any> }>;
};

const componentNameMap: Record<string, string> = {
  buttons: "Button",
  "button-groups": "ButtonGroup",
  inputs: "Input",
  checkboxes: "Checkbox",
  selects: "Select",
  avatars: "Avatar",
  badges: "Badge",
  tags: "Tag",
  "radio-buttons": "RadioButton",
  toggles: "Toggle",
  textareas: "TextArea",
  sliders: "Slider",
  tooltips: "Tooltip",
  "progress-indicators": "ProgressBar",
  "date-pickers": "DatePicker",
  tabs: "Tabs",
  pagination: "Pagination",
  tables: "Table",
  "file-uploads": "FileUpload",
  carousels: "Carousel",
  charts: "Chart",
  "loading-indicators": "LoadingIndicator",
  "app-navigation": "HeaderNavigation",
  "featured-icons": "FeaturedIcon",
  "icons": "Icon",
  "social-buttons": "SocialButton",
  "mobile-app-buttons": "StoreBadge",
  "credit-cards": "CreditCard",
  "qr-codes": "BrandedQRCode",
  "empty-states": "EmptyState",
  "utility-buttons": "ButtonUtility",
  "text-editors": "TextEditor",
  "dropdowns": "Dropdown",
};

const DemoCard = ({ demo, pageId }: { demo: { label: string; Demo: React.ComponentType<any> }; pageId: string }) => {
  const [activeTab, setActiveTab] = useState<string>("React");
  const [themeMode, setThemeMode] = useState<"light" | "dark">("light");
  const [copied, setCopied] = useState(false);

  const componentName = componentNameMap[pageId] ?? demo.label.replace(/\s+/g, "");

  const getCodeSnippet = (tab: string) => {
    const lib = pageId.includes("application") ? "application" : "base";
    const path = pageId.replace(/-/g, "/");

    switch (tab) {
      case 'Web': return `<div class="uix-${componentName.toLowerCase()} uix-theme-brand">\n  <!-- ${demo.label} implementation -->\n</div>`;
      case 'React': return `import { ${componentName} } from '@/components/${lib}/${path}/${pageId.replace(/-/g, "")}';\n\nconst Example = () => (\n  <${componentName} variant="brand" size="md" />\n);`;
      case 'Vue': return `<script setup>\nimport { ${componentName} } from '@/components/${lib}/${path}/${pageId.replace(/-/g, "")}';\n</script>\n\n<template>\n  <${componentName} variant="brand" />\n</template>`;
      case 'Svelte': return `<script>\n  import { ${componentName} } from '@/components/${lib}/${path}/${pageId.replace(/-/g, "")}';\n</script>\n\n<${componentName} variant="brand" />`;
      default: return `import { ${componentName} } from '@uix/library';`;
    }
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(getCodeSnippet(activeTab));
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <article className="overflow-hidden rounded-[2rem] border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm transition-all hover:shadow-xl hover:shadow-slate-200/50 dark:hover:shadow-black/50 group">
      <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 bg-slate-50/30 dark:bg-slate-900/50 px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="size-2 rounded-full bg-brand-500 shadow-sm shadow-brand-500/50" />
          <h3 className="text-sm font-bold text-slate-900 dark:text-white tracking-tight">{demo.label}</h3>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setThemeMode(themeMode === "light" ? "dark" : "light")}
            className="flex size-9 items-center justify-center rounded-xl text-slate-400 hover:bg-white dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white hover:shadow-sm border border-transparent hover:border-slate-100 dark:hover:border-slate-700 transition-all"
            title="Toggle preview theme"
            aria-label="Toggle preview theme"
          >
            {themeMode === "light" ? <Moon className="size-4" /> : <Sun className="size-4" />}
          </button>
        </div>
      </div>

      <div className={`relative min-h-[300px] transition-colors duration-500 ${themeMode === "dark" ? "bg-slate-950" : "bg-white"}`}>
        <div className="flex min-h-[300px] items-center justify-center p-12">
          <div className={`${themeMode === "dark" ? "dark" : ""} w-full flex justify-center font-inter`}>
            <demo.Demo />
          </div>
        </div>
      </div>

      {/* Code & Framework Selection Footer */}
      <div className="border-t border-slate-100 dark:border-slate-800 p-5 bg-slate-50/50 dark:bg-slate-900/50">
        <div className="flex items-center justify-between mb-4">
          <div className="w-full flex items-center gap-2 p-2 bg-slate-200/40 dark:bg-slate-800/40 rounded-xl border border-slate-200/50 dark:border-slate-700/50 overflow-x-auto scrollbar-hide flex-nowrap">
            {['React', 'Web', 'Vue', 'Svelte'].map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 px-4 py-3 text-[12px] border-2 font-bold leading-none rounded-lg transition-all whitespace-nowrap ${activeTab === tab ? 'bg-brand-50 dark:bg-brand-900/20 border-brand-600 text-brand-700 dark:text-brand-400' : 'text-slate-500 border-transparent hover:text-slate-900 dark:hover:text-white'}`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-between mt-4 mb-4">
          <div className="text-[12px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">Source Implementation</div>
          <button
            onClick={handleCopy}
            className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-[9px] font-bold text-slate-600 dark:text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 hover:border-brand-600 dark:hover:border-brand-400 transition-all shadow-sm active:scale-95 uppercase tracking-wider"
          >
            {copied ? <Check className="size-3 text-emerald-600" /> : <Copy className="size-3" />}
            {copied ? 'COPIED!' : 'COPY CODE'}
          </button>
        </div>

        <div className="relative group">
          <pre className="overflow-x-auto rounded-2xl bg-slate-900 p-6 text-[10px] font-mono text-slate-300 leading-relaxed shadow-inner max-h-48 scrollbar-hide border border-slate-800">
            <code>{getCodeSnippet(activeTab)}</code>
          </pre>
          <div className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t rounded-2xl from-slate-900 to-transparent pointer-events-none opacity-50" />
        </div>
      </div>
    </article>
  );
};



const componentPages: ComponentPage[] = [
  {
    id: "documentation",
    title: "Introduction",
    category: "Foundations",
    description: "A professional-grade React design system built for speed, accessibility, and modern SaaS aesthetics.",
    keyFeatures: ["React 19 & Vite", "Tailwind CSS v4", "React Aria Components", "Inter Font"],
    demoBlocks: [
      { label: "Getting Started", Demo: DocumentationIntroDemo },
      { label: "Design System V2.0", Demo: DocumentationDesignDemo },
    ],
  },
  {
    id: "icons",
    title: "Icons",
    category: "Foundations",
    description: "Extensive library of high-quality icons from Lucide, Tabler, and Untitled UI. Over 5000+ icons combined.",
    keyFeatures: ["Vector-based", "Customizable stroke", "Multiple sizes", "Multiple weights"],
    demoBlocks: [
      { label: "Icon Universe", Demo: IconsPreview },
    ],
  },
  {
    id: "featured-icons",
    title: "Featured Icons",
    category: "Foundations",
    description: "Decorative icon components with themed backgrounds for emphasis and visual hierarchy.",
    keyFeatures: ["Multiple themes", "Color variants", "Size options"],
    demoBlocks: [
      { label: "Default icons", Demo: FeaturedIconDefaultDemo },
      { label: "Light theme", Demo: FeaturedIconLightDemo },
      { label: "Gradient theme", Demo: FeaturedIconGradientDemo },
    ],
  },
  {
    id: "buttons",
    title: "Buttons",
    category: "Base",
    description: "A complete suite of button variants, states, and sizes for primary actions and toolbars.",
    keyFeatures: ["Solid / Ghost / Outline", "Dark / Light / Brand", "Disabled / Loading / Icon"],
    demoBlocks: [
      { label: "Variants", Demo: ButtonVariantsDemo },
      { label: "Sizes", Demo: ButtonSizesDemo },
      { label: "Icons", Demo: ButtonIconsDemo },
      { label: "States", Demo: ButtonStatesDemo },
    ],
  },
  {
    id: "button-groups",
    title: "Button Groups",
    category: "Base",
    description: "Toggle button groups for selection and actions with icons, dots, and disabled states.",
    keyFeatures: ["Single / Multiple selection", "Icons and dots", "Disabled states"],
    demoBlocks: [
      { label: "Leading icons", Demo: ButtonGroupLeadingIconDemo },
      { label: "With dots", Demo: ButtonGroupDotDemo },
      { label: "Selection", Demo: ButtonGroupSelectedDemo },
      { label: "Multiple selection", Demo: ButtonGroupMultipleDemo },
    ],
  },
  {
    id: "inputs",
    title: "Inputs",
    category: "Base",
    description: "Text fields, form controls, and helper text designed for UI forms and dashboards.",
    keyFeatures: ["Required / Disabled / Invalid", "Tooltips and hints", "Group addons and icons"],
    demoBlocks: [
      { label: "Default input", Demo: InputDefaultDemo },
      { label: "Disabled input", Demo: InputDisabledDemo },
      { label: "Invalid input", Demo: InputInvalidDemo },
    ],
  },
  {
    id: "checkboxes",
    title: "Checkboxes",
    category: "Base",
    description: "Accessible selection controls with label support, disabled states, and size variants.",
    keyFeatures: ["Indeterminate state", "Selected / Disabled", "Form-ready UI"],
    demoBlocks: [
      { label: "Default checkbox", Demo: CheckboxDefaultDemo },
      { label: "Checkbox group", Demo: CheckboxListDemo },
      { label: "Sizes", Demo: CheckboxSizesDemo },
    ],
  },
  {
    id: "selects",
    title: "Selects",
    category: "Base",
    description: "Dropdown and searchable selectors with item previews, avatars, and disabled states.",
    keyFeatures: ["Searchable dropdowns", "Item avatars", "Disabled selects"],
    demoBlocks: [
            { label: "Default select", Demo: SelectDefaultDemo },
            { label: "Multi-select chips", Demo: MultiSelectChipsDemo },
            { label: "Disabled select", Demo: SelectDisabledDemo },
            { label: "Size variants", Demo: SelectSizesDemo },
        ],
    },
    {
        id: "dropdowns",
        title: "Dropdowns",
        category: "Base",
        description: "Modern, accessible dropdown menus with support for multiple sections, icons, and complex layouts.",
        keyFeatures: ["Accessible", "Multi-section", "Icons & Avatars", "Mega menu support"],
        demoBlocks: [
            { label: "Simple dropdown", Demo: SimpleDropdownDemo },
            { label: "With icons", Demo: DropdownWithIconsDemo },
            { label: "With selection", Demo: DropdownWithSelectionDemo },
            { label: "Account profile", Demo: ProfileDropdownDemo },
            { label: "Mega menu", Demo: MegaMenuDemo },
        ],
    },
  {
    id: "avatars",
    title: "Avatars",
    category: "Base",
    description: "Profile imagery and initials components for user cards, groups, and status badges.",
    keyFeatures: ["Status indicators", "Verified badges", "Grouped avatar stacks"],
    demoBlocks: [
      { label: "Default avatar", Demo: AvatarDefaultDemo },
      { label: "Verified avatar", Demo: AvatarVerifiedDemo },
      { label: "Avatar groups", Demo: AvatarGroupDemo },
    ],
  },
  {
    id: "badges",
    title: "Badges",
    category: "Base",
    description: "Status labels and indicators with modern badge styles, colors, and dot accents.",
    keyFeatures: ["Solid, pill and modern styles", "Dot badges", "Color system support"],
    demoBlocks: [
      { label: "Default badges", Demo: BadgeDefaultDemo },
      { label: "Pill color badges", Demo: BadgePillColorDemo },
      { label: "Dot badges", Demo: BadgeWithDotDemo },
    ],
  },
  {
    id: "tags",
    title: "Tags",
    category: "Base",
    description: "Flexible tag groups with removable items, counters, and avatar support.",
    keyFeatures: ["Selectable tags", "Closable tags", "Size variants"],
    demoBlocks: [
            { label: "Default tags", Demo: TagsDefaultDemo },
            { label: "Closable tags", Demo: TagsCloseXDemo },
            { label: "Tag sizes", Demo: TagsSizesDemo },
            { label: "Selectable tags", Demo: TagsCheckboxDemo },
            { label: "Tag counters", Demo: TagsCountDemo },
            { label: "Tag colors", Demo: TagsColorsDemo },
        ],
    },
    {
        id: "social-buttons",
        title: "Social Buttons",
        category: "Base",
        description: "Branded authentication buttons for all major social platforms with consistent UIX styling.",
        keyFeatures: ["Theme aware", "Brand colors", "Icon only support", "All platforms"],
        demoBlocks: [
            { label: "Dashboard preview", Demo: SocialButtonPreview },
            { label: "Vertical group (Brand)", Demo: SocialButtonGroupBrandDemo },
            { label: "Vertical group (Color)", Demo: SocialButtonGroupColorDemo },
            { label: "Vertical group (Gray)", Demo: SocialButtonGroupGrayDemo },
            { label: "Icon grid (Medium)", Demo: SocialButtonGroupsMD },
            { label: "Icon grid (Large)", Demo: SocialButtonGroupsLG },
        ],
    },
    {
        id: "utility-buttons",
        title: "Utility Buttons",
        category: "Base",
        description: "Common utility actions like Copy, Refresh, Edit, and Delete with pre-configured interactions.",
        keyFeatures: ["Stateful copy", "Standardized icons", "Consistent tooltips"],
        demoBlocks: [
            { label: "Button set", Demo: UtilityButtonsPreview },
            { label: "Standard buttons", Demo: UtilityButtonsStandardDemo },
            { label: "Tertiary buttons", Demo: UtilityButtonsTertiaryDemo },
            { label: "XS buttons", Demo: UtilityButtonsXSDemo },
        ],
    },
    {
        id: "text-editors",
        title: "Text Editor",
        category: "Base",
        description: "Premium rich text editor UI with a complete toolbar and status bar for content creation.",
        keyFeatures: ["Modern toolbar", "Status bar", "Word count", "Responsive"],
        demoBlocks: [
            { label: "Editor preview", Demo: TextEditorPreview },
            { label: "Minimal editor", Demo: TextEditorMinimalDemo },
            { label: "Comment editor", Demo: TextEditorCompactDemo },
            { label: "Post editor", Demo: TextEditorFullDemo },
        ],
    },
    {
        id: "mobile-app-buttons",
        title: "Mobile App Buttons",
        category: "Application",
        description: "High-fidelity store buttons for iOS and Android with premium glassmorphism effects.",
        keyFeatures: ["Apple & Google stores", "Glassmorphism variant", "Consistent sizing"],
        demoBlocks: [
            { label: "Badge preview", Demo: MobileAppButtonsPreview },
            { label: "Black variant", Demo: MobileAppButtonsBlackDemo },
            { label: "White variant", Demo: MobileAppButtonsWhiteDemo },
            { label: "Glass variant", Demo: MobileAppButtonsGlassDemo },
            { label: "Outline variant", Demo: MobileAppButtonsOutlineDemo },
        ],
    },
    {
        id: "credit-cards",
        title: "Credit Card",
        category: "Application",
        description: "Premium credit card visual components with support for major brands and glassmorphism.",
        keyFeatures: ["Visa/Mastercard/Amex", "Glass & Gradient themes", "Dynamic data"],
        demoBlocks: [
            { label: "Card preview", Demo: CreditCardPreview },
            { label: "Brand variant", Demo: CreditCardBrandDemo },
            { label: "Gradient variant", Demo: CreditCardGradientDemo },
            { label: "Glass variant", Demo: CreditCardGlassDemo },
            { label: "Light & Dark", Demo: CreditCardDarkLightDemo },
            { label: "Interactive variants", Demo: CreditCardInteractiveDemo },
        ],
    },
    {
        id: "qr-codes",
        title: "QR Codes",
        category: "Application",
        description: "Branded QR code generation with custom styles and logo integration for UIX identity.",
        keyFeatures: ["Branded styling", "Logo integration", "Theme aware colors"],
        demoBlocks: [
            { label: "Branded preview", Demo: BrandedQRCodePreview },
            { label: "Brand theme", Demo: BrandedQRCodeBrandDemo },
            { label: "Dark theme", Demo: BrandedQRCodeDarkDemo },
            { label: "Light theme", Demo: BrandedQRCodeLightDemo },
            { label: "Colorful variant", Demo: BrandedQRCodeColorfulDemo },
            { label: "Minimal variant", Demo: BrandedQRCodeMinimalDemo },
            { label: "Classic variant", Demo: BrandedQRCodeClassicDemo },
            { label: "Modern variant", Demo: BrandedQRCodeModernDemo },
            { label: "Elegant variant", Demo: BrandedQRCodeElegantDemo },
        ],
    },
    {
        id: "empty-states",
        title: "Empty States",
        category: "Application",
        description: "Empty state components with illustrations, avatars, and different layouts for various scenarios.",
        keyFeatures: ["Multiple illustrations", "Avatar layouts", "Size variants", "Theme variants"],
        demoBlocks: [
            { label: "Default empty state", Demo: EmptyStateDefaultDemo },
            { label: "Card variant", Demo: EmptyStateCardDemo },
            { label: "Minimal variant", Demo: EmptyStateMinimalDemo },
            { label: "Colorful variant", Demo: EmptyStateColorfulDemo },
        ],
    },
  {
    id: "radio-buttons",
    title: "Radio Buttons",
    category: "Base",
    description: "Single-selection radio controls with labels, hints, and disabled states.",
    keyFeatures: ["Label and hint support", "Disabled states", "Size variants"],
    demoBlocks: [
      { label: "With labels", Demo: RadioWithLabelDemo },
      { label: "With hints", Demo: RadioWithLabelAndHintDemo },
      { label: "Disabled", Demo: RadioDisabledDemo },
      { label: "Sizes", Demo: RadioButtonsDemo },
    ],
  },
  {
    id: "toggles",
    title: "Toggles",
    category: "Base",
    description: "On/off switches with labels, hints, and slim variants for settings and preferences.",
    keyFeatures: ["Label and hint support", "Slim variants", "Disabled states"],
    demoBlocks: [
      { label: "Default toggle", Demo: ToggleDefaultDemo },
      { label: "With hints", Demo: ToggleWithLabelAndHintDemo },
      { label: "Disabled", Demo: ToggleDisabledDemo },
      { label: "Sizes", Demo: ToggleSizesDemo },
    ],
  },
  {
    id: "textareas",
    title: "Textareas",
    category: "Base",
    description: "Multi-line text input fields with validation, hints, and size variants.",
    keyFeatures: ["Multi-line input", "Validation states", "Size variants"],
    demoBlocks: [
      { label: "Default textarea", Demo: TextareaDefaultDemo },
      { label: "Disabled", Demo: TextareaDisabledDemo },
      { label: "Invalid", Demo: TextareaInvalidDemo },
    ],
  },
  {
    id: "sliders",
    title: "Sliders",
    category: "Base",
    description: "Range input controls with single and dual thumbs, label positioning options.",
    keyFeatures: ["Single and dual thumbs", "Label positioning", "Range selection"],
    demoBlocks: [
      { label: "Default slider", Demo: SliderDefault },
      { label: "Bottom label", Demo: SliderBottomLabel },
      { label: "Top floating", Demo: SliderTopFloating },
      { label: "Single thumb", Demo: SliderSingleThumb },
    ],
  },
  {
    id: "tooltips",
    title: "Tooltips",
    category: "Base",
    description: "Informational overlays that appear on hover or focus, with placement options and arrows.",
    keyFeatures: ["Placement options", "Arrow variants", "Supporting text"],
    demoBlocks: [
      { label: "Default tooltip", Demo: TooltipDefaultDemo },
      { label: "With arrow", Demo: TooltipWithArrowDemo },
      { label: "With supporting text", Demo: TooltipWithSupportingTextDemo },
    ],
  },
  {
    id: "progress-indicators",
    title: "Progress Indicators",
    category: "Base",
    description: "Linear and circular progress bars with labels and size variants for showing completion status.",
    keyFeatures: ["Linear and circular", "Label positioning", "Size variants"],
    demoBlocks: [
      { label: "Progress bar", Demo: ProgressBarDefault },
      { label: "With label", Demo: ProgressBarTextRight },
      { label: "Circular progress", Demo: CircleProgressBar },
      { label: "Circular with label", Demo: CircleProgressBarLabel },
    ],
  },
  {
    id: "date-pickers",
    title: "Date Pickers",
    category: "Application",
    description: "Calendar-based date selection components with range options and time selection.",
    keyFeatures: ["Calendar interface", "Date ranges", "Time selection"],
    demoBlocks: [
      { label: "Calendar", Demo: CalendarDemo },
      { label: "Calendar card", Demo: CalendarCardDemo },
      { label: "Date picker", Demo: DatePickerDemo },
      { label: "Controlled picker", Demo: DatePickerControlledDemo },
      { label: "Date time picker", Demo: DateTimePickerDemo },
      { label: "Range calendar", Demo: RangeCalendarDemo },
      { label: "Range calendar card", Demo: RangeCalendarCardDemo },
      { label: "Date range picker", Demo: DateRangePickerDemo },
      { label: "Card variant", Demo: DatePickerCardDemo },
      { label: "Minimal variant", Demo: DatePickerMinimalDemo },
    ],
  },
  {
    id: "tabs",
    title: "Tabs",
    category: "Application",
    description: "Navigation components for organizing content into tabbed sections with horizontal and vertical layouts.",
    keyFeatures: ["Horizontal/vertical", "Brand/gray variants", "Badge support"],
    demoBlocks: [
      { label: "Brand horizontal", Demo: ButtonBrandHorizontalDemo },
      { label: "Brand vertical", Demo: ButtonBrandVerticalDemo },
      { label: "Gray horizontal", Demo: ButtonGrayHorizontalDemo },
    ],
  },
  {
    id: "pagination",
    title: "Pagination",
    category: "Application",
    description: "Navigation controls for paginated content with various styles and alignment options.",
    keyFeatures: ["Multiple styles", "Alignment options", "Page size controls"],
    demoBlocks: [
      { label: "Page default", Demo: PaginationPageDefault },
      { label: "Page minimal", Demo: PaginationPageMinimalCenter },
      { label: "Card default", Demo: PaginationCardDefault },
      { label: "Card minimal", Demo: PaginationCardMinimalCenterAligned },
    ],
  },
  {
    id: "tables",
    title: "Tables",
    category: "Application",
    description: "Data display components with sorting, selection, and responsive layouts.",
    keyFeatures: ["Sorting", "Selection", "Responsive design"],
    demoBlocks: [
      { label: "Table preview", Demo: TablePreview },
      { label: "Team members", Demo: Table01DividerLine },
      { label: "Alternating fills", Demo: Table01AlternatingFills },
      { label: "Customers", Demo: Table02DividerLine },
      { label: "Invoices", Demo: Table03DividerLine },
      { label: "File uploads", Demo: Table04DividerLine },
      { label: "Project status", Demo: Table05ProjectManagement },
    ],
  },
  {
    id: "file-uploads",
    title: "File Uploads",
    category: "Application",
    description: "Drag-and-drop file upload components with progress indicators and validation.",
    keyFeatures: ["Drag and drop", "Progress tracking", "File validation"],
    demoBlocks: [
      { label: "Images only", Demo: ImagesOnlyDemo },
      { label: "Size limit", Demo: MaxSizeLimitDemo },
      { label: "Compact variant", Demo: CompactVariantDemo },
      { label: "Modern variant", Demo: ModernVariantDemo },
      { label: "Minimal variant", Demo: MinimalVariantDemo },
      { label: "Image variant", Demo: ImageVariantDemo },
    ],
  },
  {
    id: "carousels",
    title: "Carousels",
    category: "Application",
    description: "Image carousel components with navigation controls and indicators.",
    keyFeatures: ["Navigation", "Indicators", "Responsive"],
    demoBlocks: [
      { label: "Medium carousel", Demo: CarouselMd },
      { label: "Large carousel", Demo: CarouselLg },
    ],
  },
  {
    id: "charts",
    title: "Charts",
    category: "Application",
    description: "Data visualization components including bar charts, line charts, and progress indicators.",
    keyFeatures: ["Multiple chart types", "Responsive", "Customizable"],
    demoBlocks: [
      { label: "Charts preview", Demo: ComposedChartPreview },
      { label: "Bar - Simple", Demo: BarChart },
      { label: "Bar - Composed", Demo: BarChart02 },
      { label: "Bar - Slim", Demo: BarChart03 },
      { label: "Line - Area", Demo: LineChart01 },
      { label: "Line - Dotted", Demo: LineChart02 },
      { label: "Line - Pattern", Demo: LineChart03 },
      { label: "Line - Smooth", Demo: LineChart04 },
      { label: "Composed - Mixed", Demo: ComposedChart01 },
      { label: "Scatter - Dots", Demo: ScatterChart01 },
      { label: "Pie - Medium", Demo: PieChartMd },
      { label: "Pie - Large", Demo: PieChartLg },
      { label: "Radar", Demo: RadarChart },
      { label: "Activity Gauge", Demo: ActivityGaugeMd },
      { label: "Progress Circle", Demo: ProgressCircleMd },
    ],
  },
  {
    id: "loading-indicators",
    title: "Loading Indicators",
    category: "Application",
    description: "Animated loading components with different styles and sizes for user feedback.",
    keyFeatures: ["Multiple types", "Size variants", "Labels"],
    demoBlocks: [
      { label: "Default", Demo: LoadingDefaultDemo },
      { label: "Line simple", Demo: LineSimpleWithLabelDemo },
      { label: "Line spinner", Demo: LineSpinnerWithLabelDemo },
      { label: "Dot circle", Demo: DotCircleWithLabelDemo },
    ],
  },
  {
    id: "app-navigation",
    title: "App Navigation",
    category: "Application",
    description: "Header navigation components with menus, tabs, and user account dropdowns.",
    keyFeatures: ["Multiple layouts", "User actions", "Responsive"],
    demoBlocks: [
      { label: "Header preview", Demo: HeaderNavigationPreview },
      { label: "Simple navigation", Demo: HeaderNavigationSimpleDemo },
      { label: "Dual tier", Demo: HeaderNavigationDualTierDemo },
    ],
  },
];

function App() {
  const [selectedPage, setSelectedPage] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [globalTheme, setGlobalTheme] = useState<"light" | "dark">("light");

  const activePage = componentPages.find((page) => page.id === selectedPage) || null;

  const filteredPages = componentPages.filter(page =>
    page.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    page.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const categories = ["Foundations", "Base", "Application"];

  return (
    <div className={`flex h-screen overflow-hidden transition-colors duration-300 ${globalTheme === "dark" ? "dark bg-slate-950" : "bg-slate-50"}`}>
      {/* Sidebar */}
      <aside className="w-64 border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex flex-col shrink-0 transition-colors duration-300">
        <div className="p-6 border-b border-slate-100 dark:border-slate-800">
          <div className="flex items-center">
            <img 
              src={globalTheme === "dark" ? "/Logos/Main logo dark mode.svg" : "/Logos/Main logo transparent.svg"} 
              className="h-8" 
              alt="UIX Design Library" 
              onError={(e) => {
                // Fallback if the specific dark mode logo doesn't exist
                (e.target as HTMLImageElement).src = "/Logos/Main logo transparent.svg";
              }}
            />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-4">
          <button
            onClick={() => setSelectedPage(null)}
            className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm font-bold transition ${!selectedPage ? "bg-brand-50 dark:bg-brand-900/20 text-brand-700 dark:text-brand-400" : "text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white"}`}
          >
            <Rocket className="size-4" />
            Overview
          </button>

          {categories.map(category => (
            <div key={category} className="mt-6">
              <p className="px-3 text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">{category}</p>
              <div className="space-y-0.5">
                {componentPages.filter(p => p.category === category).map(page => (
                  <button
                    key={page.id}
                    onClick={() => setSelectedPage(page.id)}
                    className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm font-bold transition ${selectedPage === page.id ? "bg-brand-50 dark:bg-brand-900/20 text-brand-700 dark:text-brand-400" : "text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white"}`}
                  >
                    {page.title}
                    {selectedPage === page.id && <ChevronRight className="size-3" />}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 h-full min-h-0 overflow-y-auto scroll-smooth">
        <header className={`h-16 border-b sticky top-0 z-10 px-8 flex items-center justify-between transition-colors duration-300 ${globalTheme === "dark" ? "bg-slate-900/80 border-slate-800 text-white" : "bg-white/80 border-slate-200 text-slate-900"} backdrop-blur-md`}>
          <div className="relative w-96 group">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-slate-400 group-focus-within:text-brand-600 transition-colors" />
            <input
              type="text"
              placeholder="Search components..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all dark:text-white"
            />
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setGlobalTheme(globalTheme === "light" ? "dark" : "light")}
              className="p-2 text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
              title="Toggle global theme"
              aria-label="Toggle global theme"
            >
              {globalTheme === "light" ? <Moon className="size-5" /> : <Sun className="size-5" />}
            </button>
            <button className="p-2 text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors" aria-label="Settings">
              <Settings className="size-5" />
            </button>
            <div className="h-4 w-px bg-slate-200 dark:bg-slate-700" />
            <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-900 dark:bg-brand-600 text-white rounded-xl text-xs font-bold shadow-lg shadow-slate-900/10">
              <div className="size-2 rounded-full bg-green-400 animate-pulse" />
              SYSTEM ACTIVE
            </div>
          </div>
        </header>

        <div className="p-10">
          {!activePage ? (
            <div className="max-w-6xl mx-auto">
              <div className="mb-12">
                <h1 className="text-5xl font-bold text-slate-900 dark:text-white tracking-tight mb-4">Component Library</h1>
                <p className="text-lg text-slate-500 dark:text-slate-400 max-w-3xl leading-relaxed font-medium">
                  Professional-grade React components for building high-performance SaaS applications. Fully customizable, accessible, and ready for production.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPages.filter(p => p.id !== 'documentation').map(page => (
                  <div
                    key={page.id}
                    onClick={() => setSelectedPage(page.id)}
                    onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && setSelectedPage(page.id)}
                    role="button"
                    tabIndex={0}
                    className="group cursor-pointer text-left border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 rounded-[2rem] p-4 hover:border-brand-400 dark:hover:border-brand-500 hover:shadow-2xl hover:shadow-brand-500/10 transition-all duration-300 outline-none focus:ring-2 focus:ring-brand-500/20"
                  >
                    <div className="aspect-[1.4] bg-slate-50 dark:bg-slate-800/50 rounded-[1.5rem] mb-5 border border-slate-100 dark:border-slate-800 flex items-center justify-center p-8 overflow-hidden group-hover:bg-slate-100 dark:group-hover:bg-slate-800 transition-colors relative">
                      <div className="scale-[0.85] group-hover:scale-100 transition-transform duration-700 ease-out w-full flex justify-center">
                        {page.demoBlocks[0] && React.createElement(page.demoBlocks[0].Demo, { isCompact: true })}
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-white/20 dark:from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <div className="px-2 pb-2">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white">{page.title}</h3>
                        <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 group-hover:bg-brand-600 group-hover:text-white transition-all duration-300 uppercase tracking-wider">
                          {page.category}
                        </span>
                      </div>
                      <p className="text-sm text-slate-500 dark:text-slate-400 font-medium line-clamp-2 leading-relaxed">{page.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="max-w-6xl mx-auto">
              <nav className="flex items-center gap-2 text-xs font-bold text-slate-400 dark:text-slate-500 mb-8 uppercase tracking-widest">
                <button onClick={() => setSelectedPage(null)} className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors">Components</button>
                <ChevronRight className="size-3" />
                <span className="text-slate-900 dark:text-white">{activePage.title}</span>
              </nav>

              <div className="mb-12">
                <div className="flex items-center gap-3 mb-4">
                  {activePage.keyFeatures.map(feature => (
                    <span key={feature} className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-brand-50 dark:bg-brand-900/30 text-brand-600 dark:text-brand-400 border border-brand-100 dark:border-brand-800 uppercase tracking-wider">
                      {feature}
                    </span>
                  ))}
                </div>
                <h1 className="text-5xl font-bold text-slate-900 dark:text-white tracking-tight mb-4">{activePage.title}</h1>
                <p className="text-xl text-slate-500 dark:text-slate-400 max-w-3xl leading-relaxed font-medium">{activePage.description}</p>
              </div>

              <div className="space-y-12">
                {activePage.id === "icons" ? (
                  <div className="space-y-8">
                    {activePage.demoBlocks.map(demo => (
                      <div key={demo.label}>
                        <demo.Demo />
                      </div>
                    ))}
                  </div>
                ) : (
                  <section>
                    <div className="flex items-center gap-2 mb-4">
                      <Eye className="size-5 text-brand-600 dark:text-brand-400" />
                      <h2 className="text-xl font-bold text-slate-900 dark:text-white">Interactive Demos</h2>
                    </div>
                    <div className="grid gap-8">
                      {activePage.demoBlocks.map(demo => (
                        <DemoCard
                          key={demo.label}
                          demo={demo}
                          pageId={activePage.id}
                        />
                      ))}
                    </div>
                  </section>
                )}

                <section className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-8">
                  <div className="flex items-center gap-2 mb-6">
                    <BookOpen className="size-5 text-brand-600 dark:text-brand-400" />
                    <h2 className="text-xl font-bold text-slate-900 dark:text-white">Documentation</h2>
                  </div>
                  <div className="prose prose-slate dark:prose-invert max-w-none">
                    <h3 className="text-slate-900 dark:text-white">Usage</h3>
                    <p className="text-slate-600 dark:text-slate-400">
                      The {activePage.title} component is designed to be highly flexible and accessible.
                      You can import it directly into your React application and use it within any layout.
                    </p>
                    <div className="bg-slate-900 dark:bg-black rounded-xl p-4 my-4 border border-slate-800">
                      <code className="text-brand-400 text-sm">
                        {`import { ${componentNameMap[activePage.id] || activePage.title.replace(/\s/g, "")} } from "@uix/design-library";`}
                      </code>
                    </div>
                    <h3 className="text-slate-900 dark:text-white mt-6">Guidelines</h3>
                    <ul className="list-disc pl-5 space-y-2 text-slate-600 dark:text-slate-400">
                      <li>Ensure proper contrast when using custom colors.</li>
                      <li>Use appropriate ARIA labels for accessibility.</li>
                      <li>Combine with other {activePage.category} components for consistent UI.</li>
                    </ul>
                  </div>
                </section>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;

