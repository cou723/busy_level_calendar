import Day from '.';

import type { DayProps } from '.';
import 'the-new-css-reset/css/reset.css';
import type { Meta, StoryFn } from '@storybook/react';

export default {
  title: 'Calendar/Day',
  component: Day,
} as Meta;

const Template: StoryFn<DayProps> = (args) => <Day {...args} />;

const commonArgs = {
  day: 1,
  schedule: [
    {
      title: 'test',
      start: new Date(),
      end: new Date(),
      color: 'red',
    },
  ],
};

export const Default = Template.bind({});
Default.args = {
  ...commonArgs,
  busyLevel: 0,
};

export const MaxBusy = Template.bind({});
MaxBusy.args = {
  ...commonArgs,
  busyLevel: 1,
};
