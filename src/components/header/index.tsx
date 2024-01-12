import React from 'react';

import ClientHeader from '@/components/header/clientHeader';
import { getUserData } from '@/libs/server/getUserData';

const Header: React.FC = async () => {
  const user = await getUserData();
  if (user.err) return <p>エラー</p>;
  const username = user.val.email;
  return <ClientHeader username={username ?? 'guest'} />;
};

export default Header;
