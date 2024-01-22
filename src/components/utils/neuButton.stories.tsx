import NeuButton from './neuButton';

import type { NeuButtonProps } from './neuButton';
import type { StoryFn, Meta } from '@storybook/react';

export default {
  title: 'Components/NeuButton',
  component: NeuButton,
} as Meta;

const Template: StoryFn<NeuButtonProps> = (args) => <NeuButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Default Button',
  onClick: () => {},
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Disabled Button',
  onClick: () => {},
  disabled: true,
};
