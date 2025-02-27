"use client";

import React, { useEffect, useState } from "react";
import Logo from "/public/logo.png"
import { createClient } from "../../../lib/supabase/client";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { AiOutlineEye } from "react-icons/ai";
import { timeAgo } from "../utils/timeAgo";
import { shortenNumber } from "../utils/shortenNumber";
import { useRouter } from "next/navigation";

const Featured: React.FC = () => {

    const [posts, setPosts] = useState<{ 
        id: number, 
        title: string, 
        description: string, 
        createdBy: string,      
        likes: BigInteger,
        views: BigInteger, 
        datePosted: string,
     }[]>([]);

    const supabase = createClient();
    const router = useRouter();

    useEffect(() => {
        const fetchPosts = async () => {
            const { data, error } = await supabase.from("posts").select("id, title, description, createdBy, likes, views, datePosted");
            if (error) {
                console.error("Error fetching posts:", error);
            } else {
                setPosts(data);
            }
        };
    
        fetchPosts();
    }, []);

    return(
        <section className="w-full flex flex-col lightDark p-8 rounded-lg items-center justify-center">
            <h2 className="w-full righteous text-xl text-gray-200">Featured Mysteries</h2>
            <div className="flex flex-wrap mt-4 w-full">
                {posts.length > 0 ? (
                    posts.map((post) => (
                        <button 
                            key={post.id} 
                            onClick={() => router.push(`/dashboard/viewPost/${post.id}`)} 
                            className="cursor-pointer flex w-full py-4 md:p-6 border-t-2 border-gray-500 "
                        >
                            <img
                            src={Logo.src}
                            alt="Logo"
                            className="w-16 hidden md:flex object-contain"
                            />
                            <div className="flex flex-grow flex-col pl-8 justify-center">
                                <p className="font-bold self-start text-base">{post.title}</p>
                                <p className="self-start">{post.description}</p>
                                <p className="flex md:hidden mt-4 gap-2 w-32"><AiOutlineHeart size={15} className="text-gray-200"/> {shortenNumber(Number(post.likes))} <AiOutlineEye size={15} className="text-gray-200" /> {shortenNumber(Number(post.views))}</p>
                            </div>
                            <div className="hidden md:flex flex-col text-right justify-center w-16">
                                <p className="flex items-center gap-2 font-semibold"><AiOutlineHeart size={15} className="text-gray-200" /> {shortenNumber(Number(post.likes))}</p>
                                <p className="flex items-center gap-2 font-semibold"><AiOutlineEye size={15} className="text-gray-200" /> {shortenNumber(Number(post.views))}</p>
                            </div>
                            
                            <div className="hidden md:flex border-l-2 ml-4 p-4 items-center">
                                <img
                                    src={Logo.src}
                                    alt="Logo"
                                    className="w-8"
                                />
                                <div className="flex flex-col w-36 ml-4 justify-center">
                                    <p>{post.createdBy}</p>
                                    <p>Created: {timeAgo(post.datePosted)}</p>
                                </div>

                            </div>
                        </button>
                    ))
                    ) : (
                        <div className="w-full flex items-center justify-center">
                            <p className="text-gray-400 text-center">Loading...</p>
                        </div>
                )}
            </div>
        </section>
    );
};

export default Featured;