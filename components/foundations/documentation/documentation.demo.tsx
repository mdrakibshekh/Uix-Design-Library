import React from 'react';
import { BookOpen, Rocket, Settings, Code, Layers, Zap } from 'lucide-react';

export const DocumentationIntroDemo = () => {
  return (
    <div className="max-w-6xl mx-auto space-y-16 py-12 px-6">
      <section className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] items-center">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-violet-100 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-violet-700">
            <Zap className="size-3" />
            UIX Design Library
          </div>
          <h1 className="max-w-3xl text-5xl font-semibold tracking-tight text-slate-900 sm:text-6xl">
            Intelligent components for React developers and Figma designers.
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-slate-600">
            This documentation is more than a reference — it is a shared system built to bridge the gap between modern design and production-ready React implementation.
          </p>
          <div className="grid gap-4 sm:max-w-md">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold text-slate-900">Coming soon:</p>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">Direct Figma import via our plugin, enabling designers to pull real library components into their layouts.</p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-slate-950 p-6 text-white shadow-xl">
              <p className="text-xs uppercase tracking-[0.32em] text-violet-300">Designed for teams</p>
              <p className="mt-3 text-lg font-semibold">One source of truth for visual language, interaction patterns, and shared product quality.</p>
            </div>
          </div>
        </div>

        <div className="rounded-[2rem] bg-gradient-to-br from-violet-600 via-fuchsia-600 to-pink-500 p-1 shadow-2xl shadow-violet-500/20">
          <div className="rounded-[1.75rem] bg-slate-950 p-8 text-white">
            <p className="text-xs uppercase tracking-[0.32em] text-violet-200">Documentation snapshot</p>
            <h2 className="mt-6 text-3xl font-semibold">A living component catalog</h2>
            <p className="mt-4 text-sm leading-7 text-slate-200">
              Every component is documented with clear usage guidance, developer examples, and Figma-ready design conventions for both frontend and product teams.
            </p>
            <div className="mt-8 space-y-4">
              <FeatureBadge title="Atomic Design" description="Atoms, molecules, and organisms built to scale." />
              <FeatureBadge title="Token-first" description="Color, typography, spacing, and elevation defined once and reused." />
              <FeatureBadge title="React-ready" description="Composable components that play well with modern frameworks." />
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-8 lg:grid-cols-3">
        <Card title="For React Developers" icon={Code}>
          A component-driven library with TypeScript safety, zero-runtime style optimization, and composable APIs for production apps.
        </Card>
        <Card title="For Figma Designers" icon={BookOpen}>
          A shared design language with tomorrow’s Figma plugin support for importing real UIX components into artboards.
        </Card>
        <Card title="For Product Teams" icon={Layers}>
          An aligned system that keeps interface patterns consistent across dashboards, marketing experiences, and admin workflows.
        </Card>
      </section>

      <section className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="space-y-6 rounded-3xl border border-slate-200 bg-white p-10 shadow-sm">
          <div className="inline-flex items-center gap-3 rounded-full bg-violet-50 px-4 py-2 text-sm font-semibold text-violet-700">
            <Rocket className="size-4" />
            How to use this documentation
          </div>
          <div className="space-y-4 text-slate-600 leading-7">
            <p>This documentation is structured to support three core workflows:</p>
            <ul className="list-disc pl-5 space-y-3">
              <li><strong>Explore components:</strong> Learn what each component is for, when to use it, and how it behaves.</li>
              <li><strong>Copy examples:</strong> Use the ready-made code snippets for React, theming, and layout.</li>
              <li><strong>Connect design and code:</strong> Follow the Figma plugin guidance to keep your team aligned.</li>
            </ul>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-slate-950 p-10 text-white shadow-sm">
          <h3 className="text-2xl font-semibold">Getting started</h3>
          <p className="mt-4 text-sm leading-7 text-slate-300">Install the core package and wrap your app in <code>UIXProvider</code> to enable tokens, theming, and consistent component styling.</p>
          <pre className="mt-6 overflow-x-auto rounded-3xl bg-slate-900 p-6 text-xs font-mono text-slate-100">
            <code>npm install @uix-library/core
# or
yarn add @uix-library/core</code>
          </pre>
          <pre className="mt-6 overflow-x-auto rounded-3xl bg-slate-900 p-6 text-xs font-mono text-slate-100">
            <code>{`import { UIXProvider, Button } from '@uix-library/core';

function App() {
  return (
    <UIXProvider>
      <Button variant="primary">Hello UIX!</Button>
    </UIXProvider>
  );
}`}</code>
          </pre>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-3xl border border-slate-200 bg-white p-10 shadow-sm">
          <h3 className="text-2xl font-semibold text-slate-900">Core principles</h3>
          <div className="mt-6 space-y-4 text-slate-600 leading-7">
            <p><strong>Consistency:</strong> Every component is built from the same token system and naming conventions.</p>
            <p><strong>Accessibility:</strong> Keyboard-first interactions, sensible defaults, and clear status states.</p>
            <p><strong>Performance:</strong> Tree-shakable exports and atomic styling keep bundles small.</p>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-10 shadow-sm">
          <h3 className="text-2xl font-semibold text-slate-900">What’s included</h3>
          <div className="mt-6 space-y-4 text-slate-600 leading-7">
            <p><strong>Buttons:</strong> high-impact actions, secondary controls, icon buttons, and loading states.</p>
            <p><strong>Inputs:</strong> modern text fields, selects, toggles, and validation-ready controls.</p>
            <p><strong>Layouts:</strong> responsive cards, stacks, grids, modals, and system-level helpers.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

const Card = ({ title, icon: Icon, children }: { title: string; icon: React.ComponentType<{ className?: string }>; children: React.ReactNode }) => (
  <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
    <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-50 text-violet-600">
      <Icon className="size-5" />
    </div>
    <h3 className="mt-5 text-xl font-semibold text-slate-900">{title}</h3>
    <p className="mt-3 text-sm leading-7 text-slate-600">{children}</p>
  </div>
);

const FeatureBadge = ({ title, description }: { title: string; description: string }) => (
  <div className="rounded-3xl border border-slate-700/40 bg-slate-900/90 p-4 text-slate-100">
    <p className="text-sm font-semibold text-white">{title}</p>
    <p className="mt-2 text-sm leading-6 text-slate-300">{description}</p>
  </div>
);


export const DocumentationDesignDemo = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-12 py-10 px-6">
      <div className="space-y-4">
        <h2 className="text-3xl font-bold text-slate-900 tracking-tight">
          Design Philosophy & Tokens
        </h2>
        <p className="text-slate-500 leading-relaxed">
          UIX is governed by a strict set of design tokens that serve as the source of truth for our visual language. Everything is engineered for consistency, accessibility, and effortless theming.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          {
            label: 'Typography',
            detail: 'Fluid scales based on a 16px root to ensure perfect readability on any screen.'
          },
          {
            label: 'Color Palette',
            detail: 'WCAG 2.1 compliant contrast ratios for accessible interfaces out of the box.'
          },
          {
            label: 'Spacing',
            detail: 'A 4px / 8px grid system that eliminates layout drift and keeps surfaces tight.'
          },
          {
            label: 'Shadows',
            detail: 'Layered elevation levels that create intuitive depth and interface hierarchy.'
          }
        ].map((token, i) => (
          <div key={i} className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm">
            <p className="text-xs font-bold uppercase tracking-widest text-slate-400">{token.label}</p>
            <p className="mt-3 text-sm text-slate-600 leading-relaxed">{token.detail}</p>
          </div>
        ))}
      </div>

      <div className="space-y-8">
        <h3 className="text-xl font-bold text-slate-900">Component Catalog Highlights</h3>
        <div className="grid grid-cols-1 gap-6">
          {[
            {
              title: 'Buttons',
              desc: 'The action makers. Supports loading states, icons, and four visual hierarchies for primary, secondary, ghost, and destructive actions.'
            },
            {
              title: 'Input Fields',
              desc: 'The data collectors. Built for validation, floating labels, inline error messaging, and content-aware formatting.'
            },
            {
              title: 'Modals & Dialogs',
              desc: 'The context focused. Focus-trapping, keyboard escape handling, and accessible modal behavior out of the box.'
            }
          ].map((item, i) => (
            <div key={i} className="rounded-3xl border border-slate-100 bg-slate-50 p-6">
              <h4 className="font-semibold text-slate-900">{item.title}</h4>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-8">
        <h3 className="text-xl font-bold text-slate-900">Best Practices</h3>
        <div className="prose prose-slate max-w-none text-slate-500">
          <p>To keep your codebase clean and your UI snappy, follow these core principles:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Composition Over Configuration:</strong> Use sub-components to build layouts rather than passing 20+ props to a single component.</li>
            <li><strong>Stay on the Grid:</strong> Avoid hard-coded pixel values. Use our layout utilities for responsive structure.</li>
            <li><strong>Accessibility First:</strong> Never remove the focus ring unless you provide a custom, high-visibility alternative.</li>
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-slate-900">SEO & Performance</h3>
          <ul className="mt-4 list-disc pl-5 space-y-2 text-sm text-slate-600">
            <li><strong>Tree Shaking:</strong> Only ship the code you actually use.</li>
            <li><strong>Zero Layout Shift:</strong> Components are pre-sized to prevent jumpy loading.</li>
            <li><strong>SSR Ready:</strong> Compatible with Next.js and Nuxt for fast first paint.</li>
          </ul>
        </div>

        <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-slate-900">Join the Community</h3>
          <p className="mt-4 text-sm text-slate-600 leading-relaxed">UIX is a collaborative effort. Whether you found a bug, want a feature, or want to contribute a new component, we want to hear from you.</p>
          <ul className="mt-4 list-disc pl-5 space-y-2 text-sm text-slate-600">
            <li><strong>GitHub:</strong> View Repository</li>
            <li><strong>Discord:</strong> Join the Chat</li>
            <li><strong>Changelog:</strong> See What’s New</li>
          </ul>
          <p className="mt-4 text-xs uppercase tracking-[0.2em] text-violet-600">Pro Tip: CSS Variables power our white-labeling and dark-mode capabilities.</p>
        </div>
      </div>

      <div className="rounded-3xl border border-slate-100 bg-slate-900 p-8 text-white shadow-2xl shadow-violet-900/20">
        <h3 className="text-xl font-bold">© 2026 UIX Design Systems</h3>
        <p className="mt-3 text-sm text-slate-300 leading-relaxed">Crafted with precision for the modern web. This documentation is designed to guide both React developers and Figma designers through every stage of UIX implementation.</p>
      </div>
    </div>
  );
};
