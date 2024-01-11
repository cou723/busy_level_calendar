import type { ImportEventOptions } from '@/types/importEventOptions';
import type { calendar_v3 } from 'googleapis';


export async function fetchGoogleEvents(options: ImportEventOptions, calendar: calendar_v3.Calendar) {
  const events: calendar_v3.Schema$Event[] = [];
  for (const calendarId of options.calendars) {
    let eventList = (
      await calendar.events.list({
        calendarId,
        timeMin: options.range.start.toISOString(),
        timeMax: options.range.end.toISOString(),
        singleEvents: true,
        orderBy: 'startTime',
      })
    ).data.items;

    if (!eventList) continue;

    eventList = eventList.filter((event) => {
      if (options.onlyAllDay) return event.start?.date && event.end?.date;
      else return true;
    });

    events.push(...eventList);
  }

  return events;
}
