import { createCss } from '@stitches/react';

export const { css, styled, global, getCssString, keyframes } = createCss({
  theme: {
    colors: {
      main: '#6B7C95',
      main2: '#8696AD',
      primary: '#37393E',
      dark: '#F4F4F5',
      white: '#191919',
      gradient:
        'linear-gradient(93.05deg, #EF9797 3.98%, rgba(206, 126, 199, 0.801616) 35.29%, #A364D6 68.78%, #A1D0F9 97.44%)',
    },
    fontSizes: {
      1: '14px',
      2: '18px',
      3: '20px',
      4: '24px',
      5: '36px',
      6: '48px',
    },
    fonts: {
      main: 'Roboto, sans-serif',
      primary: 'Roboto, sans-serif',
      mono: 'JetBrains Mono, monospace',
    },
  },
  media: {
    iPadPro: '(max-width: 1024px)',
    iPad: '(max-width: 768px)',
    Flip: '(max-width: 600px)',
    iPhonePlus: '(max-width: 414px)',
    iPhone: '(max-width: 375px)',
    iPhoneSE: '(max-width: 320px)',
  },
});

export const ContentWrapper = styled('div', {
  position: 'relative',
  overflow: 'hidden',
});
