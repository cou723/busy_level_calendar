'use client';
import React from 'react';

import { css } from '@emotion/react';
import Link from 'next/link';
import { MdNotifications } from 'react-icons/md';
import { TbDatabaseImport } from 'react-icons/tb';

import GoogleLoginBtn from '@/components/googleLoginBtn';
import GoogleLogoutBtn from '@/components/googleLogout';
import NotificationMenu from '@/components/header/notificationsMenu';
import ServiceLogo from '@/components/header/serviceLogo';
import UserData from '@/components/header/userData';
import FlexBox from '@/components/utils/flexBox';
import { iconNeuStyle } from '@/components/utils/iconNeuStyle';
import NeuButton from '@/components/utils/neuButton';
import NeuIconButton from '@/components/utils/neuIconButton';
import { generateNeuStyle } from '@/libs/styles/generateNeuStyle';

type Props = {
  username?: string;
};

const ClientHeader: React.FC<Props> = ({ username }) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  return (
    <FlexBox
      justifyContent="space-between"
      alignItems="center"
      flexDirection="row"
      css={css({
        width: '100%',
        height: '4rem',
        paddingLeft: '2rem',
        paddingRight: '2rem',
      })}
    >
      <ServiceLogo />
      <FlexBox flexDirection="row" gap={1.5}>
        <NeuIconButton Icon={MdNotifications} onClick={(e) => setAnchorEl(e.currentTarget)} />
        <Link href="/import" css={[generateNeuStyle({ radius: 2, intensity: 1, size: 2 }), css({ padding: '0.5rem' })]}>
          <TbDatabaseImport /> 他サービスからのインポート
        </Link>
        {username ? <UserData username={username} /> : ''}
        {username ? <GoogleLogoutBtn /> : <GoogleLoginBtn callbackUrl="/" />}
      </FlexBox>
      <NotificationMenu anchorEl={anchorEl} onClose={() => setAnchorEl(null)} />
    </FlexBox>
  );
};

export default ClientHeader;
