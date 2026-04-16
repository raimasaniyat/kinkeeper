import { useContext } from "react";
import { FriendContext } from "./FriendContext";
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";

const Stats = () => {
    const { timeline } = useContext(FriendContext);

    const callCount = timeline.filter(item => item.type === "Call").length;
    const textCount = timeline.filter(item => item.type === "Text").length;
    const videoCount = timeline.filter(item => item.type === "Video").length;

    const data = [
        { name: "Call", value: callCount },
        { name: "Text", value: textCount },
        { name: "Video", value: videoCount },
    ];

    const COLORS = ["#244d3f", "#64748B", "#22c55e"];

    return (
        <div className="max-w-[1110px] mx-auto px-4 py-10 text-center">

            <h2 className="text-2xl font-bold mb-8">Friendship Analytics</h2>

            <div className="w-full h-[400px] flex justify-center">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            data={data}
                            cx="50%"
                            cy="50%"
                            outerRadius={120}
                            dataKey="value"
                            label
                        >
                            {data.map((entry, index) => (
                                <Cell key={index} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>

                        <Tooltip />
                        <Legend />
                    </PieChart>
                </ResponsiveContainer>
            </div>

        </div>
    );
};

export default Stats;