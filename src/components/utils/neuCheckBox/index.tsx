import React from 'react';

import { css } from '@emotion/react';
import Checkbox from '@mui/material/Checkbox';
import { BsCheck } from 'react-icons/bs';

import type { CheckboxProps } from '@mui/material';

import { generateNeuStyle } from '@/libs/styles/generateNeuStyle';

type SizeProps = { boxSize?: number };
export type NeuCheckboxProps = CheckboxProps & SizeProps;

const NeuCheckbox: React.FC<NeuCheckboxProps> = ({ boxSize = 24, ...props }) => {
  const sizeStyle = css({ height: `${boxSize}px`, width: `${boxSize}px` });
  const neuStyle = generateNeuStyle({ inset: true, radius: 1, size: 1.2, intensity: 0.2 });
  const style = css([sizeStyle, neuStyle]);
  return <Checkbox {...props} icon={<div css={style} />} checkedIcon={<BsCheck css={style} />} />;
};

export default NeuCheckbox;
