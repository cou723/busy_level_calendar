'use client';

import React from 'react';

import { StyledEngineProvider, ThemeProvider } from '@mui/material/styles';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ja from 'date-fns/locale/ja';
import { SessionProvider } from 'next-auth/react';

import { theme } from '@/styles/theme';

export function Providers(props: { children: React.ReactNode }) {
  const [queryClient] = React.useState(() => new QueryClient());

  return (
    <ThemeProvider {...{ theme }}>
      <StyledEngineProvider injectFirst>
        <QueryClientProvider client={queryClient}>
          <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ja}>
            <SessionProvider>{props.children}</SessionProvider>
          </LocalizationProvider>
        </QueryClientProvider>
      </StyledEngineProvider>
    </ThemeProvider>
  );
}
