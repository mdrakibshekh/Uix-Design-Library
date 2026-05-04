import React, { useState } from "react";
import { Copy01, Moon01, Sun, Eye, Code01 } from "@untitledui/icons";
import { Primary as ButtonPrimaryDemo, Secondary as ButtonSecondaryDemo } from "./components/base/buttons/buttons.demo";
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

type ComponentPage = {
  id: string;
  title: string;
  description: string;
  keyFeatures: string[];
  demoBlocks: Array<{ label: string; Demo: React.ComponentType<any> }>;
};

type ComponentDoc = {
  overview: string;
  usage: string;
  variants: string[];
  codeExample: string;
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
};

const getPageDocs = (page: ComponentPage): ComponentDoc => {
  const componentName = componentNameMap[page.id] ?? page.title.replace(/\s+/g, "");
  return {
    overview: `The ${page.title} page explains how to build consistent interfaces using the ${componentName} component. This documentation includes usage guidance, variant examples, and best practices for UIX React.`,
    usage: `Use ${componentName} when you need ${page.description.toLowerCase()}. Combine these components with layout and form patterns to create polished, accessible experiences in dashboards, admin tools, and SaaS interfaces.`,
    variants: page.keyFeatures,
    codeExample: `import { ${componentName} } from \"@/components/${page.id.includes("application") ? "application" : "base"}/${page.id.replace(/-/g, "/")}/${page.id.replace(/-/g, "")}.tsx\";

<${componentName} />`,
  };
};

const getDemoCode = (pageId: string, label: string): string => {
  const componentName = componentNameMap[pageId] ?? label.replace(/\s+/g, "");
  return `// ${label}
import { ${componentName} } from '@/components/${pageId.includes("application") ? "application" : "base"}/${pageId.replace(/-/g, "/")}/${pageId.replace(/-/g, "")}.tsx';

<${componentName} />`;
};

const DemoCard = ({ demo, pageId }: { demo: { label: string; Demo: React.ComponentType<any> }; pageId: string }) => {
  const [activeTab, setActiveTab] = useState<"preview" | "code">("preview");
  const [themeMode, setThemeMode] = useState<"light" | "dark">("light");
  const [copied, setCopied] = useState(false);
  const code = getDemoCode(pageId, demo.label);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1400);
    } catch {
      setCopied(false);
    }
  };

  return (
    <article className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Demo</p>
          <h3 className="mt-3 text-2xl font-semibold text-slate-950">{demo.label}</h3>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={() => setActiveTab("preview")}
            className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition ${
              activeTab === "preview" ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-700 hover:bg-slate-200"
            }`}
          >
            <Eye01 className="size-4" /> Preview
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("code")}
            className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition ${
              activeTab === "code" ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-700 hover:bg-slate-200"
            }`}
          >
            <Code01 className="size-4" /> Code
          </button>
          <button
            type="button"
            onClick={() => setThemeMode(themeMode === "light" ? "dark" : "light")}
            className="inline-flex items-center justify-center rounded-full bg-slate-100 p-3 text-slate-700 transition hover:bg-slate-200"
            aria-label="Toggle theme"
          >
            {themeMode === "light" ? <Moon01 className="size-4" /> : <Sun01 className="size-4" />}
          </button>
          <button
            type="button"
            onClick={handleCopy}
            className="inline-flex items-center justify-center rounded-full bg-slate-100 p-3 text-slate-700 transition hover:bg-slate-200"
            aria-label="Copy code"
          >
            <Copy01 className="size-4" />
          </button>
        </div>
      </div>

      <div className={`rounded-[28px] border border-slate-200 ${themeMode === "dark" ? "bg-slate-950 text-slate-100" : "bg-slate-50 text-slate-950"} p-6`}>
        {activeTab === "preview" ? (
          <div className="min-h-[220px] rounded-3xl bg-white p-4 shadow-inner">
            <div className={themeMode === "dark" ? "dark bg-slate-950 p-6" : "bg-white p-6"}>
              <demo.Demo />
            </div>
          </div>
        ) : (
          <pre className="overflow-x-auto rounded-3xl bg-slate-900 p-4 text-sm text-slate-100">
            <code>{code}</code>
          </pre>
        )}
      </div>

      {copied ? <p className="mt-3 text-sm text-green-600">Code copied to clipboard.</p> : null}
    </article>
  );
};

const componentPages: ComponentPage[] = [
  {
    id: "buttons",
    title: "Buttons",
    description: "A complete suite of button variants, states, and sizes for primary actions and toolbars.",
    keyFeatures: ["Solid / Ghost / Outline", "Dark / Light / Brand", "Disabled / Loading / Icon"],
    demoBlocks: [
      { label: "Primary buttons", Demo: ButtonPrimaryDemo },
      { label: "Secondary buttons", Demo: ButtonSecondaryDemo },
    ],
  },
  {
    id: "button-groups",
    title: "Button Groups",
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
    description: "Data visualization components including bar charts, line charts, and progress indicators.",
    keyFeatures: ["Multiple chart types", "Responsive", "Customizable"],
    demoBlocks: [
      { label: "Bar chart", Demo: BarChart },
    ],
  },
  {
    id: "loading-indicators",
    title: "Loading Indicators",
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
    description: "Header navigation components with menus, tabs, and user account dropdowns.",
    keyFeatures: ["Multiple layouts", "User actions", "Responsive"],
    demoBlocks: [
      { label: "Simple navigation", Demo: HeaderNavigationSimpleDemo },
      { label: "Dual tier", Demo: HeaderNavigationDualTierDemo },
    ],
  },
  {
    id: "featured-icons",
    title: "Featured Icons",
    description: "Decorative icon components with themed backgrounds for emphasis and visual hierarchy.",
    keyFeatures: ["Multiple themes", "Color variants", "Size options"],
    demoBlocks: [
      { label: "Default", Demo: FeaturedIconDefaultDemo },
      { label: "Light theme", Demo: FeaturedIconLightDemo },
      { label: "Gradient theme", Demo: FeaturedIconGradientDemo },
    ],
  },
];

const navItems = [
  { id: "overview", label: "Overview" },
  { id: "buttons", label: "Buttons" },
  { id: "button-groups", label: "Button Groups" },
  { id: "inputs", label: "Inputs" },
  { id: "checkboxes", label: "Checkboxes" },
  { id: "selects", label: "Selects" },
  { id: "radio-buttons", label: "Radio Buttons" },
  { id: "toggles", label: "Toggles" },
  { id: "textareas", label: "Textareas" },
  { id: "sliders", label: "Sliders" },
  { id: "tooltips", label: "Tooltips" },
  { id: "progress-indicators", label: "Progress Indicators" },
  { id: "date-pickers", label: "Date Pickers" },
  { id: "tabs", label: "Tabs" },
  { id: "pagination", label: "Pagination" },
  { id: "tables", label: "Tables" },
  { id: "file-uploads", label: "File Uploads" },
  { id: "carousels", label: "Carousels" },
  { id: "charts", label: "Charts" },
  { id: "loading-indicators", label: "Loading Indicators" },
  { id: "app-navigation", label: "App Navigation" },
  { id: "featured-icons", label: "Featured Icons" },
  { id: "avatars", label: "Avatars" },
  { id: "badges", label: "Badges" },
  { id: "tags", label: "Tags" },
];

function App() {
  const [selectedPage, setSelectedPage] = useState("overview");
  const activePage = selectedPage === "overview" ? null : componentPages.find((page) => page.id === selectedPage);

  return (
    <div className="min-h-screen bg-slate-100 text-slate-950">
      <div className="mx-auto grid max-w-[1440px] gap-8 px-4 py-6 sm:px-6 lg:grid-cols-[280px_minmax(0,1fr)] lg:px-8">
        <aside className="space-y-6 lg:sticky lg:top-6">
          <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm">
            <div className="mb-6 flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">UIX Design Library</p>
                <p className="mt-3 text-lg font-semibold text-slate-950">React component docs</p>
              </div>
              <div className="h-10 w-10 rounded-3xl bg-slate-100" />
            </div>
            <div className="rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-500">Search...</div>
          </div>

          <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm">
            <div className="mb-5 flex items-center justify-between">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">Navigation</p>
              <span className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-500">v1.0</span>
            </div>
            <div className="space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setSelectedPage(item.id)}
                  className={
                    "flex w-full items-center justify-between rounded-3xl px-4 py-3 text-left text-sm transition " +
                    (selectedPage === item.id
                      ? "bg-violet-600 text-white shadow-sm"
                      : "text-slate-600 hover:bg-slate-50 hover:text-slate-950")
                  }
                >
                  <span>{item.label}</span>
                  {selectedPage === item.id ? <span className="rounded-full bg-white px-2 py-0.5 text-[11px] font-semibold text-violet-600">Active</span> : null}
                </button>
              ))}
            </div>
          </div>
        </aside>

        <main className="space-y-8">
          <section className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-3xl">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-violet-600">UIX Design Library</p>
                <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
                  Build faster with actual React components
                </h1>
                <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
                  Explore the library, interact with real component demos, and view variant examples in a modern SaaS-style documentation site.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <button className="rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-50">
                  Dashboard
                </button>
                <button className="rounded-full bg-violet-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-violet-700">
                  Get UIX
                </button>
              </div>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5 shadow-sm">
                <p className="text-sm text-slate-500">Components</p>
                <p className="mt-3 text-3xl font-semibold text-slate-950">24</p>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5 shadow-sm">
                <p className="text-sm text-slate-500">Interactive demos</p>
                <p className="mt-3 text-3xl font-semibold text-slate-950">25+</p>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5 shadow-sm">
                <p className="text-sm text-slate-500">Style</p>
                <p className="mt-3 text-3xl font-semibold text-slate-950">SaaS-ready</p>
              </div>
            </div>
          </section>

          {activePage === null ? (
            <section className="space-y-6">
              <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm">
                <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Overview</p>
                    <h2 className="mt-3 text-3xl font-semibold text-slate-950">Interactive component library</h2>
                    <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
                      Select any component from the sidebar to see live demos, variant examples, and UI details sourced from your actual React library.
                    </p>
                  </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                  {componentPages.map((page) => {
                    const Demo = page.demoBlocks[0]?.Demo;

                    return (
                      <button
                        key={page.id}
                        onClick={() => setSelectedPage(page.id)}
                        className="rounded-3xl border border-slate-200 bg-slate-50 p-6 text-left shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                      >
                        <div className="mb-4 flex h-44 items-center justify-center overflow-hidden rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
                          {Demo ? <Demo /> : <div className="text-sm text-slate-400">Preview coming soon</div>}
                        </div>
                        <h3 className="text-xl font-semibold text-slate-950">{page.title}</h3>
                        <p className="mt-2 text-sm text-slate-500">{page.description}</p>
                      </button>
                    );
                  })}
                </div>
              </div>
            </section>
          ) : (
            <section className="space-y-6">
              <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm">
                <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                  <div className="max-w-3xl">
                    <p className="text-sm font-semibold uppercase tracking-[0.24em] text-violet-600">{activePage.title}</p>
                    <h2 className="mt-3 text-3xl font-semibold text-slate-950">{activePage.title} component details</h2>
                    <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
                      {activePage.description} Explore real component examples and interactive variant previews using the actual UIX React library.
                    </p>
                  </div>
                  <button
                    onClick={() => setSelectedPage("overview")}
                    className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-slate-50 px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
                  >
                    Back to overview
                  </button>
                </div>

                <div className="mt-8 grid gap-4 sm:grid-cols-3">
                  {activePage.keyFeatures.map((feature) => (
                    <div key={feature} className="rounded-3xl border border-slate-200 bg-slate-50 p-5 shadow-sm">
                      <p className="text-sm font-semibold text-slate-950">{feature}</p>
                    </div>
                  ))}
                </div>
              </div>

              {activePage.demoBlocks.map((demo) => (
                <article key={demo.label} className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm">
                  <div className="mb-6 flex items-center justify-between gap-4">
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Demo</p>
                      <h3 className="mt-3 text-2xl font-semibold text-slate-950">{demo.label}</h3>
                    </div>
                  </div>
                  <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-6">
                    <demo.Demo />
                  </div>
                </article>
              ))}
            </section>
          )}
        </main>
      </div>
    </div>
  );
}

export default App;
