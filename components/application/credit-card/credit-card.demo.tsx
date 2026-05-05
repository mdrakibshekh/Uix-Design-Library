"use client";

import { useState } from "react";
import { CreditCard } from "./credit-card";

export const CreditCardPreview = () => (
    <div className="scale-75 origin-center">
        <CreditCard brand="visa" variant="brand" />
    </div>
);

export const CreditCardBrandDemo = () => (
    <CreditCard brand="visa" variant="brand" />
);

export const CreditCardGradientDemo = () => (
    <CreditCard brand="mastercard" variant="gradient" cardNumber="•••• •••• •••• 8888" cardHolder="OLIVIA RHYE" />
);

export const CreditCardGlassDemo = () => (
    <div className="p-12 bg-slate-900 rounded-[2rem] w-full flex justify-center">
        <CreditCard brand="amex" variant="glass" cardNumber="•••• •••••• •1005" cardHolder="PHOENIX BAKER" />
    </div>
);

export const CreditCardDarkLightDemo = () => (
    <div className="flex flex-col md:flex-row gap-8">
        <CreditCard brand="visa" variant="dark" />
        <CreditCard brand="mastercard" variant="light" />
    </div>
);

export const CreditCardInteractiveDemo = () => {
    const [variant, setVariant] = useState<"brand" | "glass" | "dark" | "light" | "gradient" | "ocean" | "sunset" | "forest" | "midnight">("brand");

    const variants = [
        { name: "Brand", value: "brand" as const },
        { name: "Glass", value: "glass" as const },
        { name: "Dark", value: "dark" as const },
        { name: "Light", value: "light" as const },
        { name: "Gradient", value: "gradient" as const },
        { name: "Ocean", value: "ocean" as const },
        { name: "Sunset", value: "sunset" as const },
        { name: "Forest", value: "forest" as const },
        { name: "Midnight", value: "midnight" as const },
    ];

    return (
        <div className="flex flex-col gap-8 items-center">
            <CreditCard brand="visa" variant={variant} />
            <div className="flex flex-wrap gap-2 justify-center">
                {variants.map((v) => (
                    <button
                        key={v.value}
                        onClick={() => setVariant(v.value)}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                            variant === v.value
                                ? "bg-brand-primary text-white"
                                : "bg-secondary hover:bg-secondary_hover text-primary"
                        }`}
                    >
                        {v.name}
                    </button>
                ))}
            </div>
        </div>
    );
};
