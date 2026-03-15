import {
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
    AreaChart,
    Area,
    Line,
    LineChart,
} from "recharts";
import { watchlistData } from "../../../data/watchlistData";

export default function WatchList() {
    return (
        <>
            <div className="my-4">
                <ResponsiveContainer width="100%" height={300}>
                    <LineChart
                        data={watchlistData}
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
                            dataKey="date"
                            axisLine={false}
                            tickLine={false}
                            tickMargin={20}
                            style={{ fontSize: "14px", fill: "#B4B2B7" }}
                        />
                        <YAxis
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
                        <Line
                            type="monotone"
                            dataKey="watchlistA"
                            stroke="#2ac670"
                            strokeWidth={3}
                        />
                        <Line
                            type="monotone"
                            dataKey="watchlistB"
                            stroke="#fdad15"
                            strokeWidth={3}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </>
    );
}
