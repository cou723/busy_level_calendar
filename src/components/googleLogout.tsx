'use client';
import { css } from '@emotion/react';
import { signOut } from 'next-auth/react';

import NeuButton from '@/components/utils/neuButton';

function GoogleLogoutBtn() {
  return (
    <NeuButton onClick={() => signOut()} radius={5}>
      <div
        css={css({
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginRight: '0.5rem',
        })}
      >
        ログアウト
      </div>
    </NeuButton>
  );
}

export default GoogleLogoutBtn;
