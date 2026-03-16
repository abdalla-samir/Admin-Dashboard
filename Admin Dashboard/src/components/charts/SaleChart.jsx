import {
    ResponsiveContainer,
    XAxis,
    YAxis,
    LineChart,
    Line,
    Tooltip,
    Legend,
    CartesianGrid,
} from "recharts";
import { saleData } from "../../data/saleData";

export default function SaleChart() {
    return (
        <ResponsiveContainer width="100%" height={278}>
            <LineChart data={saleData}>
                <XAxis
                    dataKey="age"
                    tickLine={false}
                    axisLine={false}
                    tickMargin={15}
                />
                <YAxis tickLine={false} axisLine={false} tickMargin={15} />
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
                                        boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
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
                                            Sales: {entry.value}
                                        </p>
                                    ))}
                                </div>
                            );
                        }
                        return null;
                    }}
                />
                <CartesianGrid vertical={false} />
                <Line
                    dataKey="sales"
                    stroke="#6e39cb"
                    strokeWidth={3}
                    type="natural"
                />
            </LineChart>
        </ResponsiveContainer>
    );
}
