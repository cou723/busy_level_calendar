import ScheduleAlertView from '.';

import type { Props } from '.';
import type { Meta, StoryFn } from '@storybook/react';

export default {
  title: 'ScheduleAlert',
  component: ScheduleAlertView,
} as Meta;

const Template: StoryFn<Props> = (args) => <ScheduleAlertView {...args} />;

const commonPropsAlert = {
  target: 'hoge',
  createdAt: new Date('2021-01-01'),
  updatedAt: new Date('2021-01-01'),
};

export const Info = Template.bind({});
Info.args = {
  alert: {
    title: 'Info',
    message: 'This is an info alert',
    level: 'info',
    ...commonPropsAlert,
  },
  to: '/schedule',
};

export const Warning = Template.bind({});
Warning.args = {
  alert: { title: 'Warning', message: 'This is a warning alert', level: 'warning', ...commonPropsAlert },
  to: '/schedule',
};

export const Error = Template.bind({});
Error.args = {
  alert: { title: 'Error', message: 'This is an error alert', level: 'error', ...commonPropsAlert },
  to: '/schedule',
};
