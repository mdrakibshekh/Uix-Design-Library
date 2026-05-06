"use client";

import type { ReactNode } from "react";
import { CheckCircle, InfoCircle, AlertTriangle, ShieldTick } from "@untitledui/icons";
import { cx } from "@/utils/cx";

export type AlertVariant = "solid" | "soft" | "outline" | "ghost";
export type AlertTone = "dark" | "gray" | "success" | "warning" | "error" | "info" | "brand" | "light";

interface AlertProps {
    title: string;
    description: string;
    variant?: AlertVariant;
    tone?: AlertTone;
    icon?: ReactNode;
    action?: ReactNode;
    className?: string;
}

const variantStyles: Record<AlertVariant, string> = {
    solid: "border border-transparent shadow-sm",
    soft: "border border-transparent",
    outline: "border",
    ghost: "border border-transparent bg-transparent shadow-none",
};

const toneStyles: Record<AlertTone, Record<AlertVariant, string>> = {
    dark: {
        solid: "bg-slate-950 text-white",
        soft: "bg-slate-900/10 text-slate-950",
        outline: "bg-transparent text-slate-950 border-slate-300/30",
        ghost: "bg-transparent text-slate-950",
    },
    gray: {
        solid: "bg-slate-100 text-slate-950",
        soft: "bg-slate-100/80 text-slate-950",
        outline: "bg-transparent text-slate-950 border-slate-200",
        ghost: "bg-transparent text-slate-950",
    },
    success: {
        solid: "bg-emerald-600 text-white",
        soft: "bg-emerald-100 text-emerald-900",
        outline: "bg-transparent text-emerald-900 border-emerald-200",
        ghost: "bg-transparent text-emerald-900",
    },
    warning: {
        solid: "bg-amber-500 text-slate-950",
        soft: "bg-amber-100 text-amber-900",
        outline: "bg-transparent text-amber-900 border-amber-200",
        ghost: "bg-transparent text-amber-900",
    },
    error: {
        solid: "bg-rose-600 text-white",
        soft: "bg-rose-100 text-rose-900",
        outline: "bg-transparent text-rose-900 border-rose-200",
        ghost: "bg-transparent text-rose-900",
    },
    info: {
        solid: "bg-sky-600 text-white",
        soft: "bg-sky-100 text-sky-900",
        outline: "bg-transparent text-sky-900 border-sky-200",
        ghost: "bg-transparent text-sky-900",
    },
    brand: {
        solid: "bg-brand-primary text-white",
        soft: "bg-brand-secondary/10 text-brand-primary",
        outline: "bg-transparent text-brand-primary border-brand-secondary",
        ghost: "bg-transparent text-brand-primary",
    },
    light: {
        solid: "bg-white text-slate-950",
        soft: "bg-slate-50 text-slate-950",
        outline: "bg-transparent text-slate-950 border-slate-200",
        ghost: "bg-transparent text-slate-950",
    },
};

const iconMap: Record<AlertTone, ReactNode> = {
    dark: <ShieldTick className="size-5" />,
    gray: <InfoCircle className="size-5" />,
    success: <CheckCircle className="size-5" />,
    warning: <AlertTriangle className="size-5" />,
    error: <AlertTriangle className="size-5" />,
    info: <InfoCircle className="size-5" />,
    brand: <ShieldTick className="size-5" />,
    light: <InfoCircle className="size-5" />,
};

export const Alert = ({ title, description, variant = "solid", tone = "brand", icon, action, className }: AlertProps) => {
    const toneClass = toneStyles[tone]?.[variant] ?? toneStyles.brand[variant];

    return (
        <div className={cx("rounded-3xl p-4 shadow-sm", variantStyles[variant], toneClass, className)}>
            <div className="flex items-start gap-3">
                <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10 text-current">{icon ?? iconMap[tone]}</div>
                <div className="min-w-0">
                    <h3 className="text-sm font-semibold text-current">{title}</h3>
                    <p className="mt-1 text-sm text-current/80">{description}</p>
                </div>
            </div>
            {action ? <div className="mt-4">{action}</div> : null}
        </div>
    );
};
