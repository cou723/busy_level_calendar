import React from 'react';

import { css } from '@emotion/react';

import Neu from '@/components/utils/neu';

type Props = {
  children: React.ReactNode;
};

const NormalContainer = ({ children }: Props) => {
  return (
    <Neu
      css={css({
        width: '80%',
        padding: '3rem',
        margin: 'auto',
        marginTop: '3rem',
      })}
    >
      {children}
    </Neu>
  );
};

export default NormalContainer;
