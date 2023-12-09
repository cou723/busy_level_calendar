import { LocalStorageAdapter } from "@/types/localStorageAdapter";
import { CalendarAdapter } from "@/types/calendar";

export const calendarAdapter: CalendarAdapter = new LocalStorageAdapter();

export const mindColors = ["#FFD9D9", "#FFD9FF", "#F3D9FF"];
