import { useContext, useState } from "react";
import { FriendContext } from "./FriendContext";

const Timeline = () => {
    const { timeline } = useContext(FriendContext);
    const [filter, setFilter] = useState("All");

    const filteredTimeline =
        filter === "All"
            ? timeline
            : timeline.filter(item => item.type === filter);

    return (
        <div className="max-w-[1110px] mx-auto px-4 py-10">

            <h2 className="text-2xl font-bold mb-6">Timeline</h2>

            <div className="flex gap-4 mb-6 flex-wrap">
                <button className="btn" onClick={() => setFilter("All")}>All</button>
                <button className="btn" onClick={() => setFilter("Call")}>Call</button>
                <button className="btn" onClick={() => setFilter("Text")}>Text</button>
                <button className="btn" onClick={() => setFilter("Video")}>Video</button>
            </div>

            <div className="space-y-4">

                {filteredTimeline.length === 0 ? (
                    <p className="text-[#64748B]">No interactions yet</p>
                ) : (
                    filteredTimeline.map(item => (
                        <div key={item.id} className="bg-white p-4 shadow flex items-center gap-4">

                            {/* Icon */}
                            <div className="text-xl text-[#244d3f]">
                                {item.type === "Call" && <i className="fa-solid fa-phone"></i>}
                                {item.type === "Text" && <i className="fa-solid fa-comments"></i>}
                                {item.type === "Video" && <i className="fa-solid fa-video"></i>}
                            </div>

                            {/* Content */}
                            <div>
                                <p className="font-medium">{item.title}</p>
                                <p className="text-sm text-[#64748B]">{item.date}</p>
                            </div>

                        </div>
                    ))
                )}

            </div>

        </div>
    );
};

export default Timeline;