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
          ...generateNeuStyle({ radius: 1, intensity: 0.5, size: 1.5 }),
          padding: '0 8px',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          color: fontColor,
          '&:hover': {
            backgroundColor: 'transparent',
          },
          '&:active': {
            ...generateNeuStyle({ radius: 3, intensity: 1, size: 2, inset: true }),
          },
          '& .MuiTouchRipple-root': {
            width: '100%',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          ...generateNeuStyle({ radius: 3, intensity: 1, size: 2 }),
          backgroundColor,
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-notchedOutline': {
            border: 'none',
            ...generateNeuStyle({ inset: true, radius: 3, intensity: 0.5, size: 1.6 }),
          },
        },
      },
    },
  },
});
