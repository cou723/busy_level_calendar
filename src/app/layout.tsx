import React from 'react';

import '@/styles/index.css';

import { SpeedInsights } from '@vercel/speed-insights/next';

import type { Metadata } from 'next';

import { ClientLayout } from '@/components/clientLayout';
import Header from '@/components/header';
import { backgroundColor } from '@/global';
import { Providers } from '@/providers';
import 'the-new-css-reset/css/reset.css';
import { roboto } from '@/styles/font';

const title = 'Mental Harmony';
const description = '締め切りからあなたの心を可視化します';
const url = process.env.DOMAIN;

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    url,
    siteName: title,
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    // site: '@サイト用アカウントのTwitterID',
    // creator: '@作者のTwitterID',
  },
  verification: {
    google: 'サーチコンソールのやつ',
  },
  alternates: {
    canonical: url,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="jp" style={{ backgroundColor }}>
      <body className={[roboto.variable].join(' ')}>
        <SpeedInsights />
        <Providers>
          <Header />
          <ClientLayout>{children}</ClientLayout>
        </Providers>
      </body>
    </html>
  );
}
