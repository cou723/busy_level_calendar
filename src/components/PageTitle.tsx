import { css } from '@emotion/react';
import React from 'react';

type Props = {
  children: React.ReactNode;
};

const PageTitle = ({ children }: Props) => {
  return (
    <h1
      css={css({
        fontSize: '2rem',
        fontWeight: 'bold',
        margin: '1rem 0',
      })}
    >
      {children}
    </h1>
  );
};

export default PageTitle;
