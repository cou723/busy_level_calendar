import type { ApiAdapter } from './types/apiAdapter';

import { FetchAdapter } from '@/types/fetchAdapter';

export const apiAdapter: ApiAdapter = new FetchAdapter();

export const fontColor = '#363636';
export const backgroundColor = '#f1e4d8';
export const today = new Date();
