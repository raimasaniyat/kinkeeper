import { useContext } from "react";
import { FriendContext } from "./FriendContext";
import { Link } from "react-router-dom";

const FriendsGrid = () => {
    const { friends, loading } = useContext(FriendContext);

    if (loading) {
        return (
            <div className="text-center py-20">
                <span className="loading loading-spinner loading-lg text-[#244d3f]"></span>
            </div>
        );
    }

    return (
        <div className="max-w-[1110px] mx-auto my-10 px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

                {friends.map(friend => (
                    <Link 
                        to={`/friend/${friend.id}`} 
                        key={friend.id} 
                        className="block"
                    >
                        <div className="bg-white p-6 rounded-sm shadow hover:shadow-md transition h-full">

                            <img
                                className="h-32 w-32 mx-auto rounded-full object-cover"
                                src={friend.picture}
                            />

                            <h4 className="text-lg font-semibold mt-4 text-center">
                                {friend.name}
                            </h4>

                            <p className="text-[#64748B] text-center text-sm">
                                {friend.days_since_contact} days ago
                            </p>

                            <div className="flex flex-wrap justify-center gap-2 mt-2">
                                {friend.tags.map(tag => (
                                    <span key={tag} className="bg-gray-100 px-2 py-1 text-xs rounded">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <div className={`mt-3 text-center text-sm font-medium
                                ${friend.status === "overdue" && "text-red-500"}
                                ${friend.status === "almost due" && "text-yellow-500"}
                                ${friend.status === "on-track" && "text-green-500"}
                            `}>
                                {friend.status}
                            </div>

                        </div>
                    </Link>
                ))}

            </div>
        </div>
    );
};

export default FriendsGrid;