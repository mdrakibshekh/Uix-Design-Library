"use client";

import { cx } from "@/utils/cx";
import { AppStoreButton, GooglePlayButton } from "@/components/base/buttons/app-store-buttons";

interface StoreBadgeProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    store: "apple" | "google";
    variant?: "black" | "white" | "glass" | "outline";
    size?: "md" | "lg";
}

export const StoreBadge = ({ store, variant = "black", size = "md", className, ...props }: StoreBadgeProps) => {
    const Component = store === "apple" ? AppStoreButton : GooglePlayButton;

    const variantClasses = {
        black: "bg-black text-white ring-1 ring-white/10 shadow-lg",
        white: "bg-white text-black ring-1 ring-black/10 shadow-sm",
        glass: "bg-white/10 backdrop-blur-md text-white ring-1 ring-white/20 shadow-xl",
        outline: "bg-transparent text-fg-primary ring-1 ring-border shadow-none hover:bg-utility-gray-50 dark:hover:bg-utility-gray-900",
    };

    return (
        <Component
            {...props}
            size={size}
            className={cx(
                "transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]",
                variantClasses[variant],
                className
            )}
        />
    );
};

export const AppStoreGroup = ({ children, className }: { children: React.ReactNode; className?: string }) => {
    return (
        <div className={cx("flex flex-wrap gap-4", className)}>
            {children}
        </div>
    );
};
