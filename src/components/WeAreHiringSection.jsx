import React from 'react';
import { Container } from '../UI/Container';
import { Title } from '../UI/Title';
import { Button } from '../UI/Button';

export const WeAreHiringSection = () => {
  return (
    <section className="hiring bg-[#FBFAFA] pt-[140px] pb-[165px] flex justify-between">
      <img src="../images/hiring2.png" className="hidden md:block" />
      <Container className="flex flex-col items-center justify-center gap-[30px] text-center">
        <Title text="We are hiring!" />
        <p className="text-[18px] md:text-[24px] text-[#FB8958] leading-[30px] max-w-[440px]">
          We're always looking for talented people to join and help build our
          startups. Check out our current openings
        </p>
        <Button text="See current openings" className="w-[233px]" />
      </Container>
      <img src="../images/hiring1.png" className="hidden md:block" />
    </section>
  );
};
