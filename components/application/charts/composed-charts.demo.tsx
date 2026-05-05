"use client";

import {
    Bar,
    CartesianGrid,
    ComposedChart,
    Legend,
    Line,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
    Area,
} from "recharts";
import { ChartLegendContent, ChartTooltipContent } from "@/components/application/charts/charts-base";
import { useBreakpoint } from "@/hooks/use-breakpoint";

const data = [
    { name: "Page A", uv: 590, pv: 800, amt: 1400 },
    { name: "Page B", uv: 868, pv: 967, amt: 1506 },
    { name: "Page C", uv: 1397, pv: 1098, amt: 989 },
    { name: "Page D", uv: 1480, pv: 1200, amt: 1228 },
    { name: "Page E", uv: 1520, pv: 1108, amt: 1100 },
    { name: "Page F", uv: 1400, pv: 680, amt: 1700 },
];

export const ComposedChart01 = () => {
    const isDesktop = useBreakpoint("lg");

    return (
        <div className="flex h-64 flex-col gap-2">
            <ResponsiveContainer width="100%" height="100%">
                <ComposedChart
                    data={data}
                    margin={{
                        top: 20,
                        right: 20,
                        bottom: 20,
                        left: 20,
                    }}
                >
                    <CartesianGrid stroke="#f5f5f5" vertical={false} />
                    <XAxis dataKey="name" scale="band" tick={{ fontSize: 12 }} axisLine={false} tickLine={false} />
                    <YAxis tick={{ fontSize: 12 }} axisLine={false} tickLine={false} />
                    <Tooltip content={<ChartTooltipContent />} />
                    <Legend content={<ChartLegendContent />} />
                    <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" fillOpacity={0.1} />
                    <Bar dataKey="pv" barSize={20} fill="#413ea0" radius={[4, 4, 0, 0]} />
                    <Line type="monotone" dataKey="uv" stroke="#ff7300" strokeWidth={2} />
                </ComposedChart>
            </ResponsiveContainer>
        </div>
    );
};

export const ComposedChartPreview = () => (
    <div className="flex items-end gap-1 h-20 w-full px-2">
        {[40, 70, 45, 90, 65, 80, 30, 50].map((h, i) => (
            <div key={i} className="flex-1 bg-brand-500/20 rounded-t-sm relative group" style={{ height: `${h}%` }}>
                <div className="absolute top-0 left-0 w-full h-0.5 bg-brand-500" />
            </div>
        ))}
    </div>
);
