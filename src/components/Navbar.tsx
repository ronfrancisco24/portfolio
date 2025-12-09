import { useState } from "react";


function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-5 sm:px-12 xl:px-[3.75rem] mx-auto pt-[32px] flex justify-between items-center">

            {/* Desktop Navigation */}
            <div className="hidden lg:flex">
                <div className="flex justify-between">
                    <div>
                        <h1>Aaron</h1>
                    </div>
                    {/* Navigation Options */}
                    <div className="w-[50vw] max-w-[580px] h-12 border border-white bg-transparent rounded-full text-white">
                        <div className="mx-7 h-full flex justify-between items-center font-figtree text-brand-white font-medium">
                            <a href="#about-section">About</a>
                            <a href="#speakers-section">Speakers</a>
                            <a href="#partners-section">Partners</a>
                            <a href="#hackathon-section">Hackathon</a>
                            {/* <a href="#registration-section">Registration</a> */}
                            <a href="#sponsors-section">Sponsors</a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Button (visible only on small screens) */}
            <div
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden w-[66px] h-[48px] bg-white/10 backdrop-blur-md rounded-full cursor-pointer flex justify-center items-center"
            >
                
            </div>

            {/* Mobile Dropdown Menu */}
            <div
            className={`absolute top-full left-0 w-full bg-white/10 backdrop-blur-md flex flex-col items-center gap-6 py-6 font-figtree text-brand-white font-medium rounded-b-2xl transition-all duration-300 ease-in-out lg:hidden
                ${isOpen ? "opacity-100 visible" : "opacity-0 invisible -translate-y-2"}
            `}
            >
                <a href="#about-section" className="cursor-pointer hover:text-brand-blue-200">About</a>
                <a href="#speakers-section" className="cursor-pointer hover:text-brand-blue-200">Speakers</a>
                <a href="#partners-section" className="cursor-pointer hover:text-brand-blue-200">Partners</a>
                <a href="#hackathon-section" className="cursor-pointer hover:text-brand-blue-200">Hackathon</a>
                {/* <a href="#registration-section" className="cursor-pointer hover:text-brand-blue-200">Registration</a> */}
                <a href="#sponsors-section" className="cursor-pointer hover:text-brand-blue-200">Sponsors</a>

                {/* Mobile Register Button */}
                <div className="w-[171px] h-[48px] bg-brand-blue-200 rounded-full cursor-pointer flex justify-center items-center">
                    <a href='https://luma.com/qk29nhf8' target='_blank' className="font-figtree text-brand-white font-medium">Register Now</a>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
