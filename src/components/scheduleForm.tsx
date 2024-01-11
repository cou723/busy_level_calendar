import type { FunctionComponent } from 'react';

import { css } from '@emotion/react';

import type { Schedule } from '@/types/schedule';

import FlexBox from '@/components/utils/flexBox';
import NeuButton from '@/components/utils/neuButton';
import TextBox from '@/components/utils/textBox';
import { useScheduleForm } from '@/hooks/useScheduleForm';

interface ScheduleFormProps {
  defaultValue?: Schedule;
}

const ScheduleForm: FunctionComponent<ScheduleFormProps> = ({ defaultValue }) => {
  const { register, onSubmit, formState } = useScheduleForm(defaultValue);

  return (
    <form onSubmit={onSubmit}>
      <FlexBox flexDirection="column" gap={1}>
        <TextBox
          id="title"
          label="タスクタイトル"
          type="text"
          errorMessage={formState.errors.title?.message}
          register={register('title')}
        />
        <TextBox
          id="description"
          label="詳細(任意)"
          type="text"
          errorMessage={formState.errors.description?.message}
          register={register('description', { required: false })}
        />
        <TextBox
          id="requiredDays"
          label="必要日数"
          type="number"
          errorMessage={formState.errors.requiredDays?.message}
          register={register('requiredDays', {
            setValueAs: (v) => (v === '' ? undefined : parseInt(v, 10)),
            required: false,
          })}
        />
        <TextBox
          id="date"
          label="締切日"
          type="date"
          errorMessage={formState.errors.date?.message}
          register={register('date')}
        />
      </FlexBox>
      <div
        css={css({
          display: 'flex',
          justifyContent: 'end',
          alignItems: 'row',
        })}
      >
        <NeuButton
          css={css({ width: '8rem', marginTop: '1rem' })}
          label={defaultValue ? '編集' : '作成'}
          handleClick={() => onSubmit()}
        />
      </div>
    </form>
  );
};

export default ScheduleForm;
