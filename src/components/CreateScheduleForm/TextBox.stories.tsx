import { StoryFn, Meta } from "@storybook/react";
import TextBox, { TextBoxProps } from "./TextBox";

export default {
  title: "Components/TextBox",
  component: TextBox,
} as Meta;

const Template: StoryFn<TextBoxProps> = (args) => <TextBox {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "Default Title",
  value: "",
  onChange: () => {},
};
