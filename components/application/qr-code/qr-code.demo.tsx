"use client";

import { BrandedQRCode } from "./qr-code";

export const BrandedQRCodePreview = () => (
    <div className="scale-75 origin-center">
        <BrandedQRCode data="https://uix.design" logo="/Logos/Main logo transparent.svg" variant="brand" />
    </div>
);

export const BrandedQRCodeBrandDemo = () => (
    <BrandedQRCode
        data="https://uix.design"
        logo="/Logos/Main logo transparent.svg"
        variant="brand"
    />
);

export const BrandedQRCodeDarkDemo = () => (
    <div className="p-12 bg-slate-900 rounded-[2rem] w-full flex justify-center">
        <BrandedQRCode
            data="https://uix.design"
            logo="/Logos/Main logo dark mode.svg"
            variant="dark"
        />
    </div>
);

export const BrandedQRCodeLightDemo = () => (
    <BrandedQRCode
        data="https://uix.design"
        variant="light"
    />
);

export const BrandedQRCodeDemo = () => {
    return (
        <div className="flex flex-wrap gap-12 items-center justify-center">
            <div className="flex flex-col items-center gap-4">
                <p className="text-xs font-bold text-tertiary uppercase tracking-widest">Brand Theme</p>
                <BrandedQRCode
                    data="https://uix.design"
                    logo="/Logos/Main logo transparent.svg"
                    variant="brand"
                />
            </div>

            <div className="flex flex-col items-center gap-4 p-8 bg-slate-900 rounded-2xl">
                <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Dark Theme</p>
                <BrandedQRCode
                    data="https://uix.design"
                    logo="/Logos/Main logo dark mode.svg"
                    variant="dark"
                />
            </div>

            <div className="flex flex-col items-center gap-4">
                <p className="text-xs font-bold text-tertiary uppercase tracking-widest">Simple Light</p>
                <BrandedQRCode
                    data="https://uix.design"
                    variant="light"
                />
            </div>
        </div>
    );
};
