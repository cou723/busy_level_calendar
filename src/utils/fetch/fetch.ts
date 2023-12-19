import { tryCatchToResult } from "@/utils/resultToTryCatch";
import { Result } from "ts-results";

export async function myFetch(input: string | URL | Request, init?: RequestInit): Promise<Result<Response, Error>> {
  return tryCatchToResult(async () => await fetch(input, init));
}
