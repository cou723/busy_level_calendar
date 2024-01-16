import React from 'react';

import ClientHeader from '@/components/header/clientHeader';
import { getUserData } from '@/libs/server/getUserData';
import { nullToUndefined } from '@/utils/nullToUndefined';

const Header: React.FC = async () => {
  const user = await getUserData();

  const username = user.err ? undefined : nullToUndefined(user.val.email);
  return <ClientHeader {...{ username }} />;
};

export default Header;
