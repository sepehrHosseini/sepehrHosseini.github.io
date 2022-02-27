import { styled } from '@css/theme.config';

export const StudyInfo = styled('div', {
  marginTop: 200,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

export const CaseStudy = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

export const Title = styled('p', {
  display: 'inline-block',
  width: '50vw',
  color: 'var(--colors-white)',
  fontSize: '$6',
  fontWeight: 'bold',
  textAlign: 'center',
  marginBottom: 0,
  '@Flip': {
    width: '90vw',
    fontSize: '$4',
  },
});

export const Description = styled('h1', {
  width: '50vw',
  textAlign: 'center',
  fontSize: '18px',
  fontWeight: 400,
  color: 'var(--colors-main)',
  margin: '20px 0',
});

export const Graphic = styled('div', {
  minHeight: 720,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundAttachment: 'fixed',
  marginTop: 100,
});
