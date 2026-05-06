"use client";

import { getLocalTimeZone, today } from "@internationalized/date";
import { useControlledState } from "@react-stately/utils";
import { Calendar as CalendarIcon } from "@untitledui/icons";
import { useDateFormatter } from "react-aria";
import type { DatePickerProps as AriaDatePickerProps, DateValue } from "react-aria-components";
import { DatePicker as AriaDatePicker, Dialog as AriaDialog, Group as AriaGroup, Popover as AriaPopover } from "react-aria-components";
import { Button, type ButtonProps } from "@/components/base/buttons/button";
import { cx } from "@/utils/cx";
import { Calendar } from "./calendar";

const highlightedDates = [today(getLocalTimeZone())];

const variantStyles = {
    default: "rounded-3xl bg-primary shadow-2xl ring ring-secondary_alt border border-secondary/10 outline-none",
    card: "rounded-3xl bg-primary shadow-xl ring ring-secondary_alt border border-secondary/10 outline-none",
    minimal: "rounded-2xl bg-primary shadow-sm border border-secondary/20 outline-none",
    glass: "rounded-[2rem] bg-white/15 backdrop-blur-xl border border-white/20 shadow-2xl ring ring-white/10 outline-none",
    modern: "rounded-[2rem] bg-slate-950 text-white shadow-[0_30px_60px_-30px_rgba(15,23,42,0.75)] border border-slate-800 ring ring-brand-500/20 outline-none",
    neo: "rounded-[2rem] bg-slate-100 dark:bg-slate-900 shadow-[14px_14px_36px_rgba(15,23,42,0.08),-14px_-14px_36px_rgba(255,255,255,0.65)] border border-slate-200/80 dark:border-slate-800/70 outline-none",
    soft: "rounded-[2rem] bg-slate-50 dark:bg-slate-950 shadow-inner ring ring-secondary_alt border border-secondary/20 outline-none",
    range: "rounded-3xl bg-primary shadow-2xl ring ring-secondary_alt border border-secondary/10 outline-none",
    custom: "rounded-3xl bg-primary shadow-2xl ring ring-secondary_alt border border-secondary/10 outline-none",
};

interface DatePickerProps extends AriaDatePickerProps<DateValue> {
    /** The function to call when the apply button is clicked. */
    onApply?: () => void;
    /** The function to call when the cancel button is clicked. */
    onCancel?: () => void;
    size?: ButtonProps["size"];
    variant?: "default" | "card" | "minimal" | "glass" | "modern" | "neo" | "soft" | "range" | "custom";
    onClear?: () => void;
    onToday?: () => void;
}

export const DatePicker = ({ value: valueProp, defaultValue, onChange, onApply, onCancel, onClear, onToday, size = "sm", variant = "default", ...props }: DatePickerProps) => {
    const formatter = useDateFormatter({
        month: "short",
        day: "numeric",
        year: "numeric",
    });
    const [value, setValue] = useControlledState(valueProp, defaultValue || null, onChange);

    const formattedDate = value ? formatter.format(value.toDate(getLocalTimeZone())) : "Select date";

    const handleToday = () => {
        const t = today(getLocalTimeZone());
        setValue(t);
        onToday?.();
    };

    const handleClear = () => {
        setValue(null);
        onClear?.();
    };

    return (
        <AriaDatePicker aria-label="Date picker" shouldCloseOnSelect={false} {...props} value={value} onChange={setValue}>
            <AriaGroup>
                <Button size={size} color="secondary" iconLeading={CalendarIcon} className="min-w-40 justify-start font-sans">
                    {formattedDate}
                </Button>
            </AriaGroup>
            <AriaPopover
                offset={8}
                placement="bottom right"
                className={({ isEntering, isExiting }) =>
                    cx(
                        "origin-(--trigger-anchor-point) will-change-transform z-50",
                        isEntering &&
                            "duration-150 ease-out animate-in fade-in placement-right:slide-in-from-left-0.5 placement-top:slide-in-from-bottom-0.5 placement-bottom:slide-in-from-top-0.5",
                        isExiting &&
                            "duration-100 ease-in animate-out fade-out placement-right:slide-out-to-left-0.5 placement-top:slide-out-to-bottom-0.5 placement-bottom:slide-out-to-top-0.5",
                    )
                }
            >
                <AriaDialog aria-label="Date picker" className={cx(variantStyles[variant], "focus:outline-none font-sans")}> 
                    {({ close }) => (
                        <>
                            <div className="flex px-6 py-5">
                                <Calendar highlightedDates={highlightedDates} />
                            </div>
                            
                            <div className={cx(
                                "flex gap-3 border-t border-secondary p-4",
                                variant === "custom" ? "justify-between" : "justify-end"
                            )}>
                                {variant === "custom" && (
                                    <div className="flex gap-2">
                                        <Button size="sm" color="tertiary" onClick={handleToday}>Today</Button>
                                        <Button size="sm" color="tertiary" onClick={handleClear}>Clear</Button>
                                    </div>
                                )}
                                
                                <div className="flex gap-2">
                                    <Button
                                        size="sm"
                                        color="secondary"
                                        onClick={() => {
                                            onCancel?.();
                                            close();
                                        }}
                                    >
                                        Cancel
                                    </Button>
                                    <Button
                                        size="sm"
                                        color="primary"
                                        onClick={() => {
                                            onApply?.();
                                            close();
                                        }}
                                    >
                                        Apply
                                    </Button>
                                </div>
                            </div>
                        </>
                    )}
                </AriaDialog>
            </AriaPopover>
        </AriaDatePicker>
    );
};
