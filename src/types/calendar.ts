import { z } from 'zod';

import { ScheduleSchema } from '@/types/schedule';

export const CalendarSchema = z.object({
  id: z.string(),
  schedules: ScheduleSchema.array(),
});

export type Calendar = z.infer<typeof CalendarSchema>;

export const calendarInit = (): Calendar => ({
  id: 'origin', // not used
  schedules: [],
});
