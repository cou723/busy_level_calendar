"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryStreamedHydration } from "@tanstack/react-query-next-experimental";
import { SessionProvider } from "next-auth/react";
import React from "react";

export function Providers(props: { children: React.ReactNode }) {
  const [queryClient] = React.useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      {/* <CacheProvider value={cache}> */}
      <ReactQueryStreamedHydration>
        <SessionProvider>{props.children}</SessionProvider>
      </ReactQueryStreamedHydration>
      {/* </CacheProvider> */}
    </QueryClientProvider>
  );
}
