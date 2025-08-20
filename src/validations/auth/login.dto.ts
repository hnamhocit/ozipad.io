import * as z from "zod";

export const loginSchema = z.object({
	email: z.email(),
	password: z.string().regex(
		/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
		"Min 8 chars, with uppercase, lowercase, number, and special character."
	)
})

export type LoginSchema = z.infer<typeof loginSchema>
