"use client";

import type { FC, MouseEventHandler, ReactNode } from "react";
import { Pressable } from "react-aria-components";
import { Tooltip } from "@/components/base/tooltip/tooltip";
import { cx } from "@/utils/cx";

interface NavButtonProps {
    /** Whether the collapsible nav item is open. */
    open?: boolean;
    /** URL to navigate to when the button is clicked. */
    href?: string;
    /** Label text for the button. */
    label?: string;
    /** Icon component to display. */
    icon?: FC<{ className?: string }>;
    /** Whether the button is currently active. */
    current?: boolean;
    /** Handler for click events. */
    onClick?: MouseEventHandler;
    /** Additional CSS classes to apply to the button. */
    className?: string;
    /** Placement of the tooltip. */
    tooltipPlacement?: "top" | "right" | "bottom" | "left";
    /** Content to display. */
    children?: ReactNode;
}

export const NavButton = ({ current, label, href, icon: Icon, className, tooltipPlacement = "right", onClick, children }: NavButtonProps) => {
    const iconOnly = !children;

    return (
        <Tooltip isDisabled={!label} title={label} placement={tooltipPlacement}>
            <Pressable aria-label={label || (typeof children === "string" ? children : undefined)}>
                <a
                    href={href}
                    aria-label={label}
                    onClick={onClick}
                    className={cx(
                        "group/item relative flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-transparent outline-focus-ring transition-all duration-200 ease-in-out select-none hover:bg-slate-50 dark:hover:bg-slate-800/50 focus-visible:z-10 focus-visible:outline-2 focus-visible:outline-offset-2",
                        current && "bg-brand-50 dark:bg-brand-900/20 text-brand-700 dark:text-brand-400 font-bold",
                        iconOnly ? "size-10" : "px-4 py-2.5",
                        className,
                    )}
                >
                    {Icon && (
                        <Icon
                            aria-hidden="true"
                            className={cx(
                                "size-5 shrink-0 text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-300 transition-colors",
                                current && "text-brand-600 dark:text-brand-400",
                            )}
                        />
                    )}

                    {children && (
                        <span
                            className={cx(
                                "text-sm font-semibold transition-colors text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white",
                                current && "text-brand-700 dark:text-brand-400",
                            )}
                        >
                            {children}
                        </span>
                    )}
                </a>
            </Pressable>
        </Tooltip>
    );
};
