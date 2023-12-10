import { z } from "zod";

export const LevelSchema = z.number().min(0);
export type Level = z.infer<typeof LevelSchema>;
