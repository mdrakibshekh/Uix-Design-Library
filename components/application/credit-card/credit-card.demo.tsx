"use client";

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

export const CreditCardDemo = () => {
    return (
        <div className="flex flex-col gap-8 items-center">
            <CreditCard brand="visa" variant="brand" />
            <CreditCard brand="mastercard" variant="gradient" cardNumber="•••• •••• •••• 8888" cardHolder="OLIVIA RHYE" />
            <div className="p-12 bg-slate-900 rounded-[2rem] w-full flex justify-center">
                <CreditCard brand="amex" variant="glass" cardNumber="•••• •••••• •1005" cardHolder="PHOENIX BAKER" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <CreditCard brand="visa" variant="dark" size="sm" className="scale-90" />
                <CreditCard brand="mastercard" variant="light" size="sm" className="scale-90" />
            </div>
        </div>
    );
};
