import { NextResponse } from "next/server";

import type { ErrorResponse } from "@/types/server/ErrorResponse";
import type { User, UserWithoutDefault } from "@/types/user";

import { tryCatchToResult } from "@/utils/resultToTryCatch";
import { db } from "@/utils/server/db";

export const user = {
  async create(user: UserWithoutDefault): Promise<NextResponse<User | ErrorResponse>> {
    const duplicateUser = await tryCatchToResult(async () => await db.user.findFirst({ where: { email: user.email } }));

    if (duplicateUser.err)
      return NextResponse.json(
        { message: "check duplicate user fail. :" + duplicateUser.val.message },
        { status: 500 }
      );

    if (duplicateUser.val) return NextResponse.json({ message: "Email address already in use" }, { status: 409 });

    const result = await tryCatchToResult(async () => await db.user.create({ data: { ...user } }));

    if (result.err) return NextResponse.json({ message: "user create fail" }, { status: 500 });
    return NextResponse.json(result.val, { status: 201 });
  },

  async delete(id: User["id"]): Promise<NextResponse<void | ErrorResponse>> {
    const result = await tryCatchToResult(async () => await db.user.delete({ where: { id } }));

    if (result.err) return NextResponse.json({ message: result.val.message }, { status: 500 });
    return NextResponse.json(undefined, { status: 204 });
  },

  async get(id: User["id"]): Promise<NextResponse<User | ErrorResponse>> {
    const result = await tryCatchToResult(async () => await db.user.findFirst({ where: { id } }));
    if (result.err) return NextResponse.json({ message: result.val.message }, { status: 500 });

    if (result.val == null) return NextResponse.json({ message: "User not found" }, { status: 404 });
    return NextResponse.json(result.val, { status: 200 });
  },
};
