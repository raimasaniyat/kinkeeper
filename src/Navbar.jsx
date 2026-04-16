import { NavLink } from "react-router-dom";

const Navbar = () => {
    const linkClass = ({ isActive }) => 
        isActive ? "text-[#244d3f] font-bold border-b-2 border-[#244d3f] flex items-center gap-2" 
                 : "text-[#64748B] flex items-center gap-2 hover:text-[#244d3f]";

    return (
        <nav className="bg-white shadow-sm sticky top-0 z-50">
            <div className="max-w-[1110px] mx-auto px-4 py-4 flex justify-between items-center">
                <div className="text-2xl font-bold text-[#244d3f]">kinkeeper</div>
                <div className="flex gap-8">
                    <NavLink to="/" className={linkClass}>
                        <i className="fa-solid fa-house"></i> Home
                    </NavLink>
                    <NavLink to="/timeline" className={linkClass}>
                        <i className="fa-solid fa-clock-rotate-left"></i> Timeline
                    </NavLink>
                    <NavLink to="/stats" className={linkClass}>
                        <i className="fa-solid fa-chart-pie"></i> Stats
                    </NavLink>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
