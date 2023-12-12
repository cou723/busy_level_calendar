import { Event } from "@/types/gapiCalendar";
import { Schedule, generate } from "@/types/schedule";
import { Result } from "ts-results";

export function getGoogleCalendarEvents(): Result<Event[], Error> {
  if (result.err) {
    return result;
  }
  return result;
}

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
