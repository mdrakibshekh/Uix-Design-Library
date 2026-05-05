"use client";

import { StoreBadge, AppStoreGroup } from "./mobile-app-buttons";

export const MobileAppButtonsPreview = () => (
    <div className="flex gap-4">
        <StoreBadge store="apple" variant="black" />
        <StoreBadge store="google" variant="black" />
    </div>
);

export const MobileAppButtonsBlackDemo = () => (
    <AppStoreGroup>
        <StoreBadge store="apple" variant="black" />
        <StoreBadge store="google" variant="black" />
    </AppStoreGroup>
);

export const MobileAppButtonsWhiteDemo = () => (
    <AppStoreGroup>
        <StoreBadge store="apple" variant="white" />
        <StoreBadge store="google" variant="white" />
    </AppStoreGroup>
);

export const MobileAppButtonsGlassDemo = () => (
    <div className="p-12 bg-slate-900 rounded-2xl w-full flex justify-center">
        <AppStoreGroup>
            <StoreBadge store="apple" variant="glass" />
            <StoreBadge store="google" variant="glass" />
        </AppStoreGroup>
    </div>
);

export const MobileAppButtonsOutlineDemo = () => (
    <AppStoreGroup>
        <StoreBadge store="apple" variant="outline" />
        <StoreBadge store="google" variant="outline" />
    </AppStoreGroup>
);

export const MobileAppButtonsDemo = () => {
    return (
        <div className="flex flex-col gap-8">
            <AppStoreGroup>
                <StoreBadge store="apple" variant="black" />
                <StoreBadge store="google" variant="black" />
            </AppStoreGroup>
            
            <AppStoreGroup>
                <StoreBadge store="apple" variant="white" />
                <StoreBadge store="google" variant="white" />
            </AppStoreGroup>

            <AppStoreGroup className="p-8 bg-slate-900 rounded-xl">
                <StoreBadge store="apple" variant="glass" />
                <StoreBadge store="google" variant="glass" />
            </AppStoreGroup>

            <AppStoreGroup>
                <StoreBadge store="apple" variant="outline" />
                <StoreBadge store="google" variant="outline" />
            </AppStoreGroup>
        </div>
    );
};
