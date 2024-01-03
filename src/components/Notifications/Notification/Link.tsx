import { css } from '@emotion/react';
import { default as NextLink } from 'next/link';

export const Link = ({ to, children }: { to: string; children: React.ReactNode }) => {
  return (
    <NextLink
      href={to}
      css={css`
        font-size: 12px;
        color: #006fd6;
        text-decoration: underline;
      `}
    >
      {children}
    </NextLink>
  );
};
