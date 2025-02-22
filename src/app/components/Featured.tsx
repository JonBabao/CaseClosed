"use client";

import React from "react";
import Logo from "/public/logo.png"

const Featured: React.FC = () => {
    return(
        <section className="flex flex-col lightDark p-8 rounded-lg items-center justify-center">
            <h2 className="w-full righteous text-xl text-gray-200">Featured Mysteries</h2>
            <div className="flex flex-wrap mt-4 w-full">
                <div className="flex w-full py-4 md:p-6 border-t-2 border-gray-500 ">
                    <img
                    src={Logo.src}
                    alt="Logo"
                    className="w-16 hidden md:flex object-contain"
                    />
                    <div className="flex flex-grow flex-col pl-8 justify-center">
                        <p className="font-bold text-base">Rules</p>
                        <p>Description lorem ipsum dolor sit amet</p>
                        <p className="block md:hidden"><b>Likes:</b> 1m <b>Views:</b> 1.2m</p>
                    </div>
                    <div className="hidden md:flex flex-col text-right justify-center">
                        <p>Likes: 1m</p>
                        <p>Views: 1.2m</p>
                    </div>
                    <div className="hidden md:flex border-l-2 ml-4 p-4 items-center">
                        <img
                            src={Logo.src}
                            alt="Logo"
                            className="w-8"
                        />
                        <div className="flex flex-col ml-4 justify-center">
                            <p>Username</p>
                            <p>Created on: 02/22/2022</p>

                        </div>

                    </div>
                </div>
                <div className="flex w-full py-4 md:p-6 border-t-2 border-gray-500 ">
                    <img
                    src={Logo.src}
                    alt="Logo"
                    className="w-16 hidden md:flex object-contain"
                    />
                    <div className="flex flex-grow flex-col pl-8 justify-center">
                        <p className="font-bold text-base">Rules</p>
                        <p>Description lorem ipsum dolor sit amet</p>
                        <p className="block md:hidden"><b>Likes:</b> 1m <b>Views:</b> 1.2m</p>
                    </div>
                    <div className="hidden md:flex flex-col text-right justify-center">
                        <p>Likes: 1m</p>
                        <p>Views: 1.2m</p>
                    </div>
                    <div className="hidden md:flex border-l-2 p-4 ml-4 items-center">
                        <img
                            src={Logo.src}
                            alt="Logo"
                            className="w-8"
                        />
                        <div className="flex flex-col ml-4 justify-center">
                            <p>Username</p>
                            <p>Created on: 02/22/2022</p>

                        </div>

                    </div>
                </div>                    
                <div className="flex w-full py-4 md:p-6 border-t-2 border-gray-500 ">
                    <img
                    src={Logo.src}
                    alt="Logo"
                    className="w-16 hidden md:flex object-contain"
                    />
                    <div className="flex flex-grow flex-col pl-8 justify-center">
                        <p className="font-bold text-base">Rules</p>
                        <p>Description lorem ipsum dolor sit amet</p>
                        <p className="block md:hidden"><b>Likes:</b> 1m <b>Views:</b> 1.2m</p>
                    </div>
                    <div className="hidden md:flex flex-col text-right justify-center">
                        <p>Likes: 1m</p>
                        <p>Views: 1.2m</p>
                    </div>
                    <div className="hidden md:flex border-l-2 p-4 ml-4 items-center">
                        <img
                            src={Logo.src}
                            alt="Logo"
                            className="w-8"
                        />
                        <div className="flex flex-col ml-4 justify-center">
                            <p>Username</p>
                            <p>Created on: 02/22/2022</p>

                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Featured;