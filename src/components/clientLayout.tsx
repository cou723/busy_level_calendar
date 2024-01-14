'use client';
import { Global } from '@emotion/react';
import { Toaster } from 'react-hot-toast';

import { globalStyle } from '@/components/globalStyle';
import { backgroundColor } from '@/global';
import { generateBoxShadow } from '@/libs/generateBoxShadow';

type ClientLayoutProps = {
  children: React.ReactNode;
};

export function ClientLayout({ children }: ClientLayoutProps) {
  return (
    <div style={{ padding: '2rem', height: '100%', marginTop: '30px' }}>
      <Global styles={globalStyle} />
      {children}
      <Toaster
        position="bottom-right"
        toastOptions={{
          className: '',
          duration: 3000,
          style: {
            background: backgroundColor,
            boxShadow: generateBoxShadow(false, 1, 'medium'),
          },
        }}
      />
    </div>
  );
}
