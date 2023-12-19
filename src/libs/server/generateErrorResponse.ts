import { ErrorResponse } from "@/types/server/ErrorResponse";
import { NextResponse } from "next/server";

export function generateErrorResponse(message: string, status?: number): NextResponse<ErrorResponse> {
  return new NextResponse(JSON.stringify({ error: message }), {
    status: status || 400,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
