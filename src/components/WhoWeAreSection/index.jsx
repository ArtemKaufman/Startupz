import React from 'react';
import { Container } from '../../UI/Container';
import { Title } from '../../UI/Title';
import { data } from './data';
import { DescriptionCard } from '../../UI/DescriptionCard';
import { Subtitle } from '../../UI/Subtitle';

export const WhoWeAreSection = () => {
  const weAreCards = data.map((card) => (
    <DescriptionCard order={card.order} description={card.description} />
  ));
  return (
    <section className="bg-[#FBFAFA]">
      <Container className=" pt-[147px]">
        <div className="flex items-center justify-between mb-[35px]">
          <Title text="Who we are" />
          <img src="../images/questionMark.svg" />
        </div>
        <Subtitle text="We create products that have innovation and technology at their core. " />
        <Subtitle text=" We value working with talented people that understand the possibilities of today." />

        <div className="flex justify-between flex-col md:flex-row mt-[80px] pb-[157px] gap-[95px]">
          {weAreCards}
        </div>
      </Container>
    </section>
  );
};
