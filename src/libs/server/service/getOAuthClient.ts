import { google } from 'googleapis';

export function getOAuthClient(accessToken: string) {
  const oauth2Client = new google.auth.OAuth2({
    clientId: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    redirectUri: process.env.DOMAIN + '/api/auth/callback/google',
  });

  oauth2Client.setCredentials({ access_token: accessToken });
  return oauth2Client;
}
