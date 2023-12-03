import { withThemeFromJSXProvider } from "@storybook/addon-themes";
import { Global, css } from "@emotion/react";
import type { Preview } from "@storybook/react";
import emotionReset from "emotion-reset";
import { GlobalEmotion } from "../src/components/GlobalEmotion";

export const decorators = [
  (Story) => (
    <>
      <GlobalEmotion />
      <Story />
    </>
  ),
];

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
