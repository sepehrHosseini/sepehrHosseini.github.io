import { styled } from '@css/theme.config';

export const WorkContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  maxWidth: 1280,
  margin: '200px auto 0',
  padding: '0 20px',
  '@Flip': {
    alignItems: 'center',
  },
});

export const WorkHeader = styled('h1', {
  width: 'fit-content',
  fontSize: '$5',
  '@Flip': {
    marginLeft: 15,
  },
});

export const ProjectsContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  maxWidth: 1280,
});

export const ProjectBox = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '100px 0',
  '@Flip': {
    marginLeft: 50,
  },
});

export const ProjectGraphic = styled('div', {
  backgroundRepeat: 'no-repeat',
  marginLeft: 150,
  '@iPadPro': {
    marginLeft: 50,
  },
  '@iPad': {
    display: 'none',
  },
});

export const InfoContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
});

export const ProjectTitle = styled('h1', {
  color: '$white',
  fontSize: '$5',
});

export const ProjectDescription = styled('p', {
  fontFamily: '$primary',
  color: '$main2',
  fontSize: '$3',
  margin: '40px 0',
  width: 340,
  '@media only screen and (max-width: 340px)': {
    width: '80%',
  },
});

export const ProjectTech = styled('p', {
  fontFamily: '$mono',
  color: '$main2',
  width: 340,
  '@media only screen and (max-width: 500px)': {
    fontSize: '$1',
  },
});

export const ButtonsContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  marginTop: 50,
});

export const ViewProjectButton = styled('a', {
  width: 'fit-content',
  padding: 20,
  userSelect: 'none',
  fontSize: '$3',
  marginTop: 60,
  cursor: 'pointer',
  zIndex: '100',
  background: 'none',
  border: '2px solid var(--colors-main)',
  color: 'var(--colors-main)',
  fontFamily: '$primary',
  outline: 'none',
  transition: '0.1s linear',
  borderRadius: 5,
  textDecoration: 'none',
  '&:hover, &:focus': {
    background: '#ffffff30',
  },
});

export const GitHubButton = styled('a', {
  display: 'flex',
  textDecoration: 'none',
  color: '$white',
  marginLeft: 30,
  transition: '0.1s linear',
  '&:hover': {
    transform: 'scale(1.1, 1.1)',
  },
});
