import type { FunctionComponent } from 'react';

import { css } from '@emotion/react';
import { transparentize } from 'color2k';

import { generateBoxShadow } from './generateBoxShadow';

export type NeuSize = 'small' | 'medium' | 'large';

export interface NeuProps {
  children: React.ReactNode;
  radius?: 0 | 1 | 2 | 3 | 4;
  intensity?: number;
  inset?: boolean;
  concave?: boolean;
  size?: NeuSize;

  [key: string]: unknown;
}

const actualRadius = [0, 5, 10, 15, 30];

const generateBackground = (concave: boolean) => {
  return concave ? `linear-gradient(145deg,rgba(255, 255, 255, 0.007),rgba(6, 6, 7, 0.1) )` : undefined;
};

const Neu: FunctionComponent<NeuProps> = ({
  children = null,
  radius = 2,
  intensity = 1,
  inset = false,
  concave = false,
  size = 'medium',
  ...props
}) => {
  const shadow = transparentize('rgb(25, 32, 90)', 1.4 - intensity / 2);
  const highlight = transparentize('white', 0.5 - intensity / 2);
  const neuStyleObject = {
    background: generateBackground(concave),
    borderRadius: actualRadius[radius],
    boxShadow: generateBoxShadow(inset, shadow, highlight, size),
  };

  const neuStyle = {
    ...neuStyleObject,
  };

  return (
    <div css={css(neuStyle)} {...props}>
      {children}
    </div>
  ); // css propを適用
};

export default Neu;
