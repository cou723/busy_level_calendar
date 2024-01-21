import React from 'react';

import { css } from '@emotion/react';
import { addDays } from 'date-fns';

import type { ScheduleForm } from '@/types/scheduleForm';
import type { UseFormWatch, UseFormSetValue } from 'react-hook-form';

import NeuButton from '@/components/utils/neuButton';

type Props = {
  children?: React.ReactNode;
  target: 'date' | 'requiredDays';
  operand: number;
  watch: UseFormWatch<ScheduleForm>;
  setValue: UseFormSetValue<ScheduleForm>;
};

export const Adjustment: React.FC<Props> = ({ children, target, operand, setValue, watch }) => {
  let onClick;
  if (target == 'requiredDays')
    onClick = () => {
      let requiredDays = watch('requiredDays') ?? 0;
      // なぜかrequiredDaysがstringになることがあるので、それを防ぐ
      if (typeof requiredDays === 'string') requiredDays = parseInt(requiredDays);

      if (requiredDays + operand < 0) return setValue(target, 0);
      else return setValue(target, operand + requiredDays);
    };
  else onClick = () => setValue(target, addDays(watch('date'), operand));

  return (
    <NeuButton
      label={`${operand > 0 ? '+' + operand : operand}日`}
      onClick={onClick}
      radius={2}
      css={css({
        paddingRight: '0',
        paddingLeft: '0',
      })}
    >
      {children}
    </NeuButton>
  );
};
