"use client";

import { Lock, Mail, Phone, ShieldTick, KeyRound } from "@untitledui/icons";
import { AuthenticationCard, AuthenticationPinStep, AuthenticationTwoFactorStep, AuthenticationThreeFactorStep } from "./authentication";
import { TextField } from "@/components/base/input/input";
import { InputBase } from "@/components/base/input/input";
import { PinInput } from "@/components/base/input/pin-input";
import { Button } from "@/components/base/buttons/button";
import { REGEXP_ONLY_DIGITS } from "input-otp";

export const AuthPinDemo = () => (
    <AuthenticationCard title="Enter your PIN" description="Use the secure PIN assigned to your account." cta="Unlock" icon={<ShieldCheck className="size-5" />}>
        <AuthenticationPinStep />
    </AuthenticationCard>
);

export const AuthTwoFactorDemo = () => (
    <AuthenticationCard title="Two-factor sign in" description="Protect your account with a password and a one-time code." cta="Verify" secondaryCta="Use SMS code" icon={<Lock className="size-5" />}>
        <TextField label="Password" size="md">
            <InputBase type="password" placeholder="••••••••" />
        </TextField>
        <AuthenticationTwoFactorStep />
    </AuthenticationCard>
);

export const AuthThreeFactorDemo = () => (
    <AuthenticationCard title="Three-factor authentication" description="Combine password, authenticator code, and a backup code." cta="Continue" secondaryCta="Use backup key" icon={<KeyRound className="size-5" />}>
        <TextField label="Password" size="md">
            <InputBase type="password" placeholder="••••••••" />
        </TextField>
        <AuthenticationTwoFactorStep />
        <AuthenticationThreeFactorStep />
    </AuthenticationCard>
);

export const AuthEmailCodeDemo = () => (
    <AuthenticationCard title="Email verification" description="Send a secure login code to your email address." cta="Send code" icon={<Mail className="size-5" />}>
        <TextField label="Email address" size="md">
            <InputBase type="email" placeholder="you@example.com" />
        </TextField>
        <PinInput>
            <PinInput.Label>Code from email</PinInput.Label>
            <PinInput.Group maxLength={6} pattern={REGEXP_ONLY_DIGITS}>
                <PinInput.Slot index={0} />
                <PinInput.Slot index={1} />
                <PinInput.Slot index={2} />
                <PinInput.Separator />
                <PinInput.Slot index={3} />
                <PinInput.Slot index={4} />
                <PinInput.Slot index={5} />
            </PinInput.Group>
            <PinInput.Description>Enter the 6-digit code sent to your email.</PinInput.Description>
        </PinInput>
    </AuthenticationCard>
);

export const AuthSmsCodeDemo = () => (
    <AuthenticationCard title="Text message verification" description="We sent a one-time code to your phone." cta="Confirm" secondaryCta="Resend code" icon={<Phone className="size-5" />}>
        <TextField label="Phone" size="md">
            <InputBase type="tel" placeholder="+1 (555) 123-4567" />
        </TextField>
        <PinInput>
            <PinInput.Label>SMS code</PinInput.Label>
            <PinInput.Group maxLength={6} pattern={REGEXP_ONLY_DIGITS}>
                <PinInput.Slot index={0} />
                <PinInput.Slot index={1} />
                <PinInput.Slot index={2} />
                <PinInput.Separator />
                <PinInput.Slot index={3} />
                <PinInput.Slot index={4} />
                <PinInput.Slot index={5} />
            </PinInput.Group>
            <PinInput.Description>Enter the code sent to your phone number.</PinInput.Description>
        </PinInput>
    </AuthenticationCard>
);

export const AuthAppCodeDemo = () => (
    <AuthenticationCard title="Authenticator app" description="Use a time-based code from your authenticator app." cta="Verify" icon={<ShieldCheck className="size-5" />}>
        <AuthenticationTwoFactorStep />
        <div className="rounded-3xl border border-secondary_alt bg-secondary_subtle px-4 py-3 text-sm text-fg-secondary">Use an authenticator app such as Google Authenticator, Authy, or Microsoft Authenticator.</div>
    </AuthenticationCard>
);
