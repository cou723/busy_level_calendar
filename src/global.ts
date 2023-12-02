import { LocalStorageDB } from "@/libs/localStorageDB";
import { CalendarAdapter } from "@/types/calendar";

export const calendarAdapter: CalendarAdapter = new LocalStorageDB();
