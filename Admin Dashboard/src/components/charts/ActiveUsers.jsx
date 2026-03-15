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
        <ResponsiveContainer>
            <BarChart data={activeUsers} barSize={4}>
                <XAxis dataKey="time" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <Tooltip cursor={false} />
                <Bar
                    dataKey="base"
                    fill="#DECCFE"
                    stackId="a"
                    radius={[4, 4, 4, 4]}
                    width={5}
                />
                <Bar
                    dataKey="value"
                    fill="#6e39cb"
                    stackId="a"
                    radius={[4, 4, 0, 0]}
                    width={5}
                />
            </BarChart>
        </ResponsiveContainer>
    );
}
