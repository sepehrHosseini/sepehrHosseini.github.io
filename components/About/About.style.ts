import { styled } from '@css/theme.config';

export const AboutContainer = styled('div', {});

export const AboutInner = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  maxWidth: 1280,
  margin: '0 auto',
  padding: '0 20px',
});

export const InfoContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: 600,
  '@iPadPro': {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export const AboutHeader = styled('h1', {
  display: 'inline-block',
  width: 'fit-content',
  fontSize: '$5',
  margin: '50px 0',
});

export const AboutDescription = styled('p', {
  fontFamily: '$primary',
  color: '$white',
  fontSize: '$3',
  marginBottom: 30,
  '@iPadPro': {
    width: '100%',
    fontSize: '$2',
  },
});

export const SkillsContainer = styled('div', {
  display: 'grid',
  gap: '1.5rem',
  width: 400,
  gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 0fr))',
  '@iPadPro': {
    width: '100%',
    gap: '1rem',
    gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 0fr))',
  },
});

export const SkillBox = styled('div', {
  fontFamily: '$primary',
  display: 'flex',
  alignItems: 'center',
  fontSize: '$3',
  color: '$white',
  width: 140,
  '@iPadPro': {
    fontSize: '$2',
  },
});

export const ImgBox = styled('div', {
  display: 'flex',
  position: 'absolute',
  width: 300,
  '@iPadPro': {
    display: 'none',
  },
});
