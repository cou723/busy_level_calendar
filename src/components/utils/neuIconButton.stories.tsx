import { Md10K } from 'react-icons/md';

import NeuIconButton from './neuIconButton';

import type { Props } from './neuIconButton';
import type { StoryFn, Meta } from '@storybook/react';

export default {
  title: 'Components/NeuIconButton',
  component: NeuIconButton,
  tags: ['autodocs'],
} as Meta;

const Template: StoryFn<Props> = (args) => <NeuIconButton {...args} />;

export const SuperMini = Template.bind({});
SuperMini.args = {
  Icon: Md10K,
  size: 0.5,
};

export const Mini = Template.bind({});
Mini.args = {
  Icon: Md10K,
  size: 1,
};

export const Normal = Template.bind({});
Normal.args = {
  Icon: Md10K,
};

export const Big = Template.bind({});
Big.args = {
  Icon: Md10K,
  size: 3,
};
