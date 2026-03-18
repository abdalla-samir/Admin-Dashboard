import {
    ResponsiveContainer,
    XAxis,
    YAxis,
    BarChart,
    Bar,
    Tooltip,
    CartesianGrid,
} from "recharts";
import { impressionData } from "../../data/impressionData";

export default function ImpressionChart() {
    return (
        <div className="bg-white rounded p-4 flex-1 flex flex-col gap-6">
            <h2 className="text-title-large text-text">Impression</h2>
            <ResponsiveContainer width="100%" height={228}>
                <BarChart
                    data={impressionData}
                    margin={{ top: 0, right: 0, left: -20, bottom: 5 }}
                >
                    <XAxis
                        dataKey="day"
                        tickLine={false}
                        axisLine={false}
                        tickMargin={15}
                    />
                    <YAxis
                        tickLine={false}
                        axisLine={false}
                        tickMargin={15}
                        ticks={[0, 10, 20, 30]}
                    />
                    <Tooltip
                        cursor={false}
                        content={({ active, payload, label }) => {
                            if (active && payload && payload.length) {
                                const day = payload?.find(
                                    (p) => p.dataKey === "value",
                                );
                                return (
                                    <div
                                        style={{
                                            backgroundColor: "#FFFFFF",
                                            color: "#6e39cb",
                                            padding: "10px",
                                            borderRadius: "8px",
                                            boxShadow:
                                                "0 2px 8px rgba(0,0,0,0.2)",
                                        }}
                                    >
                                        <p
                                            style={{
                                                margin: 0,
                                                color: "black",
                                            }}
                                        >
                                            {label}
                                        </p>
                                        <p>{day.value}</p>
                                    </div>
                                );
                            }
                            return null;
                        }}
                    />
                    <CartesianGrid vertical={false} />
                    <Bar
                        dataKey="value"
                        fill="#6e39cb"
                        radius={[4, 4, 0, 0]}
                        barSize={25}
                    />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}
