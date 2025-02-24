"use server";

import { createClient } from "../../../lib/supabase/client";
import { postSchema } from "../../../lib/validations";
import { toSlug } from "../../../lib/utils";
import { redirect } from "next/navigation";

// 📝 Create Post Function (Supabase)
export async function createPost(formData: FormData) {
  const supabase = await createClient();
  const values = Object.fromEntries(formData.entries());
  const { title, description } = postSchema.parse(values);

  // Generate slug from title
  const slug = toSlug(title);

  // Insert into Supabase
  const { error } = await supabase.from("posts").insert([{ title, description, slug }]);

  if (error) {
    console.error("Error creating post:", error.message);
    return;
  }

  redirect("/posts");
}

// 📝 Edit Post Function (Supabase)
export async function editPost(formData: FormData) {
    const supabase = await createClient();
  const values = Object.fromEntries(formData.entries());
  const { id, title, description } = postSchema.parse(values);

  // Update post in Supabase
  const { error } = await supabase
    .from("posts")
    .update({ title, description })
    .eq("id", id);

  if (error) {
    console.error("Error updating post:", error.message);
    return;
  }

  redirect("/posts");
}
