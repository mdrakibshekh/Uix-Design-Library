# Component Mapping Inventory

This file maps the UIX React component library to the Figma design system structure. Each React component has a corresponding Figma component variant path.

## Base Components

### Buttons
- **React Export**: `Button` from `components/base/buttons/button.tsx`
- **Figma Path**: `Buttons / Style / Size`
- **Variants**: Primary, Secondary, Tertiary, Destructive (sizes: xs, sm, md, lg, xl)
- **Demo Blocks**: Variants, Sizes, Icons, States
- **Payload IDs**:
  - `buttons|brand-small`
  - `buttons|secondary-medium`
  - `buttons|destructive-large`

### Input
- **React Export**: `Input` from `components/base/input/input.tsx`
- **Figma Path**: `Inputs / Style / State / Size`
- **Variants**: Default, Invalid, Disabled (sizes: sm, md, lg)
- **Demo Blocks**: DefaultDemo, DisabledDemo, InvalidDemo
- **Payload IDs**:
  - `inputs|default-small`
  - `inputs|invalid-medium`

### Select
- **React Export**: `Select` from `components/base/select/select.tsx`
- **Figma Path**: `Select / Type / Size`
- **Variants**: Single, Multi, ComboBox (sizes: sm, md, lg)
- **Demo Blocks**: DefaultDemo, DisabledDemo, SizesDemo
- **Payload IDs**:
  - `selects|default-small`
  - `selects|multi-select-large`

### Checkbox
- **React Export**: `Checkbox` from `components/base/checkbox/checkbox.tsx`
- **Figma Path**: `Checkboxes / State / Size`
- **Variants**: Default, Indeterminate, Checked (sizes: sm, md)
- **Demo Blocks**: DefaultDemo, SizesDemo, CheckboxListDemo
- **Payload IDs**:
  - `checkboxes|default-small`
  - `checkboxes|indeterminate-medium`

### Radio Button
- **React Export**: `RadioButton` from `components/base/radio-buttons/radio-button.tsx`
- **Figma Path**: `Radio Buttons / State / Size`
- **Variants**: Default, Selected (sizes: sm, md)
- **Demo Blocks**: WithLabelDemo, WithLabelAndHintDemo, DisabledDemo
- **Payload IDs**:
  - `radio-buttons|default-small`
  - `radio-buttons|selected-medium`

### Toggle
- **React Export**: `Toggle` from `components/base/toggle/toggle.tsx`
- **Figma Path**: `Toggle / State / Size`
- **Variants**: Off, On (sizes: sm, md)
- **Demo Blocks**: DefaultDemo, WithLabelAndHintDemo, DisabledDemo, SizesDemo
- **Payload IDs**:
  - `toggles|off-small`
  - `toggles|on-medium`

### Avatar
- **React Export**: `Avatar` from `components/base/avatar/avatar.tsx`
- **Figma Path**: `Avatar / Type / Size / Status`
- **Variants**: Image, Initials, Icon (sizes: xs, sm, md, lg, xl, 2xl; status: online, offline)
- **Demo Blocks**: DefaultDemo, VerifiedDemo, GroupDemo
- **Payload IDs**:
  - `avatars|image-small-online`
  - `avatars|initials-large-offline`

### Badge
- **React Export**: `Badge` from `components/base/badges/badges.tsx`
- **Figma Path**: `Badge / Type / Color / Size`
- **Variants**: Default, WithDot, WithIcon (colors: brand, gray, success, error, warning; sizes: sm, md, lg)
- **Demo Blocks**: DefaultDemo, PillColorDemo, ColorDemo, WithDotDemo, WithIconDemo
- **Payload IDs**:
  - `badges|default-brand-small`
  - `badges|with-dot-success-medium`

### Tag
- **React Export**: `Tag` from `components/base/tags/tags.tsx`
- **Figma Path**: `Tags / Type / Color / Size`
- **Variants**: Default, WithClose, WithCheckbox (colors: brand, gray; sizes: sm, md)
- **Demo Blocks**: DefaultDemo, CloseXDemo, SizesDemo, CheckboxDemo, CountDemo
- **Payload IDs**:
  - `tags|default-brand-small`
  - `tags|with-close-gray-medium`

### Button Group
- **React Export**: `ButtonGroup` from `components/base/button-group/button-group.tsx`
- **Figma Path**: `Button Group / Type / Count`
- **Variants**: Single, Dual, Multiple
- **Demo Blocks**: LeadingIconDemo, DotDemo, DisabledIndividualDemo, SelectedDemo, MultipleDemo
- **Payload IDs**:
  - `button-groups|single-item`
  - `button-groups|multiple-items`

### Slider
- **React Export**: `Slider` from `components/base/slider/slider.tsx`
- **Figma Path**: `Slider / State / Label`
- **Variants**: Default, WithLabel, Floating
- **Demo Blocks**: DefaultDemo, BottomLabelDemo, TopFloatingDemo, SingleThumbDemo
- **Payload IDs**:
  - `sliders|default`
  - `sliders|with-label-floating`

### Tooltip
- **React Export**: `Tooltip` from `components/base/tooltip/tooltip.tsx`
- **Figma Path**: `Tooltip / Content Type`
- **Variants**: Simple, WithArrow, WithSupportingText
- **Demo Blocks**: DefaultDemo, WithArrowDemo, WithSupportingTextDemo
- **Payload IDs**:
  - `tooltips|simple`
  - `tooltips|with-arrow`

### Progress Indicator
- **React Export**: `ProgressBar`, `CircleProgress` from `components/base/progress-indicators/`
- **Figma Path**: `Progress / Type / State`
- **Variants**: Linear, Circular (with/without labels)
- **Demo Blocks**: ProgressBarDefault, ProgressBarTextRight, CircleProgressBar, CircleProgressBarLabel
- **Payload IDs**:
  - `progress-indicators|linear-default`
  - `progress-indicators|circular-with-label`

### Textarea
- **React Export**: `Textarea` from `components/base/textarea/textarea.tsx`
- **Figma Path**: `Textarea / State`
- **Variants**: Default, Invalid, Disabled
- **Demo Blocks**: DefaultDemo, DisabledDemo, InvalidDemo
- **Payload IDs**:
  - `textareas|default`
  - `textareas|invalid`

### Alert
- **React Export**: `Alert` from `components/base/alert/alert.tsx`
- **Figma Path**: `Alert / Type / Severity`
- **Variants**: Solid, Soft, Outline, Ghost (severity: info, warning, error, success)
- **Demo Blocks**: SolidDemo, SoftInfoDemo, OutlineWarningDemo, GhostErrorDemo, BrandLightDemo
- **Payload IDs**:
  - `alerts|solid-info`
  - `alerts|ghost-error`

### Dropdown
- **React Export**: `Dropdown` from `components/base/dropdown/dropdown.tsx`
- **Figma Path**: `Dropdown / Type`
- **Variants**: Standard, WithIcons, WithSelection, WithSubmenus
- **Demo Blocks**: SimpleDropdownDemo, DropdownWithIconsDemo, DropdownWithSelectionDemo, DropdownWithSubmenusDemo
- **Payload IDs**:
  - `dropdowns|standard`
  - `dropdowns|with-submenus`

### Flag
- **React Export**: `Flag` from `components/base/flag/flag.tsx`
- **Figma Path**: `Flag / Size`
- **Variants**: Grid, Compact, CountryList
- **Demo Blocks**: FlagGridDemo, FlagCompactDemo, FlagCountryListDemo
- **Payload IDs**:
  - `flags|grid`
  - `flags|compact`

---

## Application Components

### Date Picker
- **React Export**: `DatePicker` from `components/application/date-picker/date-picker.tsx`
- **Figma Path**: `Date Picker / Type`
- **Variants**: Calendar, DatePicker, DateTimePicker, DateRangePicker, Card, Compact, DarkMode
- **Demo Blocks**: CalendarDemo, DatePickerDemo, DateTimePickerDemo, DateRangePickerDemo, DatePickerCardDemo, DatePickerCustomDemo, DatePickerCompactDemo, DarkModeDemo
- **Payload IDs**:
  - `date-pickers|calendar`
  - `date-pickers|date-time-picker`

### Tabs
- **React Export**: `Tabs` from `components/application/tabs/tabs.tsx`
- **Figma Path**: `Tabs / Style`
- **Variants**: ButtonBrandHorizontal, ButtonBrandVertical, ButtonGrayHorizontal
- **Demo Blocks**: ButtonBrandHorizontalDemo, ButtonBrandVerticalDemo, ButtonGrayHorizontalDemo
- **Payload IDs**:
  - `tabs|button-brand-horizontal`
  - `tabs|button-gray-horizontal`

### Pagination
- **React Export**: `Pagination` from `components/application/pagination/pagination.tsx`
- **Figma Path**: `Pagination / Type`
- **Variants**: PageDefault, PageMinimalCenter, CardDefault, CardMinimalCenterAligned
- **Demo Blocks**: PaginationPageDefault, PaginationPageMinimalCenter, PaginationCardDefault, PaginationCardMinimalCenterAligned
- **Payload IDs**:
  - `pagination|page-default`
  - `pagination|card-minimal-center`

### Table
- **React Export**: `Table` from `components/application/table/table.tsx`
- **Figma Path**: `Table / Type / Features`
- **Variants**: DividerLine, AlternatingFills, Compact, Modern
- **Demo Blocks**: Table01DividerLine, Table01AlternatingFills, Table02DividerLine, Table03DividerLine, Table04DividerLine, Table05ProjectManagement, TablePreview
- **Payload IDs**:
  - `tables|divider-line-simple`
  - `tables|alternating-fills-with-sorting`

### File Upload
- **React Export**: `FileUpload` from `components/application/file-upload/file-upload.tsx`
- **Figma Path**: `File Upload / Type`
- **Variants**: ImagesOnly, MaxSizeLimit, Compact, Modern, Minimal, Image
- **Demo Blocks**: ImagesOnlyDemo, MaxSizeLimitDemo, CompactVariantDemo, ModernVariantDemo, MinimalVariantDemo, ImageVariantDemo
- **Payload IDs**:
  - `file-uploads|images-only`
  - `file-uploads|modern-variant`

### Carousel
- **React Export**: `Carousel` from `components/application/carousel/carousel.tsx`
- **Figma Path**: `Carousel / Size`
- **Variants**: Medium, Large
- **Demo Blocks**: CarouselMd, CarouselLg
- **Payload IDs**:
  - `carousels|medium`
  - `carousels|large`

### Charts
- **React Export**: Various chart components from `components/application/charts/`
- **Figma Path**: `Charts / Type / Variant`
- **Component Types**:
  - **Bar Charts**: Simple, Composed, Slim
  - **Line Charts**: Area, Dotted, Pattern, Smooth
  - **Pie Charts**: Medium, Large
  - **Radar**: Default
  - **Activity Gauge**: Medium
  - **Progress Circle**: Medium
  - **Composed**: Mixed
  - **Scatter**: Dots
- **Payload IDs**:
  - `charts|bar-simple`
  - `charts|line-area`
  - `charts|pie-large`

### Loading Indicator
- **React Export**: `LoadingIndicator` from `components/application/loading-indicator/loading-indicator.tsx`
- **Figma Path**: `Loading Indicator / Type`
- **Variants**: Default, LineSimple, LineSpinner, DotCircle
- **Demo Blocks**: DefaultDemo, LineSimpleWithLabelDemo, LineSpinnerWithLabelDemo, DotCircleWithLabelDemo
- **Payload IDs**:
  - `loading-indicators|default`
  - `loading-indicators|dot-circle`

### App Navigation
- **React Export**: `HeaderNavigation` from `components/application/app-navigation/header-navigation.tsx`
- **Figma Path**: `App Navigation / Type`
- **Variants**: SimpleNavigation, DualTier, SidebarBase
- **Demo Blocks**: HeaderNavigationPreview, HeaderNavigationSimpleDemo, HeaderNavigationDualTierDemo
- **Payload IDs**:
  - `app-navigation|simple`
  - `app-navigation|dual-tier`

### Modal
- **React Export**: `Modal` from `components/application/modals/modal.tsx`
- **Figma Path**: `Modal / Type`
- **Variants**: Confirmation, Form, BottomSheet, Alert
- **Demo Blocks**: ConfirmationModalDemo, FormModalDemo, BottomSheetModalDemo, AlertModalDemo
- **Payload IDs**:
  - `modals|confirmation`
  - `modals|bottom-sheet`

### Authentication
- **React Export**: `Authentication` from `components/application/authentication/authentication.tsx`
- **Figma Path**: `Authentication / Type`
- **Variants**: Pin, TwoFactor, ThreeFactor, EmailCode, SmsCode, AppCode
- **Demo Blocks**: AuthPinDemo, AuthTwoFactorDemo, AuthThreeFactorDemo, AuthEmailCodeDemo, AuthSmsCodeDemo, AuthAppCodeDemo
- **Payload IDs**:
  - `authentication|pin-code`
  - `authentication|email-code`

### Credit Card
- **React Export**: `CreditCard` from `components/application/credit-card/credit-card.tsx`
- **Figma Path**: `Credit Card / Style`
- **Variants**: Brand, Gradient, Glass, DarkLight, Interactive
- **Demo Blocks**: CreditCardBrandDemo, CreditCardGradientDemo, CreditCardGlassDemo, CreditCardDarkLightDemo, CreditCardInteractiveDemo, CreditCardPreview
- **Payload IDs**:
  - `credit-cards|brand`
  - `credit-cards|glass`

### QR Code
- **React Export**: `BrandedQRCode` from `components/application/qr-code/qr-code.tsx`
- **Figma Path**: `QR Code / Theme`
- **Variants**: Brand, Dark, Light, Colorful, Minimal, Classic, Modern, Elegant
- **Demo Blocks**: BrandedQRCodeBrandDemo, BrandedQRCodeDarkDemo, BrandedQRCodeLightDemo, BrandedQRCodeColorfulDemo, BrandedQRCodeMinimalDemo, BrandedQRCodeClassicDemo, BrandedQRCodeModernDemo, BrandedQRCodeElegantDemo, BrandedQRCodePreview
- **Payload IDs**:
  - `qr-codes|brand`
  - `qr-codes|elegant`

### Empty State
- **React Export**: `EmptyState` from `components/application/empty-state/empty-state.tsx`
- **Figma Path**: `Empty State / Type`
- **Variants**: Default, Card, Minimal, Colorful
- **Demo Blocks**: EmptyStateDefaultDemo, EmptyStateCardDemo, EmptyStateMinimalDemo, EmptyStateColorfulDemo
- **Payload IDs**:
  - `empty-states|default`
  - `empty-states|colorful`

### Mobile App Buttons
- **React Export**: `MobileAppButtons` from `components/application/mobile-app-buttons/mobile-app-buttons.tsx`
- **Figma Path**: `Mobile App Buttons / Theme`
- **Variants**: Black, White, Glass, Outline
- **Demo Blocks**: MobileAppButtonsBlackDemo, MobileAppButtonsWhiteDemo, MobileAppButtonsGlassDemo, MobileAppButtonsOutlineDemo, MobileAppButtonsPreview
- **Payload IDs**:
  - `mobile-app-buttons|black`
  - `mobile-app-buttons|glass`

---

## Foundation Components

### Featured Icon
- **React Export**: `FeaturedIcon` from `components/foundations/featured-icon/featured-icon.tsx`
- **Figma Path**: `Featured Icon / Color / Theme / Size`
- **Variants**: Light, Gradient, Dark, Modern, ModernNeue, Outline (colors: brand, gray, error, warning, success; sizes: sm, md, lg, xl)
- **Demo Blocks**: DefaultDemo, LightDemo, GradientDemo
- **Payload IDs**:
  - `featured-icons|brand-light-small`
  - `featured-icons|error-dark-large`

### Icons
- **React Export**: All icon sets from `@untitledui/icons` or `lucide-react`
- **Figma Path**: `Icons / Set / Name`
- **Variants**: 1100+ unique icons from untitledui
- **Demo Blocks**: IconsPreview
- **Payload IDs**:
  - `icons|home-01`
  - `icons|settings-01`

### Text Editor
- **React Export**: `TextEditor` from `components/base/text-editor/text-editor.tsx`
- **Figma Path**: `Text Editor / Variant`
- **Variants**: Full, Compact, Minimal
- **Demo Blocks**: TextEditorFullDemo, TextEditorCompactDemo, TextEditorMinimalDemo, TextEditorPreview
- **Payload IDs**:
  - `text-editors|full`
  - `text-editors|minimal`

### Social Buttons
- **React Export**: `SocialButton` from `components/base/buttons/social-button.tsx`
- **Figma Path**: `Social Button / Platform / Theme`
- **Variants**: All platforms (Google, Facebook, Apple, Twitter, Figma, GitHub, Discord, Slack, LinkedIn) with brand/color/gray themes
- **Demo Blocks**: SocialButtonFigmaDemo, SocialButtonGroupBrandDemo, SocialButtonGroupColorDemo, SocialButtonGroupGrayDemo, SocialButtonGroupsMD, SocialButtonGroupsLG
- **Payload IDs**:
  - `social-buttons|google-brand`
  - `social-buttons|figma-gray`

### Utility Buttons
- **React Export**: `ButtonUtility` from `components/base/buttons/utility-buttons.tsx`
- **Figma Path**: `Utility Button / Type`
- **Variants**: Standard, Tertiary, XS
- **Demo Blocks**: UtilityButtonsStandardDemo, UtilityButtonsTertiaryDemo, UtilityButtonsXSDemo, UtilityButtonsPreview
- **Payload IDs**:
  - `utility-buttons|standard`
  - `utility-buttons|tertiary`

---

## Grouping Strategy for Figma

The plugin groups variants by component type for easy bulk operations:

```
Buttons (12 variants)
├─ buttons|primary-xs
├─ buttons|primary-sm
├─ buttons|primary-md
├─ buttons|primary-lg
├─ buttons|primary-xl
├─ buttons|secondary-sm
├─ buttons|secondary-md
└─ ... (other color/size combos)

Inputs (9 variants)
├─ inputs|default-sm
├─ inputs|default-md
├─ inputs|invalid-sm
└─ ... (other states/sizes)

Select (6 variants)
├─ selects|single-sm
├─ selects|multi-md
└─ ... (other types/sizes)
```

---

## Implementation Notes

### For React Developers:
1. Ensure demo blocks are properly labeled
2. Add `data-name` attributes to root demo elements
3. Verify serialization captures all styling
4. Test across light/dark themes

### For Figma Users:
1. Import by component type (e.g., all buttons together)
2. Customize Border Radius and Brand Color in the drawer
3. Use variant names that match design intent
4. Document component usage in Figma comments

### For Future Expansion:
- [ ] Add responsive variants (mobile, tablet, desktop)
- [ ] Support animated transitions (bouncing, pulsing)
- [ ] Link to Storybook documentation from Figma
- [ ] Export CodeConnect metadata for auto-linking
