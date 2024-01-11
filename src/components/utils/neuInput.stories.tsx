import NeuInput from './neuInput';

import type { NeuInputProps } from './neuInput';
import type { StoryFn, Meta } from '@storybook/react';


export default {
  title: 'Components/NeuInput',
  component: NeuInput,
} as Meta;

const Template: StoryFn<NeuInputProps> = (args) => <NeuInput {...args} />;

export const Text = Template.bind({});
Text.args = {
  type: 'text',
  value: '',
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e);
  },
};

export const Password = Template.bind({});
Password.args = {
  type: 'password',
  value: '',
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e);
  },
};
