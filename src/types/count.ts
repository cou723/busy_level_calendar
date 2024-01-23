import { z } from 'zod';

const CountSchema = z.number().int().positive().default(0);
export type Count = z.infer<typeof CountSchema>;
