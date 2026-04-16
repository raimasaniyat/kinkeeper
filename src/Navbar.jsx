import { useState } from "react"; 
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const linkClass = ({ isActive }) => 
        isActive ? "text-[#244d3f] font-bold border-b-2 border-[#244d3f] flex items-center gap-2" 
                 : "text-[#64748B] flex items-center gap-2 hover:text-[#244d3f]";

    return (
        <nav className="bg-white shadow-sm sticky top-0 z-50">
            <div className="max-w-[1110px] mx-auto px-4 py-4 flex justify-between items-center">
                <div className="text-2xl font-bold text-[#244d3f]">kinkeeper</div>

                <button 
                    className="md:hidden text-[#244d3f] text-2xl"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <i className={`fa-solid ${isOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
                </button>

                <div className="hidden md:flex gap-8">
                    <NavLinks linkClass={linkClass} />
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden bg-white border-t flex flex-col gap-4 p-4 pb-6 shadow-lg">
                    <NavLinks linkClass={linkClass} onClick={() => setIsOpen(false)} />
                </div>
            )}
        </nav>
    );
};

const NavLinks = ({ linkClass, onClick }) => (
    <>
        <NavLink to="/" className={linkClass} onClick={onClick}>
            <i className="fa-solid fa-house"></i> Home
        </NavLink>
        <NavLink to="/timeline" className={linkClass} onClick={onClick}>
            <i className="fa-solid fa-clock-rotate-left"></i> Timeline
        </NavLink>
        <NavLink to="/stats" className={linkClass} onClick={onClick}>
            <i className="fa-solid fa-chart-pie"></i> Stats
        </NavLink>
    </>
);

export default Navbar;
