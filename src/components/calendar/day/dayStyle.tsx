import { css } from '@emotion/react';

import { generateDayFontColor } from '.';

import { iconNeuStyle } from '@/components/utils/iconNeuStyle';
import { fontColor } from '@/global';

export const dayStyle = (isToday: boolean) => [
  iconNeuStyle,
  css({
    display: 'block',
    backgroundColor: isToday ? fontColor : 'transparent',
    padding: '0.3rem 0.3rem 0.13rem 0.3rem',
    borderRadius: '10rem',
    color: generateDayFontColor(isToday, true),
    marginBottom: '0.2rem',
  }),
];
