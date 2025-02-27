import { z } from "zod";


export const postSchema = z.object({
    title: z.string().min(2, {
        message: "Title must be at least 2 characters.",
      }),
    description: z.string().max(50, {
        message: "description must be at most 50 characters.",
      }),
    body: z.string().min(10, {
      message: "body must be at least 10 characters.",
    }),
    createdBy: z.string(),

    id: z.string().optional()
  });
  
  
  
  export type PostValues = z.infer<typeof postSchema>;