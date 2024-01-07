'use client';
import NeuButton from '@/components/utils/NeuButton';
import { signOut } from 'next-auth/react';
import { css } from '@emotion/react';

function GoogleLogoutBtn() {
  return (
    <NeuButton handleClick={() => signOut()}>
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
