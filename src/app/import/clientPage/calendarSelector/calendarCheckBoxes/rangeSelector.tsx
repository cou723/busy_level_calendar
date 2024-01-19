import React from 'react';

import { isBefore } from 'date-fns';
import { Controller, useFormContext, type UseFormRegister, type UseFormRegisterReturn } from 'react-hook-form';

import type { ImportEventOptions } from '@/types/importEventOptions';

import { NeuDatePicker } from '@/components/neuDatePicker';
import FlexBox from '@/components/utils/flexBox';

type Props = {
  range: { start: Date; end: Date };
  onChange: (range: { start: Date; end: Date }) => void;
  register: UseFormRegister<ImportEventOptions>;
};

const RangeSelector: React.FC<Props> = ({ range, onChange, register }) => {
  const { control } = useFormContext();
  return (
    <FlexBox gap={2} flexWrap="wrap">
      <Controller
        name="rangeStart"
        control={control}
        render={({ field }) => (
          <NeuDatePicker
            label="開始"
            value={field.value}
            inputRef={field.ref}
            onChange={(date) => {
              field.onChange(date);
            }}
          />
        )}
      />

      <Controller
        name="rangeStart"
        control={control}
        render={({ field }) => (
          <NeuDatePicker
            label="終了"
            value={field.value}
            minDate={range.start}
            inputRef={field.ref}
            onChange={(date) => {
              field.onChange(date);
            }}
          />
        )}
      />

      <NeuDatePicker
        label="終了"
        {...register('range.end')}
        minDate={range.start}
        slotProps={{
          textField: {
            helperText: !isBefore(range.end, range.start) ? '' : '開始日より後の日付を選択してください',
          },
        }}
      />
    </FlexBox>
  );
};

export default RangeSelector;
