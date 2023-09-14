import React from 'react';
import { Container } from '../../UI/Container';
import { FooterLink } from './FooterLink';

export const Footer = () => {
  const flex = 'flex flex-col items-start';

  return (
    <footer className="pt-[90px] pb-[123px]">
      <Container className="flex justify-between flex-col gap-[50px] md:gap-0 md:flex-row">
        <div className={`${flex} justify-between gap-[84px] `}>
          <img
            src="../images/logo.svg"
            className="hover:cursor-pointer w-[178px] h-[42px]"
          />
          <div
            className={`${flex} text-[#939393] text-lg leading-[30px] w-[158px]`}
          >
            <p>© 2020 Startupz. All rights reserved. </p>
          </div>
        </div>

        <div className={`${flex} gap-[16px]`}>
          <p className="text-lg">Companies</p>
          <FooterLink link="#">Told</FooterLink>
          <FooterLink link="#">LegalSite</FooterLink>
          <FooterLink link="#">Codekeeper</FooterLink>
          <FooterLink link="#">Feedback Labs</FooterLink>
        </div>
        <div className={`${flex} gap-[16px] w-[280px]`}>
          <p className="text-lg">Contact</p>
          <p className="text-lg text-[#939393] leading-[24px]">
            World Trade Center - The Hague Prinses Margrietplantsoen 33 2595 AM
            The Hague The Netherlands
          </p>
          <FooterLink link="#">Send us an email</FooterLink>
        </div>

        <div className={`${flex} gap-[16px] `}>
          <p className="text-lg">Follow us</p>

          <FooterLink link="#">
            <img src="../images/twitter.svg" className="hover:cursor-pointer" />
          </FooterLink>
          <FooterLink link="#">
            <img
              src="../images/Linkedin.svg"
              className="hover:cursor-pointer"
            />
          </FooterLink>
          <FooterLink link="#">
            <img
              src="../images/instagram.svg"
              className="hover:cursor-pointer"
            />
          </FooterLink>
        </div>
      </Container>
    </footer>
  );
};
