import { Event } from "@/types/gapiCalendar";
import { Schedule, generate } from "@/types/schedule";

export function GoogleCalendarEventToSchedule(e: Event): Schedule | null {
  if (!isAllDayEvent(e)) return null;
  if (!e.start.date) return null;
  return generate({
    title: e.summary ?? "untitled",
    description: e.description,
    date: new Date(e.start.date),
  });
}

export function isAllDayEvent(e: Event): boolean {
  return e.start.date?.length === 10;
}
