import { css } from '@emotion/react';

export const Title = ({ children }: { children: React.ReactNode }) => {
  return (
    <h5
      css={css`
        font-size: 16px;
      `}
    >
      {children}
    </h5>
  );
};
