import { Josefin_Sans, M_PLUS_1, Roboto } from 'next/font/google';

const josefinSans = Josefin_Sans({
  weight: '400',
  subsets: ['vietnamese'],
  variable: '--font-josefin-sans',
});

const mPlus1 = M_PLUS_1({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-mplus1',
});

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-roboto',
});

export { josefinSans, mPlus1, roboto };
