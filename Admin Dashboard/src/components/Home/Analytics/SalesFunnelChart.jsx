import {
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    AreaChart,
    Area,
} from "recharts";
import { salesFunnelData } from "../../../data/salesFunnelData";

export default function SalesFunnelChart() {
    return (
        <>
            <div className="my-4">
                <ResponsiveContainer width="100%" height={300}>
                    <AreaChart
                        data={salesFunnelData}
                        margin={{ top: 20, right: 35, bottom: 20, left: 20 }}
                    >
                        <defs>
                            <linearGradient
                                id="salesGradient"
                                x1="0"
                                y1="0"
                                x2="0"
                                y2="1"
                            >
                                <stop
                                    offset="5%"
                                    stopColor="#4F46E5"
                                    stopOpacity={0.8}
                                />
                                <stop
                                    offset="95%"
                                    stopColor="#4F46E5"
                                    stopOpacity={0}
                                />
                            </linearGradient>
                        </defs>
                        <CartesianGrid
                            strokeDasharray="3 3 "
                            vertical={false}
                        />
                        <XAxis
                            dataKey="day"
                            axisLine={false}
                            tickLine={false}
                            tickMargin={20}
                            style={{ fontSize: "14px", fill: "#B4B2B7" }}
                        />
                        <YAxis
                            tickFormatter={(value) => `${value / 1000}K`}
                            domain={[20000, 100000]}
                            axisLine={false}
                            tickLine={false}
                            tickMargin={20}
                            style={{ fontSize: "14px", fill: "#B4B2B7" }}
                        />
                        <Tooltip
                            content={({ active, payload, label }) => {
                                if (active && payload && payload.length) {
                                    return (
                                        <div
                                            style={{
                                                backgroundColor: "#FFFFFF",
                                                color: "black",
                                                padding: "10px",
                                                borderRadius: "8px",
                                                boxShadow:
                                                    "0 2px 8px rgba(0,0,0,0.2)",
                                            }}
                                        >
                                            <p
                                                style={{
                                                    margin: 0,
                                                }}
                                            >
                                                {label}
                                            </p>
                                            {payload.map((entry) => (
                                                <p
                                                    key={entry.dataKey}
                                                    style={{
                                                        margin: 0,
                                                        color: entry.stroke,
                                                    }}
                                                >
                                                    {entry.name}: {entry.value}
                                                </p>
                                            ))}
                                        </div>
                                    );
                                }
                                return null;
                            }}
                        />
                        <Area
                            type="linear"
                            dataKey="Sales"
                            stroke="#6e39cb"
                            strokeWidth={2}
                            fill="url(#salesGradient)"
                            fillOpacity={0.3}
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </>
    );
}
