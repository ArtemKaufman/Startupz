import React from 'react';
import { Container } from '../../UI/Container';
import { Title } from '../../UI/Title';
import { data } from './data';
import { DescriptionCard } from '../../UI/DescriptionCard';

export const OurValues = () => {
  const ourCoreValues = data.map((card) => (
    <DescriptionCard order={card.order} description={card.description} />
  ));
  return (
    <section className="bg-[#FBFAFA]">
      <Container className=" pt-[154px] pb-[100px] md:pb-[196px]">
        <div className="flex justify-between items-center mb-[77px]">
          <Title text="Our core values" />
          <img src="../images/lamp.svg" />
        </div>
        <div className="flex flex-col md:flex-row gap-[74px]">
          {ourCoreValues}
        </div>
      </Container>
    </section>
  );
};
