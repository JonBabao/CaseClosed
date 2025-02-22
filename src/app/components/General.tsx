"use client";

import React from "react";
import Logo from "/public/logo.png"

const General: React.FC = () => {
    return(
        <section className="flex flex-col border-2 w-full border-gray-500 p-8 rounded-lg items-center justify-center">
                <h1 className="w-full righteous text-xl text-gray-200">General Discussions</h1>
                <div className="flex flex-wrap gap-4 items-center justify-center mt-4">
                    <div className="flex lightDark w-80 h-32 p-6 border-l-4 border-gray-500 rounded-md">
                        <img
                        src={Logo.src}
                        alt="Logo"
                        className="w-16 object-contain"
                        />
                        <div className="flex flex-col pl-8 justify-center">
                            <p className="font-bold text-base">Rules</p>
                            <p className="overflow-hidden">What we expect you to not do to keep a healthy community.</p>
                        </div>
                    </div>
                    <div className="flex lightDark w-80 h-32 p-6 border-l-4 border-gray-500 rounded-md">
                        <img
                        src={Logo.src}
                        alt="Logo"
                        className="w-16 object-contain"
                        />
                        <div className="flex flex-col pl-8 justify-center">
                            <p className="font-bold text-base">Introduction</p>
                            <p>Introduce yourself to the community!</p>
                        </div>
                    </div>                    
                    <div className="flex lightDark w-80 h-32 p-6 border-l-4 border-gray-500 rounded-md">
                        <img
                        src={Logo.src}
                        alt="Logo"
                        className="w-16 object-contain"
                        />
                        <div className="flex flex-col pl-8 justify-center">
                            <p className="font-bold text-base">About Case Closed</p>
                            <p>About the owner and his inspiration on creating the forum</p>
                        </div>
                    </div>
                    
                </div>
            </section>
    );
};

export default General;