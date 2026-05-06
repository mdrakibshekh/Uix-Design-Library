"use client";

import { type ImgHTMLAttributes, type PropsWithChildren, type RefAttributes, createContext, useContext, useState } from "react";
import { User01 } from "@untitledui/icons";
import {
    Tag as AriaTag,
    TagGroup as AriaTagGroup,
    type TagGroupProps as AriaTagGroupProps,
    TagList as AriaTagList,
    type TagProps as AriaTagProps,
} from "react-aria-components";
import { Dot } from "@/components/foundations/dot-icon";
import { cx } from "@/utils/cx";
import { TagCheckbox } from "./base-components/tag-checkbox";
import { TagCloseX } from "./base-components/tag-close-x";

export const TagAvatar = ({ src, alt, contrastBorder = true, className }: ImgHTMLAttributes<HTMLImageElement> & { contrastBorder?: boolean }) => {
    const [isFailed, setIsFailed] = useState(false);

    return (
        <div
            className={cx(
                "relative inline-flex size-4 shrink-0 items-center justify-center overflow-hidden rounded-full bg-tertiary",
                contrastBorder && "outline-[0.5px] -outline-offset-[0.5px] outline-black/16",
                className,
            )}
        >
            {src && !isFailed ? (
                <img data-avatar-img className="size-full object-cover" src={src} alt={alt} onError={() => setIsFailed(true)} />
            ) : (
                <User01 className="size-3 stroke-[2.25px] text-fg-quaternary" />
            )}
        </div>
    );
};

export interface TagItem {
    id: string;
    label: string;
    count?: number;
    avatarSrc?: string;
    avatarContrastBorder?: boolean;
    dot?: boolean;
    dotClassName?: string;
    isDisabled?: boolean;
    onClose?: (id: string) => void;
    color?: "gray" | "brand" | "error" | "warning" | "success" | "indigo" | "purple" | "blue-light" | "pink" | "orange";
}

const TagGroupContext = createContext<{
    selectionMode: "none" | "single" | "multiple";
    size: "sm" | "md" | "lg";
}>({
    selectionMode: "none",
    size: "sm",
});

interface TagGroupProps extends AriaTagGroupProps, RefAttributes<HTMLDivElement> {
    label: string;
    size?: "sm" | "md" | "lg";
}

export const TagGroup = ({ label, selectionMode = "none", size = "sm", children, ...otherProps }: TagGroupProps) => {
    return (
        <TagGroupContext.Provider value={{ selectionMode, size }}>
            <AriaTagGroup aria-label={label} selectionMode={selectionMode} disallowEmptySelection={selectionMode === "single"} {...otherProps}>
                {children}
            </AriaTagGroup>
        </TagGroupContext.Provider>
    );
};

export const TagList = AriaTagList;

const styles = {
    sm: {
        root: {
            base: "px-2 py-0.75 text-xs font-medium",
            withCheckbox: "pl-1.25",
            withAvatar: "pl-1",
            withDot: "pl-1.5",
            withCount: "pr-1",
            withClose: "pr-1",
        },
        content: "gap-1",
        count: "px-1 text-xs font-medium",
    },
    md: {
        root: {
            base: "px-2.25 py-0.5 text-sm font-medium",
            withCheckbox: "pl-1",
            withAvatar: "pl-1.25",
            withDot: "pl-1.75",
            withCount: "pr-0.75",
            withClose: "pr-1",
        },
        content: "gap-1.25",
        count: "px-1.25 text-xs font-medium",
    },
    lg: {
        root: {
            base: "px-2.5 py-1 text-sm font-medium",
            withCheckbox: "pl-1.25",
            withAvatar: "pl-1.75",
            withDot: "pl-2.25",
            withCount: "pr-1",
            withClose: "pr-1",
        },
        content: "gap-1.5",
        count: "px-1.5 text-sm font-medium",
    },
};

interface TagProps extends AriaTagProps, RefAttributes<object>, Omit<TagItem, "label" | "id"> {}

export const Tag = ({
    id,
    avatarSrc,
    avatarContrastBorder = true,
    dot,
    dotClassName,
    isDisabled,
    count,
    className,
    children,
    onClose,
    color = "gray",
}: PropsWithChildren<TagProps>) => {
    const context = useContext(TagGroupContext);

    const colorStyles = {
        gray: "bg-utility-neutral-50 text-utility-neutral-600 ring-utility-neutral-100 dark:bg-utility-neutral-100/30 dark:text-utility-neutral-200 dark:ring-utility-neutral-800",
        brand: "bg-utility-brand-50 text-utility-brand-700 ring-utility-brand-200 dark:bg-utility-brand-900/30 dark:text-utility-brand-300 dark:ring-utility-brand-800",
        error: "bg-utility-red-50 text-utility-red-700 ring-utility-red-200 dark:bg-utility-red-900/30 dark:text-utility-red-300 dark:ring-utility-red-800",
        warning: "bg-utility-yellow-50 text-utility-yellow-700 ring-utility-yellow-200 dark:bg-utility-yellow-900/30 dark:text-utility-yellow-300 dark:ring-utility-yellow-800",
        success: "bg-utility-green-50 text-utility-green-700 ring-utility-green-200 dark:bg-utility-green-900/30 dark:text-utility-green-300 dark:ring-utility-green-800",
        indigo: "bg-utility-indigo-50 text-utility-indigo-700 ring-utility-indigo-200 dark:bg-utility-indigo-900/30 dark:text-utility-indigo-300 dark:ring-utility-indigo-800",
        purple: "bg-utility-purple-50 text-utility-purple-700 ring-utility-purple-200 dark:bg-utility-purple-900/30 dark:text-utility-purple-300 dark:ring-utility-purple-800",
        "blue-light": "bg-utility-blue-50 text-utility-blue-700 ring-utility-blue-200 dark:bg-utility-blue-900/30 dark:text-utility-blue-300 dark:ring-utility-blue-800",
        pink: "bg-utility-pink-50 text-utility-pink-700 ring-utility-pink-200 dark:bg-utility-pink-900/30 dark:text-utility-pink-300 dark:ring-utility-pink-800",
        orange: "bg-utility-orange-50 text-utility-orange-700 ring-utility-orange-200 dark:bg-utility-orange-900/30 dark:text-utility-orange-300 dark:ring-utility-orange-800",
    };

    const dotColors = {
        gray: "text-fg-quaternary",
        brand: "text-utility-brand-500",
        error: "text-utility-red-500",
        warning: "text-utility-yellow-500",
        success: "text-utility-green-500",
        indigo: "text-utility-indigo-500",
        purple: "text-utility-purple-500",
        "blue-light": "text-utility-blue-500",
        pink: "text-utility-pink-500",
        orange: "text-utility-orange-500",
    };

    const leadingContent = avatarSrc ? (
        <TagAvatar src={avatarSrc} alt="Avatar" contrastBorder={avatarContrastBorder} />
    ) : dot ? (
        <Dot className={cx(dotColors[color], dotClassName)} size="sm" />
    ) : null;

    return (
        <AriaTag
            id={id}
            isDisabled={isDisabled}
            textValue={typeof children === "string" ? children : undefined}
            className={(state) =>
                cx(
                    "flex cursor-default items-center gap-0.75 rounded-md outline-focus-ring transition duration-50 ease-linear ring-1 ring-inset focus-visible:outline-2 focus-visible:outline-offset-2",
                    colorStyles[color],
                    styles[context.size].root.base,

                    // With avatar
                    avatarSrc && styles[context.size].root.withAvatar,
                    // With X button
                    (onClose || state.allowsRemoving) && styles[context.size].root.withClose,
                    // With dot
                    dot && styles[context.size].root.withDot,
                    // With count
                    typeof count === "number" && styles[context.size].root.withCount,
                    // With checkbox
                    context.selectionMode !== "none" && styles[context.size].root.withCheckbox,
                    // Disabled
                    isDisabled && "cursor-not-allowed",

                    typeof className === "function" ? className(state) : className,
                )
            }
        >
            {({ isSelected, isDisabled, allowsRemoving }) => (
                <>
                    <div className={cx("flex items-center gap-1", styles[context.size].content)}>
                        {context.selectionMode !== "none" && <TagCheckbox size={context.size} isSelected={isSelected} isDisabled={isDisabled} />}

                        {leadingContent}

                        {children}

                        {typeof count === "number" && (
                            <span className={cx("flex items-center justify-center rounded-[3px] bg-tertiary text-center", styles[context.size].count)}>
                                {count}
                            </span>
                        )}
                    </div>

                    {(onClose || allowsRemoving) && (
                        <TagCloseX size={context.size} excludeFromTabOrder={allowsRemoving} onPress={() => id && onClose?.(id.toString())} />
                    )}
                </>
            )}
        </AriaTag>
    );
};
