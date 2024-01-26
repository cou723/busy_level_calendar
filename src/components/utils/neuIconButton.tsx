import React from 'react';

import { css } from '@emotion/react';

import type { NeuStyleOption } from '@/types/neuStyleOption';
import type { Md10K } from 'react-icons/md';

import { iconNeuStyle } from '@/components/utils/iconNeuStyle';
import NeuButton from '@/components/utils/neuButton';

export type Props = Partial<Omit<Omit<NeuStyleOption, 'isTouchable'>, 'inset'>> & {
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  Icon: React.ComponentType<{ [key: string]: unknown }>;
  size?: number;
};

const NeuIconButton: React.FC<Props> = ({ onClick, Icon, size = 2, ...neuOption }) => {
  return (
    <NeuButton
      onClick={onClick}
      surface="convex"
      css={css({
        padding: '0.3rem',
        minWidth: `${1 + size * 0.5}rem`,
      })}
      radius={10}
      {...neuOption}
    >
      <Icon
        css={[
          css({
            fontSize: `${1 + size * 0.5}rem`,
          }),
          iconNeuStyle,
        ]}
      />
    </NeuButton>
  );
};

export default NeuIconButton;
