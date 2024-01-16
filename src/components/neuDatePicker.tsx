import * as React from 'react';

import { alpha, css, styled } from '@mui/material/styles';
import { DatePicker } from '@mui/x-date-pickers';

import type { DatePickerProps } from '@mui/x-date-pickers';

import { backgroundColor } from '@/global';
import { generateNeuStyle } from '@/libs/generateNeuStyle';

export const NeuDatePicker: React.FC<DatePickerProps<Date>> = ({ ...props }) => {
  return (
    <DatePicker
      css={[
        css({
          '& .MuiOutlinedInput-notchedOutline': {
            border: 'none',
          },
          '& .MuiFormLabel-root': {
            backgroundColor,
          },
        }),
      ]}
      {...props}
    />
  );
};
