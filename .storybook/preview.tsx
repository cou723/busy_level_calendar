import { withThemeFromJSXProvider } from "@storybook/addon-themes";
import { Global, css } from "@emotion/react";
import type { Preview } from "@storybook/react";
import emotionReset from "emotion-reset";

const GlobalStyles = () => {
  <Global
    styles={css`
      ${emotionReset}

      *, *::after, *::before {
        box-sizing: border-box;
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        font-smoothing: antialiased;
      }
    `}
  />;
};

export const decorators = [
  withThemeFromJSXProvider({
    GlobalStyles, // Adds your GlobalStyles component to all stories
  }),
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
