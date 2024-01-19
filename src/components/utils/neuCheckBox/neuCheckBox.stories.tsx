import { Checkbox, FormControlLabel } from '@mui/material';

import type { FormControlLabelProps } from '@mui/material';
import type { StoryFn, Meta } from '@storybook/react';

export default {
  title: 'Components/NeuCheckbox',
  component: FormControlLabel,
} as Meta;

const Template: StoryFn<FormControlLabelProps> = (args) => <FormControlLabel {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Default Button',
  onClick: () => {},
  disabled: false,
  control: <Checkbox />,
};
