'use client';
import React from 'react';

import { css } from '@emotion/react';

import GoogleLoginBtn from '@/components/googleLoginBtn';
import GoogleLogoutBtn from '@/components/googleLogout';
import ServiceLogo from '@/components/header/serviceLogo';
import UserData from '@/components/header/userData';
import FlexBox from '@/components/utils/flexBox';

type Props = {
  username?: string;
};

const ClientHeader: React.FC<Props> = ({ username }) => {
  return (
    <div
      css={css({
        width: '100%',
        position: 'fixed',
        top: 0,
        left: 0,
        display: 'flex',
        height: '4rem',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: '2rem',
        paddingRight: '2rem',
      })}
    >
      <ServiceLogo />
      <FlexBox flexDirection="row" gap={1.5}>
        {username ? <UserData username={username} /> : ''}
        {username ? <GoogleLogoutBtn /> : <GoogleLoginBtn callbackUrl="/" />}
      </FlexBox>
    </div>
  );
};

export default ClientHeader;
