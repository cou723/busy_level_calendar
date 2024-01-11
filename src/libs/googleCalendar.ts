import { Err, Ok } from 'ts-results';

import type { CalendarList, Event } from '@/types/gapiCalendar';
import type { Schedule} from '@/types/schedule';
import type { ScheduleForm } from '@/types/scheduleForm';
import type { calendar_v3 } from 'googleapis';
import type { Result} from 'ts-results';


import apiEndpoints from '@/libs/apiEndpoints';
import { Calendar } from '@/types/gapiCalendar';
import { generate } from '@/types/schedule';
import { fetch } from '@/utils/fetch';
import { nullToUndefined } from '@/utils/nullToUndefined';


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
