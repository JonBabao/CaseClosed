"use client";

import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { createClient } from "../../../lib/supabase/client";
import BlackButton from "../styles/blackButton";
import { AiFillHeart, AiOutlineHeart, AiOutlineEye } from "react-icons/ai";
import { timeAgo } from "./../utils/timeAgo";
import { shortenNumber } from "./../utils/shortenNumber";
import parse from "html-react-parser";


const ViewPost: React.FC = () => {
    const supabase = createClient();
    const { id } = useParams(); // Get the dynamic post ID from URL
    const [liked, setLiked] = useState(false);
    const [post, setPost] = useState<{
        id: number;
        title: string;
        body: string;
        createdBy: string;
        likes: number;
        views: number;
        datePosted: string;
    } | null>(null);

    useEffect(() => {
        const fetchPost = async () => {
            const { data, error } = await supabase
                .from("posts")
                .select("*")
                .eq("id", id)
                .single();

            if (error) {
                console.error("Error fetching post:", error);
            } else {
                setPost(data);
            }
        };
        

        if (id) fetchPost();
    }, [id]);

    if (!post) {
        return <p className="text-gray-400 text-center">Loading...</p>;
    }

    return (
        <div className="flex flex-col mt-32 px-8 lg:px-48 w-full text-gray-200">
            <h2 className="text-3xl righteous">{post.title}</h2>
            <p className="text-xs mt-1">by {post.createdBy}</p>
            <div className="mt-8 break-words prose prose-invert">
                {parse(post.body)}
            </div>

            <div className="flex text-sm mt-8 items-center gap-8 font-semibold">
                <BlackButton
                    style={{
                        border: "2px solid white",
                        borderRadius: "45px",
                        padding: "0.5rem 0.5rem",
                        width: "7rem",
                        justifyContent: "start",
                    }}
                    onClick={() => setLiked(!liked)}
                >
                    {liked ? <AiFillHeart size={20} className="text-gray-200 ml-1" /> : <AiOutlineHeart size={20} className="text-gray-200 ml-1" />}
                    <p className="ml-2">&nbsp;{post.likes}</p>
                </BlackButton>
                <div className="flex gap-4">
                    <AiOutlineEye size={20} />
                    <p>{shortenNumber(Number(post.views))}</p>
                </div>
                <p>Posted {timeAgo(post.datePosted)}</p>
            </div>
        </div>
    );
};

export default ViewPost;
