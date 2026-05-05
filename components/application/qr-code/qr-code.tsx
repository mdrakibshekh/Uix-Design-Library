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
    variant?: "brand" | "dark" | "light";
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
                type: "rounded" as DotType,
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
                type: "extra-rounded" as CornerSquareType,
            },
            cornersDotOptions: {
                color: colors[variant].dots,
                type: "dot" as CornerDotType,
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
