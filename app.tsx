import React, { useState } from "react";
import { Copy, Moon, Sun, Eye, Code, Search, Menu, ChevronRight, BookOpen, Settings, Rocket, Maximize2, X, Download, Share2, Check, RotateCcw } from "lucide-react";
import { Variants as ButtonVariantsDemo, Sizes as ButtonSizesDemo, Icons as ButtonIconsDemo, States as ButtonStatesDemo } from "./components/base/buttons/buttons.demo";
import { DefaultDemo as InputDefaultDemo, DisabledDemo as InputDisabledDemo, InvalidDemo as InputInvalidDemo } from "./components/base/input/inputs.demo";
import { DefaultDemo as CheckboxDefaultDemo, SizesDemo as CheckboxSizesDemo, Checkboxes as CheckboxListDemo } from "./components/base/checkbox/checkbox.demo";
import { DefaultDemo as SelectDefaultDemo, DisabledDemo as SelectDisabledDemo, SizesDemo as SelectSizesDemo } from "./components/base/select/select.demo";
import { DefaultDemo as AvatarDefaultDemo, VerifiedDemo as AvatarVerifiedDemo, GroupDemo as AvatarGroupDemo } from "./components/base/avatar/avatar.demo";
import { Default as BadgeDefaultDemo, PillColor as BadgePillColorDemo, BadgeColor as BadgeColorDemo, WithDot as BadgeWithDotDemo } from "./components/base/badges/badges.demo";
import { DefaultDemo as TagsDefaultDemo, CloseXDemo as TagsCloseXDemo } from "./components/base/tags/tags.demo";
import { LeadingIcon as ButtonGroupLeadingIconDemo, ButtonGroupDot as ButtonGroupDotDemo, DisabledIndividualButton as ButtonGroupDisabledIndividualDemo, SelectedItem as ButtonGroupSelectedDemo, MultipleSelectedItems as ButtonGroupMultipleDemo } from "./components/base/button-group/button-group.demo";
import { WithLabelDemo as RadioWithLabelDemo, WithLabelAndHintDemo as RadioWithLabelAndHintDemo, DisabledDemo as RadioDisabledDemo, RadioButtons as RadioButtonsDemo } from "./components/base/radio-buttons/radio-buttons.demo";
import { DefaultDemo as ToggleDefaultDemo, WithLabelAndHintDemo as ToggleWithLabelAndHintDemo, DisabledDemo as ToggleDisabledDemo, SizesDemo as ToggleSizesDemo } from "./components/base/toggle/toggle.demo";
import { DefaultDemo as TextareaDefaultDemo, DisabledDemo as TextareaDisabledDemo, InvalidDemo as TextareaInvalidDemo } from "./components/base/textarea/textarea.demo";
import { Default as SliderDefault, BottomLabel as SliderBottomLabel, TopFloating as SliderTopFloating, SingleThumb as SliderSingleThumb } from "./components/base/slider/slider.demo";
import { DefaultDemo as TooltipDefaultDemo, WithArrowDemo as TooltipWithArrowDemo, WithSupportingTextDemo as TooltipWithSupportingTextDemo } from "./components/base/tooltip/tooltip.demo";
import { ProgressBarDefault, ProgressBarTextRight, CircleProgressBar, CircleProgressBarLabel } from "./components/base/progress-indicators/progress-indicators.demo";
import { CalendarDemo, CalendarCardDemo, DatePickerDemo, DatePickerControlledDemo } from "./components/application/date-picker/date-picker.demo";
import { ButtonBrandHorizontalDemo, ButtonBrandVerticalDemo, ButtonGrayHorizontalDemo } from "./components/application/tabs/tabs.demo";
import { PaginationPageDefault, PaginationPageMinimalCenter, PaginationCardDefault, PaginationCardMinimalCenterAligned } from "./components/application/pagination/pagination.demo";
import { Table01DividerLine, Table01AlternatingFills } from "./components/application/table/table.demo";
import { ImagesOnlyDemo, MaxSizeLimitDemo } from "./components/application/file-upload/file-upload.demo";
import { CarouselMd, CarouselLg } from "./components/application/carousel/carousel.demo";
import { BarChart } from "./components/application/charts/bar-charts.demo";
import { DefaultDemo as LoadingDefaultDemo, LineSimpleWithLabelDemo, LineSpinnerWithLabelDemo, DotCircleWithLabelDemo } from "./components/application/loading-indicator/loading-indicator.demo";
import { HeaderNavigationSimpleDemo, HeaderNavigationDualTierDemo } from "./components/application/app-navigation/header-navigation.demo";
import { DefaultDemo as FeaturedIconDefaultDemo, LightDemo as FeaturedIconLightDemo, GradientDemo as FeaturedIconGradientDemo } from "./components/foundations/featured-icon/featured-icon.demo";
import { LucideIconsDemo, TablerIconsDemo, UntitledIconsDemo, IconsPreview } from "./components/foundations/icons/icons.demo";
import { DocumentationIntroDemo, DocumentationDesignDemo } from "./components/foundations/documentation/documentation.demo";

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
    <article className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm transition-all hover:shadow-xl hover:shadow-slate-200/50 group">
      <div className="flex items-center justify-between border-b border-slate-100 bg-slate-50/30 px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="size-2 rounded-full bg-violet-500 shadow-sm shadow-violet-500/50" />
          <h3 className="text-sm font-bold text-slate-900 tracking-tight">{demo.label}</h3>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setThemeMode(themeMode === "light" ? "dark" : "light")}
            className="flex size-9 items-center justify-center rounded-xl text-slate-400 hover:bg-white hover:text-slate-900 hover:shadow-sm border border-transparent hover:border-slate-100 transition-all"
            title="Toggle preview theme"
          >
            {themeMode === "light" ? <Moon className="size-4" /> : <Sun className="size-4" />}
          </button>
        </div>
      </div>

      <div className={`relative min-h-[300px] transition-colors duration-500 ${themeMode === "dark" ? "bg-slate-950" : "bg-white"}`}>
        <div className="flex min-h-[300px] items-center justify-center p-12">
          <div className={`${themeMode === "dark" ? "dark" : ""} w-full flex justify-center`}>
            <demo.Demo />
          </div>
        </div>
      </div>

      {/* Code & Framework Selection Footer */}
      <div className="border-t border-slate-100 p-5 bg-slate-50/50">
        <div className="flex items-center justify-between mb-4">
          <div className="w-full flex items-center gap-2 p-2 bg-slate-200/40 rounded-xl border border-slate-200/50 overflow-x-auto scrollbar-hide flex-nowrap">
            {['React', 'Web', 'Vue', 'Svelte'].map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 px-4 py-3 text-[12px] border-2 border-slate-100 font-bold leading-none rounded-lg transition-all whitespace-nowrap ${activeTab === tab ? 'bg-violet-100 border-2 border-violet-600 text-slate-900' : 'text-slate-500 hover:text-slate-900'}`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-between mt-4 mb-4">
          <div className="text-[12px] font-bold text-slate-400 uppercase tracking-widest">Source Implementation</div>
          <button
            onClick={handleCopy}
            className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-xl text-[9px] font-bold text-slate-600 hover:text-violet-600 hover:border-violet-600 transition-all shadow-sm active:scale-95 uppercase tracking-wider"
          >
            {copied ? <Check className="size-3 text-emerald-600" /> : <Copy className="size-3" />}
            {copied ? 'COPIED!' : 'COPY CODE'}
          </button>
        </div>

        <div className="relative group">
          <pre className="overflow-x-auto rounded-2xl bg-slate-800 p-6 text-[10px] font-mono text-slate-300 leading-relaxed shadow-inner max-h-48 scrollbar-hide">
            <code>{getCodeSnippet(activeTab)}</code>
          </pre>
          <div className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t rounded-2xl from-slate-800 to-transparent pointer-events-none opacity-50" />
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
    keyFeatures: ["React 19 & Vite", "Tailwind CSS v4", "React Aria Components", "Nexa Font"],
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
      { label: "Disabled select", Demo: SelectDisabledDemo },
      { label: "Size variants", Demo: SelectSizesDemo },
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
      { label: "Divider line", Demo: Table01DividerLine },
      { label: "Alternating fills", Demo: Table01AlternatingFills },
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
      { label: "Bar chart", Demo: BarChart },
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
    <div className="flex h-screen bg-slate-50 text-slate-900 overflow-hidden">
      {/* Sidebar */}
      <aside className="w-64 border-r border-slate-200 bg-white flex flex-col shrink-0">
        <div className="p-6 border-b border-slate-100">
          <div className="flex items-center">
            <img src="/Logos/Main logo transparent.svg" className="h-8" alt="UIX Design Library" />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-4">
          <button
            onClick={() => setSelectedPage(null)}
            className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition ${!selectedPage ? "bg-violet-50 text-violet-700" : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"}`}
          >
            <Rocket className="size-4" />
            Overview
          </button>

          {categories.map(category => (
            <div key={category} className="mt-6">
              <p className="px-3 text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">{category}</p>
              <div className="space-y-0.5">
                {componentPages.filter(p => p.category === category).map(page => (
                  <button
                    key={page.id}
                    onClick={() => setSelectedPage(page.id)}
                    className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm font-bold transition ${selectedPage === page.id ? "bg-violet-50 text-violet-700" : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"}`}
                  >
                    {page.title}
                    {selectedPage === page.id && <ChevronRight className="size-3" />}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
{/* 
        <div className="p-4 border-t border-slate-100">
          <div className="rounded-xl bg-slate-50 p-3">
            <p className="text-xs font-medium text-slate-500">Version</p>
            <p className="text-sm font-bold text-slate-900 mt-1">v1.2.0-beta</p>
          </div>
        </div> */}
      </aside>

      {/* Main Content */}
      <main className={`flex-1 h-full min-h-0 overflow-y-auto scroll-smooth transition-colors duration-300 ${globalTheme === "dark" ? "bg-slate-950 dark" : "bg-white"}`}>
        <header className={`h-16 border-b sticky top-0 z-10 px-8 flex items-center justify-between transition-colors duration-300 ${globalTheme === "dark" ? "bg-slate-900/80 border-slate-800 text-white" : "bg-white/80 border-slate-200 text-slate-900"} backdrop-blur-md`}>
          <div className="relative w-96 group">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-slate-400 group-focus-within:text-violet-600 transition-colors" />
            <input
              type="text"
              placeholder="Search components..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-violet-500/20 focus:border-violet-500 transition-all"
            />
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setGlobalTheme(globalTheme === "light" ? "dark" : "light")}
              className="p-2 text-slate-500 hover:bg-slate-100 rounded-lg transition-colors"
              title="Toggle global theme"
            >
              {globalTheme === "light" ? <Moon className="size-5" /> : <Sun className="size-5" />}
            </button>
            <button className="p-2 text-slate-500 hover:bg-slate-100 rounded-lg transition-colors">
              <Settings className="size-5" />
            </button>
            <div className="h-4 w-px bg-slate-200" />
            <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-900 text-white rounded-xl text-xs font-bold shadow-lg shadow-slate-900/10">
              <div className="size-2 rounded-full bg-green-400 animate-pulse" />
              SYSTEM ACTIVE
            </div>
          </div>
        </header>

        <div className="p-10">
          {!activePage ? (
            <div className="max-w-6xl mx-auto">
              <div className="mb-12">
                <h1 className="text-5xl font-bold text-slate-900 tracking-tight mb-4">Component Library</h1>
                <p className="text-lg text-slate-500 max-w-3xl leading-relaxed font-medium">
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
                    className="group cursor-pointer text-left border border-slate-200 bg-white rounded-[2rem] p-4 hover:border-violet-400 hover:shadow-2xl hover:shadow-violet-500/10 transition-all duration-300 outline-none focus:ring-2 focus:ring-violet-500/20"
                  >
                    <div className="aspect-[1.4] bg-slate-50 rounded-[1.5rem] mb-5 border border-slate-100 flex items-center justify-center p-8 overflow-hidden group-hover:bg-slate-100 transition-colors relative">
                      <div className="scale-[0.85] group-hover:scale-100 transition-transform duration-700 ease-out w-full flex justify-center">
                        {page.demoBlocks[0] && React.createElement(page.demoBlocks[0].Demo, { isCompact: true })}
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <div className="px-2 pb-2">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-bold text-slate-900">{page.title}</h3>
                        <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-slate-100 text-slate-500 group-hover:bg-violet-600 group-hover:text-white transition-all duration-300 uppercase tracking-wider">
                          {page.category}
                        </span>
                      </div>
                      <p className="text-sm text-slate-500 font-medium line-clamp-2 leading-relaxed">{page.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="max-w-6xl mx-auto">
              <nav className="flex items-center gap-2 text-xs font-bold text-slate-400 mb-8 uppercase tracking-widest">
                <button onClick={() => setSelectedPage(null)} className="hover:text-violet-600 transition-colors">Components</button>
                <ChevronRight className="size-3" />
                <span className="text-slate-900">{activePage.title}</span>
              </nav>

              <div className="mb-12">
                <div className="flex items-center gap-3 mb-4">
                  {activePage.keyFeatures.map(feature => (
                    <span key={feature} className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-violet-50 text-violet-600 border border-violet-100 uppercase tracking-wider">
                      {feature}
                    </span>
                  ))}
                </div>
                <h1 className="text-5xl font-bold text-slate-900 tracking-tight mb-4">{activePage.title}</h1>
                <p className="text-xl text-slate-500 max-w-3xl leading-relaxed font-medium">{activePage.description}</p>
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
                      <Eye className="size-5 text-violet-600" />
                      <h2 className="text-xl font-bold text-slate-900">Interactive Demos</h2>
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

                <section className="bg-white border border-slate-200 rounded-2xl p-8">
                  <div className="flex items-center gap-2 mb-6">
                    <BookOpen className="size-5 text-violet-600" />
                    <h2 className="text-xl font-bold text-slate-900">Documentation</h2>
                  </div>
                  <div className="prose prose-slate max-w-none">
                    <h3 className="text-slate-900">Usage</h3>
                    <p>
                      The {activePage.title} component is designed to be highly flexible and accessible.
                      You can import it directly into your React application and use it within any layout.
                    </p>
                    <div className="bg-slate-900 rounded-xl p-4 my-4">
                      <code className="text-pink-400 text-sm">
                        {`import { ${componentNameMap[activePage.id] || activePage.title.replace(/\s/g, "")} } from "@uix/design-library";`}
                      </code>
                    </div>
                    <h3 className="text-slate-900 mt-6">Guidelines</h3>
                    <ul className="list-disc pl-5 space-y-2 text-slate-600">
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

