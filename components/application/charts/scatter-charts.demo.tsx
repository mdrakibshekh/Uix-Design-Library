"use client";

import {
    CartesianGrid,
    ResponsiveContainer,
    Scatter,
    ScatterChart,
    Tooltip,
    XAxis,
    YAxis,
    ZAxis,
} from "recharts";
import { ChartTooltipContent } from "@/components/application/charts/charts-base";

const data = [
    { x: 100, y: 200, z: 200 },
    { x: 120, y: 100, z: 260 },
    { x: 170, y: 300, z: 400 },
    { x: 140, y: 250, z: 280 },
    { x: 150, y: 400, z: 500 },
    { x: 110, y: 280, z: 200 },
];

export const ScatterChart01 = () => {
    return (
        <div className="flex h-64 flex-col gap-2">
            <ResponsiveContainer width="100%" height="100%">
                <ScatterChart
                    margin={{
                        top: 20,
                        right: 20,
                        bottom: 20,
                        left: 20,
                    }}
                >
                    <CartesianGrid vertical={false} strokeDasharray="3 3" />
                    <XAxis type="number" dataKey="x" name="stature" unit="cm" tick={{ fontSize: 12 }} axisLine={false} tickLine={false} />
                    <YAxis type="number" dataKey="y" name="weight" unit="kg" tick={{ fontSize: 12 }} axisLine={false} tickLine={false} />
                    <ZAxis type="number" dataKey="z" range={[60, 400]} name="score" unit="pts" />
                    <Tooltip cursor={{ strokeDasharray: "3 3" }} content={<ChartTooltipContent />} />
                    <Scatter name="A school" data={data} fill="#7F56D9" fillOpacity={0.6} />
                </ScatterChart>
            </ResponsiveContainer>
        </div>
    );
};

export const ScatterChartPreview = () => (
    <div className="relative h-20 w-full overflow-hidden flex items-center justify-center">
        {[...Array(12)].map((_, i) => (
            <div 
                key={i} 
                className="absolute size-2 rounded-full bg-brand-500/40"
                style={{ 
                    left: `${Math.random() * 80 + 10}%`, 
                    top: `${Math.random() * 80 + 10}%` 
                }}
            />
        ))}
    </div>
);
