import type { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import Button from "./Button";

export default {
  title: "Button",
  component: Button,
  args: {
    label: "button",
    onClick: () => {
      console.log("clicked");
    },
  },
} as ComponentMeta<typeof Button>;

export const Default: ComponentStoryObj<typeof Button> = {
  args: {
    label: "button",
    onClick: () => {
      console.log("clicked");
    },
  },
};

export const Primary: ComponentStoryObj<typeof Button> = {
  args: {
    label: "button",
    onClick: () => {
      console.log("clicked");
    },
    isPrimary: true,
  },
};

export const IconButton: ComponentStoryObj<typeof Button> = {
  args: {
    label: "button",
    onClick: () => {
      console.log("clicked");
    },
    icon: <i className="fas fa-sign-in-alt"></i>,
  },
};
