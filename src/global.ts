import { LocalStorageAdapter } from "@/types/localStorageAdapter";
import { CalendarAdapter } from "@/types/calendar";

export const calendarAdapter: CalendarAdapter = new LocalStorageAdapter();

export const googleCalendarApiEndpoint =
  "https://www.googleapis.com/calendar/v3";
