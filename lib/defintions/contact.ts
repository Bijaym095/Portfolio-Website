import * as z from "zod";

export const contactSchema = z.object({
  fullName: z.string().min(1, { message: "Full name is required" }),
  email: z.email({ message: "Please enter a valid email address" }),
  message: z
    .string({message: "Message is required"})
    .min(8, { message: "Message must be at least 8 characters long" })
    .max(500, { message: "Message cannot exceed 500 characters" }),
});
