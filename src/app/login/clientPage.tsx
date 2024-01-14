'use client';

import { css } from '@emotion/react';

import GoogleLoginBtn from '@/components/googleLoginBtn';
import SmallContainer from '@/components/smallContainer';

const ClientPage: React.FC = () => {
  return (
    <SmallContainer
      css={css({
        justifyContent: 'center',
        display: 'flex',
        alignItems: 'center',
      })}
    >
      <GoogleLoginBtn
        callbackUrl="/"
        css={css({
          width: '100%',
        })}
      />
    </SmallContainer>
  );
};

export default ClientPage;
