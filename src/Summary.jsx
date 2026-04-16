import { useContext } from "react";
import { FriendContext } from "./FriendContext";

const Summary = () => {
    const { friends, timeline } = useContext(FriendContext);

    const total = friends.length;
    const onTrack = friends.filter(f => f.status === "on-track").length;
    const needAttention = friends.filter(f => f.status !== "on-track").length;
    const interactions = timeline.length;

    return (
        <div className="max-w-[1110px] mx-auto my-10 px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

                <div className="bg-white p-4 shadow text-center">
                    <h3 className="text-[#244d3f] text-xl font-bold">{total}</h3>
                    <p className="text-[#64748B]">Total Friends</p>
                </div>

                <div className="bg-white p-4 shadow text-center">
                    <h3 className="text-green-500 text-xl font-bold">{onTrack}</h3>
                    <p className="text-[#64748B]">On Track</p>
                </div>

                <div className="bg-white p-4 shadow text-center">
                    <h3 className="text-red-500 text-xl font-bold">{needAttention}</h3>
                    <p className="text-[#64748B]">Need Attention</p>
                </div>

                <div className="bg-white p-4 shadow text-center">
                    <h3 className="text-[#244d3f] text-xl font-bold">{interactions}</h3>
                    <p className="text-[#64748B]">Interactions</p>
                </div>

            </div>
        </div>
    );
};

export default Summary;