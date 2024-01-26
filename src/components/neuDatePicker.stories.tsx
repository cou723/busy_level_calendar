import { LocalizationProvider, type DatePickerProps } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { ja } from 'date-fns/locale';

import type { StoryFn, Meta } from '@storybook/react';

import { NeuDatePicker } from '@/components/neuDatePicker';

export default {
  title: 'Components/NeuDatePicker',
  component: NeuDatePicker,
  tags: ['autodocs'],
} as Meta;

export const Decorators = [
  // (Story: StoryObj) => ( // StoryObjではJSX.Elementを返す関数ではないといわれてしまう
  (Story: () => JSX.Element) => (
    <>
      <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ja}>
        <Story />
      </LocalizationProvider>
    </>
  ),
];

const Template: StoryFn<DatePickerProps<Date>> = (args) => <NeuDatePicker {...args} />;

export const Text = Template.bind({});
Text.args = {};
