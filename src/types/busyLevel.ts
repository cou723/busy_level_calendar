import { Calendar } from '@/types/calendar';
import { LevelSchema } from '@/types/level';
import { Schedule, getAllDatesUntilSchedule } from '@/types/schedule';
import { normalize, normalizeVector } from '@/utils/normalizeVector';
import { isSameDay } from 'date-fns';
import { z } from 'zod';

export const BusyLevelSchema = z.object({
  date: z.coerce.date(),
  level: LevelSchema,
});

export type BusyLevel = z.infer<typeof BusyLevelSchema>;

// busy levelを0~1の間に正規化し、同じ日にちのものを加算してまとめる
export function generateBusyLevels(calendar: Calendar): BusyLevel[] {
  const unNormalizedList = summarize(
    calendar.schedules
      .map((schedule) => generateBusyLevel(schedule))
      .flat()
      .map((l) => ({ date: l.date, level: 1 - l.level }))
  );
  const max = Math.max(...unNormalizedList.map((l) => l.level));
  return unNormalizedList.map((l) => ({
    date: l.date,
    level: normalize(l.level, 0, max) * 0.9 + 0.1,
  }));
}

export function generateBusyLevel(schedule: Schedule): BusyLevel[] {
  if (schedule.requiredDays == undefined) {
    return [];
  }

  const levelList = normalizeVector([...Array(schedule.requiredDays).keys()]);

  return getAllDatesUntilSchedule(schedule).map((bl, i) => ({
    date: bl,
    level: levelList[i],
  }));
}

export function summarize(busyLevels: BusyLevel[]): BusyLevel[] {
  const summarized: BusyLevel[] = [];
  busyLevels.forEach((bl) => {
    const target = summarized.find((s) => isSameDay(s.date, bl.date));
    if (target) {
      target.level = target.level + bl.level;
    } else {
      summarized.push(bl);
    }
  });
  return summarized;
}
