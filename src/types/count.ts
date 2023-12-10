import { z } from "zod";

export const CountSchema = z.number().int().positive().default(0);
export type Count = z.infer<typeof CountSchema>;
