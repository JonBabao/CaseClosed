"use client";

import React from  'react';
import Link from 'next/link';
import Logo from '/public/logo.png';

const Home: React.FC = () => {
    return(
        <div className="flex flex-col kindaDark w-full gap-10 mt-10 items-center justify-center text-gray-200">
            {/*General Discussions*/}
            <section className="flex flex-col bg-[#2d2d2d] p-8 rounded-lg w-[90vw] items-center justify-center">
                <h1 className="w-full righteous text-xl  text-gray-200">General Discussions</h1>
                <div className="flex flex-wrap gap-4 items-center justify-center mt-4">
                    <div className="flex w-64 p-6 border-l-4 border-gray-500 rounded-md bg-gray-800">
                        <img
                        src={Logo.src}
                        alt="Logo"
                        className="w-16"
                        />
                        <div className="flex flex-col pl-8 justify-center">
                            <p className="font-bold text-lg">Rules</p>
                            <p>Description</p>
                        </div>
                    </div>
                    <div className="flex w-64 p-6 border-l-4 border-gray-500 rounded-md bg-gray-800">
                        <img
                        src={Logo.src}
                        alt="Logo"
                        className="w-16"
                        />
                        <div className="flex flex-col pl-8 justify-center">
                            <p className="font-bold text-lg">Rules</p>
                            <p>Description</p>
                        </div>
                    </div>                    
                    <div className="flex w-64 p-6 border-l-4 border-gray-500 rounded-md bg-gray-800">
                        <img
                        src={Logo.src}
                        alt="Logo"
                        className="w-16"
                        />
                        <div className="flex flex-col pl-8 justify-center">
                            <p className="font-bold text-lg">Rules</p>
                            <p>Description</p>
                        </div>
                    </div>
                </div>
            </section>

            {/*Featured Mysteries*/}
            <section className="flex flex-col bg-[#2d2d2d] p-8 rounded-lg w-[90vw] items-center justify-center">
                <h1 className="w-full righteous text-xl text-gray-200">General Discussions</h1>
                <div className="flex flex-wrap gap-4 mt-4 w-full">
                    <div className="flex w-full p-6 border-l-4 border-gray-500 rounded-md bg-gray-800">
                        <img
                        src={Logo.src}
                        alt="Logo"
                        className="w-16"
                        />
                        <div className="flex flex-col pl-8 justify-center">
                            <p className="font-bold text-lg">Rules</p>
                            <p>Description</p>
                        </div>
                    </div>
                    <div className="flex w-full p-6 border-l-4 border-gray-500 rounded-md bg-gray-800">
                        <img
                        src={Logo.src}
                        alt="Logo"
                        className="w-16"
                        />
                        <div className="flex flex-col pl-8 justify-center">
                            <p className="font-bold text-lg">Rules</p>
                            <p>Description</p>
                        </div>
                    </div>                    
                    <div className="flex w-full p-6 border-l-4 border-gray-500 rounded-md bg-gray-800">
                        <img
                        src={Logo.src}
                        alt="Logo"
                        className="w-16"
                        />
                        <div className="flex flex-col pl-8 justify-center">
                            <p className="font-bold text-lg">Rules</p>
                            <p>Description</p>
                        </div>
                    </div>
                </div>
            </section>

            {/*Recent Mysteries*/}
            <section className="flex flex-col bg-[#2d2d2d] p-8 rounded-lg w-[90vw] items-center justify-center">
                <h1 className="w-full righteous text-xl  text-gray-200">General Discussions</h1>
                <div className="flex flex-wrap gap-4 items-center justify-center mt-4">
                    <div className="flex w-64 p-6 border-l-4 border-gray-500 rounded-md bg-gray-800">
                        <img
                        src={Logo.src}
                        alt="Logo"
                        className="w-16"
                        />
                        <div className="flex flex-col pl-8 justify-center">
                            <p className="font-bold text-lg">Rules</p>
                            <p>Description</p>
                        </div>
                    </div>
                    <div className="flex w-64 p-6 border-l-4 border-gray-500 rounded-md bg-gray-800">
                        <img
                        src={Logo.src}
                        alt="Logo"
                        className="w-16"
                        />
                        <div className="flex flex-col pl-8 justify-center">
                            <p className="font-bold text-lg">Rules</p>
                            <p>Description</p>
                        </div>
                    </div>                    
                    <div className="flex w-64 p-6 border-l-4 border-gray-500 rounded-md bg-gray-800">
                        <img
                        src={Logo.src}
                        alt="Logo"
                        className="w-16"
                        />
                        <div className="flex flex-col pl-8 justify-center">
                            <p className="font-bold text-lg">Rules</p>
                            <p>Description</p>
                        </div>
                    </div>
                </div>
            </section>

           {/*All Mysteries*/}
            <section className="flex flex-col bg-[#2d2d2d] p-8 rounded-lg w-[90vw] items-center justify-center">
                <h1 className="w-full righteous text-xl  text-gray-200">General Discussions</h1>
                <div className="flex flex-wrap gap-4 items-center justify-center mt-4">
                    <div className="flex w-64 p-6 border-l-4 border-gray-500 rounded-md bg-gray-800">
                        <img
                        src={Logo.src}
                        alt="Logo"
                        className="w-16"
                        />
                        <div className="flex flex-col pl-8 justify-center">
                            <p className="font-bold text-lg">Rules</p>
                            <p>Description</p>
                        </div>
                    </div>
                    <div className="flex w-64 p-6 border-l-4 border-gray-500 rounded-md bg-gray-800">
                        <img
                        src={Logo.src}
                        alt="Logo"
                        className="w-16"
                        />
                        <div className="flex flex-col pl-8 justify-center">
                            <p className="font-bold text-lg">Rules</p>
                            <p>Description</p>
                        </div>
                    </div>                    
                    <div className="flex w-64 p-6 border-l-4 border-gray-500 rounded-md bg-gray-800">
                        <img
                        src={Logo.src}
                        alt="Logo"
                        className="w-16"
                        />
                        <div className="flex flex-col pl-8 justify-center">
                            <p className="font-bold text-lg">Rules</p>
                            <p>Description</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;