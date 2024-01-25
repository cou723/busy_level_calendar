import { isSameDay } from 'date-fns';

export function isIncludeDate(dates: Date[], date: Date): boolean {
  return dates.some((d) => isSameDay(d, date));
}
