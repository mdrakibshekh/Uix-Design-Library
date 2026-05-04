"use client";

import type { HTMLAttributes } from "react";
import { Check, Copy01, DownloadCloud02, Edit01, Edit02, Placeholder, Trash01, Trash02 } from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";
import { cx } from "@/utils/cx";

const Circle = (props: HTMLAttributes<HTMLSpanElement>) => <span {...props} className={cx("size-4 rounded-[50%] border-2 border-current", props.className)} />;

export const Variants = ({ isCompact = false }: { isCompact?: boolean }) => {
    if (isCompact) {
        return (
            <div className="flex flex-wrap gap-2 justify-center">
                <Button variant="solid" color="blue">Primary</Button>
                <Button variant="outlined" color="gray">Outlined</Button>
                <Button variant="ghost" color="dark">Ghost</Button>
            </div>
        );
    }
    return (
        <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
                <h3 className="text-sm font-medium text-slate-500 uppercase tracking-wider">Solid</h3>
                <div className="flex flex-wrap gap-4">
                    <Button variant="solid" color="blue">Primary</Button>
                    <Button variant="solid" color="dark">Dark</Button>
                    <Button variant="solid" color="gray">Gray</Button>
                    <Button variant="solid" color="success">Success</Button>
                    <Button variant="solid" color="destructive">Destructive</Button>
                    <Button variant="solid" color="warning">Warning</Button>
                    <Button variant="solid" color="light">Light</Button>
                </div>
            </div>

            <div className="flex flex-col gap-4">
                <h3 className="text-sm font-medium text-slate-500 uppercase tracking-wider">Outlined</h3>
                <div className="flex flex-wrap gap-4">
                    <Button variant="outlined" color="blue">Primary</Button>
                    <Button variant="outlined" color="dark">Dark</Button>
                    <Button variant="outlined" color="gray">Gray</Button>
                    <Button variant="outlined" color="success">Success</Button>
                    <Button variant="outlined" color="destructive">Destructive</Button>
                    <Button variant="outlined" color="warning">Warning</Button>
                    <div className="bg-slate-900 p-2 rounded-lg">
                        <Button variant="outlined" color="light">Light</Button>
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-4">
                <h3 className="text-sm font-medium text-slate-500 uppercase tracking-wider">Ghost</h3>
                <div className="flex flex-wrap gap-4">
                    <Button variant="ghost" color="blue">Primary</Button>
                    <Button variant="ghost" color="dark">Dark</Button>
                    <Button variant="ghost" color="gray">Gray</Button>
                    <Button variant="ghost" color="success">Success</Button>
                    <Button variant="ghost" color="destructive">Destructive</Button>
                    <Button variant="ghost" color="warning">Warning</Button>
                    <div className="bg-slate-900 p-2 rounded-lg">
                        <Button variant="ghost" color="light">Light</Button>
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-4">
                <h3 className="text-sm font-medium text-slate-500 uppercase tracking-wider">Soft</h3>
                <div className="flex flex-wrap gap-4">
                    <Button variant="soft" color="blue">Primary</Button>
                    <Button variant="soft" color="dark">Dark</Button>
                    <Button variant="soft" color="gray">Gray</Button>
                    <Button variant="soft" color="success">Success</Button>
                    <Button variant="soft" color="destructive">Destructive</Button>
                    <Button variant="soft" color="warning">Warning</Button>
                    <div className="bg-slate-900 p-2 rounded-lg">
                        <Button variant="soft" color="light">Light</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export const Sizes = () => {
    return (
        <div className="flex flex-col gap-8">
            <div className="flex items-end gap-4">
                <Button size="sm" variant="solid" color="blue">Small</Button>
                <Button size="md" variant="solid" color="blue">Medium</Button>
                <Button size="lg" variant="solid" color="blue">Large</Button>
            </div>
            <div className="flex items-end gap-4">
                <Button size="sm" variant="outlined" color="gray" iconLeading={Edit02}>Edit</Button>
                <Button size="md" variant="outlined" color="gray" iconLeading={Edit02}>Edit</Button>
                <Button size="lg" variant="outlined" color="gray" iconLeading={Edit02}>Edit</Button>
            </div>
        </div>
    );
};

export const Icons = () => {
    return (
        <div className="flex flex-col gap-8">
            <div className="flex flex-wrap gap-4">
                <Button iconLeading={Check} variant="solid" color="blue">Leading Icon</Button>
                <Button iconTrailing={DownloadCloud02} variant="outlined" color="gray">Trailing Icon</Button>
                <Button iconLeading={Trash01} variant="soft" color="destructive">Destructive</Button>
                <Button iconLeading={Copy01} variant="ghost" color="dark">Ghost Icon</Button>
            </div>
            <div className="flex flex-wrap gap-4">
                <Button iconLeading={Check} variant="solid" color="blue" />
                <Button iconLeading={DownloadCloud02} variant="outlined" color="gray" />
                <Button iconLeading={Trash01} variant="soft" color="destructive" />
                <Button iconLeading={Edit02} variant="ghost" color="dark" />
            </div>
        </div>
    );
};

export const States = () => {
    return (
        <div className="flex flex-wrap gap-4">
            <Button isDisabled variant="solid" color="blue">Disabled</Button>
            <Button isLoading variant="solid" color="blue">Loading</Button>
            <Button isLoading showTextWhileLoading variant="solid" color="blue">Processing...</Button>
        </div>
    );
};
