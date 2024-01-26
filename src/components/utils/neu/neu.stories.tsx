import Neu from '.';

import 'the-new-css-reset/css/reset.css';
import type { NeuProps } from '.';
import type { Meta, StoryFn } from '@storybook/react';

export default {
  title: 'Components/Neu',
  component: Neu,
  tags: ['autodocs'],
} as Meta;

const Template: StoryFn<NeuProps> = (args) => <Neu {...args} />;

const commonArgs = {
  children: <div style={{ width: '100px', height: '100px' }}>Neu Component</div>,
  style: { padding: '1rem' },
};

export const Default = Template.bind({});
Default.args = {
  ...commonArgs,
  radius: 2,
};

export const Radius0 = Template.bind({});
Radius0.args = {
  ...commonArgs,
  radius: 0,
};

export const Radius1 = Template.bind({});
Radius1.args = {
  ...commonArgs,
  radius: 1,
};

export const Radius2 = Template.bind({});
Radius2.args = {
  ...commonArgs,
  radius: 2,
};

export const Radius3 = Template.bind({});
Radius3.args = {
  ...commonArgs,
  radius: 3,
};

export const Radius10 = Template.bind({});
Radius10.args = {
  ...commonArgs,
  radius: 10,
};

export const Convex = Template.bind({});
Convex.args = {
  ...commonArgs,
  surface: 'convex',
};

export const Concave = Template.bind({});
Concave.args = {
  ...commonArgs,
  surface: 'concave',
};

export const Inset = Template.bind({});
Inset.args = {
  ...commonArgs,
  inset: true,
};

export const ConvexInset = Template.bind({});
ConvexInset.args = {
  ...commonArgs,
  inset: true,
  surface: 'convex',
};

export const Intensity0 = Template.bind({});
Intensity0.args = {
  ...commonArgs,
  intensity: 0,
};

export const Intensity1 = Template.bind({});
Intensity1.args = {
  ...commonArgs,
  intensity: 1,
};

export const Intensity2 = Template.bind({});
Intensity2.args = {
  ...commonArgs,
  intensity: 2,
};

export const Intensity10 = Template.bind({});
Intensity10.args = {
  ...commonArgs,
  intensity: 10,
};

export const Small = Template.bind({});
Small.args = {
  ...commonArgs,
  size: 1,
};

export const Medium = Template.bind({});
Medium.args = {
  ...commonArgs,
  size: 2,
};

export const Large = Template.bind({});
Large.args = {
  ...commonArgs,
  size: 3,
};
