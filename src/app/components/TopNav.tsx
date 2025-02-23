"use client";

import React, { useState } from "react";
import Logo from "/public/logo_clean.png"
import { GiHamburgerMenu } from "react-icons/gi";
import { FiPlus } from "react-icons/fi";



const TopNav: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false); 

    const toggleMenu = () => {
        console.log("Hamburger clicked!");  // Debug log
        setIsOpen((prev) => !prev);
        console.log("isOpen state:", !isOpen); // Check state after update
    };


    return(
        <div>
            <nav className="hidden fixed lg:flex flex-row items-center bg-[#131313] text-gray-200 text-base w-full h-20 inset-0 z-50">
                <img
                    src={Logo.src}
                    alt="Logo"
                    className="w-16 ml-8"
                />
                <h1 className="righteous text-3xl ml-4">Case Closed</h1>
                <div className="flex flex-grow items-center ml-16 font-semibold text-base gap-10">
                    <button className="p-7 hover:bg-[#292929] transition-colors">Home</button>
                    <button className="p-7 hover:bg-[#292929] transition-colors">Help</button>
                </div>
                <div className="flex gap-10 mr-10 font-semibold text-base">
                    <button className="flex justify-center items-center gap-2 hover:underline">
                        <FiPlus size={20} />
                        Create
                    </button>
                    <button className="p-2 px-3 rounded-lg border-2 border-gray-200 hover:bg-[#1c1c1c]">Log In</button>
                    <button className="p-2 px-3 rounded-lg bg-gray-200 text-[#292929] hover:bg-gray-100">Register</button>
                    
                </div>

            </nav>

            <nav className="fixed flex flex-row h-20 w-full text-gray-200 lg:hidden items-center justify-center bg-[#131313] inset-0 z-50">
                <button onClick={toggleMenu} className="ml-6 z-50">
                    <GiHamburgerMenu size={32} />
                </button>

                <h1 className="righteous -ml-8 text-3xl text-center flex-grow">Case Closed</h1>

                {isOpen && (
                    <div className="absolute top-16 left-0 w-full bg-[#121212] text-white flex flex-col p-4 shadow-lg z-40">
                        <a href="#" className="p-3 hover:bg-[#2d2d2d]">Home</a>
                        <a href="#" className="p-3 hover:bg-[#2d2d2d]">Leaderboards</a>
                        <a href="#" className="p-3 hover:bg-[#2d2d2d]">Help</a>
                        <a href="#" className="p-3 hover:bg-[#2d2d2d]">Logout</a>
                    </div>
                )}
            </nav>
        </div>



    );
};

export default TopNav;