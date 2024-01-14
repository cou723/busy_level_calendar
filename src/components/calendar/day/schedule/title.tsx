import { css } from '@emotion/react';

export const Title = ({ children }: { children: React.ReactNode }) => {
  return (
    <p
      css={css`
        padding-top: 0.2rem;
      `}
    >
      {children}
    </p>
  );
};
