'use client';
import React from 'react';

import { css } from '@emotion/react';
import Link from 'next/link';
import { TbDatabaseImport } from 'react-icons/tb';

import GoogleLoginBtn from '@/components/googleLoginBtn';
import GoogleLogoutBtn from '@/components/googleLogout';
import ServiceLogo from '@/components/header/serviceLogo';
import UserData from '@/components/header/userData';
import FlexBox from '@/components/utils/flexBox';
import { generateNeuStyle } from '@/libs/generateNeuStyle';

type Props = {
  username?: string;
};

const ClientHeader: React.FC<Props> = ({ username }) => {
  return (
    <FlexBox
      justifyContent="space-between"
      alignItems="center"
      flexDirection="row"
      css={css({
        width: '100%',
        position: 'fixed',
        top: 0,
        left: 0,
        height: '4rem',
        paddingLeft: '2rem',
        paddingRight: '2rem',
      })}
    >
      <ServiceLogo />
      <FlexBox flexDirection="row" gap={1.5}>
        <Link href="/import" css={[generateNeuStyle({ radius: 2, intensity: 1, size: 2 }), css({ padding: '0.5rem' })]}>
          <TbDatabaseImport /> 他サービスからのインポート
        </Link>
        {username ? <UserData username={username} /> : ''}
        {username ? <GoogleLogoutBtn /> : <GoogleLoginBtn callbackUrl="/" />}
      </FlexBox>
    </FlexBox>
  );
};

export default ClientHeader;
