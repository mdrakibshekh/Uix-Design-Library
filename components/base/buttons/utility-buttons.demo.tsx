"use client";

import { CopyButton, RefreshButton, EditButton, DeleteButton, MoreButton, ExternalLinkButton } from "./utility-buttons";

export const UtilityButtonsPreview = () => (
    <div className="flex gap-2">
        <CopyButton value="https://uix.design" />
        <RefreshButton />
        <EditButton />
        <DeleteButton />
    </div>
);

export const UtilityButtonsStandardDemo = () => (
    <div className="flex gap-4 items-center">
        <CopyButton value="https://uix.design" />
        <RefreshButton />
        <EditButton />
        <DeleteButton />
        <MoreButton />
        <ExternalLinkButton />
    </div>
);

export const UtilityButtonsTertiaryDemo = () => (
    <div className="flex gap-4 items-center">
        <CopyButton value="https://uix.design" color="tertiary" />
        <RefreshButton color="tertiary" />
        <EditButton color="tertiary" />
        <DeleteButton color="tertiary" />
        <MoreButton color="tertiary" />
        <ExternalLinkButton color="tertiary" />
    </div>
);

export const UtilityButtonsXSDemo = () => (
    <div className="flex gap-4 items-center">
        <CopyButton value="https://uix.design" size="xs" />
        <RefreshButton size="xs" />
        <EditButton size="xs" />
        <DeleteButton size="xs" />
        <MoreButton size="xs" />
        <ExternalLinkButton size="xs" />
    </div>
);

export const UtilityButtonsDemo = () => {
    return (
        <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-4">
                <p className="text-sm font-semibold text-primary">Standard Utility Buttons</p>
                <div className="flex gap-4 items-center">
                    <CopyButton value="https://uix.design" />
                    <RefreshButton />
                    <EditButton />
                    <DeleteButton />
                    <MoreButton />
                    <ExternalLinkButton />
                </div>
            </div>

            <div className="flex flex-col gap-4">
                <p className="text-sm font-semibold text-primary">Tertiary Style</p>
                <div className="flex gap-4 items-center">
                    <CopyButton value="https://uix.design" color="tertiary" />
                    <RefreshButton color="tertiary" />
                    <EditButton color="tertiary" />
                    <DeleteButton color="tertiary" />
                    <MoreButton color="tertiary" />
                    <ExternalLinkButton color="tertiary" />
                </div>
            </div>

            <div className="flex flex-col gap-4">
                <p className="text-sm font-semibold text-primary">Extra Small (XS)</p>
                <div className="flex gap-4 items-center">
                    <CopyButton value="https://uix.design" size="xs" />
                    <RefreshButton size="xs" />
                    <EditButton size="xs" />
                    <DeleteButton size="xs" />
                    <MoreButton size="xs" />
                    <ExternalLinkButton size="xs" />
                </div>
            </div>
        </div>
    );
};
