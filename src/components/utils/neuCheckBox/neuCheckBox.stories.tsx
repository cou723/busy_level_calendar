import type { NeuCheckboxProps } from '@/components/utils/neuCheckBox';
import type { StoryFn, Meta } from '@storybook/react';

import NeuCheckbox from '@/components/utils/neuCheckBox';

export default {
  title: 'Components/NeuCheckbox',
  component: NeuCheckbox,
} as Meta;

const Template: StoryFn<NeuCheckboxProps> = (args) => <NeuCheckbox {...args} />;

export const Default = Template.bind({});
Default.args = {};
