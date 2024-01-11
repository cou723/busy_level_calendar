'use client';
import { css } from '@emotion/react';
import { signIn } from 'next-auth/react';
import { FcGoogle } from 'react-icons/fc';

import NeuButton from '@/components/utils/neuButton';

type Props = {
  callbackUrl: string;
};

function GoogleLoginBtn({ callbackUrl }: Props) {
  return (
    <NeuButton handleClick={() => signIn('google', { callbackUrl })}>
      <div
        css={css({
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginRight: '0.5rem',
        })}
      >
        <FcGoogle /> Googleでログイン
      </div>
    </NeuButton>
  );
}

export default GoogleLoginBtn;
