import TextField from '@mui/material/TextField';
import { Controller } from 'react-hook-form';

import type { ScheduleForm } from '@/types/scheduleForm';
import type { Control } from 'react-hook-form';

type DescriptionProps = {
  control: Control<ScheduleForm>;
  defaultValue?: string;
  error?: string;
};
export const DescriptionInput: React.FC<DescriptionProps> = ({ control, defaultValue = '', error }) => {
  return (
    <Controller
      name="description"
      control={control}
      defaultValue={defaultValue}
      render={({ field }) => <TextField {...field} label="詳細" helperText={error} error={!!error} />}
    />
  );
};
