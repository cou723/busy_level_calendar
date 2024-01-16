'use client';
import { css } from '@emotion/react';
import { signIn } from 'next-auth/react';
import { FcGoogle } from 'react-icons/fc';

import FlexBox from '@/components/utils/flexBox';
import NeuButton from '@/components/utils/neuButton';

type Props = {
  callbackUrl: string;
};

function GoogleLoginBtn({ callbackUrl }: Props) {
  return (
    <NeuButton onClick={() => signIn('google', { callbackUrl })}>
      <FlexBox alignItems="center" justifyContent="center" gap={0.2}>
        <FcGoogle /> <p>Googleでログイン</p>
      </FlexBox>
    </NeuButton>
  );
}

export default GoogleLoginBtn;
