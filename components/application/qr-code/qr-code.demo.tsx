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

export const BrandedQRCodeColorfulDemo = () => (
    <BrandedQRCode
        data="https://uix.design"
        logo="/Logos/Main logo transparent.svg"
        variant="colorful"
    />
);

export const BrandedQRCodeMinimalDemo = () => (
    <BrandedQRCode
        data="https://uix.design"
        variant="minimal"
    />
);

export const BrandedQRCodeClassicDemo = () => (
    <BrandedQRCode
        data="https://uix.design"
        variant="classic"
    />
);

export const BrandedQRCodeModernDemo = () => (
    <BrandedQRCode
        data="https://uix.design"
        logo="/Logos/Main logo transparent.svg"
        variant="modern"
    />
);

export const BrandedQRCodeElegantDemo = () => (
    <BrandedQRCode
        data="https://uix.design"
        logo="/Logos/Main logo transparent.svg"
        variant="elegant"
    />
);

export const BrandedQRCodeDemo = () => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-center">
            <div className="flex flex-col items-center gap-4">
                <p className="text-xs font-bold text-tertiary uppercase tracking-widest">Brand</p>
                <BrandedQRCode
                    data="https://uix.design"
                    logo="/Logos/Main logo transparent.svg"
                    variant="brand"
                    size={150}
                />
            </div>

            <div className="flex flex-col items-center gap-4 p-8 bg-slate-900 rounded-2xl">
                <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Dark</p>
                <BrandedQRCode
                    data="https://uix.design"
                    logo="/Logos/Main logo dark mode.svg"
                    variant="dark"
                    size={150}
                />
            </div>

            <div className="flex flex-col items-center gap-4">
                <p className="text-xs font-bold text-tertiary uppercase tracking-widest">Light</p>
                <BrandedQRCode
                    data="https://uix.design"
                    variant="light"
                    size={150}
                />
            </div>

            <div className="flex flex-col items-center gap-4">
                <p className="text-xs font-bold text-tertiary uppercase tracking-widest">Colorful</p>
                <BrandedQRCode
                    data="https://uix.design"
                    logo="/Logos/Main logo transparent.svg"
                    variant="colorful"
                    size={150}
                />
            </div>

            <div className="flex flex-col items-center gap-4">
                <p className="text-xs font-bold text-tertiary uppercase tracking-widest">Minimal</p>
                <BrandedQRCode
                    data="https://uix.design"
                    variant="minimal"
                    size={150}
                />
            </div>

            <div className="flex flex-col items-center gap-4">
                <p className="text-xs font-bold text-tertiary uppercase tracking-widest">Classic</p>
                <BrandedQRCode
                    data="https://uix.design"
                    variant="classic"
                    size={150}
                />
            </div>

            <div className="flex flex-col items-center gap-4">
                <p className="text-xs font-bold text-tertiary uppercase tracking-widest">Modern</p>
                <BrandedQRCode
                    data="https://uix.design"
                    logo="/Logos/Main logo transparent.svg"
                    variant="modern"
                    size={150}
                />
            </div>

            <div className="flex flex-col items-center gap-4">
                <p className="text-xs font-bold text-tertiary uppercase tracking-widest">Elegant</p>
                <BrandedQRCode
                    data="https://uix.design"
                    logo="/Logos/Main logo transparent.svg"
                    variant="elegant"
                    size={150}
                />
            </div>
        </div>
    );
};
