'use client';
import { Global } from '@emotion/react';
import { transparentize } from 'color2k';
import toast, { Toaster } from 'react-hot-toast';

import { globalStyle } from '@/components/globalStyle';
import { generateBoxShadow } from '@/components/utils/neu/generateBoxShadow';
import { backgroundColor } from '@/constants';

type ClientLayoutProps = {
  children: React.ReactNode;
};

export function ClientLayout({ children }: ClientLayoutProps) {
  return (
    <div style={{ padding: '2rem', height: '100%' }}>
      <Global styles={globalStyle} />
      {children}
      <Toaster
        position="bottom-right"
        toastOptions={{
          className: '',
          duration: 3000,
          style: {
            background: backgroundColor,
            boxShadow: generateBoxShadow(false, 'rgba(0, 0, 0, 0.2)', 'rgba(255, 255, 255, 1)', 'medium'),
          },
        }}
      />
    </div>
  );
}
