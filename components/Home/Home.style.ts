import { styled } from '@css/theme.config';

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  width: '105vw',
  maxHeight: 1280,
  '@media only screen and (min-width: 3000px)': {
    height: '120vh',
  },
  '@media only screen and (max-width: 1800px)': {
    height: '110vh',
  },
  '@media only screen and (max-width: 1280px)': {
    height: '90vh',
  },
  '@Flip': {
    marginLeft: 30,
    height: '120vh',
    width: 'auto !important',
  },
});

export const HelloContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
});

export const ContainerText = styled('p', {
  color: 'var(--colors-main)',
  fontSize: '$4',
  maxWidth: '90vw',
  width: 'fit-content',
  display: 'inline-block',
});

export const Name = styled('h1', {
  display: 'flex',
  width: 'fit-content',
  color: '$white',
  fontSize: 60,
  margin: '30px 0',
  '@Flip': {
    fontSize: 40,
  },
});

export const PaintBucketContainer = styled('div', {
  display: 'flex',
  position: 'absolute',
  marginRight: 400,
  marginBottom: 100,
  zIndex: '-100',
  '@media only screen and (max-width: 767px)': {
    display: 'none',
  },
});

export const SVGContainer = styled('div', {
  position: 'absolute',
  opacity: 0.05,
  display: 'flex',
  alignItems: 'center',
  zIndex: '-100',
  margin: '100px 0 0 500px',
  height: '200vh',
  '@media only screen and (max-width: 767px)': {
    display: 'none',
  },
});

export const SocialsContainer = styled('div', {
  display: 'flex',
  marginTop: 30,
});

export const SocialLink = styled('a', {
  display: 'flex',
  color: '$main',
  marginRight: 20,
  transition: '0.1s linear',
  '&:hover': {
    color: '$white',
    transform: 'scale(1.15, 1.15)',
  },
});

export const ContactButtonBox = styled('a', {
  outline: 'none',
  '&:focus': {
    button: {
      background: '#ffffff30',
    },
  },
});

export const ContactButton = styled('button', {
  width: 'fit-content',

  padding: 20,
  marginTop: 60,

  cursor: 'pointer',
  zIndex: '100',

  border: '2px solid var(--colors-main)',
  color: 'var(--colors-main)',

  fontFamily: '$primary',
  fontSize: '$3',

  outline: 'none',
  background: 'none',

  transition: '0.1s linear',

  borderRadius: 5,
  '&:hover': {
    background: '#ffffff30',
  },
  '&:focus': {
    background: '#ffffff30',
  },
});
