import { css } from '@emotion/react';

export const Title = ({ children }: { children: React.ReactNode }) => {
  return (
    <p
      css={css`
        padding-top: 0.2rem;
        width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      `}
    >
      {children}
    </p>
  );
};
