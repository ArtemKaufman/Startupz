import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import CustomInput from '../../UI/Input';
import { submitForm } from './submit';
import { Button } from '../../UI/Button';
import { validationSchema } from './schema';

export const ContactForm = () => {
  return (
    <div className="max-w-[512px] h-[601px] mt-[34px] bg-[#F3F3F3] rounded-lg  md:px-[42px] pt-[70px] pb-[40px] flex flex-col justify-center items-center">
      <Formik
        initialValues={{ name: '', email: '', message: '' }}
        onSubmit={submitForm}
        validationSchema={validationSchema}
      >
        <Form>
          <div className="mb-4 flex flex-col gap-4">
            <Field
              type="text"
              name="name"
              id="name"
              component={CustomInput}
              placeholder="Name*"
            />
            <Field
              type="email"
              name="email"
              id="email"
              component={CustomInput}
              placeholder="Email*"
            />
            <Field
              type="text"
              name="message"
              id="message"
              variant="big"
              component={CustomInput}
              placeholder="Message*"
            />
          </div>

          <div className="flex justify-center">
            <Button
              type="submit"
              text="Shoot us a message"
              variant="dark"
              className="w-[243px]"
            />
          </div>
        </Form>
      </Formik>
    </div>
  );
};
