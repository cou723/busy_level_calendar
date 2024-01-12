import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import React from 'react';

import { headers } from 'next/headers';

import type { Metadata } from 'next';

import { ClientLayout } from '@/components/clientLayout';
import Header from '@/components/header';
import { backgroundColor } from '@/constants';
import { Providers } from '@/providers';
import 'the-new-css-reset/css/reset.css';

export const metadata: Metadata = {
  title: 'Harmony',
  description: 'Visualize your mental leeway from deadlines',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const headersList = headers();
  const header_url = headers().get('x-url') || '';
  console.log(headersList, header_url);

  return (
    <html lang="jp" style={{ backgroundColor, height: '100%' }}>
      <body style={{ height: '100%' }}>
        <Header />
        <Providers>
          <ClientLayout>{children}</ClientLayout>
        </Providers>
      </body>
    </html>
  );
}
