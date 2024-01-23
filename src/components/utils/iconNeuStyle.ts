import { css } from '@emotion/react';

import { backgroundColor } from '@/global';
import { generateDropShadow } from '@/libs/styles/generateBoxShadow';
import { generateNeuStyle } from '@/libs/styles/generateNeuStyle';

export const iconNeuStyle = [
  css`
    font-size: 1.5rem;
    color: ${backgroundColor};
  `,
  generateNeuStyle(
    {
      radius: 10,
      intensity: 1,
      size: 1,
    },
    true
  ),
  css({
    filter: generateDropShadow(1, { offset: 1, blur: 1 }),
  }),
];
