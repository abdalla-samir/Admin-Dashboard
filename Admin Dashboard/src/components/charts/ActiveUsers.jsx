import {
    ResponsiveContainer,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid,
} from "recharts";
import { activeUsers } from "../../data/activeUsers";

export default function ActiveUser() {
    return (
        <ResponsiveContainer width="100%" height={278}>
            <BarChart
                data={activeUsers}
                barSize={4}
                barGap={20}
                margin={{ top: 25, right: 25, left: 0, bottom: 0 }}
            >
                <XAxis dataKey="time" axisLine={false} tick={false} />
                <YAxis
                    axisLine={false}
                    tickLine={false}
                    ticks={[0, 100, 200, 300]}
                    domain={[0, 300]}
                    tickMargin={4}
                />
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <Tooltip
                    cursor={false}
                    content={({ active, payload, label }) => {
                        if (active && payload && payload.length) {
                            const activeUser = payload?.find(
                                (p) => p.dataKey === "value",
                            );
                            return (
                                <div
                                    style={{
                                        backgroundColor: "#FFFFFF",
                                        color: "#6e39cb",
                                        padding: "10px",
                                        borderRadius: "8px",
                                        boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
                                    }}
                                >
                                    <p
                                        style={{
                                            margin: 0,
                                            color: "black",
                                        }}
                                    >
                                        Time: {label}h
                                    </p>
                                    <p>Active Users: {activeUser.value}</p>
                                </div>
                            );
                        }
                        return null;
                    }}
                />
                <Bar
                    dataKey="value"
                    fill="#6e39cb"
                    stackId="a"
                    radius={[4, 4, 0, 0]}
                    width={5}
                />
                <Bar dataKey="gap" fill="transparent" stackId="a" />
                <Bar
                    dataKey="base"
                    fill="#DECCFE"
                    stackId="a"
                    radius={[4, 4, 4, 4]}
                    width={5}
                />
            </BarChart>
        </ResponsiveContainer>
    );
}
