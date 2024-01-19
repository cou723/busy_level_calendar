import { createTheme } from '@mui/material';

import { backgroundColor, fontColor } from '@/global';
import { generateNeuStyle } from '@/libs/generateNeuStyle';

export const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#b5783f',
    },
  },
  components: {
    MuiInput: {
      styleOverrides: {
        root: {
          border: 'none',
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: fontColor,
          marginLeft: '1rem',
        },
      },
    },
    // コンポーネント名
    MuiButton: {
      styleOverrides: {
        // CSSルール名
        root: {
          // CSS定義
          color: fontColor,
          fontSize: '1rem',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          ...generateNeuStyle({ radius: 3, intensity: 1, size: 'medium' }),
          backgroundColor,
        },
      },
    },
  },
});
