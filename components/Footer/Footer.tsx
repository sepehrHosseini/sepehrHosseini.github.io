import React from 'react';

import * as S from './Footer.style';
import * as Icons from 'react-feather';

import { BehanceIcon, LinkedInIcon } from '@lib/icons';

const Footer: React.FC = () => {
  const [year, setYear] = React.useState<number | null>(null);

  React.useEffect(() => {
    const date = new Date();
    setYear(date.getFullYear());
  }, []);

  return (
    <S.FooterBox>
      <S.FooterInfoContainer>
        <S.MainText>
          <Icons.Code /> with <Icons.Heart /> and{' '}
          <S.FooterTextLink href="https://nextjs.org/" target="_blank">
            Next.js
          </S.FooterTextLink>
        </S.MainText>
      </S.FooterInfoContainer>
      <S.FooterInfoContainer>
        <S.MainText>© {year} Omid Saraei</S.MainText>

        <S.FooterLink href="mailto:omidsaraei6@gmail.com" target="_blank">
          <Icons.Mail />
        </S.FooterLink>
        <S.FooterLink href="https://dribbble.com/omidsgn" target="_blank">
          <Icons.Dribbble />
        </S.FooterLink>
        <S.FooterLink
          href="https://www.behance.net/omid_saraei"
          target="_blank"
        >
          <BehanceIcon />
        </S.FooterLink>
        <S.FooterLink href="https://instagram.com/omidsgn" target="_blank">
          <Icons.Instagram />
        </S.FooterLink>
        <S.FooterLink
          href="https://www.linkedin.com/in/omidsaraei/"
          target="_blank"
        >
          <LinkedInIcon />
        </S.FooterLink>
      </S.FooterInfoContainer>
    </S.FooterBox>
  );
};

export default Footer;
