'use client';
import { globalStyle } from '@/components/globalStyle';
import { Global } from '@emotion/react';

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
