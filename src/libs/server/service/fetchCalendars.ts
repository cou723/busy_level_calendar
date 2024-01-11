import { google } from 'googleapis';

import { getOAuthClient } from './getOAuthClient';

import type { Calendar } from './schedule';

export function fetchCalendars(accessToken: string) {
  const oauth2Client = getOAuthClient(accessToken);
  const calendar: Calendar = google.calendar({ version: 'v3', auth: oauth2Client });
  return calendar;
}
