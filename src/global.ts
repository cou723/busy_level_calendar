import { LocalStorageDB } from "@/types/localStorageDB";
import { CalendarAdapter } from "@/types/calendar";

export const calendarAdapter: CalendarAdapter = new LocalStorageDB();
