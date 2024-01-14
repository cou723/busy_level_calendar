import React from 'react';

import '@/styles/index.css';
import type { Metadata } from 'next';

import { ClientLayout } from '@/components/clientLayout';
import Header from '@/components/header';
import { backgroundColor } from '@/global';
import { Providers } from '@/providers';
import 'the-new-css-reset/css/reset.css';
import { josefinSans, mPlus1, roboto } from '@/styles/font';

export const metadata: Metadata = {
  title: 'Harmony',
  description: 'Visualize your mental leeway from deadlines',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="jp" style={{ backgroundColor }}>
      <body className={[roboto.variable].join(' ')}>
        <Header />
        <Providers>
          <ClientLayout>{children}</ClientLayout>
        </Providers>
      </body>
    </html>
  );
}
