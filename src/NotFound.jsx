import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4">

            <h1 className="text-7xl md:text-9xl font-bold text-[#244d3f]">
                404
            </h1>
            
            <p className="text-xl md:text-2xl text-[#64748B] mt-4">
                Page Not Found
            </p>

            <Link to="/">
                <button className="btn mt-6 bg-[#244d3f] text-white hover:bg-[#1e3d33] border-none">
                    <i className="fa-solid fa-arrow-left mr-2"></i>
                    Back to Home
                </button>
            </Link>

        </div>
    );
};

export default NotFound;