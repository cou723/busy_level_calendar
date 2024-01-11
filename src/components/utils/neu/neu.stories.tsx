import Neu from ".";

import type { NeuProps } from ".";
import type { Meta, StoryFn } from "@storybook/react";


export default {
  title: "Neu",
  component: Neu,
  parameters: {
    backgrounds: {
      default: "light",
      values: [
        { name: "light", value: "#cfcfcf" },
        { name: "dark", value: "#2b2b2b" },
      ],
    },
  },
} as Meta;

const Template: StoryFn<NeuProps> = (args) => <Neu {...args} />;

const commonArgs = {
  children: <div>Neu Component</div>,
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

export const Radius4 = Template.bind({});
Radius4.args = {
  ...commonArgs,
  radius: 4,
};

export const Concave = Template.bind({});
Concave.args = {
  ...commonArgs,
  concave: true,
};

export const Inset = Template.bind({});
Inset.args = {
  ...commonArgs,
  inset: true,
};

export const ConcaveInset = Template.bind({});
ConcaveInset.args = {
  ...commonArgs,
  inset: true,
  concave: true,
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

export const Intensity3 = Template.bind({});
Intensity3.args = {
  ...commonArgs,
  intensity: 3,
};

export const Intensity4 = Template.bind({});
Intensity4.args = {
  ...commonArgs,
  intensity: 4,
};

export const Small = Template.bind({});
Small.args = {
  ...commonArgs,
  size: "small",
};

export const Medium = Template.bind({});
Medium.args = {
  ...commonArgs,
  size: "medium",
};

export const Large = Template.bind({});
Large.args = {
  ...commonArgs,
  size: "large",
};
