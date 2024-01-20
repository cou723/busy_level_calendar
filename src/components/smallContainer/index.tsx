import React from 'react';

import { css } from '@emotion/react';

import Neu from '@/components/utils/neu';

type Props = {
  children: React.ReactNode;
  top?: number;
};

const SmallContainer = ({ children, top = 10 }: Props) => {
  return (
    <Neu
      css={css({
        maxWidth: '40%',
        margin: '0 auto',
        marginTop: top + 'rem',
        padding: '2rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      })}
    >
      {children}
    </Neu>
  );
};

export default SmallContainer;
