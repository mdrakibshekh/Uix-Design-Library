import React, { useState, useRef, useCallback } from "react";
import { Copy, Moon, Sun, Eye, Code, Search, Menu, ChevronRight, BookOpen, Settings, Rocket, Maximize2, X, Download, Share2, Check, RotateCcw, Star, ShoppingCart } from "lucide-react";
import { GithubLogo } from "./components/base/buttons/social-logos";
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
import { CalendarDemo, DatePickerDemo, DateTimePickerDemo, DateRangePickerDemo, DatePickerCardDemo, DatePickerCustomDemo, DatePickerCompactDemo, DarkModeDemo } from "./components/application/date-picker/date-picker.demo";
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
import { IconsPreview } from "./components/foundations/icons/icons.demo";
import { DocumentationIntroDemo, DocumentationDesignDemo } from "./components/foundations/documentation/documentation.demo";
import { SocialButtonPreview, SocialButtonGroupBrandDemo, SocialButtonGroupColorDemo, SocialButtonGroupGrayDemo, SocialButtonGroupsMD, SocialButtonGroupsLG } from "./components/base/buttons/social-buttons.demo";
import { MobileAppButtonsPreview, MobileAppButtonsBlackDemo, MobileAppButtonsWhiteDemo, MobileAppButtonsGlassDemo, MobileAppButtonsOutlineDemo } from "./components/application/mobile-app-buttons/mobile-app-buttons.demo";
import { CreditCardPreview, CreditCardBrandDemo, CreditCardGradientDemo, CreditCardGlassDemo, CreditCardDarkLightDemo, CreditCardInteractiveDemo } from "./components/application/credit-card/credit-card.demo";
import { BrandedQRCodePreview, BrandedQRCodeBrandDemo, BrandedQRCodeDarkDemo, BrandedQRCodeLightDemo, BrandedQRCodeColorfulDemo, BrandedQRCodeMinimalDemo, BrandedQRCodeClassicDemo, BrandedQRCodeModernDemo, BrandedQRCodeElegantDemo } from "./components/application/qr-code/qr-code.demo";
import { EmptyStateDefaultDemo, EmptyStateCardDemo, EmptyStateMinimalDemo, EmptyStateColorfulDemo } from "./components/application/empty-state/empty-state.demo";
import { ConfirmationModalDemo, FormModalDemo, BottomSheetModalDemo, AlertModalDemo } from "./components/application/modals/modal-variants.demo";
import { AuthPinDemo, AuthTwoFactorDemo, AuthThreeFactorDemo, AuthEmailCodeDemo, AuthSmsCodeDemo, AuthAppCodeDemo } from "./components/application/authentication/authentication.demo";
import { AlertSolidDemo, AlertSoftInfoDemo, AlertOutlineWarningDemo, AlertGhostErrorDemo, AlertBrandLightDemo } from "./components/base/alert/alert.demo";
import { FlagGridDemo, FlagCompactDemo, FlagCountryListDemo } from "./components/base/flag/flag.demo";
import { UtilityButtonsPreview, UtilityButtonsStandardDemo, UtilityButtonsTertiaryDemo, UtilityButtonsXSDemo } from "./components/base/buttons/utility-buttons.demo";
import { TextEditorPreview, TextEditorFullDemo, TextEditorCompactDemo, TextEditorMinimalDemo } from "./components/base/text-editor/text-editor.demo";
import { ColorsDemo as TagsColorsDemo } from "./components/base/tags/tags.demo";
import { MultiSelectChipsDemo } from "./components/base/select/select.demo";
import { ProfileDropdownDemo, MegaMenuDemo, SimpleDropdownDemo, DropdownWithIconsDemo, DropdownWithSelectionDemo, DropdownWithSubmenusDemo, DropdownWithSelectionModesDemo, DropdownWithAvatarsAndDescriptionsDemo } from "./components/base/dropdown/dropdown.demo";
import { UIXLogo } from "./components/foundations/logo/uix-logo";


type VariantItem = {
  id?: string;
  label: string;
  Demo: React.ComponentType<any>;
  variantGroup?: string;
  variantType?: string;
  variantSize?: string;
  variantModifiers?: string[];
  variantTags?: string[];
};

type VariantGroup = {
  groupLabel: string;
  groupType?: 'size' | 'type' | 'modifier' | 'theme' | 'state' | 'custom';
  variants: VariantItem[];
};

type ComponentPage = {
  id: string;
  title: string;
  description: string;
  category: "Foundations" | "Base" | "Application";
  keyFeatures: string[];
  demoBlocks?: VariantItem[];
  variantGroups?: VariantGroup[];
};

const VARIANT_SIZE_KEYWORDS = [
  'xs','sm','md','lg','xl','small','medium','large','compact','full','mini','max','nano','tiny'
];
const VARIANT_TYPE_KEYWORDS = [
  'solid','ghost','outline','brand','dark','light','gradient','soft','default','primary','secondary','tertiary','destructive','minimal','modern','glass','colorful'
];
const VARIANT_MODIFIER_KEYWORDS = [
  'disabled','interactive','minimal','compact','card','icon','icons','avatar','selected','active','rounded','filled','simple','classic','modern','glass','colorful','elegant'
];

const VARIANT_GROUP_TYPE_MAP: Record<string, VariantGroup['groupType']> = {
  Size: 'size',
  Variant: 'type',
  Theme: 'theme',
  State: 'state',
  Modifier: 'modifier',
  Overview: 'custom',
  Default: 'custom'
};

const normalizeLabelToId = (label: string) => label.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');

const inferVariantSize = (label: string) => {
  const lower = label.toLowerCase();
  for (const keyword of VARIANT_SIZE_KEYWORDS) {
    if (lower.includes(keyword)) return keyword;
  }
  return undefined;
};

const inferVariantType = (label: string) => {
  const lower = label.toLowerCase();
  for (const keyword of VARIANT_TYPE_KEYWORDS) {
    if (lower.includes(keyword)) return keyword;
  }
  return undefined;
};

const inferVariantModifiers = (label: string) => {
  const lower = label.toLowerCase();
  return VARIANT_MODIFIER_KEYWORDS.filter(keyword => lower.includes(keyword));
};

const inferVariantGroup = (label: string) => {
  const lower = label.toLowerCase();
  if (lower.includes('size') || lower.includes('sizes')) return 'Size';
  if (lower.includes('variant') || lower.includes('variants')) return 'Variant';
  if (lower.includes('theme') || lower.includes('dark') || lower.includes('light') || lower.includes('colorful')) return 'Theme';
  if (lower.includes('state') || lower.includes('disabled') || lower.includes('active') || lower.includes('selected')) return 'State';
  if (lower.includes('icon') || lower.includes('avatar') || lower.includes('card')) return 'Modifier';
  return 'Overview';
};

const inferVariantAttributes = (label: string) => {
  const variantGroup = inferVariantGroup(label);
  const variantSize = inferVariantSize(label);
  const variantType = inferVariantType(label);
  const variantModifiers = inferVariantModifiers(label).filter((value, index, self) => self.indexOf(value) === index);

  const tags = [variantGroup, variantType, variantSize, ...variantModifiers]
    .filter(Boolean)
    .map(String)
    .filter((value, index, self) => self.indexOf(value) === index);

  return {
    variantGroup,
    variantType,
    variantSize,
    variantModifiers,
    variantTags: tags
  };
};

const getPageVariantGroups = (page: ComponentPage): VariantGroup[] => {
  if (page.variantGroups && page.variantGroups.length > 0) {
    return page.variantGroups.map(group => ({
      ...group,
      variants: group.variants.map(variant => ({
        ...variant,
        id: variant.id || `${page.id}-${normalizeLabelToId(variant.label)}`,
        ...inferVariantAttributes(variant.label),
      }))
    }));
  }

  const rawVariants = page.demoBlocks || [];
  const grouped: Record<string, VariantGroup> = {};

  rawVariants.forEach((item) => {
    const attrs = inferVariantAttributes(item.label);
    const groupLabel = attrs.variantGroup || 'Overview';
    const groupType = VARIANT_GROUP_TYPE_MAP[groupLabel] || 'custom';
    const enrichedItem: VariantItem = {
      ...item,
      id: item.id || `${page.id}-${normalizeLabelToId(item.label)}`,
      variantGroup: item.variantGroup || attrs.variantGroup,
      variantType: item.variantType || attrs.variantType,
      variantSize: item.variantSize || attrs.variantSize,
      variantModifiers: Array.isArray(item.variantModifiers) && item.variantModifiers.length ? item.variantModifiers : attrs.variantModifiers,
      variantTags: Array.isArray(item.variantTags) && item.variantTags.length ? item.variantTags : attrs.variantTags,
    };

    if (!grouped[groupLabel]) {
      grouped[groupLabel] = {
        groupLabel,
        groupType,
        variants: []
      };
    }

    grouped[groupLabel].variants.push(enrichedItem);
  });

  const sortOrder = ['Size', 'Theme', 'Variant', 'State', 'Modifier', 'Overview'];
  return Object.values(grouped).sort((a, b) => sortOrder.indexOf(a.groupLabel) - sortOrder.indexOf(b.groupLabel));
};

const getPageVariants = (page: ComponentPage): VariantItem[] => {
  return getPageVariantGroups(page).flatMap(group => group.variants);
};

const getPagePreviewVariant = (page: ComponentPage) => {
  const pageVariants = getPageVariants(page);
  return pageVariants[0];
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
  authentication: "Authentication",
  flags: "Flag",
  alerts: "Alert",
  modals: "Modal",
};

const DemoCard = ({ demo, pageId, globalTheme, isSelectionMode = false, isSelected = false, onSelect, onPayloadReady }: { demo: VariantItem; pageId: string, globalTheme: "light" | "dark", isSelectionMode?: boolean, isSelected?: boolean, onSelect?: () => void, onPayloadReady?: (key: string, payload: any) => void }) => {
  const [activeTab, setActiveTab] = useState<string>("React");
  const [themeMode, setThemeMode] = useState<"light" | "dark">(globalTheme);
  const [copied, setCopied] = useState(false);

  // Sync theme mode with global theme when it changes
  React.useEffect(() => {
    setThemeMode(globalTheme);
  }, [globalTheme]);

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
  const componentRef = useRef<HTMLDivElement>(null);

  const serializeElement = (element: HTMLElement): any => {
    const styles = window.getComputedStyle(element);
    const rect = element.getBoundingClientRect();
    
    let type = 'FRAME';
    if (element.tagName === 'SPAN' || element.tagName === 'P' || element.tagName === 'DIV' && !element.children.length) {
      type = 'TEXT';
    } else if (element.tagName === 'IMG' || styles.backgroundImage !== 'none') {
      type = 'RECT';
    }

    const layer = {
      type,
      name: element.getAttribute('data-name') || element.innerText || element.tagName.toLowerCase(),
      width: rect.width || element.offsetWidth,
      height: rect.height || element.offsetHeight,
      x: 0, // Relative to container
      y: 0,
      backgroundColor: styles.backgroundColor,
      borderRadius: parseInt(styles.borderRadius) || 0,
      border: {
        width: parseInt(styles.borderWidth) || 0,
        color: styles.borderColor,
        style: styles.borderStyle
      },
      boxShadow: styles.boxShadow !== 'none' ? styles.boxShadow : null,
      layoutMode: styles.display === 'flex' && styles.flexDirection === 'row' ? 'HORIZONTAL' : 'VERTICAL',
      padding: {
        top: parseInt(styles.paddingTop) || 0,
        right: parseInt(styles.paddingRight) || 0,
        bottom: parseInt(styles.paddingBottom) || 0,
        left: parseInt(styles.paddingLeft) || 0
      },
      children: [] as any[],
    };

    Array.from(element.childNodes).forEach(node => {
      if (node.nodeType === Node.TEXT_NODE && node.textContent?.trim()) {
        layer.children.push({
          type: 'TEXT',
          text: node.textContent.trim(),
          fontSize: parseInt(styles.fontSize) || 16,
          color: styles.color,
          fontFamily: styles.fontFamily,
          fontWeight: styles.fontWeight
        });
      } else if (node.nodeType === Node.ELEMENT_NODE) {
        layer.children.push(serializeElement(node as HTMLElement));
      }
    });

    if (layer.children.length === 0 && (type === 'TEXT' || element.innerText)) {
      layer.children.push({
        type: 'TEXT',
        text: element.innerText || '',
        fontSize: parseInt(styles.fontSize) || 16,
        color: styles.color,
        fontFamily: styles.fontFamily,
        fontWeight: styles.fontWeight
      });
    }

    return layer;
  };

  const serializeToFigma = (el: HTMLElement) => {
    if (!el) return null;
    return serializeElement(el);
  };

  const buildPayload = (d: VariantItem) => {
    const root = componentRef.current;
    const figmaLayers = root ? serializeToFigma(root) : null;
    const rootStyles = root ? window.getComputedStyle(root) : null;
    const firstTextChild = figmaLayers?.children?.find((child: any) => child.type === 'TEXT');
    const labelText = firstTextChild?.text || d.label;
    const labelColor = firstTextChild?.color || rootStyles?.color || (themeMode === 'dark' ? '#ffffff' : '#000000');
    const backgroundColor = figmaLayers?.backgroundColor || rootStyles?.backgroundColor || (themeMode === 'dark' ? '#0f172a' : '#ffffff');
    const width = root?.offsetWidth || 0;
    const height = root?.offsetHeight || 0;
    const variantMeta = inferVariantAttributes(d.label);
    const variantId = d.id || `${pageId}|${normalizeLabelToId(d.label)}`;

    return {
      source: 'UIX_DESIGN_LIBRARY',
      version: '1.0',
      component: pageId,
      componentId: pageId,
      componentName,
      variant: d.label,
      variantId,
      variantGroup: d.variantGroup || variantMeta.variantGroup,
      variantType: d.variantType || variantMeta.variantType,
      variantSize: d.variantSize || variantMeta.variantSize,
      variantModifiers: Array.isArray(d.variantModifiers) ? d.variantModifiers : variantMeta.variantModifiers,
      variantTags: Array.isArray(d.variantTags) ? d.variantTags : variantMeta.variantTags,
      labelText,
      labelColor,
      backgroundColor,
      theme: themeMode,
      timestamp: Date.now(),
      previewUrl: `${window.location.origin}/?preview=true&component=${pageId}&variant=${encodeURIComponent(d.label)}&theme=${themeMode}`,
      figmaLayers,
      visualPreview: {
        label: d.label,
        text: labelText,
        color: backgroundColor,
        textColor: labelColor,
        width,
        height
      }
    };
  };

  React.useEffect(() => {
    if (!componentRef.current) return;
    const key = `${pageId}|${demo.id || demo.label}`;
    onPayloadReady?.(key, buildPayload(demo));
  }, [pageId, demo.id, demo.label, themeMode, onPayloadReady]);

  const handleCopyToFigma = async () => {
    try {
      const payload = buildPayload(demo);
      await navigator.clipboard.writeText(JSON.stringify(payload));
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <article className="overflow-hidden rounded-[2.5rem] border border-slate-200 dark:border-white/5 bg-white dark:bg-slate-900/40 dark:backdrop-blur-xl shadow-sm transition-all hover:shadow-2xl hover:shadow-brand-500/10 group">
      <div className="flex items-center justify-between border-b border-slate-100 dark:border-white/5 bg-slate-50/50 dark:bg-white/5 px-8 py-5">
        <div className="flex items-center gap-3">
          {isSelectionMode && (
            <input
              type="checkbox"
              checked={isSelected}
              onChange={onSelect}
              className="size-4 rounded border-slate-300 dark:border-white/10 text-brand-600 focus:ring-brand-500"
            />
          )}
          <div className="size-2 rounded-full bg-brand-500 animate-pulse shadow-[0_0_10px_rgba(108,43,217,0.5)]" />
          <h3 className="text-[14px] font-bold text-slate-900 dark:text-white uppercase tracking-wider">{demo.label}</h3>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={handleCopyToFigma}
            className={`flex items-center gap-2.5 h-10 px-5 rounded-2xl text-[14px] font-bold transition-all duration-300 border ${copied ? 'bg-green-50 dark:bg-green-500/10 border-green-200 dark:border-green-500/20 text-green-600 dark:text-green-400' : 'bg-brand-50 dark:bg-brand-500/10 border-brand-200 dark:border-brand-500/20 text-brand-700 dark:text-brand-400 hover:bg-brand-100 dark:hover:bg-brand-500/20 hover:scale-[1.02] hover:shadow-sm hover:shadow-brand-500/10'}`}
          >
            <svg viewBox="0 0 38 57" fill="none" xmlns="http://www.w3.org/2000/svg" className="size-3.5">
              <path d="M19 28.5C19 25.9834 20.0009 23.5698 21.7825 21.7883C23.5641 20.0067 25.9804 19.0057 28.5 19.0057C31.0196 19.0057 33.4359 20.0067 35.2175 21.7883C36.9991 23.5698 38 25.9834 38 28.5C38 31.0166 36.9991 33.4302 35.2175 35.2117C33.4359 36.9933 31.0196 37.9943 28.5 37.9943C25.9804 37.9943 23.5641 36.9933 21.7825 35.2117C20.0009 33.4302 19 31.0166 19 28.5Z" fill="#1ABCFE"/>
              <path d="M0 47.4943C0 44.9777 1.00089 42.5641 2.78249 40.7825C4.56408 39.0009 6.98044 38 9.5 38H19V47.4943C19 50.0109 17.9991 52.4244 16.2175 54.206C14.4359 55.9876 12.0196 56.9885 9.5 56.9885C6.98044 56.9885 4.56408 55.9876 2.78249 54.206C1.00089 52.4244 0 50.0109 0 47.4943Z" fill="#0ACF83"/>
              <path d="M0 28.5C0 25.9834 1.00089 23.5698 2.78249 21.7883C4.56408 20.0067 6.98044 19.0057 9.5 19.0057H19V37.9943H9.5C6.98044 37.9943 4.56408 36.9933 2.78249 35.2117C1.00089 33.4302 0 31.0166 0 28.5Z" fill="#A259FF"/>
              <path d="M0 9.50568C0 6.9891 1.00089 4.57551 2.78249 2.79391C4.56408 1.01232 6.98044 0.011364 9.5 0.011364H19V19.0057H9.5C6.98044 19.0057 4.56408 18.0047 2.78249 16.2231C1.00089 14.4416 0 12.028 0 9.50568Z" fill="#F24E1E"/>
              <path d="M19 0.011364H28.5C31.0196 0.011364 33.4359 1.01232 35.2175 2.79391C36.9991 4.57551 38 6.9891 38 9.50568C38 12.0223 36.9991 14.4358 35.2175 16.2174C33.4359 17.999 31.0196 19 28.5 19H19V0.011364Z" fill="#FF7262"/>
            </svg>
            {copied ? 'COPIED!' : 'FIGMA'}
          </button>

          <div className="h-6 w-px bg-slate-200 dark:bg-white/10" />

          <button
            onClick={() => setThemeMode(themeMode === "light" ? "dark" : "light")}
            className="flex size-10 items-center justify-center rounded-2xl text-slate-400 hover:bg-white dark:hover:bg-white/10 hover:text-slate-900 dark:hover:text-white border border-transparent hover:border-slate-100 dark:hover:border-white/10 transition-all duration-300"
            title="Toggle preview theme"
          >
            {themeMode === "light" ? <Moon className="size-4.5" /> : <Sun className="size-4.5" />}
          </button>
        </div>
      </div>

      <div className={`relative min-h-[360px] transition-all duration-700 ${themeMode === "dark" ? "bg-slate-950/50" : "bg-white"}`}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-from)_0%,_transparent_70%)] from-brand-500/5 opacity-0 dark:opacity-100" />
        <div className="flex min-h-[360px] items-center justify-center p-16 relative">
          <div ref={componentRef} className={`${themeMode === "dark" ? "dark" : "light"} w-full flex justify-center font-inter`}>
            <demo.Demo themeMode={themeMode} />
          </div>
        </div>
      </div>

      {/* Code & Framework Selection Footer */}
      <div className="border-t border-slate-100 dark:border-white/5 p-6 bg-slate-50/50 dark:bg-white/5 backdrop-blur-md">
        <div className="flex items-center justify-between gap-6">
          <div className="flex items-center gap-1.5 p-1.5 bg-slate-200/50 dark:bg-white/5 rounded-2xl border border-slate-200/50 dark:border-white/5 overflow-x-auto scrollbar-hide">
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
      { label: "With avatars", Demo: DropdownWithAvatarsAndDescriptionsDemo },
      { label: "Submenus", Demo: DropdownWithSubmenusDemo },
      { label: "Selection modes", Demo: DropdownWithSelectionModesDemo },
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
    id: "flags",
    title: "Flags",
    category: "Base",
    description: "Country flags for global profiles, selectors, and locale-aware UI flows.",
    keyFeatures: ["Full country coverage", "Compact flag badges", "Phone code support"],
    demoBlocks: [
      { label: "Flag grid", Demo: FlagGridDemo },
      { label: "Compact flags", Demo: FlagCompactDemo },
      { label: "Country list", Demo: FlagCountryListDemo },
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
    id: "alerts",
    title: "Alerts",
    category: "Base",
    description: "Status and notification banners for success, warning, error, and informational UI feedback.",
    keyFeatures: ["Solid / Soft / Outline / Ghost", "Semantic tones", "Action button support"],
    demoBlocks: [
      { label: "Solid alert", Demo: AlertSolidDemo },
      { label: "Soft info alert", Demo: AlertSoftInfoDemo },
      { label: "Outline warning alert", Demo: AlertOutlineWarningDemo },
      { label: "Ghost error alert", Demo: AlertGhostErrorDemo },
      { label: "Brand info alert", Demo: AlertBrandLightDemo },
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
      { label: "Date picker", Demo: DatePickerDemo },
      { label: "Date time picker", Demo: DateTimePickerDemo },
      { label: "Date range picker", Demo: DateRangePickerDemo },
      { label: "Card variant", Demo: DatePickerCardDemo },
      { label: "Custom actions", Demo: DatePickerCustomDemo },
      { label: "Minimal variants", Demo: DatePickerCompactDemo },
      { label: "Dark/Light mode preview", Demo: DarkModeDemo },
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
  const urlParams = new URLSearchParams(window.location.search);
  const isPreviewMode = urlParams.get('preview') === 'true';
  const previewComponentId = urlParams.get('component');
  const previewVariant = urlParams.get('variant');
  const isAutomationMode = urlParams.get('automation') === 'true';

  // Simple routing state
  const [currentRoute, setCurrentRoute] = useState(() => {
    const path = window.location.pathname;
    if (path.startsWith('/')) {
      return path.substring(6); // Remove '/page/' prefix
    }
    return null;
  });

  // Handle browser back/forward navigation
  React.useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;
      if (path.startsWith('/')) {
        setCurrentRoute(path.substring(6));
      } else {
        setCurrentRoute(null);
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Navigation function
  const navigateTo = (route: string | null) => {
    if (route) {
      const newPath = `/${route}`;
      window.history.pushState(null, '', newPath);
      setCurrentRoute(route);
    } else {
      window.history.pushState(null, '', '/');
      setCurrentRoute(null);
    }
  };

  // Calculate total variants for the sync engine
  if (typeof window !== 'undefined' && isAutomationMode) {
    const total = componentPages.reduce((acc, p) => acc + getPageVariants(p).length, 0);
    (window as any).__UIX_TOTAL_VARIANTS__ = total;
  }

  const [globalTheme, setGlobalTheme] = useState<"light" | "dark">(() => {
    if (typeof window !== "undefined") {
      return (localStorage.getItem("uix-theme") as "light" | "dark") || "light";
    }
    return "light";
  });
  const componentRef = useRef<HTMLDivElement>(null);

  if (isPreviewMode) {
    const component = componentPages.find(p => p.id === previewComponentId);
    const demo = component ? getPageVariants(component).find(d => d.label === previewVariant || d.id === previewVariant) : undefined;
    
    if (!demo) return <div className="p-10 text-slate-400">Preview not found...</div>;

    return (
      <div className={`${globalTheme === 'dark' ? 'dark bg-slate-900' : 'bg-white'} min-h-screen flex items-center justify-center p-8`}>
        <div ref={componentRef} className="p-12 flex items-center justify-center bg-slate-50 dark:bg-slate-900/50">
          <React.Suspense fallback={<div className="animate-pulse bg-slate-200 dark:bg-white/5 rounded-xl h-40 w-full" />}>
            {React.createElement(demo.Demo)}
          </React.Suspense>
        </div>
      </div>
    );
  }

  const [selectedPage, setSelectedPage] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [starCount, setStarCount] = useState<string>("...");

  // Selection mode for Figma import
  const [isSelectionMode, setIsSelectionMode] = useState(false);
  const [selectedDemos, setSelectedDemos] = useState<Set<string>>(new Set());
  const [demoPayloads, setDemoPayloads] = useState<Record<string, any>>({});
  const automationDataRef = useRef<Record<string, any>>({});

  const handlePayloadReady = useCallback((key: string, payload: any) => {
    // SYNC FAST-LANE: Update ref immediately for the crawler
    automationDataRef.current[key] = payload;
    
    if (typeof window !== 'undefined' && isAutomationMode) {
      const allPayloads = Object.values(automationDataRef.current);
      const grouped: Record<string, any> = {};
      
      allPayloads.forEach((item: any) => {
        const page = componentPages.find(cp => cp.id === item.component);
        const compId = page?.id || item.componentId || item.component?.toLowerCase().replace(/\s+/g, '-') || 'other';
        const compName = page?.title || item.componentName || item.component || 'Other';
        const compCategory = page?.category || 'Base';
        const compDescription = page?.description || '';

        if (!grouped[compId]) {
          grouped[compId] = {
            id: compId,
            name: compName,
            category: compCategory,
            description: compDescription,
            variants: []
          };
        }

        grouped[compId].variants.push({
          id: item.variantId || `${compId}-${normalizeLabelToId(item.variant)}`,
          name: item.variant,
          properties: {
            variantId: item.variantId,
            variantGroup: item.variantGroup,
            variantType: item.variantType,
            variantSize: item.variantSize,
            variantModifiers: item.variantModifiers,
            variantTags: item.variantTags,
            theme: item.theme,
            componentName: item.componentName,
            componentId: item.componentId,
          },
          figmaLayers: item.figmaLayers,
          preview: item.visualPreview,
          source: item.source,
        });
      });
      
      (window as any).__UIX_LIBRARY_DATA__ = Object.values(grouped);
      (window as any).__UIX_CURRENT_COUNT__ = allPayloads.length;
    }

    // React state for the UI
    setDemoPayloads(prev => ({ ...prev, [key]: payload }));
  }, [isAutomationMode]);

  // Fetch GitHub Stars
  React.useEffect(() => {
    fetch("https://api.github.com/repos/mdrakibshekh/Uix-Design-Library")
      .then(res => {
        if (!res.ok) throw new Error('Repo not found');
        return res.json();
      })
      .then(data => {
        if (data.stargazers_count) {
          const count = data.stargazers_count;
          setStarCount(count >= 1000 ? (count / 1000).toFixed(1) + "k" : count.toString());
        }
      })
      .catch(() => setStarCount("1.2k")); // Fallback
  }, []);

  const categories = ["Foundations", "Base", "Application"];

  // Apply theme to document root for truly global effect
  React.useEffect(() => {
    const root = window.document.documentElement;
    if (globalTheme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("uix-theme", globalTheme);
  }, [globalTheme]);

  const activePage = componentPages.find((page) => page.id === currentRoute) || null;

  const filteredPages = componentPages.filter(page =>
    page.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    page.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const selectedComponentCount = new Set(Array.from(selectedDemos).map((key) => key.split('|')[0])).size;

  const copySelectedVariants = async () => {
    const payloads = Array.from(selectedDemos)
      .map((key) => demoPayloads[key])
      .filter(Boolean);

    if (!payloads.length) {
      alert('Selected variants are not ready yet. Please wait a moment and try again.');
      return;
    }

    await navigator.clipboard.writeText(JSON.stringify(payloads, null, 2));
    alert(`Copied ${payloads.length} selected variant${payloads.length === 1 ? '' : 's'} from ${selectedComponentCount} component${selectedComponentCount === 1 ? '' : 's'} to clipboard.`);
    setSelectedDemos(new Set());
    setIsSelectionMode(false);
  };

  const syncLibraryToCloud = async () => {
    try {
      // 1. Collect ALL payloads from all pages
      // This is a bit complex because payloads are generated in DemoCard useEffect
      // So we'll only sync what has been rendered or we'll trigger a full pass.
      
      const payloads = Object.values(demoPayloads);
      if (payloads.length === 0) {
        alert("No components rendered yet. Please browse through categories to generate payloads.");
        return;
      }

      // 2. Group by component
      const componentsMap: Record<string, any> = {};
      payloads.forEach((p: any) => {
        if (!componentsMap[p.component]) {
          const page = componentPages.find(cp => cp.id === p.component);
          componentsMap[p.component] = {
            id: p.component,
            name: page?.title || p.component,
            category: page?.category.toLowerCase() || 'base',
            description: page?.description || '',
            variants: []
          };
        }
        componentsMap[p.component].variants.push({
          id: p.variantId || `${p.component}-${p.variant.toLowerCase().replace(/\s+/g, '-')}`,
          name: p.variant,
          properties: {
            variantId: p.variantId,
            variantGroup: p.variantGroup,
            variantType: p.variantType,
            variantSize: p.variantSize,
            variantModifiers: p.variantModifiers,
            variantTags: p.variantTags,
            theme: p.theme,
          },
          figmaLayers: p.figmaLayers
        });
      });

      const libraryData = Object.values(componentsMap);

      // 3. Send to Backend
      const response = await fetch('https://uix.sigmastudioo.com/api/library/publish', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          success: true, 
          data: libraryData,
          updatedAt: new Date().toISOString()
        })
      });

      if (response.ok) {
        alert("Library successfully published to Cloud!");
      } else {
        throw new Error("Failed to publish");
      }
    } catch (err) {
      console.error(err);
      alert("Publishing failed. Check console for details.");
    }
  };

  const copyActivePageVariants = async () => {
    if (!activePage) return;

    const pageVariants = getPageVariants(activePage);
    const payloads = pageVariants
      .map((demo) => demoPayloads[`${activePage.id}|${demo.id || demo.label}`])
      .filter(Boolean);

    if (!payloads.length) {
      alert('No variant payloads are ready yet. Please wait for the preview cards to finish rendering.');
      return;
    }

    const missing = pageVariants.length - payloads.length;
    await navigator.clipboard.writeText(JSON.stringify(payloads, null, 2));
    alert(`Copied ${payloads.length}${missing > 0 ? ` of ${pageVariants.length}` : ''} variants. Paste in Figma plugin.`);
  };

  return (
    <div className={`flex h-screen overflow-hidden transition-all duration-500 ${globalTheme === "dark" ? "dark bg-slate-950 text-slate-100" : "bg-slate-50 text-slate-900"}`}>
      {/* Sidebar */}
      <aside className="w-64 border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex flex-col shrink-0 transition-colors duration-300">
        <div className="p-6 border-b border-slate-100 dark:border-slate-800">
          <div className="flex items-center">
            <img
              src={globalTheme === "dark" ? "/Logos/Main logo dark mode.svg" : "/Logos/Main logo transparent.svg"}
              className="h-8"
              alt="UIX Design Library"
              onError={(e) => {
                (e.target as HTMLImageElement).src = "/Logos/Main logo transparent.svg";
              }}
            />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-4">
          <button
            onClick={() => navigateTo(null)}
            className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm font-bold transition ${!currentRoute ? "bg-brand-50 dark:bg-brand-900/20 text-brand-700 dark:text-brand-400" : "text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white"}`}
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
                    onClick={() => navigateTo(page.id)}
                    className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm font-bold transition ${currentRoute === page.id ? "bg-brand-50 dark:bg-brand-900/20 text-brand-700 dark:text-brand-400" : "text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white"}`}
                  >
                    {page.title}
                    {currentRoute === page.id && <ChevronRight className="size-3" />}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 h-full min-h-0 overflow-y-auto scroll-smooth bg-slate-50 dark:bg-slate-950 transition-colors duration-500">
        <header className={`h-20 border-b sticky top-0 z-20 px-10 flex items-center justify-between transition-all duration-500 ${globalTheme === "dark" ? "bg-slate-950/70 border-white/5 text-white" : "bg-white/80 border-slate-200 text-slate-900"} backdrop-blur-2xl`}>
          <div className="relative w-[400px] group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-4 text-slate-400 group-focus-within:text-brand-500 transition-colors" />
            <input
              type="text"
              placeholder="Search components, foundations..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-6 py-3 bg-slate-100 dark:bg-white/5 border border-transparent dark:border-white/5 rounded-2xl text-sm font-medium focus:outline-none focus:ring-4 focus:ring-brand-500/10 focus:border-brand-500/50 transition-all dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-600"
            />
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-1 p-1 bg-slate-100 dark:bg-white/5 rounded-2xl border border-slate-200/50 dark:border-white/5">
              <a
                href="https://github.com/mdrakibshekh/Uix-Design-Library"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-2 py-1.5 text-slate-500 dark:text-slate-400 hover:bg-white dark:hover:bg-white/10 rounded-xl transition-all group"
              >
                <GithubLogo className="size-5 group-hover:text-slate-900 dark:group-hover:text-white transition-colors" />
                <div className="flex items-center gap-1.5 px-2 py-0.5 bg-slate-200/50 dark:bg-white/5 rounded-lg text-[10px] font-bold border border-slate-200 dark:border-white/5">
                  <Star className="size-3 text-amber-400 fill-amber-400" />
                  {starCount}
                </div>
              </a>
              <div className="w-px h-4 bg-slate-200 dark:bg-white/10 mx-1" />
              <button
                onClick={() => setGlobalTheme(globalTheme === "light" ? "dark" : "light")}
                className="p-2 text-slate-500 dark:text-slate-400 hover:bg-white dark:hover:bg-white/10 rounded-xl transition-all relative overflow-hidden group/theme"
                title="Toggle global theme"
              >
                <div className="relative size-4">
                  <Sun className={`size-4 absolute inset-0 transition-all duration-500 ${globalTheme === "dark" ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-0 opacity-0"}`} />
                  <Moon className={`size-4 absolute inset-0 transition-all duration-500 ${globalTheme === "light" ? "rotate-0 scale-100 opacity-100" : "rotate-90 scale-0 opacity-0"}`} />
                </div>
              </button>
              <div className="w-px h-4 bg-slate-200 dark:bg-white/10 mx-1" />
            </div>

          

            <button className="flex items-center gap-2.5 px-6 py-3 bg-brand-gradient hover:bg-brand-gradient-hover text-white rounded-2xl text-sm font-bold leading-none shadow-2xl shadow-indigo-950/60 transition-all active:scale-95 group overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 -translate-x-full group-hover:animate-shimmer" />
              <ShoppingCart className="size-5 group-hover:rotate-12 transition-transform" />
              <span>Buy Library</span>
            </button>
          </div>
        </header>

        <div className="p-10">

          {!activePage ? (
            <div className="max-w-8xl mx-auto">
              <div className="mb-12">
                <h1 className="text-5xl font-bold text-slate-900 dark:text-white tracking-tight mb-4">Component Library</h1>
                <p className="text-lg text-slate-500 dark:text-slate-400 max-w-3xl leading-relaxed font-medium">
                  Professional-grade React components for building high-performance SaaS applications. Fully customizable, accessible, and ready for production.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {filteredPages.filter(p => p.id !== 'documentation').map(page => (
                  <div
                    key={page.id}
                    onClick={() => navigateTo(page.id)}
                    onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && navigateTo(page.id)}
                    role="button"
                    tabIndex={0}
                    className="group cursor-pointer text-left border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 rounded-[1.3rem] p-3 hover:border-brand-400 dark:hover:border-brand-500 hover:shadow-2xl hover:shadow-brand-500/10 transition-all duration-300 outline-none focus:ring-2 focus:ring-brand-500/20"
                  >
                    <div className="aspect-[1.4] bg-slate-50 dark:bg-slate-800/50 rounded-[1rem] mb-5 border border-slate-100 dark:border-slate-800 flex items-center justify-center p-8 overflow-hidden group-hover:bg-slate-100 dark:group-hover:bg-slate-800 transition-colors relative">
                      <div className="scale-[0.85] group-hover:scale-100 transition-transform duration-700 ease-out w-full flex justify-center">
                        {getPagePreviewVariant(page) && React.createElement(getPagePreviewVariant(page)!.Demo, { isCompact: true })}
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
                <button onClick={() => navigateTo(null)} className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors">Components</button>
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
                <h1 className="text-6xl font-bold text-slate-900 dark:text-white tracking-tighter mb-4">{activePage.title}</h1>
                <p className="text-xl text-slate-500 dark:text-slate-400 max-w-3xl leading-relaxed font-medium">{activePage.description}</p>
              </div>

              <div className="space-y-12">
                {activePage.id === "documentation" ? (
                  <div className="space-y-8">
                    {activePage.demoBlocks?.map(demo => (
                      <div key={demo.label} className="font-inter">
                        <demo.Demo themeMode={globalTheme} />
                      </div>
                    ))}
                  </div>
                ) : activePage.id === "icons" ? (
                  <div className="space-y-8">
                    {activePage.demoBlocks?.map(demo => (
                      <div key={demo.label} className="font-inter">
                        <demo.Demo themeMode={globalTheme} />
                      </div>
                    ))}
                  </div>
                ) : (
                  <section>
                    <div className="flex items-center gap-2 mb-4">
                      <Eye className="size-5 text-brand-600 dark:text-brand-400" />
                      <h2 className="text-xl font-bold text-slate-900 dark:text-white">Interactive Demos</h2>
                    </div>
                    <div className="space-y-10">
                      {getPageVariantGroups(activePage).map((group) => (
                        <div key={group.groupLabel} className="space-y-6">
                          {group.groupLabel !== 'All Variants' && (
                            <div className="flex items-center justify-between gap-4 bg-slate-50 dark:bg-white/5 rounded-3xl border border-slate-200 dark:border-white/5 p-4">
                              <div>
                                <p className="text-sm font-semibold text-slate-900 dark:text-white">{group.groupLabel}</p>
                                <p className="text-xs text-slate-500 dark:text-slate-400">{group.variants.length} variant{group.variants.length === 1 ? '' : 's'}</p>
                              </div>
                              <span className="text-[10px] font-bold uppercase tracking-widest text-brand-600 dark:text-brand-400">{group.groupType || 'Custom'}</span>
                            </div>
                          )}
                          <div className="grid gap-8">
                            {group.variants.map(demo => {
                              const demoKey = `${activePage.id}|${demo.id || demo.label}`;
                              return (
                                <DemoCard
                                  key={demoKey}
                                  demo={demo}
                                  pageId={activePage.id}
                                  globalTheme={globalTheme}
                                  isSelectionMode={isSelectionMode}
                                  isSelected={selectedDemos.has(demoKey)}
                                  onSelect={() => {
                                    const newSelected = new Set(selectedDemos);
                                    if (newSelected.has(demoKey)) {
                                      newSelected.delete(demoKey);
                                    } else {
                                      newSelected.add(demoKey);
                                    }
                                    setSelectedDemos(newSelected);
                                  }}
                                  onPayloadReady={handlePayloadReady}
                                />
                              );
                            })}
                          </div>
                        </div>
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

      {/* Hidden Automation Renderer: Silently renders all components for the sync script */}
      {isAutomationMode && (
        <div className="fixed inset-0 z-[-1] opacity-0 pointer-events-none overflow-hidden h-[10000px] w-[1920px] bg-white">
          {componentPages.map(page => (
            <div key={page.id}>
              {getPageVariants(page).map(demo => (
                <DemoCard
                  key={`${page.id}-${demo.id || demo.label}`}
                  demo={demo}
                  pageId={page.id}
                  globalTheme="light"
                  onPayloadReady={handlePayloadReady}
                />
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;

