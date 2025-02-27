"use client";

import React, { useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/app/components/Tiptap/ui/form";
import { Input } from "./ui/input";
import { toast } from "./ui/use-toast";
import RichTextEditor from "./RichTextEditor";
import LoadingBtn from "./LoadingBtn";
import { useRouter } from "next/navigation";
import { postSchema, PostValues } from "../../../../lib/validations";
import { createClient } from "../../../../lib/supabase/client"; 

export default function AddText() {
  const supabase = createClient();
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      const { data: userData, error: userError } = await supabase.auth.getUser();

      if(userError || !userData?.user){
        router.push("/auth/login");
        return;
      }
      
      const userId = userData.user.id;
      console.log("Authenticated user ID:", userId);

      const { data: profileData, error: profileError } = await supabase
        .from("profiles")
        .select("username")
        .eq("id", userId)
        .single();

      console.log("Profile data response:", profileData, "Error:", profileError);

      if (profileError) {
        console.error("Error fetching username:", profileError);
        return;
      }

      setUsername(profileData.username);
      setLoading(false);

    };

    checkAuth();
  }, [router]);


  const form = useForm<PostValues>({
    resolver: zodResolver(postSchema),
    defaultValues: {
      title: "",
      description: "",
      body: "",
      createdBy: "",
    },
  });

  const {
    handleSubmit,
    control,
    formState: { isSubmitting },
  } = form;

  async function onSubmit(values: PostValues) {
    const supabase = createClient(); 
  
    console.log("Submitting post:", values); 
    console.log("Supabase client:", supabase); 
  
    try {
      const { data, error } = await supabase
        .from("posts")
        .insert([{ title: values.title, description: values.description, body: values.body, createdBy: username }]);
  
      console.log("Supabase Response:", { data, error });
  
      if (error) {
        throw error; 
      }
  
      toast({
        title: "Post Added",
        description: "Your new post has been added successfully.",
      });
  
      form.reset();
    } catch (error) {
      console.error("Error adding post:", JSON.stringify(error, null, 2)); 
      toast({
        title: "Error",
        description: error?.message || "Failed to add post. Try again later.",
        variant: "destructive",
      });
    }
  }
  

  return (
    <Form {...form}>
      <form
        className="space-y-6 p-2 text-gray-200"
        noValidate
        onSubmit={handleSubmit(onSubmit)}
      >
        <FormField
          control={control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="body"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Body</FormLabel>
              <FormControl>
                <RichTextEditor onChange={field.onChange} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <LoadingBtn type="submit" loading={isSubmitting}>
          Submit
        </LoadingBtn>
      </form>
    </Form>
  );
}
