import { use } from "react";
import { z } from "zod";

export const registerSchema = z
  .object({
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().min(1, "Last name is required"),
    username: z.string().min(1, "Username is required"),
    email: z.string().min(1, "Email is required").email("Invalid email"),
    password: z
      .string()
      .min(1, "Password is required")
      .min(8, "Password must have than 8 characters"),
    confirmPassword: z.string().min(1, "Password confirmation is required"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Password do not match",
  });

export const regSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  username: z.string().min(1, "Username is required"),
  email: z.string().min(1, "Email is required").email("Invalid email"),
  password: z
    .string()
    .min(1, "Password is required")
    .min(8, "Password must have than 8 characters"),
});

export type RegisterSchema = z.infer<typeof registerSchema>;

export const signinSchema = z.object({
  email: z.string().min(1, "Email is required").email("Invalid email"),
  password: z
    .string()
    .min(1, "Password is required")
    .min(8, "Password must have than 8 characters"),
});

export type SignInSchema = z.infer<typeof signinSchema>;


export const detailsSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  username: z.string(),
})

export const espKeySchema = z.object({
  userId: z.string(),
  espKey: z.string() || z.null()
})

export const getEspKeySchema = espKeySchema.omit({userId: true})

export const passwordSchema = z.object({
  currentPassword: z.string(),
  newPassword: z.string(),
  confirmPassword: z.string()
}).refine((data) => data.newPassword === data.confirmPassword, {
  path: ["confirmPassword"],
  message: "Password do not match",
});

const durationPattern = /^(\d{2}):(\d{2}):(\d{2})$/;

export const callsSchema = z.object({
  callId: z.string(),
  time: z.string(),
  userId: z.string(),
  duration: z.string().regex(durationPattern, { message: "Duration must be in HH:MM:SS format" }),
  satisfaction: z.string(),
  scriptlink: z.string().url(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

// create a version of callsSchema that does not require the id field
export const createCallsSchema = callsSchema.omit({ id: true, createdAt: true, updatedAt: true, callId: true})

export type Calls = z.infer<typeof callsSchema>