import apiEndpoints from '@/libs/apiEndpoints';
import { Calendar, CalendarList, Event } from '@/types/gapiCalendar';
import { Schedule, generate } from '@/types/schedule';
import { Result, Err, Ok } from 'ts-results';
import { fetch } from '@/utils/fetch';

export function GoogleCalendarEventToSchedule(e: Event): Schedule | null {
  if (!isAllDayEvent(e)) return null;
  if (!e.start.date) return null;
  return generate({
    title: e.summary ?? 'untitled',
    description: e.description,
    date: new Date(e.start.date),
  });
}

export function isAllDayEvent(e: Event): boolean {
  return e.start.date?.length === 10;
}

export async function fetchGoogleCalendarList(): Promise<Result<CalendarList, Error>> {
  const res = await fetch(apiEndpoints.googleCalendar.calendarList);
  if (!res.ok) return Err(res.val);
  console.log(res.val);
  return Ok(res.val as unknown as CalendarList);
}
