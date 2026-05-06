import React, { useState } from 'react';
import * as LucideIcons from 'lucide-react';
import * as TablerIcons from '@tabler/icons-react';
import * as UntitledIcons from '@untitledui/icons';
import { Search, ChevronRight, X, Share2, Copy, Check, RotateCcw, Download } from 'lucide-react';
import * as SolarLinear from 'solar-icon-react/li';
import * as SolarBold from 'solar-icon-react/bo';
import * as SolarBoldDuotone from 'solar-icon-react/bd';
import * as SolarLineDuotone from 'solar-icon-react/ld';
import * as SolarBroken from 'solar-icon-react/br';

const ModernColorPicker = ({ color, onChange }: { color: string; onChange: (c: string) => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [hue, setHue] = useState(260);
  const [sat, setSat] = useState(80);
  const [light, setLight] = useState(50);
  const [hexInput, setHexInput] = React.useState(color === 'currentColor' ? '#475569' : color);

  const presets = [
    { name: 'Brand', color: '#6C2BD9' },
    { name: 'Slate', color: '#0F172A' },
    { name: 'Emerald', color: '#10B981' },
    { name: 'Blue', color: '#3B82F6' },
    { name: 'Rose', color: '#F43F5E' },
    { name: 'Amber', color: '#F59E0B' },
  ];

  const hslToHex = (h: number, s: number, l: number) => {
    l /= 100;
    const a = s * Math.min(l, 1 - l) / 100;
    const f = (n: number) => {
      const k = (n + h / 30) % 12;
      const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
      return Math.round(255 * color).toString(16).padStart(2, '0');
    };
    return `#${f(0)}${f(8)}${f(4)}`.toUpperCase();
  };

  const hexToHsl = (hex: string) => {
    let r = 0, g = 0, b = 0;
    if (hex.length === 4) {
      r = parseInt(hex[1] + hex[1], 16);
      g = parseInt(hex[2] + hex[2], 16);
      b = parseInt(hex[3] + hex[3], 16);
    } else if (hex.length === 7) {
      r = parseInt(hex.slice(1, 3), 16);
      g = parseInt(hex.slice(3, 5), 16);
      b = parseInt(hex.slice(5, 7), 16);
    }
    r /= 255; g /= 255; b /= 255;
    const max = Math.max(r, g, b), min = Math.min(r, g, b);
    let h = 0, s = 0, l = (max + min) / 2;
    if (max !== min) {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case r: h = (g - b) / d + (g < b ? 6 : 0); break;
        case g: h = (b - r) / d + 2; break;
        case b: h = (r - g) / d + 4; break;
      }
      h /= 6;
    }
    return { h: Math.round(h * 360), s: Math.round(s * 100), l: Math.round(l * 100) };
  };

  React.useEffect(() => {
    const currentHex = color === 'currentColor' ? '#475569' : color;
    setHexInput(currentHex);
    const { h, s, l } = hexToHsl(currentHex);
    setHue(h); setSat(s); setLight(l);
  }, [color]);

  const updateColor = (h: number, s: number, l: number) => {
    setHue(h); setSat(s); setLight(l);
    const hex = hslToHex(h, s, l);
    setHexInput(hex);
    onChange(hex);
  };

  const handleHexInput = (val: string) => {
    let cleaned = val.replace(/[^0-9A-Fa-f#]/g, '').toUpperCase();
    if (!cleaned.startsWith('#')) cleaned = '#' + cleaned;
    cleaned = '#' + cleaned.replace(/#/g, '').slice(0, 6);
    setHexInput(cleaned);
    if (cleaned.length === 7) {
      const { h, s, l } = hexToHsl(cleaned);
      setHue(h); setSat(s); setLight(l);
      onChange(cleaned);
    }
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2.5 px-3 h-11 bg-slate-50 dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 transition-all group shrink-0"
      >
        <div
          className="size-6 rounded-lg border border-white dark:border-slate-900 shadow-sm ring-1 ring-slate-200 dark:ring-slate-700 transition-transform group-hover:scale-110"
          style={{ backgroundColor: color === 'currentColor' ? '#475569' : color }}
        />
        <span className="text-[11px] font-bold text-slate-900 dark:text-slate-100 uppercase tracking-tight">
          {color === 'currentColor' ? '#475569' : color}
        </span>
      </button>

      {isOpen && (
        <>
          <div className="fixed inset-0 z-[60]" onClick={() => setIsOpen(false)} />
          <div className="absolute top-full mt-2 right-0 w-60 bg-white dark:bg-slate-900 rounded-[1.5rem] border border-slate-200 dark:border-slate-800 shadow-2xl p-4 z-[70] animate-in slide-in-from-top-2 duration-200">
            <div className="space-y-4">
              {/* Preview & Hex */}
              <div className="flex items-center gap-3 p-2 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700">
                <div className="size-8 rounded-lg border-2 border-white dark:border-slate-700 shadow-sm shrink-0" style={{ backgroundColor: color === 'currentColor' ? '#475569' : color }} />
                <div className="flex-1 min-w-0">
                  <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-0.5">HEX</p>
                  <div className="flex items-center justify-between">
                    <input
                      type="text"
                      value={hexInput}
                      onChange={(e) => handleHexInput(e.target.value)}
                      className="w-full bg-transparent text-xs font-bold text-slate-900 dark:text-white focus:outline-none"
                    />
                    <button
                      onClick={() => navigator.clipboard.writeText(hexInput)}
                      className="p-1 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-md transition-all text-slate-400 hover:text-slate-900 dark:hover:text-white"
                    >
                      <Copy className="size-3" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Sliders */}
              <div className="space-y-3">
                {/* Hue */}
                <div className="space-y-1">
                  <div className="flex justify-between text-[9px] font-bold text-slate-400 uppercase tracking-wider">
                    <span>Hue</span>
                    <span>{hue}°</span>
                  </div>
                  <input
                    type="range" min="0" max="360" value={hue}
                    onChange={(e) => updateColor(Number(e.target.value), sat, light)}
                    className="w-full h-1.5 rounded-full appearance-none cursor-pointer bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 via-purple-500 to-red-500"
                  />
                </div>

                {/* Saturation */}
                <div className="space-y-1">
                  <div className="flex justify-between text-[9px] font-bold text-slate-400 uppercase tracking-wider">
                    <span>Saturation</span>
                    <span>{sat}%</span>
                  </div>
                  <input
                    type="range" min="0" max="100" value={sat}
                    onChange={(e) => updateColor(hue, Number(e.target.value), light)}
                    className="w-full h-1.5 rounded-full appearance-none cursor-pointer"
                    style={{ background: `linear-gradient(to right, hsl(${hue}, 0%, ${light}%), hsl(${hue}, 100%, ${light}%))` }}
                  />
                </div>

                {/* Brightness */}
                <div className="space-y-1">
                  <div className="flex justify-between text-[9px] font-bold text-slate-400 uppercase tracking-wider">
                    <span>Brightness</span>
                    <span>{light}%</span>
                  </div>
                  <input
                    type="range" min="0" max="100" value={light}
                    onChange={(e) => updateColor(hue, sat, Number(e.target.value))}
                    className="w-full h-1.5 rounded-full appearance-none cursor-pointer"
                    style={{ background: `linear-gradient(to right, #000, hsl(${hue}, ${sat}%, 50%), #fff)` }}
                  />
                </div>
              </div>

              {/* Presets */}
              <div className="space-y-2 pt-3 border-t border-slate-50">
                <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">Presets</p>
                <div className="grid grid-cols-6 gap-1.5">
                  {presets.map(p => (
                    <button
                      key={p.color}
                      onClick={() => {
                        onChange(p.color);
                        setIsOpen(false);
                      }}
                      className="size-7 rounded-md border-2 border-transparent hover:border-violet-500 transition-all hover:scale-110 shadow-sm"
                      style={{ backgroundColor: p.color }}
                      title={p.name}
                    />
                  ))}

                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

const SOLAR_VARIANTS: Record<string, any> = {
  Linear: SolarLinear,
  Bold: SolarBold,
  'Bold Duotone': SolarBoldDuotone,
  'Line Duotone': SolarLineDuotone,
  Broken: SolarBroken,
  // Aliases for compatibility
  'Filled': SolarBold,
  'Duo-Tone': SolarLineDuotone,
};

const ALL_ICONS = {
  Lucide: LucideIcons,
  Tabler: TablerIcons,
  'Untitled UI': UntitledIcons,
  'Solar Linear': SolarLinear,
  'Solar Bold': SolarBold,
  'Solar Bold Duotone': SolarBoldDuotone,
  'Solar Line Duotone': SolarLineDuotone,
  'Solar Broken': SolarBroken,
};

const ICON_STYLE_CATEGORIES = [
  'All',
  'Linear',
  'Bold',
  'Line Duotone',
  'Bold Duotone',
  'Broken',
];

export const IconsPreview = ({ isCompact = false }: { isCompact?: boolean }) => {
  const [search, setSearch] = useState('');
  const [selectedStyle, setSelectedStyle] = useState<string>('All');
  const [activeIcon, setActiveIcon] = useState<{ name: string; Icon: any; library: string } | null>(null);

  // Modal State
  const [strokeWidth, setStrokeWidth] = useState(1.5);
  const [iconSize, setIconSize] = useState(24);
  const [iconColor, setIconColor] = useState('#475569');
  const [activeTab, setActiveTab] = useState('React');
  const [copied, setCopied] = useState(false);
  const [figmaCopied, setFigmaCopied] = useState(false);
  const [shareCopied, setShareCopied] = useState(false);
  const [visibleCount, setVisibleCount] = useState(200);

  const downloadSVG = () => {
    const svgElement = document.getElementById('icon-preview-svg');
    if (!svgElement) return;
    const serializer = new XMLSerializer();
    let source = serializer.serializeToString(svgElement);
    if (!source.match(/^<svg[^>]+xmlns="http\:\/\/www\.w3\.org\/2000\/svg"/)) {
      source = source.replace(/^<svg/, '<svg xmlns="http://www.w3.org/2000/svg"');
    }
    const svgBlob = new Blob([source], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(svgBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${activeIcon?.name.toLowerCase()}.svg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const copySVG = async () => {
    const svgElement = document.getElementById('icon-preview-svg');
    if (!svgElement || !activeIcon) return;

    const displayColor = iconColor === 'currentColor' ? '#475569' : iconColor;
    const cleanName = activeIcon.library === 'Solar Icons' && ['Li','Bo','Bd','Ld','Br'].some(prefix => activeIcon.name.startsWith(prefix)) 
      ? activeIcon.name.substring(2) 
      : activeIcon.name;
    const figmaName = `UIX: ${cleanName}`;

    const serializer = new XMLSerializer();
    let source = serializer.serializeToString(svgElement);
    
    // Clean up for Figma: Replace internal ID with actual icon name for better layer naming
    source = source.replace('id="icon-preview-svg"', `id="${figmaName}" data-name="${figmaName}"`);
    
    // Ensure Namespace
    if(!source.match(/^<svg[^>]+xmlns="http\:\/\/www\.w3\.org\/2000\/svg"/)){
        source = source.replace(/^<svg/, `<svg xmlns="http://www.w3.org/2000/svg"`);
    }

    // Force Color Injection: Replace currentColor with actual hex
    source = source.replace(/currentColor/g, displayColor);
    
    // Inject title for Figma layer naming
    source = source.replace(/>/, `><title>${figmaName}</title>`);
    
    await navigator.clipboard.writeText(source);
    setFigmaCopied(true);
    setTimeout(() => setFigmaCopied(false), 2000);
  };

  const copyCode = async (code: string) => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getCodeSnippet = (tab: string) => {
    if (!activeIcon) return '';
    const name = activeIcon.name;
    const lib = activeIcon.library.toLowerCase().replace(' ', '-');
    
    switch (tab) {
      case 'Web': return `<i class="uix-icon uix-${name.toLowerCase()}" style="font-size: ${iconSize}px; stroke-width: ${strokeWidth}; color: ${iconColor};"></i>`;
      case 'React': return `import { ${name} } from '@uix/${lib}';\n\n<${name}\n  size={${iconSize}}\n  strokeWidth={${strokeWidth}}\n  color="${iconColor}"\n/>`;
      case 'Vue': return `<script setup>\nimport { ${name} } from '@uix/${lib}-vue';\n</script>\n\n<template>\n  <${name} :size="${iconSize}" :stroke-width="${strokeWidth}" color="${iconColor}" />\n</template>`;
      case 'Svelte': return `<script>\n  import { ${name} } from '@uix/${lib}-svelte';\n</script>\n\n<${name} size={${iconSize}} strokeWidth={${strokeWidth}} color="${iconColor}" />`;
      case 'Flutter': return `UIXIcon(\n  UIXIcons.${name.toLowerCase()},\n  size: ${iconSize}.0,\n  strokeWidth: ${strokeWidth},\n  color: ${iconColor === 'currentColor' ? 'Colors.black' : iconColor},\n)`;
      default: return `// Implementation for ${tab}\n<${name} size={${iconSize}} />`;
    }
  };
  

  const getIconWrapperClass = () => 'bg-white dark:bg-slate-950 border border-slate-100 dark:border-slate-800 shadow-sm';

  // Combine a subset of icons for display
  const displayIcons = React.useMemo(() => {
    const icons: Array<{ name: string; Icon: React.ComponentType<any>; library: string }> = [];
    const libs = Object.entries(ALL_ICONS);
    
    // If search is active, just show all matches from all libraries
    if (search) {
      libs.forEach(([libName, libIcons]) => {
        Object.entries(libIcons)
          .filter(([, Icon]) => typeof Icon === 'function')
          .forEach(([name, Icon]) => {
            if (name.toLowerCase().includes(search.toLowerCase())) {
              const isSolar = libName.startsWith('Solar');
              icons.push({ name, Icon: Icon as any, library: isSolar ? 'Solar Icons' : libName });
            }
          });
      });
      return icons;
    }

    // Interleave icons from different libraries to show variety in the "All" view
    const libEntries = libs.map(([name, icons]) => {
      const isSolar = name.startsWith('Solar');
      if (selectedStyle !== 'All') {
        if (isSolar) {
          const solarStyle = name.replace('Solar ', '').toLowerCase().replace(' ', '-');
          const selectedNormalized = selectedStyle.toLowerCase().replace(' ', '-');
          if (solarStyle !== selectedNormalized) return { name, entries: [] };
        } else {
          const nonSolarExcludeStyles = ['Bold', 'Line Duotone', 'Bold Duotone', 'Broken', 'Filled', 'Duo-Tone'];
          if (nonSolarExcludeStyles.includes(selectedStyle)) return { name, entries: [] };
        }
      }
      return { name, entries: Object.entries(icons) };
    }).filter(lib => lib.entries.length > 0);

    let maxLen = 0;
    libEntries.forEach(lib => {
      if (lib.entries.length > maxLen) maxLen = lib.entries.length;
    });

    for (let i = 0; i < maxLen; i++) {
      libEntries.forEach(lib => {
        if (lib.entries[i]) {
          const isSolar = lib.name.startsWith('Solar');
          icons.push({ name: lib.entries[i][0], Icon: lib.entries[i][1] as any, library: isSolar ? 'Solar Icons' : lib.name });
        }
      });
      // Cap at a reasonable number for performance if not searching
      if (icons.length > 2000) break;
    }
    
    return icons;
  }, [search, selectedStyle]);

  const getStyleProps = () => {
    switch (selectedStyle) {
      case 'Filled': return { fill: 'currentColor', strokeWidth: 0 };
      case 'Duo-Tone': return { fill: 'currentColor', fillOpacity: 0.2, strokeWidth: 1.5 };
      case 'Stroke': return { strokeWidth: 1 };
      case 'Outline': return { strokeWidth: 2, fill: 'none' };
      case 'All':
      default: return {};
    }
  };

  const styleProps = getStyleProps();

  if (isCompact) {
    return (
      <div className="grid grid-cols-6 gap-2 w-full">
        {displayIcons.slice(0, 18).map(({ name, Icon, library }, index) => (
          <div key={`${library}-${name}-${index}`} className="flex items-center justify-center aspect-square rounded-xl bg-white dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 shadow-sm transition-all hover:bg-slate-50 dark:hover:bg-slate-800">
            <Icon className="size-5 text-slate-400 dark:text-slate-600" />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-8 w-full p-6 bg-slate-50 dark:bg-slate-950/20 rounded-3xl border border-slate-100 dark:border-slate-800 transition-colors">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            {/* Style Filters */}
            <div className="w-full flex items-center gap-2 p-1 bg-slate-200/40 dark:bg-slate-800/40 rounded-xl border border-slate-200/50 dark:border-slate-800/50 overflow-x-auto scrollbar-hide">
              {ICON_STYLE_CATEGORIES.map(style => (
                <button
                  key={style}
                  onClick={() => setSelectedStyle(style)}
                  className={`flex-1 px-4 py-2.5 text-[12px] border-2 border-slate-100 dark:border-slate-800/50 font-bold rounded-lg transition-all whitespace-nowrap ${selectedStyle === style ? 'bg-violet-100 dark:bg-violet-900/30 border-violet-600 dark:border-violet-500 text-slate-950 dark:text-white' : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'}`}
                >
                  {style}
                </button>
              ))}
            </div>
          </div>
          <div className="relative w-[360px] md:w-80 group">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-slate-400 dark:text-slate-500 group-focus-within:text-violet-600 dark:group-focus-within:text-violet-400 transition-colors" />
            <input
              type="text"
              placeholder="Search icons..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-sm focus:outline-none focus:ring-4 focus:ring-violet-500/10 dark:focus:ring-violet-400/10 focus:border-violet-500 dark:focus:border-violet-400 transition-all dark:text-white"
            />
          </div>
        </div>

      </div>

      <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-12 gap-3">
        {displayIcons.slice(0, isCompact ? 18 : visibleCount).map(({ name, Icon, library }, index) => {
          if (!Icon) return null;
          
          // Determine which component to use based on library and style
          let RenderIcon = Icon;
          if (library === 'Solar Icons') {
            const prefixes: Record<string, string> = {
              Linear: 'Li',
              Bold: 'Bo',
              'Bold Duotone': 'Bd',
              'Line Duotone': 'Ld',
              Broken: 'Br',
              'Filled': 'Bo',
              'Duo-Tone': 'Ld'
            };
            const variantLib = SOLAR_VARIANTS[selectedStyle] || SolarLinear;
            const baseName = name.startsWith('Li') ? name.substring(2) : name;
            const targetName = (prefixes[selectedStyle] || 'Li') + baseName;
            RenderIcon = variantLib[targetName] || Icon;
          }

          return (
            <div
              key={`${library}-${name}-${index}`}
              onClick={() => {
                setActiveIcon({ name, Icon: RenderIcon, library });
              }}
              className={`group relative flex flex-col items-center justify-center aspect-square rounded-3xl px-3 py-3 transition-all cursor-pointer isolate ${getIconWrapperClass()}`}
            >
              <RenderIcon
                size={28}
                color="currentColor"
                className="text-slate-600 dark:text-slate-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
                {...(library !== 'Solar Icons' ? styleProps : {})}
              />
            </div>
          );
        })}
      </div>

      {/* Sophisticated Icon Detail Modal */}
      {activeIcon && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-md transition-opacity" onClick={() => setActiveIcon(null)} />

          <div className="relative w-full max-w-3xl bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-200 dark:border-white/5 shadow-2xl animate-in zoom-in-95 fade-in duration-300 overflow-hidden">
            {/* Modal Header */}
            <div className="flex items-center justify-between px-10 py-6 border-b border-slate-100 dark:border-white/5">
              <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500">
                <span className="hover:text-violet-600 dark:hover:text-violet-400 transition-colors cursor-pointer">UIX ICONS</span>
                <ChevronRight className="size-3" />
                <span className="hover:text-violet-600 dark:hover:text-violet-400 transition-colors cursor-pointer">{selectedStyle}</span>
                <ChevronRight className="size-3" />
                <span className="text-slate-900 dark:text-white">
                  {activeIcon.library === 'Solar Icons' && activeIcon.name.startsWith('Li') ? activeIcon.name.substring(2) : activeIcon.name}
                </span>
                <button 
                  onClick={copySVG}
                  className="relative ml-2 text-violet-600 hover:text-violet-700 underline underline-offset-4 decoration-violet-600/30 normal-case font-bold group/figma"
                >
                  (Copy For Figma)
                  {figmaCopied && (
                    <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-slate-900 text-white text-[10px] rounded-xl whitespace-nowrap animate-in fade-in zoom-in-95 duration-200 shadow-xl ring-1 ring-white/10 z-[100]">
                      SVG Copied for Figma!
                    </span>
                  )}
                </button>
              </div>

              <div className="flex items-center gap-4">
                <div className="px-3 py-1.5 bg-slate-50 dark:bg-white/5 rounded-xl border border-slate-100 dark:border-white/5 text-[11px] font-bold text-slate-500 dark:text-slate-400 shadow-sm">
                  {(() => {
                    let hash = 0;
                    for (let i = 0; i < activeIcon.name.length; i++) {
                      hash = activeIcon.name.charCodeAt(i) + ((hash << 5) - hash);
                    }
                    return 'f' + Math.abs(hash).toString(16).slice(0, 4);
                  })()}
                </div>
                <button
                  onClick={() => {
                    const url = new URL(window.location.href);
                    url.searchParams.set('icon', activeIcon.name);
                    navigator.clipboard.writeText(url.toString());
                    setShareCopied(true);
                    setTimeout(() => setShareCopied(false), 2000);
                  }}
                  className="p-2.5 hover:bg-slate-100 dark:hover:bg-white/10 rounded-full transition-all text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white group/share relative"
                >
                  <Share2 className="size-4" />
                  {shareCopied && (
                    <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-slate-900 text-white text-[9px] rounded-md animate-in fade-in zoom-in-95 duration-200 shadow-xl ring-1 ring-white/10">
                      Link Copied!
                    </span>
                  )}
                </button>
                <button onClick={() => setActiveIcon(null)} className="p-2.5 hover:bg-slate-100 dark:hover:bg-white/10 rounded-full transition-all text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white">
                  <X className="size-5" />
                </button>
              </div>
            </div>

            <div className="p-10">
              <div className="flex flex-col md:flex-row gap-12">
                {/* Large Preview - 40% */}
                <div className="w-full md:w-[40%] aspect-square md:aspect-auto md:h-[240px] rounded-[2rem] bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/5 flex items-center justify-center group overflow-hidden shrink-0 relative isolate">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-from)_0%,_transparent_70%)] from-violet-500/10 opacity-0 dark:opacity-100 pointer-events-none" />
                  {(() => {
                    const PreviewIcon = activeIcon.Icon;
                    const displayColor = iconColor === 'currentColor' ? (globalTheme === 'dark' ? '#94A3B8' : '#475569') : iconColor;
                    return (
                      <PreviewIcon
                        id="icon-preview-svg"
                        style={{ width: iconSize * 4, height: iconSize * 4 }}
                        className="transition-all duration-300 transform group-hover:scale-110 relative z-10"
                        color={displayColor}
                        {...(activeIcon.library !== 'Solar Icons' ? {
                          strokeWidth: selectedStyle === 'Filled' ? 0 : strokeWidth,
                          stroke: displayColor,
                          fill: selectedStyle === 'Filled' ? displayColor : selectedStyle === 'Duo-Tone' ? displayColor : 'none',
                          fillOpacity: selectedStyle === 'Duo-Tone' ? 0.2 : 1
                        } : {})}
                      />
                    );
                  })()}
                </div>

                {/* Controls & Metadata - 70% */}
                <div className="w-full md:w-[70%] space-y-8 min-w-0">
                  <div className="space-y-3">
                    <div className="flex items-start justify-between gap-4">
                      <h4 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight break-all leading-tight">
                        {activeIcon.library === 'Solar Icons' && activeIcon.name.startsWith('Li') ? activeIcon.name.substring(2) : activeIcon.name}
                      </h4>
                      <button onClick={() => copyCode(activeIcon.name)} className="shrink-0 p-2 hover:bg-slate-100 dark:hover:bg-white/10 rounded-xl text-slate-400 dark:text-slate-500 hover:text-slate-900 dark:hover:text-white transition-all border border-transparent hover:border-slate-200 dark:hover:border-white/10">
                        <Copy className="size-5" />
                      </button>
                    </div>

                  </div>

                  {/* Properties Row */}
                  <div className="flex items-center gap-3">
                    {selectedStyle !== 'Filled' && selectedStyle !== 'Bold' && selectedStyle !== 'Bold Duotone' && activeIcon.library !== 'Solar Icons' && (
                      <div className="flex items-center h-11 bg-slate-50 dark:bg-white/5 rounded-2xl border border-slate-200 dark:border-white/5 px-3 gap-2 animate-in fade-in slide-in-from-left-2 duration-200">
                        <UntitledIcons.Activity className="size-4 text-slate-600 dark:text-slate-400" />
                        <select
                          value={strokeWidth}
                          onChange={(e) => setStrokeWidth(Number(e.target.value))}
                          className="bg-transparent text-[11px] font-bold text-slate-900 dark:text-white focus:outline-none cursor-pointer"
                        >
                          {[0.5, 1, 1.5, 2, 2.5, 3].map(w => <option key={w} value={w}>{w}</option>)}
                        </select>
                      </div>
                    )}

                    <div className="flex items-center h-11 bg-slate-50 dark:bg-white/5 rounded-2xl border border-slate-200 dark:border-white/5 px-3 gap-2">
                      <UntitledIcons.Maximize01 className="size-4 text-slate-600 dark:text-slate-400" />
                      <select
                        value={iconSize}
                        onChange={(e) => setIconSize(Number(e.target.value))}
                        className="bg-transparent text-[11px] font-bold text-slate-900 dark:text-white focus:outline-none cursor-pointer"
                      >
                        {[16, 20, 24, 32, 48, 64].map(s => <option key={s} value={s}>{s}px</option>)}
                      </select>
                    </div>

                    <ModernColorPicker
                      color={iconColor}
                      onChange={setIconColor}
                    />

                    <button
                      onClick={() => {
                        setStrokeWidth(1.5);
                        setIconSize(24);
                        setIconColor('currentColor');
                      }}
                      className="size-11 flex items-center justify-center hover:bg-slate-100 dark:hover:bg-white/10 rounded-2xl text-slate-400 dark:text-slate-500 transition-all border border-slate-200 dark:border-white/5 hover:text-slate-900 dark:hover:text-white shrink-0"
                    >
                      <RotateCcw className="size-4.5" />
                    </button>
                  </div>

                  <div className="flex gap-3">
                    <button 
                      onClick={downloadSVG}
                      className="flex-1 flex items-center justify-center gap-2 py-3.5 bg-violet-600 text-white rounded-xl font-bold text-[12px] hover:bg-violet-700 transition-all shadow-lg shadow-violet-600/20 active:scale-95 uppercase tracking-wider"
                    >
                      <Download className="size-4" />
                      Download .SVG
                    </button>
                    <button 
                      onClick={copySVG}
                      className="flex-1 flex items-center justify-center gap-2 py-3.5 bg-white dark:bg-white/5 text-slate-900 dark:text-white border border-slate-200 dark:border-white/10 rounded-xl font-bold text-[12px] hover:border-slate-900 dark:hover:border-white transition-all active:scale-95 shadow-sm uppercase tracking-wider"
                    >
                      <Copy className="size-4 text-slate-400 dark:text-slate-500" />
                      COPY SVG
                    </button>
                  </div>
                </div>
              </div>

              {/* Implementation Tabs */}
              <div className="mt-12">
                <div className="flex items-center gap-1 p-1 bg-slate-100 dark:bg-white/5 rounded-2xl w-fit mb-6">
                  {['Web', 'React', 'React Native', 'Vue', 'Svelte', 'Flutter', 'Angular'].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`px-6 py-2.5 rounded-xl text-[11px] font-bold transition-all ${activeTab === tab ? 'bg-white dark:bg-white/10 text-violet-600 dark:text-violet-400 shadow-sm ring-1 ring-slate-200 dark:ring-white/10' : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'}`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>

                <div className="relative group">
                  <div className="absolute -top-3 -right-3 size-6 bg-violet-600 rounded-full blur-xl opacity-0 group-hover:opacity-20 transition-opacity" />
                  <pre className="bg-slate-50 dark:bg-slate-950 p-8 rounded-[2.5rem] text-[11px] font-bold text-slate-600 dark:text-slate-400 border border-slate-100 dark:border-white/5 overflow-x-auto leading-relaxed shadow-inner">
                    <code className="block">
                      {getCodeSnippet(activeTab)}
                    </code>
                  </pre>
                  <button 
                    onClick={() => copyCode(getCodeSnippet(activeTab))}
                    className="absolute top-6 right-6 p-3 bg-white dark:bg-white/5 hover:bg-slate-50 dark:hover:bg-white/10 rounded-2xl border border-slate-200 dark:border-white/10 text-slate-400 dark:text-slate-500 hover:text-slate-900 dark:hover:text-white transition-all shadow-sm"
                  >
                    <Copy className="size-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Load More Trigger */}
      {visibleCount < displayIcons.length && (
        <div className="flex justify-center pt-12">
          <button 
            onClick={() => setVisibleCount(prev => prev + 200)}
            className="px-8 py-4 bg-white border border-slate-200 rounded-2xl font-bold text-sm text-slate-600 hover:border-violet-600 hover:text-violet-600 transition-all shadow-sm active:scale-95"
          >
            Explore all 1{displayIcons.length}+ icons
          </button>
        </div>
      )}
    </div>
  );
};
