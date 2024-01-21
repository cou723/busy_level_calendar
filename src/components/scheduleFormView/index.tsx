import React, { type FunctionComponent } from 'react';

import { css } from '@emotion/react';

import { DescriptionInput } from './descriptionInput';
import { RequiredDaysInput } from './requiredDaysInput';
import { ScheduleFormDateInput } from './scheduleFormDateInput';
import { SubmitButton } from './submitButton';
import { TitleInput } from './titleInput';

import type { Schedule } from '@/types/schedule';

import FlexBox from '@/components/utils/flexBox';
import { useScheduleForm } from '@/hooks/useScheduleForm';
import { nullToUndefined } from '@/utils/nullToUndefined';

interface ScheduleFormProps {
  defaultValue?: Schedule;
}

const ScheduleFormView: React.FC<ScheduleFormProps> = ({ defaultValue }) => {
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
        <RequiredDaysInput {...{ control, setValue, watch }} />
        <ScheduleFormDateInput {...{ control, setValue, watch, defaultValue: defaultValue?.date }} />
        <SubmitButton mode={defaultValue ? 'edit' : 'create'} onSubmit={onSubmit} />
      </FlexBox>
    </div>
  );
};

export default ScheduleFormView;
