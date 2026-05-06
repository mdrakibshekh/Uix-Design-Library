"use client";

import type { HTMLAttributes } from "react";
import type { ReactNode } from "react";
import { cx } from "@/utils/cx";

export interface CountryFlagData {
    name: string;
    code: string;
    flag: string;
    phoneCode: string;
    phoneMask?: string;
}

export interface FlagProps extends HTMLAttributes<HTMLDivElement> {
    country: CountryFlagData;
    size?: "sm" | "md" | "lg";
    showName?: boolean;
    showPhoneCode?: boolean;
    badge?: boolean;
    icon?: ReactNode;
}

const sizeClasses: Record<NonNullable<FlagProps["size"]>, string> = {
    sm: "h-6 w-8",
    md: "h-8 w-12",
    lg: "h-10 w-14",
};

export const Flag = ({ country, size = "md", showName = true, showPhoneCode = false, className, ...props }: FlagProps) => {
    return (
        <div
            {...props}
            className={cx(
                "flex items-center gap-3 rounded-3xl border border-secondary_alt bg-primary px-3 py-2 shadow-sm",
                className,
            )}
        >
            <img
                src={country.flag}
                alt={`Flag of ${country.name}`}
                className={cx("rounded-sm object-cover", sizeClasses[size])}
                loading="lazy"
            />
            {showName ? (
                <div className="min-w-0">
                    <p className="text-sm font-semibold text-fg-primary">{country.name}</p>
                    {showPhoneCode ? <p className="text-xs text-fg-secondary">+{country.phoneCode}</p> : null}
                </div>
            ) : null}
        </div>
    );
};
