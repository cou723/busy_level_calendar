import { ApiAdapter } from "@/types/calendar";
import { FetchAdapter } from "@/types/fetchAdapter";

export const apiAdapter: ApiAdapter = new FetchAdapter();

export const googleCalendarApiEndpoint = "https://www.googleapis.com/calendar/v3";
