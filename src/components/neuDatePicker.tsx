import * as React from 'react';

import { css } from '@emotion/react';
import { DatePicker } from '@mui/x-date-pickers';

import type { DatePickerProps } from '@mui/x-date-pickers';

import { backgroundColor } from '@/global';
import { generateNeuStyle } from '@/libs/styles/generateNeuStyle';

export const NeuDatePicker: React.FC<DatePickerProps<Date>> = ({ ...props }) => {
  return (
    <DatePicker
      css={[
        css({
          '& .MuiOutlinedInput-notchedOutline': {
            border: 'none',
            ...generateNeuStyle({ radius: 2, intensity: 1, size: 2 }),
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
