import { google } from 'googleapis';

export function getOAuthClient(accessToken: string) {
  const oauth2Client = new google.auth.OAuth2({
    clientId: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    redirectUri: `http://localhost:3000/google-calendar`,
  });

  oauth2Client.setCredentials({ access_token: accessToken });
  return oauth2Client;
}
