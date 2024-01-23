import type { FunctionComponent } from 'react';

import { css } from '@emotion/react';

import { generateNeuStyle } from '../../../libs/styles/generateNeuStyle';

import type { NeuStyleOption } from '@/types/neuStyleOption';

export type NeuProps = Partial<NeuStyleOption> & {
  children: React.ReactNode;
  [key: string]: unknown;
};

const Neu: FunctionComponent<NeuProps> = ({
  children = null,
  radius = 2,
  intensity = 1,
  inset = false,
  surface = 'flat',
  size = 2,
  ...props
}) => {
  const neuStyle = {
    ...generateNeuStyle({ radius, intensity, inset, surface, size }),
  };

  return (
    <div css={css(neuStyle)} {...props}>
      {children}
    </div>
  ); // css propを適用
};

export default Neu;
