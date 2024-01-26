'use client';
import { Global } from '@emotion/react';
import { Toaster } from 'react-hot-toast';

import { globalStyle } from '@/components/globalStyle';
import { backgroundColor } from '@/global';
import { generateBoxShadow } from '@/libs/styles/generateBoxShadow';

type ClientLayoutProps = {
  children: React.ReactNode;
};

export function ClientLayout({ children }: ClientLayoutProps) {
  return (
    <div>
      <Global styles={globalStyle} />
      {children}
      <Toaster
        position="bottom-right"
        toastOptions={{
          className: '',
          duration: 3000,
          style: {
            background: backgroundColor,
            boxShadow: generateBoxShadow(false, 1, 2),
          },
        }}
      />
    </div>
  );
}
