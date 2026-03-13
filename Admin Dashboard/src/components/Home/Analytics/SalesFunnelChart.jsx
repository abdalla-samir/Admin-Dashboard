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

const tooltipStyle = {
    backgroundColor: "#533fe4",
    borderRadius: "5px",
    // overflow: "hidden",
};

export default function SalesFunnelChart() {
    return (
        <>
            <div className="h-69 my-4">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                        data={salesFunnelData}
                        margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
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
                            tickMargin={14}
                            style={{ fontSize: "14px" }}
                        />
                        <YAxis
                            tickFormatter={(value) => `${value / 1000}K`}
                            domain={[20000, 100000]}
                            axisLine={false}
                            tickLine={false}
                            tickMargin={14}
                            style={{ fontSize: "14px" }}
                        />
                        <Tooltip
                            // formatter={(value) => [value.toUpperCase(), ""]}
                            content={(props) => {
                                const { active, payload } = props;
                                if (active && payload && payload.length) {
                                    return (
                                        <div
                                            style={{
                                                backgroundColor: "#533fe4",
                                                borderRadius: "5px",
                                                padding: "5px 10px",
                                                color: "white",
                                                fontSize: "14px",
                                            }}
                                        >
                                            {payload[0].value}{" "}
                                            {/* only the number */}
                                        </div>
                                    );
                                }
                                return null;
                            }}
                            contentStyle={tooltipStyle}
                            labelStyle={{ display: "none" }}
                            itemStyle={{ color: "white" }}
                        />
                        <Area
                            type="linear"
                            dataKey="sales"
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
