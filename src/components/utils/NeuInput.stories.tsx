import { StoryFn, Meta } from "@storybook/react";
import NeuInput, { NeuInputProps } from "./NeuInput";

export default {
  title: "Components/NeuInput",
  component: NeuInput,
} as Meta;

const Template: StoryFn<NeuInputProps> = (args) => <NeuInput {...args} />;

export const Text = Template.bind({});
Text.args = {
  type: "text",
  value: "",
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e);
  },
};

export const Password = Template.bind({});
Password.args = {
  type: "password",
  value: "",
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e);
  },
};
