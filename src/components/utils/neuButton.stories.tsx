import NeuButton from './neuButton';

import type { NeuButtonProps } from './neuButton';
import type { Story, Meta } from '@storybook/react';


export default {
  title: 'Components/NeuButton',
  component: NeuButton,
} as Meta;

const Template: Story<NeuButtonProps> = (args) => <NeuButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Default Button',
  handleClick: () => {},
  disabled: false,
};
