import type { FunctionComponent } from 'react';

import { css } from '@emotion/react';

import { generateNeuStyle } from '../../../libs/generateNeuStyle';

export type NeuSize = 'small' | 'medium' | 'large';

export type NeuStyleOption = {
  radius: number;
  intensity: number;
  inset?: boolean;
  concave?: boolean;
  size: NeuSize;
};

export type NeuProps = {
  children: React.ReactNode;
  radius?: number;
  intensity?: number;
  inset?: boolean;
  concave?: boolean;
  size?: NeuSize;
  [key: string]: unknown;
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
  const neuStyle = {
    ...generateNeuStyle({ radius, intensity, inset, concave, size }),
  };

  return (
    <div css={css(neuStyle)} {...props}>
      {children}
    </div>
  ); // css propを適用
};

export default Neu;
