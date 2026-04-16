import React from "react";

const Footer = () => {
    return (
        <footer className="bg-[#244d3f] text-white mt-10">

            <div className="max-w-[1110px] mx-auto px-4 py-12 text-center space-y-4">

                <h2 className="text-3xl font-bold">KeenKeeper</h2>

                <p className="text-sm text-gray-200 max-w-xl mx-auto">
                    Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
                </p>

                <div className="flex justify-center gap-4 mt-4">
                    <div className="bg-white text-[#244d3f] w-10 h-10 flex items-center justify-center rounded-full cursor-pointer">
                        <i className="fa-brands fa-youtube"></i>
                    </div>
                    <div className="bg-white text-[#244d3f] w-10 h-10 flex items-center justify-center rounded-full cursor-pointer">
                        <i className="fa-brands fa-facebook-f"></i>
                    </div>
                    <div className="bg-white text-[#244d3f] w-10 h-10 flex items-center justify-center rounded-full cursor-pointer">
                        <i className="fa-brands fa-x-twitter"></i>
                    </div>
                </div>

            </div>

            <div className="border-t border-white/20">
                <div className="max-w-[1110px] mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center text-xs text-gray-300 gap-2">

                    <p>© 2026 KeenKeeper. All rights reserved.</p>

                    <div className="flex gap-4">
                        <span className="cursor-pointer hover:text-white">Privacy Policy</span>
                        <span className="cursor-pointer hover:text-white">Terms of Service</span>
                        <span className="cursor-pointer hover:text-white">Cookies</span>
                    </div>

                </div>
            </div>

        </footer>
    );
};

export default Footer;