import React from 'react';
import { Container } from '../UI/Container';
import { Button } from '../UI/Button';
import { Subtitle } from '../UI/Subtitle';

export const IntroductionSection = () => {
  return (
    <section
      style={{
        backgroundImage: `url(../images/introBg.png)`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '700px 500px',
        backgroundPosition: 'bottom right',
      }}
    >
      <Container className="mt-[115px] flex">
        <div className="flex flex-col gap-[25px] mb-[425px] md:mb-[225px]">
          <h1 className="text-[80px] font-bold leading-[80px]">
            We Create
            <br /> Startups.
          </h1>
          <Subtitle text="We are startup studio that develops and launches new companies." />
          <Button text="See our works" className="mt-[25px] w-[157px]" />
        </div>
      </Container>
    </section>
  );
};
{
}
