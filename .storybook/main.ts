const path = require('path');

const react = require('@vitejs/plugin-react');

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],

  framework: {
    name: '@storybook/react-vite',
    options: {},
  },

  async viteFinal(config) {
    config.plugins = config.plugins.filter(
      (plugin) => !(Array.isArray(plugin) && plugin[0]?.name.includes('vite:react'))
    );

    config.plugins.push(
      react({
        exclude: [/\.stories\.(t|j)sx?$/, /node_modules/],
        jsxImportSource: '@emotion/react',
        babel: {
          plugins: ['@emotion/babel-plugin'],
        },
      })
    );
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, '../src'),
    };
    return config;

    console.log(config.plugins);
    return config;
  },

  docs: {
    autodocs: true,
  },
};
