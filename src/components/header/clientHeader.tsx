'use client';
import React from 'react';

import { css } from '@emotion/react';

import GoogleLogoutBtn from '@/components/googleLogout';
import ServiceLogo from '@/components/header/serviceLogo';
import UserData from '@/components/header/userData';
import FlexBox from '@/components/utils/flexBox';

type Props = {
  username: string;
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
        paddingLeft: '3rem',
        paddingRight: '3rem',
      })}
    >
      <ServiceLogo />
      <FlexBox flexDirection="row" gap={2}>
        <UserData username={username} />
        <GoogleLogoutBtn />
      </FlexBox>
    </div>
  );
};

export default ClientHeader;
