import Day from '.';

import type { DayProps } from '.';
import 'the-new-css-reset/css/reset.css';
import type { Props } from '@/components/calendar/day/detailedModal';
import type { Meta, StoryFn } from '@storybook/react';

import DetailedModal from '@/components/calendar/day/detailedModal';
import { generate } from '@/types/schedule';

export default {
  title: 'Calendar/DetailedModal',
  component: DetailedModal,
  tags: ['autodocs'],
} as Meta;

const Template: StoryFn<Props> = (args) => <DetailedModal {...args} />;

const commonArgs = {
  open: true,
  onClose: () => {},
};

export const Default = Template.bind({});
Default.args = {
  day: 1,
  schedules: [
    generate({
      title: 'sample',
      requiredDays: 2,
      date: new Date(),
    }),
  ],
  ...commonArgs,
};

export const Multi = Template.bind({});
Multi.args = {
  day: 1,
  schedules: [
    generate({
      title: 'sample',
      requiredDays: 2,
      date: new Date(),
    }),
    generate({
      title: 'sample',
      requiredDays: 2,
      date: new Date(),
    }),
    generate({
      title: 'sample',
      requiredDays: 2,
      date: new Date(),
    }),
    generate({
      title: 'sample',
      requiredDays: 2,
      date: new Date(),
    }),
  ],
  ...commonArgs,
};

export const Empty = Template.bind({});
Empty.args = {
  day: 1,
  schedules: [],
  ...commonArgs,
};
