import ScheduleAlertView from '.';

import type { Props } from '.';
import type { Meta, StoryFn } from '@storybook/react';

export default {
  title: 'ScheduleAlert',
  component: ScheduleAlertView,
} as Meta;

const Template: StoryFn<Props> = (args) => <ScheduleAlertView {...args} />;

export const Info = Template.bind({});
Info.args = {
  alert: { title: 'Info', message: 'This is an info alert', level: 'info' },
  to: '/schedule',
};

export const Warning = Template.bind({});
Warning.args = {
  alert: { title: 'Warning', message: 'This is a warning alert', level: 'warning' },
  to: '/schedule',
};

export const Error = Template.bind({});
Error.args = {
  alert: { title: 'Error', message: 'This is an error alert', level: 'error' },
  to: '/schedule',
};
