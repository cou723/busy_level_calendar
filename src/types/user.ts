import { z } from 'zod';

import type { Default } from '@/types/defaultSchema';

import { DefaultSchema } from '@/types/defaultSchema';

export const UserWithoutDefaultSchema = z.object({
  name: z.string(),
  hash: z.union([z.string(), z.literal('google')]),
  email: z.string().email(),
});

const UserSchema = DefaultSchema.merge(UserWithoutDefaultSchema);

export type User = z.infer<typeof UserSchema>;
export type UserWithoutDefault = Omit<User, keyof Default>;
