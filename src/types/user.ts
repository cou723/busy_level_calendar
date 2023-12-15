import { DefaultSchema, Default } from "@/types/defaultSchema";
import { z } from "zod";

export const UserWithoutDefaultSchema = z.object({
  name: z.string(),
  hash: z.union([z.string(), z.literal("google")]),
  email: z.string().email(),
});

export const UserSchema = DefaultSchema.merge(UserWithoutDefaultSchema);

export type User = z.infer<typeof UserSchema>;
export type UserWithoutDefault = Omit<User, keyof Default>;
