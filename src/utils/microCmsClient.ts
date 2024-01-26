import { createClient } from 'microcms-ts-sdk';

if (!process.env.MICRO_CMS_API_KEY) throw new Error('MICRO_CMS_API_KEY is not defined');

export const client = createClient({
  serviceDomain: 'harmony',
  apiKey: process.env.MICRO_CMS_API_KEY!,
});
