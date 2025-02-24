"use client";

import React, { useState } from "react";
import AddPost from "./Tiptap/AddPost";

const CreatePost: React.FC = () => {

  return (
    <section className="flex flex-col justify-center text-gray-200 mx-10 lg:mx-0 lg:px-48 mt-32">
      <h1 className="righteous text-3xl mb-8 pl-2">Create Post</h1>
      <AddPost />
    </section>
  );
};

export default CreatePost;
