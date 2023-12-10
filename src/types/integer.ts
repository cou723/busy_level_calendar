import { z } from "zod";

export const IntegerSchema = z.number().int();
export type Integer = z.infer<typeof IntegerSchema>;
