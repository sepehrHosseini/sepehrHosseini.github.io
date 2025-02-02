import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'

import * as S from './Projects.style'
import * as Icon from 'react-feather'

export type Project = {
  title: string
  description: string
  tags: string
  link: string
  github: string
}

const AboutComponent: React.FC = () => {
  const Projects: Project[] = [
    {
      title: 'Geethoob',
      description:
        'View, and visualise your GitHub profile and stats with beautiful graphs',
      tags: 'React Chart.js TypeScript',
      link: 'geethoob.vercel.app',
      github: 'harshhhdev/geethoob',
    },
    {
      title: 'Glassmorphicssm',
      description:
        'Generate glassy CSS code for all your glassmorphism needs',
      tags: 'React TypeScript',
      link: 'harshhhdev.github.io/glassmorphicssm',
      github: 'harshhhdev/glassmorphicssm',
    },
    {
      title: 'Issure',
      description:
        'Fetch random issues from your GitHub repositories to work on',
      tags: 'React Octokit TypeScript',
      link: 'issure.vercel.app',
      github: 'harshhhdev/issure',
    },
    {
      title: 'Calvera',
      description: 'A minimal portfolio + blog template for Abell.js',
      tags: 'Abell',
      link: 'harshhhdev.github.io/calvera',
      github: 'harshhhdev/calvera',
    },
    {
      title: 'Kraftuur',
      description:
        'A colour system for designing beautiful and accesible interfaces',
      tags: 'React TypeScript Node',
      link: 'harshhhdev.github.io/kraftuur',
      github: 'harshhhdev/kraftuur',
    },
    {
      title: 'pastemyst.js',
      description: 'Complete REST API wrapper for pastemyst v2',
      tags: 'Axios TypeScript node',
      link: 'www.npmjs.com/package/pastemyst',
      github: 'harshhhdev/pastemyst',
    },
    {
      title: 'App Idea Generator',
      description: 'Generate silly, or cool app ideas for inspiration',
      tags: 'Svelte',
      link: 'harshhhdev.github.io/app-idea-generator',
      github: 'harshhhdev/app-idea-generator',
    },
  ]

  return (
    <S.ProjectsContainer>
      <ScrollAnimation animateIn='animate__bounceInRight' animateOnce={true}>
        <S.ProjectsHeader>Other Things I've Built...</S.ProjectsHeader>
      </ScrollAnimation>
      <S.ProjectsGrid>
        {Projects.map((project, index) => (
          <ScrollAnimation animateIn='animate__fadeIn' animateOnce={true}>
            <S.ProjectBox key={index}>
              <S.ProjectTopContainer>
                <S.ProjectHeader>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='48'
                    height='48'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='#F4F4F5'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  >
                    <path d='M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z'></path>
                  </svg>
                  <S.ProjectLinks>
                    <S.ProjectLink
                      href={`https://${project.link}`}
                      target='_blank'
                    >
                      <Icon.Paperclip />
                    </S.ProjectLink>
                    <S.ProjectLink
                      href={`https://github.com/${project.github}`}
                      target='_blank'
                    >
                      <Icon.GitHub />
                    </S.ProjectLink>
                  </S.ProjectLinks>
                </S.ProjectHeader>
                <S.ProjectTitle>{project.title}</S.ProjectTitle>
                <S.ProjectDescription>
                  {project.description}
                </S.ProjectDescription>
              </S.ProjectTopContainer>
              <S.Tags>{project.tags}</S.Tags>
            </S.ProjectBox>
          </ScrollAnimation>
        ))}
      </S.ProjectsGrid>
    </S.ProjectsContainer>
  )
}

export default AboutComponent
