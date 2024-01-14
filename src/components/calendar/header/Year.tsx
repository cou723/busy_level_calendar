import { css } from '@emotion/react';

import { iconNeuStyle } from '@/components/utils/iconNeuStyle';
import { josefinSans } from '@/styles/font';

type YearProps = {
  year: number;
};

export const Year = ({ year }: YearProps) => {
  return (
    <p
      css={[
        ...iconNeuStyle,
        css({
          fontSize: '2.5rem',
        }),
      ]}
      className={josefinSans.className}
    >
      {year}
    </p>
  );
};
