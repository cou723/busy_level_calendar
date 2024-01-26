import { css } from '@emotion/react';
import TextField from '@mui/material/TextField';
import { Controller } from 'react-hook-form';

import type { ScheduleForm } from '@/types/scheduleForm';
import type { UseFormWatch, UseFormSetValue, Control } from 'react-hook-form';

import { Adjustment } from '@/components/scheduleFormView/adjustment';
import FlexBox from '@/components/utils/flexBox';

type RequiredDaysProps = {
  control: Control<ScheduleForm>;
  defaultValue?: number;
  error?: string;
  setValue: UseFormSetValue<ScheduleForm>;
  watch: UseFormWatch<ScheduleForm>;
};
export const RequiredDaysInput: React.FC<RequiredDaysProps> = ({ control, defaultValue, error, setValue, watch }) => {
  const adjustmentProps = { setValue, watch, target: 'requiredDays' } as const;

  return (
    <FlexBox flexDirection="row" gap={1} justifyContent="start" alignItems="center">
      <Controller
        name="requiredDays"
        control={control}
        defaultValue={defaultValue}
        render={({ field }) => (
          <TextField
            css={css({
              flexGrow: 1,
            })}
            type="number"
            {...field}
            value={field.value || ''}
            label="必要日数"
            InputProps={{
              inputProps: {
                min: 0,
              },
            }}
            error={!!error}
            helperText={error}
            onChange={(e) => {
              const v = e.target.value;
              if (typeof v === 'string') field.onChange(parseInt(v));
              else field.onChange(v);
            }}
          />
        )}
      />
      <Adjustment operand={-30} {...adjustmentProps} />
      <Adjustment operand={-7} {...adjustmentProps} />
      <Adjustment operand={-1} {...adjustmentProps} />
      <Adjustment operand={1} {...adjustmentProps} />
      <Adjustment operand={7} {...adjustmentProps} />
      <Adjustment operand={30} {...adjustmentProps} />
    </FlexBox>
  );
};
