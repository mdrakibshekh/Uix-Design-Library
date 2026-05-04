import React from 'react';
import { BookOpen, Rocket, Settings, Code, Layers, Zap } from 'lucide-react';

export const DocumentationIntroDemo = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-12 py-10 px-6">
      <div className="space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-100 text-violet-700 text-xs font-bold uppercase tracking-wider">
          <Zap className="size-3" />
          Modern Stack
        </div>
        <h2 className="text-4xl font-bold text-slate-900 tracking-tight">
          Welcome to UIX Design Library
        </h2>
        <p className="text-lg text-slate-500 leading-relaxed max-w-2xl">
          UIX Design Library is a premium collection of open-source React components designed specifically for modern SaaS interfaces. Built with a focus on speed, accessibility, and high-density information display.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {[
          {
            icon: Rocket,
            title: "Lightning Fast",
            desc: "Zero-runtime CSS with Tailwind CSS v4 and optimized React components ensure sub-second interaction times."
          },
          {
            icon: BookOpen,
            title: "Accessible by Default",
            desc: "Powered by React Aria Components, ensuring all components meet WCAG 2.1 accessibility standards."
          },
          {
            icon: Code,
            title: "TypeScript Native",
            desc: "First-class TypeScript support with strict typing for all component props and design tokens."
          },
          {
            icon: Layers,
            title: "Variant Driven",
            desc: "Inspired by Figma's variant system, making it easy to bridge the gap between design and development."
          }
        ].map((feature, i) => (
          <div key={i} className="flex gap-4 p-6 rounded-2xl border border-slate-100 bg-white shadow-sm hover:shadow-md transition-shadow">
            <div className="size-12 rounded-xl bg-violet-50 flex items-center justify-center shrink-0">
              <feature.icon className="size-6 text-violet-600" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 mb-1">{feature.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{feature.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="space-y-8">
        <div className="space-y-2">
          <h3 className="text-xl font-bold text-slate-900">What is UIX Design Library?</h3>
          <p className="text-slate-500 leading-relaxed">
            UIX is more than just a component library; it's a bridge between design and development. We've taken the best patterns from industry leaders like **Untitled UI**, **Lucide**, and **React Aria** and unified them into a single, cohesive design system.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6">
          <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100">
            <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Settings className="size-5 text-violet-600" />
              Architecture Overview
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <p className="font-bold text-xs text-slate-400 uppercase tracking-widest">Foundations</p>
                <p className="text-sm text-slate-600">Core design tokens including colors, typography, spacing, and shadows defined in CSS variables.</p>
              </div>
              <div className="space-y-2">
                <p className="font-bold text-xs text-slate-400 uppercase tracking-widest">Base Components</p>
                <p className="text-sm text-slate-600">Atomic elements like Buttons, Inputs, and Badges built with high customizability.</p>
              </div>
              <div className="space-y-2">
                <p className="font-bold text-xs text-slate-400 uppercase tracking-widest">Patterns</p>
                <p className="text-sm text-slate-600">Complex layouts and composite components like Multi-select, Navigation, and Data Grids.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <h3 className="text-xl font-bold text-slate-900">Usage Principles</h3>
        <div className="prose prose-slate max-w-none text-slate-500">
          <p>
            The library follows a <strong>Compound Component</strong> pattern where possible, allowing for maximum flexibility while maintaining a consistent internal state. All components are fully controlled/uncontrolled compatible.
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Theming:</strong> Uses Tailwind v4 CSS variables for instant global branding.</li>
            <li><strong>Composition:</strong> Built to be nested and extended using the <code>className</code> prop.</li>
            <li><strong>Accessibility:</strong> Implements WAI-ARIA patterns via React Aria.</li>
            <li><strong>Reliability:</strong> 100% test coverage for core interactions and accessibility states.</li>
          </ul>
        </div>
      </div>

      <div className="p-8 rounded-3xl bg-slate-900 text-white space-y-6 shadow-2xl shadow-violet-900/20">
        <div className="flex items-center gap-3">
          <div className="size-10 rounded-xl bg-violet-600 flex items-center justify-center">
            <Rocket className="size-5" />
          </div>
          <h3 className="text-xl font-bold">Quick Start</h3>
        </div>
        <p className="text-slate-400 text-sm">Run this command to set up the environment and start building with UIX.</p>
        <div className="relative group">
          <pre className="bg-slate-800/50 p-6 rounded-2xl text-xs font-mono overflow-x-auto border border-slate-700/50">
            <code>npm install @uix/design-library lucide-react react-aria-components</code>
          </pre>
        </div>

        <div className="pt-4 border-t border-slate-800">
          <p className="text-xs font-bold text-violet-400 mb-4 uppercase tracking-widest">Basic Usage</p>
          <pre className="bg-slate-800/50 p-6 rounded-2xl text-xs font-mono overflow-x-auto border border-slate-700/50">
            <code>{`import { Button } from '@uix/design-library';

export default function App() {
  return (
    <Button variant="solid" color="blue">
      Get Started
    </Button>
  );
}`}</code>
          </pre>
        </div>
      </div>
    </div>
  );
};

export const DocumentationDesignDemo = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-12 py-10 px-6">
      <div className="space-y-4">
        <h2 className="text-3xl font-bold text-slate-900 tracking-tight">
          Design Philosophy
        </h2>
        <p className="text-slate-500 leading-relaxed">
          The UIX Design System is built on the principles of **High Density**, **Visual Clarity**, and **Functional Elegance**. We believe that complex SaaS tools deserve the same level of polish as consumer apps.
        </p>
      </div>

      <div className="space-y-6">
        <h3 className="text-xl font-bold text-slate-900">Core Tokens</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "Primary", value: "#6C2BD9", bg: "bg-violet-600" },
            { label: "Secondary", value: "#FBAE17", bg: "bg-amber-500" },
            { label: "Success", value: "#10B981", bg: "bg-emerald-500" },
            { label: "Error", value: "#EF4444", bg: "bg-rose-500" }
          ].map((token, i) => (
            <div key={i} className="p-4 rounded-2xl border border-slate-100 bg-white">
              <div className={`h-12 w-full rounded-lg ${token.bg} mb-3`} />
              <p className="text-xs font-bold text-slate-900">{token.label}</p>
              <p className="text-[10px] text-slate-400 font-mono">{token.value}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-6">
        <h3 className="text-xl font-bold text-slate-900">Component Lifecycle</h3>
        <div className="relative pl-8 border-l-2 border-slate-100 space-y-8">
          {[
            { title: "Design", desc: "Design components using the Sigma Studio V2.0 Figma Kit." },
            { title: "Prototyping", desc: "Use UIX variants to rapidly assemble functional UI flows." },
            { title: "Production", desc: "Export theme-ready components directly to your React codebase." }
          ].map((step, i) => (
            <div key={i} className="relative">
              <div className="absolute -left-[41px] top-0 size-5 rounded-full bg-white border-4 border-violet-600" />
              <h4 className="font-bold text-slate-900">{step.title}</h4>
              <p className="text-sm text-slate-500">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
