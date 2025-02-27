"use client";

import React, { useState, useEffect } from "react";
import { createClient } from "../../../lib/supabase/client";
import BlackButton from "../styles/blackButton";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { AiOutlineEye } from "react-icons/ai";


const ViewPost: React.FC = () => {
    const supabase = createClient();
    const [liked, setLiked] = useState(false);

    

    return(
        <div className="flex flex-col mt-32 px-8 lg:px-48 w-full text-gray-200">
            <h2 className="text-3xl righteous">Hello World</h2>
            <p className="text-xs mt-1">by Jon Endrick Babao</p>
            <p className="mt-8">Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet</p>
            <div className="flex text-sm mt-8 items-center gap-8 font-semibold">
                <BlackButton style={{ 
                    border: "2px solid white",
                    borderRadius: "45px",
                    padding: "0.5rem 0.5rem",
                    width: "7rem",
                    justifyContent: "start",
                    }}
                    onClick={() => setLiked(!liked)}
                    >
                    {liked ? <AiFillHeart size={20} className="text-gray-200 ml-1" /> : <AiOutlineHeart size={20} className="text-gray-200 ml-1" />}
                    <p className="ml-2">&nbsp;1.2k</p>
                </BlackButton>
                <div className="flex gap-4">
                    <AiOutlineEye size={20} />
                    <p>1.2k</p>
                </div>
                <p>Posted 02/22/2022</p>

            </div>

        </div>
    );
};

export default ViewPost;