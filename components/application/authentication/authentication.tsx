"use client";

import type { ReactNode } from "react";
import { ShieldTick } from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";
import { InputBase, TextField } from "@/components/base/input/input";
import { PinInput } from "@/components/base/input/pin-input";
import { cx } from "@/utils/cx";

export type AuthVariant = "pin" | "two-factor" | "three-factor" | "sms" | "email" | "auth-app";

interface AuthenticationCardProps {
    variant?: AuthVariant;
    title?: string;
    description?: string;
    cta?: string;
    secondaryCta?: string;
    icon?: ReactNode;
    children: ReactNode;
    className?: string;
}

export const AuthenticationCard = ({
    title,
    description,
    cta = "Continue",
    secondaryCta,
    icon,
    children,
    className,
}: AuthenticationCardProps) => {
    return (
        <div className={cx("max-w-sm rounded-[32px] border border-secondary_alt bg-primary p-6 shadow-[0_24px_80px_rgba(15,23,42,0.08)]", className)}>
            <div className="mb-6 flex items-start gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-brand-secondary/10 text-brand-secondary shadow-sm">
                    {icon ?? <ShieldTick className="size-6" />}
                </div>
                <div className="min-w-0">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-fg-secondary">Authentication</p>
                    <h2 className="mt-2 text-xl font-semibold text-fg-primary">{title ?? "Secure access"}</h2>
                    {description && <p className="mt-2 text-sm text-fg-secondary">{description}</p>}
                </div>
            </div>
            <div className="space-y-4">{children}</div>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-end">
                {secondaryCta && (
                    <Button color="secondary" size="sm" className="w-full sm:w-auto">
                        {secondaryCta}
                    </Button>
                )}
                <Button size="sm" className="w-full sm:w-auto">
                    {cta}
                </Button>
            </div>
        </div>
    );
};

export const AuthenticationPinStep = () => (
    <PinInput>
        <PinInput.Label>Verification code</PinInput.Label>
        <PinInput.Group maxLength={4} pattern="[0-9]*">
            <PinInput.Slot index={0} />
            <PinInput.Slot index={1} />
            <PinInput.Slot index={2} />
            <PinInput.Slot index={3} />
        </PinInput.Group>
        <PinInput.Description>Enter the 4-digit numeric code from your authenticator app or device.</PinInput.Description>
    </PinInput>
);

export const AuthenticationTwoFactorStep = () => (
    <PinInput>
        <PinInput.Label>Authenticator code</PinInput.Label>
        <PinInput.Group maxLength={6} pattern="[0-9]*">
            <PinInput.Slot index={0} />
            <PinInput.Slot index={1} />
            <PinInput.Slot index={2} />
            <PinInput.Separator />
            <PinInput.Slot index={3} />
            <PinInput.Slot index={4} />
            <PinInput.Slot index={5} />
        </PinInput.Group>
        <PinInput.Description>Use your authenticator app or SMS code to complete the sign-in.</PinInput.Description>
    </PinInput>
);

export const AuthenticationThreeFactorStep = () => (
    <PinInput>
        <PinInput.Label>Backup code</PinInput.Label>
        <PinInput.Group maxLength={6} pattern="[0-9]*">
            <PinInput.Slot index={0} />
            <PinInput.Slot index={1} />
            <PinInput.Slot index={2} />
            <PinInput.Separator />
            <PinInput.Slot index={3} />
            <PinInput.Slot index={4} />
            <PinInput.Slot index={5} />
        </PinInput.Group>
        <PinInput.Description>Enter the backup code from your secure recovery list.</PinInput.Description>
    </PinInput>
);

export const AuthenticationTag = ({ children }: { children: ReactNode }) => (
    <div className="inline-flex items-center gap-2 rounded-full bg-secondary_subtle px-3 py-1 text-sm font-semibold text-fg-secondary shadow-sm">
        {children}
    </div>
);

AuthenticationCard.displayName = "AuthenticationCard";
AuthenticationPinStep.displayName = "AuthenticationPinStep";
AuthenticationTwoFactorStep.displayName = "AuthenticationTwoFactorStep";
AuthenticationThreeFactorStep.displayName = "AuthenticationThreeFactorStep";
AuthenticationTag.displayName = "AuthenticationTag";
