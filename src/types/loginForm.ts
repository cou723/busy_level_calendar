import { z } from "zod";

export const LoginFormSchema = z.object({
  name: z.string(),
  password: z.string(),
});

export type LoginForm = z.infer<typeof LoginFormSchema>;
