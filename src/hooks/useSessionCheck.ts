import { useEffect } from "react";

import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

export function useSessionCheck() {
  const { data: session, status } = useSession();
  const router = useRouter();
  useEffect(() => {
    if (status == "unauthenticated") {
      router.push("/login");
    }
  }, [status, session, router]);
}
