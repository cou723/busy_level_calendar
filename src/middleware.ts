// middleware.ts
import { NextResponse } from 'next/server';

import type { NextRequest } from 'next/server';

export async function middleware(req: NextRequest) {
  const requestHeaders = new Headers(req.headers);
  requestHeaders.set('x-url', req.url);
  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}
