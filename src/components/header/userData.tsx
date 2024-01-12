import React from 'react';

import { css } from '@emotion/react';
import { FaRegUserCircle } from 'react-icons/fa';

import Neu from '@/components/utils/neu';
type Props = { username: string };

const UserData: React.FC<Props> = ({ username }) => {
  return (
    <Neu
      css={css({
        display: 'flex',
        justifyContent: 'center',
        gap: '1rem',
        padding: '0.5rem',
      })}
    >
      <FaRegUserCircle />
      <p>{username}</p>
    </Neu>
  );
};

export default UserData;
