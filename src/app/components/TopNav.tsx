"use client";

import React, { useState, useEffect } from "react";
import Logo from "/public/logo_clean.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { FiPlus } from "react-icons/fi";
import { createClient } from "../../../lib/supabase/client";
import { User } from "@supabase/supabase-js"; 
import Link from "next/link";
import { useRouter } from "next/navigation";

const TopNav: React.FC = () => {
    const router = useRouter();
    const supabase = createClient();
    const [isOpen, setIsOpen] = useState(false); 
    const [user, setUser] = useState<User | null>(null); 

    useEffect(() => {
        const checkUserLoggedIn = async () => {
            const { data } = await supabase.auth.getUser();
            setUser(data?.user || null);
        };

        checkUserLoggedIn();

        const { data: authListener } = supabase.auth.onAuthStateChange((_event, session) => {
            setUser(session?.user || null);
        });

        return () => {
            authListener?.subscription.unsubscribe();
        };
    }, []);

    const toggleMenu = () => {
        setIsOpen((prev) => !prev);
    };

    const handleLogout = async () => {
        const { error } = await supabase.auth.signOut();
        if (error) {
            console.error("Logout failed:", error.message);
        } else {
            setUser(null); // Clear user state
            router.replace("/auth/login"); // Redirect to login page
            window.location.reload(); // Ensure fresh auth state
        }
    };
    

    return (
        <div>
            {/* Desktop Navbar */}
            <nav className="hidden fixed lg:flex flex-row items-center bg-[#131313] text-gray-200 text-base w-full h-20 inset-0 z-50">
                <img src={Logo.src} alt="Logo" className="w-16 ml-8" />
                <h1 className="righteous text-3xl ml-4">Case Closed</h1>
                <div className="flex flex-grow items-center ml-16 font-semibold text-base gap-10">
                    <a href="/dashboard/home" className="p-7 hover:bg-[#292929] transition-colors">Home</a>
                    <a className="p-7 hover:bg-[#292929] transition-colors">Help</a>
                </div>

                <div className="flex gap-10 mr-10 font-semibold text-base">
                    {user ? (
                        <>  <Link href="/dashboard/createPost">
                                <button className="flex justify-center items-center p-2 gap-2 hover:underline">
                                    <FiPlus size={25} />
                                    Create
                                </button>
                            </Link>
                            <Link href="/auth/login">
                                <button
                                    className="p-2 px-3 rounded-lg border-2 border-gray-200 hover:bg-[#1c1c1c]"
                                    onClick={handleLogout}
                                >
                                    Log Out
                                </button>
                            </Link>
                            
                        </>
                    ) : (
                        <>  
                            <Link href="/auth/login">   
                                <button className="p-2 px-3 rounded-lg border-2 border-gray-200 hover:bg-[#1c1c1c]">
                                    Log In
                                </button>
                            </Link>
                            <Link href="/auth/register">
                                <button className="p-2 px-3 rounded-lg bg-gray-200 text-[#292929] hover:bg-gray-100">
                                    Register
                                </button>
                            </Link>
                        </>
                    )}
                </div>
            </nav>

            {/* Mobile Navbar */}
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
                        {user ? (
                            <button
                                onClick={handleLogout}
                                className="p-3 text-left hover:bg-[#2d2d2d] w-full"
                            >
                                Logout
                            </button>
                        ) : (
                            <>
                                <a href="/auth/login" className="p-3 hover:bg-[#2d2d2d]">Log In</a>
                                <a href="/auth/register" className="p-3 hover:bg-[#2d2d2d]">Register</a>    
                            </>
                        )}
                    </div>
                )}
            </nav>
        </div>
    );
};

export default TopNav;
