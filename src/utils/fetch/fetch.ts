import type { Result } from 'ts-results';

import { tryCatchToResult } from '@/utils/resultToTryCatch';

export async function myFetch(input: string | URL | Request, init?: RequestInit): Promise<Result<Response, Error>> {
  console.log('fetch to ', input);
  return tryCatchToResult(async () => await fetch(input, init));
}
