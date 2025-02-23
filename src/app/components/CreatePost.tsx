"use client";

import React from "react";
import { Editor } from "./Editor";

const CreatePost: React.FC = () => {
    return(
        <section className="flex flex-col justify-center items-center text-gray-200 mt-32">
            <div>
                <h1>Create Post</h1>
            </div>
            <p>Title</p>
            <Editor />

        </section>
    );
};

export default CreatePost;
