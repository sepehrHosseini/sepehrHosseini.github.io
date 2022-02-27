import React from 'react';

import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import ScrollAnimation from 'react-animate-on-scroll';

import * as S from './About.style';
import * as Icon from 'react-feather';

import computer from '@pub/computer.png';
import idCard from '@pub/idCard.png';
import video from '@pub/videoPlayer.png';

const AboutComponent: React.FC = () => {
  const skills = [
    'TypeScript',
    'Node',
    'React',
    'PostgreSQL',
    'PlanetScale',
    'Prisma',
    'Vercel',
    'GraphQL',
  ];

  return (
    <S.AboutContainer id="about">
      <S.AboutInner>
        <S.InfoContainer>
          <ScrollAnimation
            animateIn="animate__bounceInRight"
            animateOnce={true}
          >
            <S.AboutHeader>About Me</S.AboutHeader>
          </ScrollAnimation>
          <ScrollAnimation animateIn="animate__flipInX" animateOnce={true}>
            <S.AboutDescription>
              Senior Product Designer with +5 years of experience in the
              management of the complete design process, from conceptualization
              to delivery. I enjoy teaching my skills and sharing my knowledge
              with other people.
            </S.AboutDescription>
          </ScrollAnimation>
          <ScrollAnimation animateIn="animate__flipInX" animateOnce={true}>
            <S.AboutDescription>
              I gain new abilities and update my skills constantly. Teamwork is
              one of the most important goals for me in my job and I tend to
              match with a team in a short time.
            </S.AboutDescription>
          </ScrollAnimation>
          <ScrollAnimation animateIn="animate__flipInX" animateOnce={true}>
            <S.AboutDescription>
              I am willing to work with professional people and learn from them.
            </S.AboutDescription>
          </ScrollAnimation>
          {/*        <S.SkillsContainer>
          {skills.map((skill, index) => (
            <ScrollAnimation
              animateIn="animate__flipInX"
              animateOnce={true}
              key={index}
            >
              <S.SkillBox>
                <Icon.ArrowRight style={{ marginRight: 5 }} />
                {skill}
              </S.SkillBox>
            </ScrollAnimation>
          ))}
        </S.SkillsContainer>
*/}{' '}
        </S.InfoContainer>
        <S.ImgBox style={{ width: 500, marginLeft: 700 }}>
          <img src={computer} alt="Computer" width={580} height={450} />
          <ParallaxProvider>
            <S.ImgBox style={{ marginLeft: 300 }}>
              <Parallax x={[-30, 30]}>
                <img src={video} alt="Video Player" width={200} height={200} />
              </Parallax>
            </S.ImgBox>
            <S.ImgBox style={{ marginTop: 200 }}>
              <Parallax y={[-100, 100]}>
                <img src={idCard} alt="ID Card" width={150} height={90} />
              </Parallax>
            </S.ImgBox>
          </ParallaxProvider>
        </S.ImgBox>
      </S.AboutInner>
    </S.AboutContainer>
  );
};

export default AboutComponent;
