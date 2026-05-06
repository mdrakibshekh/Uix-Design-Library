"use client";

import type { SliderProps as AriaSliderProps } from "react-aria-components";
import {
    Label as AriaLabel,
    Slider as AriaSlider,
    SliderOutput as AriaSliderOutput,
    SliderThumb as AriaSliderThumb,
    SliderTrack as AriaSliderTrack,
} from "react-aria-components";
import { cx, sortCx } from "@/utils/cx";

const styles = sortCx({
    default: "hidden",
    bottom: "absolute top-2 left-1/2 -translate-x-1/2 translate-y-full text-md font-medium text-primary",
    "top-floating":
        "absolute -top-2 left-1/2 -translate-x-1/2 -translate-y-full rounded-lg bg-primary px-2 py-1.5 text-xs font-semibold text-secondary shadow-lg ring-1 ring-secondary_alt",
});

interface SliderProps extends AriaSliderProps {
    labelPosition?: keyof typeof styles;
    labelFormatter?: (value: number) => string;
}

export const Slider = ({ labelPosition = "default", minValue = 0, maxValue = 100, labelFormatter, formatOptions, ...rest }: SliderProps) => {
    // Format thumb value as percentage by default.
    const defaultFormatOptions: Intl.NumberFormatOptions = {
        style: "percent",
        maximumFractionDigits: 0,
    };

    return (
        <AriaSlider {...rest} {...{ minValue, maxValue }} formatOptions={formatOptions ?? defaultFormatOptions} className={cx("relative flex w-full flex-col gap-2", rest.className)}>
            <AriaLabel />
            <AriaSliderTrack className="relative h-8 w-full">
                {({ state: { values, getThumbValue, getThumbPercent, getFormattedValue } }) => {
                    const left = values.length === 1 ? 0 : getThumbPercent(0);
                    const width = values.length === 1 ? getThumbPercent(0) : getThumbPercent(1) - left;

                    return (
                        <>
                            {/* Track Background */}
                            <span className="absolute top-1/2 h-2 w-full -translate-y-1/2 rounded-full bg-neutral-100 shadow-inner dark:bg-neutral-800" />
                            {/* Active Fill */}
                            <span
                                className="absolute top-1/2 h-2 -translate-y-1/2 rounded-full bg-brand-600"
                                style={{
                                    left: `${left * 100}%`,
                                    width: `${width * 100}%`,
                                }}
                            />
                            {values.map((_, index) => {
                                return (
                                    <AriaSliderThumb
                                        key={index}
                                        index={index}
                                        className={({ isFocusVisible, isDragging }) =>
                                            cx(
                                                "top-1/2 z-10 size-6 -translate-y-1/2 box-border cursor-grab rounded-full border-2 border-white bg-white shadow-xl ring-2 ring-brand-600 transition-all",
                                                isFocusVisible && "outline-2 outline-offset-2 outline-focus-ring",
                                                isDragging && "cursor-grabbing scale-110",
                                            )
                                        }
                                    >
                                        <AriaSliderOutput className={cx("whitespace-nowrap", styles[labelPosition])}>
                                            {labelFormatter ? labelFormatter(getThumbValue(index)) : getFormattedValue(getThumbValue(index) / 100)}
                                        </AriaSliderOutput>
                                    </AriaSliderThumb>
                                );
                            })}
                        </>
                    );
                }}
            </AriaSliderTrack>
        </AriaSlider>
    );
};
