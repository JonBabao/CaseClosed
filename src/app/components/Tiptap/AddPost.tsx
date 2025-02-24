"use client";

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
import { postSchema, PostValues } from "../../../../lib/validations";
import { createClient } from "../../../../lib/supabase/client"; // Import Supabase client

export default function AddText() {
  const supabase = createClient(); // Initialize Supabase client

  const form = useForm<PostValues>({
    resolver: zodResolver(postSchema),
    defaultValues: {
      title: "",
      description: "",
      body: "",
    },
  });

  const {
    handleSubmit,
    control,
    formState: { isSubmitting },
  } = form;

  async function onSubmit(values: PostValues) {
    const supabase = createClient(); // Reinitialize Supabase to ensure it's not undefined
  
    console.log("Submitting post:", values); // Check if values are correct
    console.log("Supabase client:", supabase); // Check if supabase is initialized
  
    try {
      const { data, error } = await supabase
        .from("posts")
        .insert([{ title: values.title, description: values.description, body: values.body }]);
  
      console.log("Supabase Response:", { data, error });
  
      if (error) {
        throw error; // Ensure error is properly thrown
      }
  
      toast({
        title: "Post Added",
        description: "Your new post has been added successfully.",
      });
  
      form.reset();
    } catch (error) {
      console.error("Error adding post:", JSON.stringify(error, null, 2)); // Use JSON.stringify for better debugging
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
