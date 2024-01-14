import React from 'react';

import { css } from '@emotion/react';

import Neu from '@/components/utils/neu';

type Props = {
  children: React.ReactNode;
};

const SmallContainer = ({ children }: Props) => {
  return (
    <Neu
      css={css({
        maxWidth: '40%',
        margin: '0 auto',
        marginTop: '10rem',
        padding: '2rem',
      })}
    >
      <div>{children}</div>
    </Neu>
  );
};

export default SmallContainer;
