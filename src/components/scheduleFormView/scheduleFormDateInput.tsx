'use client';
import { css } from '@emotion/react';
import { DatePicker } from '@mui/x-date-pickers';
import { Controller, type Control } from 'react-hook-form';

import type { ScheduleForm } from '@/types/scheduleForm';
import type { UseFormSetValue, UseFormWatch } from 'react-hook-form';

import { Adjustment } from '@/components/scheduleFormView/adjustment';
import FlexBox from '@/components/utils/flexBox';
import NeuButton from '@/components/utils/neuButton';

type ScheduleFormDateInputProps = {
  defaultValue?: Date;
  control: Control<ScheduleForm>;
  setValue: UseFormSetValue<ScheduleForm>;
  watch: UseFormWatch<ScheduleForm>;
};
export const ScheduleFormDateInput: React.FC<ScheduleFormDateInputProps> = ({
  control,
  defaultValue,
  setValue,
  watch,
}) => {
  const adjustmentProps = { setValue, watch, target: 'date', css: css({ flexGrow: 0, flexShrink: 0 }) } as const;

  return (
    <FlexBox flexDirection="row" gap={1} justifyContent="start" alignItems="center">
      <Controller
        name="date"
        control={control}
        defaultValue={defaultValue ?? new Date()}
        render={({ field }) => (
          <DatePicker
            {...field}
            label="締切日(予定日)"
            css={css({
              flexGrow: 1,
            })}
          />
        )}
      />
      <Adjustment operand={-30} {...adjustmentProps} />
      <Adjustment operand={-7} {...adjustmentProps} />
      <Adjustment operand={-1} {...adjustmentProps} />
      <NeuButton label="今日" onClick={() => setValue('date', new Date())} radius={2} />
      <Adjustment operand={1} {...adjustmentProps} />
      <Adjustment operand={7} {...adjustmentProps} />
      <Adjustment operand={30} {...adjustmentProps} />
    </FlexBox>
  );
};
