"use client";

import type { AnchorHTMLAttributes, ButtonHTMLAttributes, DetailedHTMLProps, FC, ReactNode } from "react";
import React, { isValidElement } from "react";
import type { ButtonProps as AriaButtonProps, LinkProps as AriaLinkProps } from "react-aria-components";
import { Button as AriaButton, Link as AriaLink } from "react-aria-components";
import { cx, sortCx } from "@/utils/cx";
import { isReactComponent } from "@/utils/is-react-component";

export const styles = sortCx({
    common: {
        root: [
            "group relative inline-flex h-max cursor-pointer items-center justify-center whitespace-nowrap outline-none transition-all duration-200 ease-in-out before:absolute focus-visible:ring-2 focus-visible:ring-offset-2",
            // Disabled styles
            "disabled:cursor-not-allowed disabled:opacity-50",
            "*:data-icon:pointer-events-none *:data-icon:size-5 *:data-icon:shrink-0 *:data-icon:transition-all *:data-icon:duration-200",
            "aria-expanded:[&_[data-icon=trailing]]:rotate-180",
        ].join(" "),
        icon: "pointer-events-none size-5 shrink-0 transition-inherit-all",
    },
    sizes: {
        xs: {
            root: "gap-1 rounded-md px-2 py-1 text-xs font-semibold",
        },
        sm: {
            root: "gap-1.5 rounded-lg px-3 py-1.5 text-sm font-semibold",
        },
        md: {
            root: "gap-2 rounded-lg px-4 py-2 text-sm font-semibold",
        },
        lg: {
            root: "gap-2.5 rounded-xl px-5 py-2.5 text-md font-semibold",
        },
    },

    variants: {
        solid: {
            dark: "bg-slate-900 text-white hover:bg-slate-800 focus-visible:ring-slate-900",
            gray: "bg-slate-100 text-slate-900 hover:bg-slate-200 focus-visible:ring-slate-200",
            blue: "bg-brand-500 text-white hover:bg-brand-600 focus-visible:ring-brand-500",
            green: "bg-success-500 text-white hover:bg-success-600 focus-visible:ring-success-500",
            red: "bg-error-500 text-white hover:bg-error-600 focus-visible:ring-error-500",
            yellow: "bg-warning-500 text-white hover:bg-warning-600 focus-visible:ring-warning-500",
            light: "bg-white text-slate-900 hover:bg-slate-50 border border-slate-200 focus-visible:ring-slate-200",
            success: "bg-success-500 text-white hover:bg-success-600 focus-visible:ring-success-500",
            destructive: "bg-error-500 text-white hover:bg-error-600 focus-visible:ring-error-500",
            warning: "bg-warning-500 text-white hover:bg-warning-600 focus-visible:ring-warning-500",
            secondary: "bg-white text-slate-700 hover:bg-slate-50 border border-slate-200 shadow-xs focus-visible:ring-slate-200",
            "link-color": "text-brand-700 hover:text-brand-800 p-0 h-auto",
        },
        outlined: {
            dark: "border border-slate-500 text-slate-900 hover:bg-slate-50 focus-visible:ring-slate-900",
            gray: "border border-slate-200 text-slate-600 hover:bg-slate-50 focus-visible:ring-slate-200",
            blue: "border border-brand-300 text-brand-500 hover:bg-brand-50 focus-visible:ring-brand-500",
            green: "border border-success-500 text-success-500 hover:bg-success-50 focus-visible:ring-success-500",
            red: "border border-error-500 text-error-500 hover:bg-error-50 focus-visible:ring-error-500",
            yellow: "border border-warning-500 text-warning-500 hover:bg-warning-50 focus-visible:ring-warning-500",
            light: "border border-white/20 text-white hover:bg-white/10 focus-visible:ring-white",
            success: "border border-success-500 text-success-500 hover:bg-success-50 focus-visible:ring-success-500",
            destructive: "border border-error-500 text-error-500 hover:bg-error-50 focus-visible:ring-error-500",
            warning: "border border-warning-500 text-warning-500 hover:bg-warning-50 focus-visible:ring-warning-500",
            secondary: "border border-slate-200 text-slate-700 hover:bg-slate-50 focus-visible:ring-slate-200",
            "link-color": "text-brand-700 hover:text-brand-800",
        },
        ghost: {
            dark: "text-slate-900 hover:bg-slate-100",
            gray: "text-slate-600 hover:bg-slate-50",
            blue: "text-brand-600 hover:bg-brand-50",
            green: "text-success-600 hover:bg-success-50",
            red: "text-error-600 hover:bg-error-50",
            yellow: "text-warning-600 hover:bg-warning-50",
            light: "text-white hover:bg-white/10",
            success: "text-success-600 hover:bg-success-50",
            destructive: "text-error-600 hover:bg-error-50",
            warning: "text-warning-600 hover:bg-warning-50",
            secondary: "text-slate-600 hover:bg-slate-50",
            "link-color": "text-brand-700 hover:text-brand-800",
        },
        soft: {
            dark: "bg-slate-100 text-slate-900 hover:bg-slate-200",
            gray: "bg-slate-50 text-slate-600 hover:bg-slate-100",
            blue: "bg-brand-50 text-brand-700 hover:bg-brand-100",
            green: "bg-success-50 text-success-700 hover:bg-success-100",
            red: "bg-error-50 text-error-700 hover:bg-error-100",
            yellow: "bg-warning-50 text-warning-700 hover:bg-warning-100",
            light: "bg-white/10 text-white hover:bg-white/20",
            success: "bg-success-50 text-success-700 hover:bg-success-100",
            destructive: "bg-error-50 text-error-700 hover:bg-error-100",
            warning: "bg-warning-50 text-warning-700 hover:bg-warning-100",
            secondary: "bg-slate-50 text-slate-700 hover:bg-slate-100",
            "link-color": "bg-brand-50 text-brand-700",
        }
    },
});

/**
 * Common props shared between button and anchor variants
 */
export interface CommonProps {
    /** Disables the button and shows a disabled state */
    isDisabled?: boolean;
    /** Shows a loading spinner and disables the button */
    isLoading?: boolean;
    /** The size variant of the button */
    size?: keyof typeof styles.sizes;
    /** The style variant of the button */
    variant?: keyof typeof styles.variants;
    /** The color variant of the button */
    color?: "dark" | "gray" | "blue" | "green" | "red" | "yellow" | "light" | "success" | "destructive" | "warning" | "secondary" | "link-color";
    /** Icon component or element to show before the text */
    iconLeading?: FC<{ className?: string }> | ReactNode;
    /** Icon component or element to show after the text */
    iconTrailing?: FC<{ className?: string }> | ReactNode;
    /** Removes horizontal padding from the text content */
    noTextPadding?: boolean;
    /** When true, keeps the text visible during loading state */
    showTextWhileLoading?: boolean;
}

/**
 * Props for the button variant (non-link)
 */
export interface ButtonProps extends CommonProps, DetailedHTMLProps<Omit<ButtonHTMLAttributes<HTMLButtonElement>, "color" | "slot">, HTMLButtonElement> {
    /** Slot name for react-aria component */
    slot?: AriaButtonProps["slot"];
}

/**
 * Props for the link variant (anchor tag)
 */
interface LinkProps extends CommonProps, DetailedHTMLProps<Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "color">, HTMLAnchorElement> {
    /** Options for the configured client side router. */
    routerOptions?: AriaLinkProps["routerOptions"];
}

/** Union type of button and link props */
export type Props = ButtonProps | LinkProps;

export const Button = ({
    size = "md",
    variant = "solid",
    color = "blue",
    children,
    className,
    noTextPadding,
    iconLeading: IconLeading,
    iconTrailing: IconTrailing,
    isDisabled: disabled,
    isLoading: loading,
    showTextWhileLoading,
    ...otherProps
}: Props) => {
    const href = "href" in otherProps ? otherProps.href : undefined;
    const Component = href ? AriaLink : AriaButton;

    const isIcon = (IconLeading || IconTrailing) && !children;

    let props = {};

    if (href) {
        props = {
            ...otherProps,

            href: disabled ? undefined : href,
        };
    } else {
        props = {
            ...otherProps,

            type: otherProps.type || "button",
            isPending: loading,
        };
    }

    return (
        <Component
            data-loading={loading ? true : undefined}
            data-icon-only={isIcon ? true : undefined}
            {...props}
            isDisabled={disabled}
            className={cx(
                styles.common.root,
                styles.sizes[size].root,
                styles.variants[variant][color as keyof typeof styles.variants.solid],
                (loading || (href && (disabled || loading))) && "pointer-events-none",
                // If in `loading` state, hide everything except the loading icon (and text if `showTextWhileLoading` is true).
                loading && (showTextWhileLoading ? "[&>*:not([data-icon=loading]):not([data-text])]:hidden" : "[&>*:not([data-icon=loading])]:invisible"),
                className,
            )}
        >
            {/* Leading icon */}
            {isValidElement(IconLeading) && IconLeading}
            {isReactComponent(IconLeading) && <IconLeading data-icon="leading" className={styles.common.icon} />}

            {loading && (
                <svg
                    fill="none"
                    data-icon="loading"
                    viewBox="0 0 20 20"
                    className={cx(styles.common.icon, !showTextWhileLoading && "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2")}
                >
                    {/* Background circle */}
                    <circle className="stroke-current opacity-30" cx="10" cy="10" r="8" fill="none" strokeWidth="2" />
                    {/* Spinning circle */}
                    <circle
                        className="origin-center animate-spin stroke-current"
                        cx="10"
                        cy="10"
                        r="8"
                        fill="none"
                        strokeWidth="2"
                        strokeDasharray="12.5 50"
                        strokeLinecap="round"
                    />
                </svg>
            )}

            {children && (
                <span data-text className={cx("transition-inherit-all", !noTextPadding && "px-0.5")}>
                    {children}
                </span>
            )}

            {/* Trailing icon */}
            {isValidElement(IconTrailing) && IconTrailing}
            {isReactComponent(IconTrailing) && <IconTrailing data-icon="trailing" className={styles.common.icon} />}
        </Component>
    );
};
