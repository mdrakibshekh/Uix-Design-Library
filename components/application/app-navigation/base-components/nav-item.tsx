"use client";

import type { FC, HTMLAttributes, MouseEventHandler, ReactNode } from "react";
import { ChevronDown, Share04 } from "@untitledui/icons";
import { Link as AriaLink } from "react-aria-components";
import { Badge } from "@/components/base/badges/badges";
import { cx, sortCx } from "@/utils/cx";

const styles = sortCx({
    root: "group relative flex min-h-[40px] w-full cursor-pointer items-center rounded-xl bg-transparent outline-focus-ring transition-all duration-200 ease-in-out select-none hover:bg-slate-50 dark:hover:bg-slate-800/50 focus-visible:z-10 focus-visible:outline-2 focus-visible:outline-offset-2",
    rootSelected: "bg-brand-50 dark:bg-brand-900/20 text-brand-700 dark:text-brand-400 font-bold",
});

interface NavItemBaseProps {
    /** Whether the nav item shows only an icon. */
    iconOnly?: boolean;
    /** Whether the collapsible nav item is open. */
    open?: boolean;
    /** URL to navigate to when the nav item is clicked. */
    href?: string;
    /** Type of the nav item. */
    type: "link" | "collapsible" | "collapsible-child";
    /** Icon component to display. */
    icon?: FC<HTMLAttributes<HTMLOrSVGElement>>;
    /** Badge to display. */
    badge?: ReactNode;
    /** Whether the nav item is currently active. */
    current?: boolean;
    /** Whether to truncate the label text. */
    truncate?: boolean;
    /** Handler for click events. */
    onClick?: MouseEventHandler;
    /** Content to display. */
    children?: ReactNode;
}

export const NavItemBase = ({ current, type, badge, href, icon: Icon, children, truncate = true, onClick }: NavItemBaseProps) => {
    const iconElement = Icon && (
        <Icon
            aria-hidden="true"
            className={cx(
                "mr-3 size-5 shrink-0 text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-300 transition-colors",
                current && "text-brand-600 dark:text-brand-400",
            )}
        />
    );

    const badgeElement =
        badge && (typeof badge === "string" || typeof badge === "number") ? (
            <Badge className="ml-3" color="gray" type="pill-color" size="sm">
                {badge}
            </Badge>
        ) : (
            badge
        );

    const labelElement = (
        <span
            className={cx(
                "flex-1 text-sm font-semibold text-slate-600 dark:text-slate-400 transition-colors group-hover:text-slate-900 dark:group-hover:text-white",
                truncate && "truncate",
                current && "text-brand-700 dark:text-brand-400",
            )}
        >
            {children}
        </span>
    );

    const isExternal = href && href.startsWith("http");
    const externalIcon = isExternal && <Share04 className="size-4 stroke-[2.5px] text-fg-quaternary" />;

    if (type === "collapsible") {
        return (
            <summary className={cx("p-2", styles.root, current && styles.rootSelected)} onClick={onClick}>
                {iconElement}

                {labelElement}

                {badgeElement}

                <ChevronDown aria-hidden="true" className={cx("ml-3 size-4 shrink-0 transition-transform duration-200 text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-300", current && "text-brand-600 dark:text-brand-400", "in-open:-scale-y-100")} />
            </summary>
        );
    }

    if (type === "collapsible-child") {
        return (
            <AriaLink
                href={href!}
                target={isExternal ? "_blank" : "_self"}
                rel="noopener noreferrer"
                className={cx("py-2 pr-3 pl-10", styles.root, current && styles.rootSelected)}
                onClick={onClick}
                aria-current={current ? "page" : undefined}
            >
                {labelElement}
                {externalIcon}
                {badgeElement}
            </AriaLink>
        );
    }

    return (
        <AriaLink
            href={href!}
            target={isExternal ? "_blank" : "_self"}
            rel="noopener noreferrer"
            className={cx("group/item p-2", styles.root, current && styles.rootSelected)}
            onClick={onClick}
            aria-current={current ? "page" : undefined}
        >
            {iconElement}
            {labelElement}
            {externalIcon}
            {badgeElement}
        </AriaLink>
    );
};
