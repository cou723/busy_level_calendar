'use client';

import React from 'react';

import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ja from 'date-fns/locale/ja';
import { SessionProvider } from 'next-auth/react';

export function Providers(props: { children: React.ReactNode }) {
  const [queryClient] = React.useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ja}>
        <SessionProvider>{props.children}</SessionProvider>
      </LocalizationProvider>
    </QueryClientProvider>
  );
}
