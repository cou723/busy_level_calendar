import React from 'react';

import '@/styles/index.css';
import { GlobalStyles } from '@mui/material';

import type { Metadata } from 'next';

import { ClientLayout } from '@/components/clientLayout';
import Header from '@/components/header';
import { backgroundColor } from '@/global';
import { generateNeuStyle } from '@/libs/generateNeuStyle';
import { Providers } from '@/providers';
import 'the-new-css-reset/css/reset.css';
import { roboto } from '@/styles/font';

export const metadata: Metadata = {
  title: 'Harmony',
  description: 'Visualize your mental leeway from deadlines',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="jp" style={{ backgroundColor }}>
      <GlobalStyles
        styles={{
          '.MuiPickersPopper-paper': {
            //
            boxShadow: 'none',
            color: 'red',
            marginTop: '0.5rem',
          },
        }}
      />
      <body className={[roboto.variable].join(' ')}>
        <Header />
        <Providers>
          <ClientLayout>{children}</ClientLayout>
        </Providers>
      </body>
    </html>
  );
}
