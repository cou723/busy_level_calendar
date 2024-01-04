import { Story, Meta } from '@storybook/react';
import NeuButton, { NeuButtonProps } from './NeuButton';

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
