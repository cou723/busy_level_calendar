import type { StorybookConfig } from "@storybook/react-vite";
import react from "@vitejs/plugin-react";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
    "@storybook/addon-themes",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  async viteFinal(config) {
    config.plugins = config.plugins.filter(
      (plugin) =>
        !(
          Array.isArray(plugin) &&
          plugin[0] &&
          plugin[0].name.includes("vite:react")
        )
    );

    config.plugins.push(
      react({
        exclude: [/\.stories\.(t|j)sx?$/, /node_modules/],
        jsxImportSource: "@emotion/react",
        babel: {
          plugins: ["@emotion/babel-plugin"],
        },
      })
    );

    config.esbuild = {
      // Fixed: [vite] warning: Top-level "this" will be replaced with undefined since this file is an ECMAScript module
      // https://github.com/vitejs/vite/issues/8644
      logOverride: { "this-is-undefined-in-esm": "silent" },
    };

    return config;
  },
};
export default config;
