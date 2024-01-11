'use client';
import { Global } from '@emotion/react';

import { globalStyle } from '@/components/globalStyle';

type ClientLayoutProps = {
  children: React.ReactNode;
};

export function ClientLayout({ children }: ClientLayoutProps) {
  return (
    <div style={{ padding: '2rem', height: '100%' }}>
      <Global styles={globalStyle} />
      {children}
    </div>
  );
}
