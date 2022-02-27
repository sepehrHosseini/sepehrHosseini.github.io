import { styled } from '@css/theme.config';

export const Nav = styled('nav', {
  display: 'flex',
  justifyContent: 'center',
  position: 'fixed',
  zIndex: 999,
  top: 0,
  left: 0,
  right: 0,
  background: 'white',
  alignItems: 'center',
  height: 100,
  width: '100%',
  border: '1px solid #eaeaeb',
  '@iPadPro': {
    height: 80,
  },
});

export const NavContainer = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  flex: 1,
  maxWidth: 1280,
  padding: '0 20px',
});

export const TerminalText = styled('p', {
  fontFamily: '$mono',
  fontSize: '$3',
  color: '$main',
  '@Flip': {
    fontSize: '$2',
    display: 'flex !important',
  },
  '@iPhoneSE': {
    fontSize: '$1',
  },
  '@iPadPro': {
    display: 'none',
  },
});

export const NavLinks = styled('div', {
  display: 'flex',
  '@Flip': {
    display: 'none',
  },
});

export const NavLink = styled('a', {
  color: '$main',
  fontSize: '$3',
  textDecoration: 'none',
  margin: '0 10px',
  fontFamily: '$main',
  '&:hover': {
    color: '$white',
  },
});

export const Toggle = styled('button', {
  background: 'none',
  outline: 'none',
  border: 'none',
  color: '$white',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  '@media only screen and (min-width: 600px)': {
    display: 'none',
  },
});

export const NavMenuContainer = styled('div', {
  zIndex: 999999,
  position: 'fixed',
  height: '100vh',
  width: '100vw',
  background: '#2A2A2A90',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const NavMenu = styled('div', {
  width: 280,
  height: 300,
  background: '$primary',
  zIndex: 9999999,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
});

export const NavMenuLinks = styled('a', {
  textDecoration: 'none',
  color: '$white',
  fontSize: '$3',
  fontFamily: '$primary',
  margin: '0 0 10px 30px',
});
