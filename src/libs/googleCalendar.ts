import apiEndpoints from '@/libs/apiEndpoints';
import { Calendar, CalendarList, Event } from '@/types/gapiCalendar';
import { Schedule, generate } from '@/types/schedule';
import { Result, Err, Ok } from 'ts-results';
import { fetch } from '@/utils/fetch';
import { calendar_v3 } from 'googleapis';
import { nullToUndefined } from '@/utils/nullToUndefined';
import { ScheduleForm } from '@/types/scheduleForm';

export function GoogleCalendarEventToSchedule(e: calendar_v3.Schema$Event): Schedule {
  return generate({
    title: e.summary ?? 'untitled',
    description: nullToUndefined(e.description),
    date: new Date(e.start?.date as string),
  });
}

export function GoogleCalendarEventToScheduleForm(e: calendar_v3.Schema$Event): ScheduleForm {
  if (!e.start) throw new Error('e.start is undefined :' + JSON.stringify(e));

  const date = e.start.date ? e.start.date : e.start.dateTime;
  if (!date) throw new Error('e.start.date is undefined :' + JSON.stringify(e));
  return {
    title: e.summary ?? 'untitled',
    description: nullToUndefined(e.description),
    date: new Date(date),
  };
}

export function isAllDayEvent(e: Event): boolean {
  return e.start.date?.length === 10;
}

export async function fetchGoogleCalendarList(): Promise<Result<CalendarList, Error>> {
  const res = await fetch(apiEndpoints.googleCalendar.calendarList);
  if (!res.ok) return Err(res.val);
  return Ok(res.val as unknown as CalendarList);
}
