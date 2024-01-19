'use client';
import React from 'react';

import { css } from '@emotion/react';
import { TextField, FormGroup, FormControlLabel, MenuItem } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import { useForm, Controller } from 'react-hook-form';

import ImportButton from './importButton';

import type { ImportEventOptions } from '@/types/importEventOptions';
import type { calendar_v3 } from 'googleapis';

import FlexBox from '@/components/utils/flexBox';
import NeuCheckbox from '@/components/utils/neuCheckBox';
import { generateNeuStyle } from '@/libs/generateNeuStyle';

const SubmitButton = () => {
  return (
    <input
      type="submit"
      value="インポート"
      css={[
        generateNeuStyle({
          radius: 3,
          intensity: 2,
          size: 2,
          isTouchable: true,
        }),
        css({
          padding: '10px',
        }),
      ]}
    />
  );
};

type Props = {
  calendars: calendar_v3.Schema$CalendarListEntry[];
  onSubmit: (data: ImportEventOptions) => void;
};

const ImportEventOptionsForm: React.FC<Props> = ({ calendars, onSubmit }) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<ImportEventOptions>();

  return (
    <form
      css={css({
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
      })}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Controller
        name="calendars"
        control={control}
        defaultValue={[]}
        rules={{
          validate: (value) => value.length > 0 || '最低一つはカレンダーを選択してください',
        }}
        render={({ field }) => (
          <TextField
            {...field}
            select
            variant="outlined"
            label="Calendars"
            error={!!errors.calendars}
            helperText={errors.calendars?.message}
            SelectProps={{ multiple: true }}
          >
            {calendars.map((calendar) => (
              <MenuItem key={calendar.id} value={calendar.id!}>
                {calendar.summary!}
              </MenuItem>
            ))}
          </TextField>
        )}
      />
      <Controller
        name="onlyAllDay"
        control={control}
        defaultValue={false}
        render={({ field }) => (
          <FormControlLabel control={<NeuCheckbox {...field} />} label="終日の予定のみを対象にインポートする" />
        )}
      />
      <FormGroup
        css={css({
          display: 'flex',
          gap: '1rem',
          flexDirection: 'row',
        })}
      >
        <Controller
          name="range.start"
          control={control}
          defaultValue={new Date()}
          render={({ field }) => <DatePicker {...field} label="開始日" />}
        />
        <Controller
          name="range.end"
          control={control}
          defaultValue={new Date()}
          render={({ field }) => <DatePicker {...field} label="終了日" />}
        />
      </FormGroup>
      <FlexBox justifyContent="end">
        <SubmitButton />
      </FlexBox>
    </form>
  );
};

export default ImportEventOptionsForm;
