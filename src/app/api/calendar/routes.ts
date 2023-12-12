import { type NextRequest } from "next/server";

// Requestオブジェクトを拡張してあるNextRequestオブジェクトとして受け取るとパース機能がついてくる
export function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("query"); // => "hello"
}
