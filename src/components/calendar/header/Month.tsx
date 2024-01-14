import { css } from '@emotion/react';

import { iconNeuStyle } from '@/components/utils/iconNeuStyle';
import { josefinSans } from '@/styles/font';

type MonthProps = {
  month: number;
};

export const Month = ({ month }: MonthProps) => {
  return (
    <p
      css={[
        ...iconNeuStyle,
        css({
          width: '5rem',
          display: 'inline-block',
          textAlign: 'center',
          margin: '0 1rem',
          paddingTop: '0.5rem',
          fontSize: '2.5rem',
          color: '#747680',
        }),
      ]}
      className={josefinSans.className}
    >
      {month}
    </p>
  );
};
