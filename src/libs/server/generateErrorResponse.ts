import { NextResponse } from "next/server";

export function generateErrorResponse(message: string, status?: number) {
  return new NextResponse(JSON.stringify({ error: message }), {
    status: status || 400,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
