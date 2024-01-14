import { css } from '@emotion/react';

import { backgroundColor } from '@/constants';
import { generateDropShadow } from '@/libs/generateBoxShadow';
import { generateNeuStyle } from '@/libs/generateNeuStyle';

export const iconNeuStyle = [
  css`
    font-size: 1.5rem;
    color: ${backgroundColor};
  `,
  generateNeuStyle(
    {
      radius: 10,
      intensity: 1,
      inset: false,
      concave: false,
      size: 'small',
    },
    true
  ),
  css({
    filter: generateDropShadow(1, { offset: 1, blur: 1 }),
  }),
];
