import React from 'react';
import { Container } from '../../UI/Container';
import { ContactForm } from './ContactForm';

export const ContactUs = () => {
  return (
    <section className="bg-[#FFC351] pt-[60px]">
      <Container className="rocket pb-[70px]">
        <h6 className="text-[#fff] text-[60px] font-bold leading-[55px] mb-[34px]">
          Are you ready <br />
          to board this rocket ship?
        </h6>
        <p className="text-[#fff] text-[24px] font-medium leading-[24px]">
          Share your excitement with us.
        </p>

        <ContactForm />
      </Container>
    </section>
  );
};
