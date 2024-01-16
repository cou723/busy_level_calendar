import ScheduleAlertTypes from '.';
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
  title: 'Info',
  message: 'This is an info alert',
  level: 'info',
};

export const Warning = Template.bind({});
Warning.args = {
  title: 'Warning',
  message: 'This is a warning alert',
  level: 'warning',
};

export const Error = Template.bind({});
Error.args = {
  title: 'Error',
  message: 'This is an error alert',
  level: 'error',
};
