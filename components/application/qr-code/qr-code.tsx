"use client";

import React, { useEffect, useRef } from "react";
import QRCodeStyling, {
    DrawType,
    TypeNumber,
    Mode,
    ErrorCorrectionLevel,
    DotType,
    CornerSquareType,
    CornerDotType,
    Options
} from "qr-code-styling";

interface QRCodeProps {
    data: string;
    logo?: string;
    variant?: "brand" | "dark" | "light" | "colorful" | "minimal" | "classic" | "modern" | "elegant";
    size?: number;
    className?: string;
}

export const BrandedQRCode = ({
    data,
    logo,
    variant = "brand",
    size = 200,
    className,
}: QRCodeProps) => {
    const ref = useRef<HTMLDivElement>(null);
    const qrCode = useRef<QRCodeStyling>();

    const colors = {
        brand: {
            dots: "#7F56D9", // utility-brand-600
            background: "transparent",
        },
        dark: {
            dots: "#ffffff",
            background: "transparent",
        },
        light: {
            dots: "#000000",
            background: "transparent",
        },
        colorful: {
            dots: "#7F56D9",
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        },
        minimal: {
            dots: "#6B7280",
            background: "transparent",
        },
        classic: {
            dots: "#1F2937",
            background: "transparent",
        },
        modern: {
            dots: "#3B82F6",
            background: "transparent",
        },
        elegant: {
            dots: "#8B5CF6",
            background: "transparent",
        },
    };

    const variantOptions = {
        brand: {
            dotsOptions: { type: "rounded" as DotType },
            cornersSquareOptions: { type: "extra-rounded" as CornerSquareType },
            cornersDotOptions: { type: "dot" as CornerDotType },
        },
        dark: {
            dotsOptions: { type: "dots" as DotType },
            cornersSquareOptions: { type: "square" as CornerSquareType },
            cornersDotOptions: { type: "square" as CornerDotType },
        },
        light: {
            dotsOptions: { type: "square" as DotType },
            cornersSquareOptions: { type: "square" as CornerSquareType },
            cornersDotOptions: { type: "square" as CornerDotType },
        },
        colorful: {
            dotsOptions: { type: "rounded" as DotType },
            cornersSquareOptions: { type: "extra-rounded" as CornerSquareType },
            cornersDotOptions: { type: "dot" as CornerDotType },
        },
        minimal: {
            dotsOptions: { type: "dots" as DotType },
            cornersSquareOptions: { type: "dot" as CornerSquareType },
            cornersDotOptions: { type: "dot" as CornerDotType },
        },
        classic: {
            dotsOptions: { type: "square" as DotType },
            cornersSquareOptions: { type: "square" as CornerSquareType },
            cornersDotOptions: { type: "square" as CornerDotType },
        },
        modern: {
            dotsOptions: { type: "rounded" as DotType },
            cornersSquareOptions: { type: "extra-rounded" as CornerSquareType },
            cornersDotOptions: { type: "dot" as CornerDotType },
        },
        elegant: {
            dotsOptions: { type: "classy-rounded" as DotType },
            cornersSquareOptions: { type: "extra-rounded" as CornerSquareType },
            cornersDotOptions: { type: "dot" as CornerDotType },
        },
    };

    useEffect(() => {
        const options: Options = {
            width: size,
            height: size,
            type: "svg" as DrawType,
            data: data,
            image: logo,
            dotsOptions: {
                color: colors[variant].dots,
                ...variantOptions[variant].dotsOptions,
            },
            backgroundOptions: {
                color: colors[variant].background,
            },
            imageOptions: {
                crossOrigin: "anonymous",
                margin: 5,
                imageSize: 0.4,
            },
            cornersSquareOptions: {
                color: colors[variant].dots,
                ...variantOptions[variant].cornersSquareOptions,
            },
            cornersDotOptions: {
                color: colors[variant].dots,
                ...variantOptions[variant].cornersDotOptions,
            },
            qrOptions: {
                typeNumber: 0 as TypeNumber,
                mode: "Byte" as Mode,
                errorCorrectionLevel: "Q" as ErrorCorrectionLevel,
            },
        };

        if (!qrCode.current) {
            qrCode.current = new QRCodeStyling(options);
            if (ref.current) {
                qrCode.current.append(ref.current);
            }
        } else {
            qrCode.current.update(options);
        }
    }, [data, logo, variant, size]);

    return (
        <div className={className}>
            <div ref={ref} />
        </div>
    );
};
