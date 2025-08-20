import z from "zod";

export const registerSchema = z.object({
  username: z.string().nonempty().max(12),
  email: z.email(),
  password: z.string().regex(
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
    "Min 8 chars, with uppercase, lowercase, number, and special character."
  ),
  confirmPassword: z.string()
}).refine((data) => data.password === data.confirmPassword,
  {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  }
)

export type RegisterSchema = z.infer<typeof registerSchema>
