'use client';
import React from 'react';

import { css } from '@emotion/react';

import { DescriptionInput } from './descriptionInput';
import { RequiredDaysInput } from './requiredDaysInput';
import { ScheduleFormDateInput } from './scheduleFormDateInput';
import { SubmitButton } from './submitButton';
import { TitleInput } from './titleInput';

import type { Schedule } from '@prisma/client';

import FlexBox from '@/components/utils/flexBox';
import { useScheduleForm } from '@/hooks/useScheduleForm';
import { nullToUndefined } from '@/utils/nullToUndefined';

interface ScheduleFormProps {
  defaultValue?: Schedule;
  disabled: boolean;
  setDisabled: React.Dispatch<React.SetStateAction<boolean>>;
}

const ScheduleFormView: React.FC<ScheduleFormProps> = ({ defaultValue, disabled, setDisabled }) => {
  const { onSubmit, formState, control, setValue, watch } = useScheduleForm(defaultValue);

  return (
    <div
      css={css({
        width: '100%',
      })}
    >
      <FlexBox flexDirection="column" gap={1}>
        <TitleInput control={control} defaultValue={defaultValue?.title} error={formState.errors.title?.message} />
        <DescriptionInput
          control={control}
          defaultValue={nullToUndefined(defaultValue?.description)}
          error={formState.errors.description?.message}
        />
        <RequiredDaysInput {...{ control, setValue, watch }} error={formState.errors.requiredDays?.message} />
        <ScheduleFormDateInput {...{ control, setValue, watch, defaultValue: defaultValue?.date }} />
        <SubmitButton mode={defaultValue ? 'edit' : 'create'} {...{ onSubmit, disabled, setDisabled }} />
      </FlexBox>
    </div>
  );
};

export default ScheduleFormView;
