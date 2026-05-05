"use client";

import React from "react";
import { cx } from "@/utils/cx";

interface CreditCardProps {
    brand?: "visa" | "mastercard" | "amex";
    variant?: "brand" | "glass" | "dark" | "light" | "gradient";
    cardNumber?: string;
    cardHolder?: string;
    expiry?: string;
    className?: string;
}

export const CreditCard = ({
    brand = "visa",
    variant = "brand",
    cardNumber = "•••• •••• •••• 1234",
    cardHolder = "RAKIB SHEKH",
    expiry = "12/28",
    className,
}: CreditCardProps) => {
    const variantStyles = {
        brand: "bg-utility-brand-600 text-white shadow-xl ring-1 ring-white/20",
        glass: "bg-white/10 backdrop-blur-xl text-white shadow-2xl ring-1 ring-white/30 before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/10 before:to-transparent before:pointer-events-none",
        dark: "bg-slate-900 text-white shadow-xl ring-1 ring-white/10",
        light: "bg-white text-slate-900 shadow-xl ring-1 ring-slate-200",
        gradient: "bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 text-white shadow-xl ring-1 ring-white/20",
    };

    const logos = {
        visa: (
            <svg width="48" height="16" viewBox="0 0 48 16" fill="currentColor">
                <path d="M18.444 0.334L15.358 15.65H12.441L9.317 2.946C9.13 2.164 9.006 1.879 8.423 1.554C7.545 1.054 6.134 0.603 4.704 0.334L4.811 0.1H9.865C10.985 0.1 11.97 0.81 12.222 2.052L14.549 13.626L17.433 0.334H18.444ZM34.73 10.428C34.747 6.452 29.07 6.233 29.112 4.417C29.13 3.864 29.68 3.265 30.844 3.109C31.42 3.033 33.003 2.973 34.767 3.754L35.378 0.94C33.725 0.354 32.143 0.1 30.548 0.1C26.83 0.1 24.195 2.015 24.167 4.763C24.137 6.84 26.046 7.994 27.502 8.685C28.995 9.394 29.497 9.845 29.485 10.485C29.467 11.464 28.27 11.9 27.2 11.916C25.293 11.944 24.177 11.417 23.3 11.026L22.677 13.914C24.265 14.625 26.064 14.938 27.904 14.954C31.815 14.954 34.71 13.064 34.73 10.428ZM44.755 0.334C44.095 0.334 43.541 0.71 43.295 1.282L38.106 13.411L38.12 13.376L35.253 15.65H38.257L38.868 14.256H42.544L42.893 15.65H45.748L43.264 0.334H44.755ZM39.697 12.181L41.348 8.411L42.27 12.181H39.697ZM10.512 0.334L6.994 15.65H4.11L7.628 0.334H10.512Z" />
            </svg>
        ),
        mastercard: (
            <svg width="32" height="20" viewBox="0 0 32 20" fill="none">
                <circle cx="10" cy="10" r="10" fill="#EB001B" />
                <circle cx="22" cy="10" r="10" fill="#F79E1B" fillOpacity="0.8" />
            </svg>
        ),
        amex: (
            <svg width="40" height="12" viewBox="0 0 40 12" fill="currentColor">
                <path d="M4.3 0H0v11.8h1.2v-3h2.1l1.5 3h1.3L4.4 8.7C5.3 8.3 6 7.5 6 6.3V5.5C6 4.3 5.3 3.5 4.3 3.5zm.5 6.3c0 .5-.3 1-.8 1H1.2v-2h2.8c.5 0 .8.5.8 1v1zm8.3-6.3h-4.3v11.8h4.3c1 0 1.8-.8 1.8-1.8V1.8C14.9.8 14.1 0 13.1 0zm.6 10c0 .5-.4.9-.9.9h-3.1V1.1h3.1c.5 0 .9.4.9.9v8zm8.4-10h-4.3v11.8h4.3c1 0 1.8-.8 1.8-1.8V1.8C23.9.8 23.1 0 22.1 0zm.6 10c0 .5-.4.9-.9.9h-3.1V1.1h3.1c.5 0 .9.4.9.9v8zM40 0h-4.3v11.8H40c1 0 1.8-.8 1.8-1.8V1.8C41.8.8 41 0 40 0zm.6 10c0 .5-.4.9-.9.9h-3.1V1.1h3.1c.5 0 .9.4.9.9v8z" />
            </svg>
        ),
    };

    return (
        <div
            className={cx(
                "relative h-56 w-96 overflow-hidden rounded-2xl p-8 font-mono transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl",
                variantStyles[variant],
                className
            )}
        >
            {/* Glossy Overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none" />

            {/* Top Section */}
            <div className="flex items-start justify-between">
                {/* Chip */}
                <div className="relative h-12 w-14 overflow-hidden rounded-lg bg-gradient-to-br from-yellow-200 via-yellow-400 to-yellow-600 p-2 shadow-inner">
                    <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 gap-0.5 opacity-30">
                        {Array.from({ length: 9 }).map((_, i) => (
                            <div key={i} className="border-[0.5px] border-black/20" />
                        ))}
                    </div>
                    <div className="h-full w-full rounded border-[0.5px] border-black/10" />
                </div>

                {/* Wireless Icon */}
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="rotate-90 opacity-60">
                    <path
                        d="M5.5 19.5C5.5 19.5 8.5 16.5 8.5 12C8.5 7.5 5.5 4.5 5.5 4.5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                    />
                    <path
                        d="M9.5 17.5C9.5 17.5 11.5 15.5 11.5 12C11.5 8.5 9.5 6.5 9.5 6.5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                    />
                    <path
                        d="M13.5 15.5C13.5 15.5 14.5 14.5 14.5 12C14.5 9.5 13.5 8.5 13.5 8.5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                    />
                </svg>
            </div>

            {/* Card Number */}
            <div className="mt-10 text-2xl tracking-[0.25em] drop-shadow-md">
                {cardNumber}
            </div>

            {/* Bottom Section */}
            <div className="mt-8 flex items-end justify-between">
                <div className="flex flex-col gap-1">
                    <span className="text-[10px] uppercase tracking-wider opacity-60">Card Holder</span>
                    <span className="text-sm font-semibold tracking-widest">{cardHolder}</span>
                </div>
                <div className="flex flex-col gap-1 text-right">
                    <span className="text-[10px] uppercase tracking-wider opacity-60">Expires</span>
                    <span className="text-sm font-semibold">{expiry}</span>
                </div>
                <div className="h-8">
                    {logos[brand]}
                </div>
            </div>

            {/* Magnetic Stripe Preview on hover could be cool, but keeping it simple for now */}
        </div>
    );
};
