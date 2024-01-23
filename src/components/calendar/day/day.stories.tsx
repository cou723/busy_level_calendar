import Day from '.';

import type { DayProps } from '.';
import 'the-new-css-reset/css/reset.css';
import type { Meta, StoryFn } from '@storybook/react';

import { generate } from '@/types/schedule';

import { css } from '@emotion/react';

export default {
  title: 'Calendar/Day',
  component: Day,
} as Meta;

const Template: StoryFn<DayProps> = (args) => <Day {...args} />;

const commonArgs = {
  day: 1,
  schedules: [
    generate({
      title: 'sample',
      requiredDays: 2,
      date: new Date(),
    }),
  ],
  style: { width: '200px' },
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
