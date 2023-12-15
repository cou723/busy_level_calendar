import { NextResponse } from "next/server";

export type ErrorResponse = {
  message: string;
};

export function makeErrorResponse(
  status: number,
  message: string
): NextResponse<ErrorResponse> {
  return NextResponse.json({ message }, { status });
}
