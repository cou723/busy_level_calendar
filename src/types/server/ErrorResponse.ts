import { NextResponse } from 'next/server';
import { z } from 'zod';

export const ErrorResponseSchema = z.object({
  message: z.string(),
});

export function isErrorResponse(obj: unknown): obj is ErrorResponse {
  return ErrorResponseSchema.safeParse(obj).success;
}

export type ErrorResponse = z.infer<typeof ErrorResponseSchema>;

export function makeErrorResponse(status: number, message?: string): NextResponse<ErrorResponse> {
  return new NextResponse(message, {
    status: status || 400,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
