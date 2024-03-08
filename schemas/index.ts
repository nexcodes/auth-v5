import { UserRole } from "@prisma/client";
import * as z from "zod";

export const LoginSchema = z.object({
  email: z
    .string()
    .min(1, {
      message: "Email is required.",
    })
    .email({ message: "Invalid Email." }),
  password: z.string().min(1, {
    message: "Password is required.",
  }),
  code: z.optional(z.string()),
});

export const RegisterSchema = z.object({
  email: z
    .string()
    .min(1, {
      message: "Email is required.",
    })
    .email({ message: "Invalid Email." }),
  password: z.string().min(6, {
    message: "Minimum 6 characters required.",
  }),
  name: z.string().min(1, {
    message: "Name is required.",
  }),
});

export const ResetSchema = z.object({
  email: z
    .string()
    .min(1, {
      message: "Email is required.",
    })
    .email({ message: "Invalid Email." }),
});

export const NewPasswordSchema = z.object({
  password: z.string().min(6, {
    message: "Minimum 6 characters required.",
  }),
});

export const SettingsSchema = z
  .object({
    name: z.optional(
      z.string().min(1, {
        message: "Name is required.",
      })
    ),
    isTwoFactorEnabled: z.optional(z.boolean()),
    role: z.enum([UserRole.ADMIN, UserRole.USER]),
    email: z.optional(z.string().email({ message: "Invalid Email." })),
    password: z.optional(
      z.string().min(1, {
        message: "Password is required.",
      })
    ),
    newPassword: z.optional(
      z.string().min(6, {
        message: "Minimum 6 characters required.",
      })
    ),
  })
  .refine(
    (data) => {
      if (data?.password && !data?.newPassword) {
        return false;
      }

      return true;
    },
    {
      message: "New Password is required.",
      path: ["newPassword"],
    }
  )
  .refine(
    (data) => {
      if (data?.newPassword && !data?.password) {
        return false;
      }

      return true;
    },
    {
      message: "Password is required.",
      path: ["password"],
    }
  );
