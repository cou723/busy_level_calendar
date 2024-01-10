import { google } from 'googleapis';
import { Calendar } from './schedule';

export function fetchCalendars(accessToken: string) {
  const oauth2Client = new google.auth.OAuth2({
    clientId: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    redirectUri: 'http://localhost:3000/google-calendar',
  });

  oauth2Client.setCredentials({ access_token: accessToken });
  const calendar: Calendar = google.calendar({ version: 'v3', auth: oauth2Client });
  return calendar;
}
