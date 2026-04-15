
const Summary = () => {
    console.log("Summary is rendering");
    return (
        <div>
            <div className="summary-section text-white max-w-full mx-auto my-10 text-center grid justify-center grid-cols-1 md:grid-cols-2 lg:grid-cols-4 space-y-4">
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
    );
};

export default Summary;