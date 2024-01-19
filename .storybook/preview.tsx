import type { Preview } from '@storybook/react';
import { Global } from '@emotion/react';
import { LocalizationProvider, type DatePickerProps } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { ja } from 'date-fns/locale';
import { globalStyle } from '../src/components/globalStyle';
import { backgroundColor } from '../src/global';
import 'the-new-css-reset/css/reset.css';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../src/styles/theme';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'light',
      values: [{ name: 'light', value: backgroundColor }],
    },
  },
};
export const decorators = [
  (Story) => (
    <>
      <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ja}>
        <ThemeProvider {...{ theme }}>
          <Global styles={globalStyle} />
          <Story />
        </ThemeProvider>
      </LocalizationProvider>
    </>
  ),
];

export default preview;
