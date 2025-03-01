"use client";

import React, { useState, useEffect, useRef } from "react";
import { useParams } from "next/navigation";
import { createClient } from "../../../lib/supabase/client";
import BlackButton from "../styles/blackButton";
import { AiFillHeart, AiOutlineHeart, AiOutlineEye } from "react-icons/ai";
import { timeAgo } from "./../utils/timeAgo";
import { shortenNumber } from "./../utils/shortenNumber";
import parse from "html-react-parser";

const ViewPost: React.FC = () => {
    const supabase = createClient();
    const { id } = useParams();
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
    const [userId, setUserId] = useState<string | null>(null);

    const hasIncrementedViews = useRef(false);

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

        const fetchUser = async () => {
            const { data: user, error } = await supabase.auth.getUser();
            if (error) {
                console.error("Error fetching user:", error);
            } else {
                setUserId(user?.user?.id || null);
            }
        };

        if (id) {
            fetchPost();
            fetchUser();
        }
    }, [id]);

    useEffect(() => {
        const incrementViews = async () => {
            if (!post || hasIncrementedViews.current) return;

            const { error } = await supabase
                .from("posts")
                .update({ views: post.views + 1 })
                .eq("id", post.id);

            if (error) {
                console.error("Error incrementing views:", error);
            } else {
                setPost((prevPost) =>
                    prevPost ? { ...prevPost, views: prevPost.views + 1 } : null
                );

                hasIncrementedViews.current = true;
            }
        };

        incrementViews();
    }, [post]);

    useEffect(() => {
        const checkIfLiked = async () => {
            if (!userId || !post) return;

            const { data, error } = await supabase
                .from("likes")
                .select("id")
                .eq("post_id", post.id)
                .eq("user_id", userId)
                .eq("isLiked", 1)
                .single();

            if (error) {
                if (error.code === "PGRST116") {
                    // No like found
                    setLiked(false);
                } else {
                    console.error("Error checking like:", error);
                }
            } else {
                // Like found
                setLiked(true);
            }
        };

        if (userId && post) {
            checkIfLiked();
        }
    }, [userId, post]);

    const handleLike = async () => {
        if (!post || !userId) return;

        if (liked) {
            // Unlike
            const { error: deleteError } = await supabase
                .from("likes")
                .update({ isLiked: 0 })
                .eq("post_id", post.id)
                .eq("user_id", userId);

            if (deleteError) {
                console.error("Error removing like:", deleteError);
                return;
            }

            // Decrement likes count in the posts table
            const { error: updateError } = await supabase
                .from("posts")
                .update({ likes: post.likes - 1 })
                .eq("id", post.id);

            if (updateError) {
                console.error("Error updating post likes:", updateError);
                return;
            }

            // Update local state
            setLiked(false);
            setPost((prevPost) => prevPost ? { ...prevPost, likes: prevPost.likes - 1 } : null);
        } else {
            // Like
            const { error: insertError } = await supabase
                .from("likes")
                .update({ isLiked: 1 })
                .eq("post_id", post.id)
                .eq("user_id", userId);

            if (insertError) {
                console.error("Error adding like:", insertError);
                return;
            }

            // Increment likes count in the posts table
            const { error: updateError } = await supabase
                .from("posts")
                .update({ likes: post.likes + 1 })
                .eq("id", post.id);

            if (updateError) {
                console.error("Error updating post likes:", updateError);
                return;
            }

            // Update local state
            setLiked(true);
            setPost((prevPost) => prevPost ? { ...prevPost, likes: prevPost.likes + 1 } : null);
        }
    };

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
                    onClick={handleLike}
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