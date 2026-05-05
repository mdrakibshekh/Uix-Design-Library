"use client";

import React, { useState } from "react";
import { 
    Copy, 
    Check, 
    RefreshCw, 
    Pencil, 
    Trash2, 
    MoreHorizontal,
    ExternalLink
} from "lucide-react";
import { ButtonUtility, Props as ButtonUtilityProps } from "./button-utility";
import { cx } from "@/utils/cx";

export const CopyButton = ({ value, ...props }: ButtonUtilityProps & { value: string }) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(value);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <ButtonUtility
            {...props}
            icon={copied ? Check : Copy}
            tooltip={copied ? "Copied!" : (props.tooltip || "Copy to clipboard")}
            onPress={handleCopy}
            className={cx(copied && "text-utility-success-600", props.className)}
        />
    );
};

export const RefreshButton = (props: ButtonUtilityProps) => (
    <ButtonUtility
        {...props}
        icon={RefreshCw}
        tooltip={props.tooltip || "Refresh"}
        className={cx("hover:rotate-180 transition-transform duration-500", props.className)}
    />
);

export const EditButton = (props: ButtonUtilityProps) => (
    <ButtonUtility
        {...props}
        icon={Pencil}
        tooltip={props.tooltip || "Edit"}
    />
);

export const DeleteButton = (props: ButtonUtilityProps) => (
    <ButtonUtility
        {...props}
        icon={Trash2}
        tooltip={props.tooltip || "Delete"}
        className={cx("hover:text-utility-error-600 hover:bg-utility-error-50 dark:hover:bg-utility-error-900/20", props.className)}
    />
);

export const MoreButton = (props: ButtonUtilityProps) => (
    <ButtonUtility
        {...props}
        icon={MoreHorizontal}
        tooltip={props.tooltip || "More actions"}
    />
);

export const ExternalLinkButton = (props: ButtonUtilityProps) => (
    <ButtonUtility
        {...props}
        icon={ExternalLink}
        tooltip={props.tooltip || "Open in new tab"}
    />
);
