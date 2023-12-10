import { Meta, StoryFn } from "@storybook/react";
import Notification, { NotificationProps } from ".";

export default {
  title: "Notification",
  component: Notification,
} as Meta;

const Template: StoryFn<NotificationProps> = (args) => (
  <Notification {...args} />
);

export const Info = Template.bind({});
Info.args = {
  title: "Info",
  message: "This is an info alert",
  level: "info",
};

export const Warning = Template.bind({});
Warning.args = {
  title: "Warning",
  message: "This is a warning alert",
  level: "warning",
};

export const Error = Template.bind({});
Error.args = {
  title: "Error",
  message: "This is an error alert",
  level: "error",
};
