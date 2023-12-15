import { NextApiRequest } from "next";
import { Session, getServerSession } from "next-auth";
import { NextResponse } from "next/server";

// this function is not return value. it call res.send().
export async function checkSession(
  req: NextApiRequest
): Promise<Session["user"] | null> {
  const session = await getServerSession(req);
  console.log("session", session);

  if (!session) {
    await NextResponse.json(
      { error: "ユーザーは認証されていません" },
      { status: 401 }
    );
    return null;
  }
  // google oauth2を使った場合はidが追加されるらしい
  return session.user as Session["user"];
}
