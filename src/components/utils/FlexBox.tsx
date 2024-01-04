import { css } from '@emotion/react';
import React from 'react';

type Props = {
  children: React.ReactNode;
  gap?: number | string;
  justifyContent?: React.CSSProperties['justifyContent'];
  alignItems?: React.CSSProperties['alignItems'];
  flexDirection?: React.CSSProperties['flexDirection'];
  flexWrap?: React.CSSProperties['flexWrap'];
  [key: string]: unknown;
};

const FlexBox = ({ children, gap, justifyContent, alignItems, flexDirection, flexWrap, ...props }: Props) => {
  return (
    <div
      css={css({
        display: 'flex',
        gap: typeof gap === 'number' ? `${gap}rem` : gap,
        justifyContent,
        alignItems,
        flexDirection,
        flexWrap,
      })}
      {...props}
    >
      {children}
    </div>
  );
};

export default FlexBox;
