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
    MuiInputLabel: {
      styleOverrides: {
        root: {
          paddingLeft: '8px',
        },
        shrink: {
          color: fontColor,
          backgroundColor, // 追加
          ...generateNeuStyle({ radius: 1, intensity: 1, size: 'medium' }),
          padding: '0 8px',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          color: fontColor,
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
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-notchedOutline': {
            border: 'none',
            ...generateNeuStyle({ inset: true, radius: 3, intensity: 1, size: 'medium' }),
          },
        },
      },
    },
  },
});
