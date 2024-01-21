import { TextField } from '@mui/material';
import { Controller } from 'react-hook-form';

import type { ScheduleForm } from '@/types/scheduleForm';
import type { Control } from 'react-hook-form';

type TitleProps = {
  control: Control<ScheduleForm>;
  defaultValue?: string;
  error?: string;
};
export const TitleInput: React.FC<TitleProps> = ({ control, defaultValue = '', error }) => {
  return (
    <Controller
      name="title"
      control={control}
      defaultValue={defaultValue}
      rules={{ minLength: { value: 1, message: 'タイトルは一文字以上必要です' } }}
      render={({ field }) => <TextField {...field} label="タスクタイトル" helperText={error} error={!!error} />}
    />
  );
};
