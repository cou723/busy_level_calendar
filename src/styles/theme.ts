import { createTheme } from '@mui/material';

import { backgroundColor } from '@/global';
import { generateNeuStyle } from '@/libs/generateNeuStyle';

export const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#b5783f',
    },
  },
  components: {
    // コンポーネント名
    MuiButton: {
      styleOverrides: {
        // CSSルール名
        root: {
          // CSS定義
          color: 'black',
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
