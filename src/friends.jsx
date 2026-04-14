import { use } from "react";

const Friends = ({friendsPromise}) => {
    const friends = use(friendsPromise)
    console.log(friends);

    return (
        <div className="banner-section max-w-[1110px] mx-auto py-20">
            <div className="banner-container max-w-full">
                <div className="text-center space-y-4">
                    <h2 className="text-[#1F2937] text-5xl">Friends to keep close in your life</h2>
                    <p className="text-[#64748B]">Your personal shelf of meaningful connections. Browse, tend, and nurture the
relationships that matter most.</p>
                    <button className="bg-[#244d3f] text-white px-2 py-4 rounded-sm"><i class="fa-solid fa-plus"></i> Add a Friend</button>
                </div>

                <div className="summary-section grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-full mx-auto text-center my-10">
                    <div className="summary-item bg-white p-2.5 max-w-[250px] rounded-sm shadow shadow-[#cdd1d7e0]">
                        <div className="summary-wrap space-y-1">
                            <h3 className="text-[#244d3f]">10</h3>
                            <p className="text-[#64748B]">Total Friends</p>
                        </div>
                    </div>
                    <div className="summary-item bg-white p-2.5 max-w-[250px] rounded-sm shadow shadow-[#cdd1d7e0]">
                        <div className="summary-wrap space-y-1">
                            <h3 className="text-[#244d3f]">3</h3>
                            <p className="text-[#64748B]">On Track</p>
                        </div>
                    </div>
                    <div className="summary-item bg-white p-2.5 max-w-[250px] rounded-sm shadow shadow-[#cdd1d7e0]">
                        <div className="summary-wrap space-y-1">
                            <h3 className="text-[#244d3f]">6</h3>
                            <p className="text-[#64748B]">Need Attention</p>
                        </div>
                    </div>
                    <div className="summary-item bg-white p-2.5 max-w-[250px] rounded-sm shadow shadow-[#cdd1d7e0]">
                        <div className="summary-wrap space-y-1">
                            <h3 className="text-[#244d3f]">12</h3>
                            <p className="text-[#64748B]">Interactions This Month</p>
                        </div>
                    </div>
                </div>

                

            </div>

        </div>
    );
};

export default Friends;