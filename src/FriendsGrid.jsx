import friends from "./friends.json";
    
const FriendsGrid = () => {
    return (
        <div>
            <div>
            
            <div className="friendsGrid-section max-w-full mx-auto my-10 text-center grid justify-between grid-cols-1 md:grid-cols-2 lg:grid-cols-4 space-y-4">

                    {friends.map(friend=> 
                        <div key={friend.id} className="friendsGrid-item bg-white p-6 max-w-50 mx-auto rounded-sm shadow shadow-[#cdd1d7e0]">
                            <div>
                                <img className="h-40 w-40" src={friend.picture}/>
                            </div>
                            <div>
                                <h4 className="text-md">{friend.name}</h4>
                            </div>
                            <div>
                                <p className="text-[#64748B]">{friend.days_since_contact}days ago</p>
                            </div>
                            <div>
                                {friend.tags.map(tag=> (
                                    <div key={tag}>{tag}
                                    </div>
                                ))}
                            </div>
                            <div>
                                <p>{friend.status}</p>
                            </div>

                        </div>)}

            </div>

        </div>
        </div>
    );
};

export default FriendsGrid;