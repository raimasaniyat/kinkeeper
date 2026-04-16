import { useContext } from "react";
import { useParams } from "react-router-dom";
import { FriendContext } from "./FriendContext";

const FriendDetails = () => {
    const { id } = useParams();
    const { friends, addInteraction } = useContext(FriendContext);

    const friend = friends.find(f => f.id === parseInt(id));

    if (!friend) {
        return <div className="text-center py-20">Friend not found</div>;
    }

    return (
        <div className="max-w-[1110px] mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-3 gap-8">

            
            <div className="bg-white p-6 shadow rounded space-y-4">

                <img
                    src={friend.picture}
                    className="w-32 h-32 mx-auto rounded-full object-cover"
                />

                <h2 className="text-xl font-bold text-center">
                    {friend.name}
                </h2>

                <p className={`text-center font-medium
                    ${friend.status === "overdue" && "text-red-500"}
                    ${friend.status === "almost due" && "text-yellow-500"}
                    ${friend.status === "on-track" && "text-green-500"}
                `}>
                    {friend.status}
                </p>

                <div className="flex flex-wrap justify-center gap-2">
                    {friend.tags.map(tag => (
                        <span key={tag} className="bg-gray-100 px-2 py-1 text-xs rounded">
                            {tag}
                        </span>
                    ))}
                </div>

                <p className="text-[#64748B] text-sm text-center">
                    {friend.bio}
                </p>

                <p className="text-sm text-center">
                    {friend.email}
                </p>

                <div className="flex flex-col gap-2 mt-4">
                    <button className="btn"><i className="fa-regular fa-alarm-clock"></i> Snooze 2 Weeks</button>
                    <button className="btn"><i className="fa-solid fa-box-archive"></i> Archive</button>
                    <button className="btn btn-error text-white"><i className="fa-solid fa-trash-can"></i> Delete</button>
                </div>

            </div>
            
            <div className="lg:col-span-2 space-y-6">

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                    <div className="bg-white p-4 shadow text-center">
                        <h3 className="text-lg font-bold">{friend.days_since_contact}</h3>
                        <p className="text-[#64748B] text-sm">Days Since Contact</p>
                    </div>

                    <div className="bg-white p-4 shadow text-center">
                        <h3 className="text-lg font-bold">{friend.goal}</h3>
                        <p className="text-[#64748B] text-sm">Goal (days)</p>
                    </div>

                    <div className="bg-white p-4 shadow text-center">
                        <h3 className="text-lg font-bold">{friend.next_due_date}</h3>
                        <p className="text-[#64748B] text-sm">Next Due Date</p>
                    </div>

                </div>

                <div className="bg-white p-6 shadow">
                    <h3 className="font-semibold mb-4">Quick Check-In</h3>

                    <div className="flex gap-4 flex-wrap">

                        <button
                            onClick={() => addInteraction("Call", friend.name)}
                            className="btn"
                        >
                            <i className="fa-solid fa-phone"></i> Call
                        </button>

                        <button
                            onClick={() => addInteraction("Text", friend.name)}
                            className="btn"
                        >
                            <i className="fa-solid fa-comments"></i> Text
                        </button>

                        <button
                            onClick={() => addInteraction("Video", friend.name)}
                            className="btn"
                        >
                            <i className="fa-solid fa-video"></i> Video
                        </button>

                    </div>
                </div>

            </div>

        </div>
    );
};

export default FriendDetails;