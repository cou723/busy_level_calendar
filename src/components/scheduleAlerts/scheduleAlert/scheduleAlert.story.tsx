import ScheduleAlertTypes from '.';
import ScheduleAlert from '.';

import type { Props } from '.';
import type { Meta, StoryFn } from '@storybook/react';

export default {
  title: 'ScheduleAlert',
  component: ScheduleAlert,
} as Meta;

const Template: StoryFn<Props> = (args) => <ScheduleAlert {...args} />;

export const Info = Template.bind({});
Info.args = {
  title: 'Info',
  message: 'This is an info alert',
  priorityLevel: 'info',
};

export const Warning = Template.bind({});
Warning.args = {
  title: 'Warning',
  message: 'This is a warning alert',
  priorityLevel: 'warning',
};

export const Error = Template.bind({});
Error.args = {
  title: 'Error',
  message: 'This is an error alert',
  priorityLevel: 'error',
};
