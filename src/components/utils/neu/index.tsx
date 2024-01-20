import type { FunctionComponent } from 'react';

import { css } from '@emotion/react';

import { generateNeuStyle } from '../../../libs/generateNeuStyle';

import type { NeuSize } from '../../../types/neuSize';
import type { NeuStyleOption } from '@/components/utils/neu/NeuStyleOption';

export type NeuProps = NeuStyleOption & {
  children: React.ReactNode;
  [key: string]: unknown;
};

const Neu: FunctionComponent<NeuProps> = ({
  children = null,
  radius = 2,
  intensity = 1,
  inset = false,
  concave = false,
  size = 2,
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
