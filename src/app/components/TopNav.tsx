"use client";

import React from "react";
import Logo from "/public/logo_clean.png"
import { GiHamburgerMenu } from "react-icons/gi";

const TopNav: React.FC = () => {
    return(
        <nav className="hidden fixed lg:flex items-center bg-[#131313] w-full h-20 inset-0 z-50">
            <img
                src={Logo.src}
                alt="Logo"
                className="w-16 ml-8"
            />
            <h1 className="righteous text-3xl text-gray-200 ml-4">Case Closed</h1>
        </nav>
    );
};

export default TopNav;