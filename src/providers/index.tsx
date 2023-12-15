"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import * as React from "react";
import { ReactQueryStreamedHydration } from "@tanstack/react-query-next-experimental";
import { ThemeProvider } from "@mui/material";
import theme from "@/theme/theme";

export function Providers(props: { children: React.ReactNode }) {
  const [queryClient] = React.useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryStreamedHydration>
        <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
      </ReactQueryStreamedHydration>
    </QueryClientProvider>
  );
}
