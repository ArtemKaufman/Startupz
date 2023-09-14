import React, { useState } from 'react';
import { Container } from '../../UI/Container';
import { OrangTitle } from '../../UI/OrangTitle';
import { PopUp } from './PopUp';

export const WeAreSolvSection = () => {
  const [isPopUp, setIsPopUp] = useState(true);
  const handlePopUp = () => {
    setIsPopUp(!isPopUp);
  };
  return (
    <section className="mr-0 md:mr-6 flex items-center relative">
      <Container className="flex items-center justify-center gap-[25px] pt-[156px] pb-[140px]">
        <img src="../images/like-left.png" />
        <OrangTitle text="We love solving problems!" />
        <img src="../images/like-right.png" />
      </Container>
      <div className="absolute right-6 top-4 md:top-1/4 flex flex-col items-end">
        {isPopUp ? (
          <PopUp close={handlePopUp} />
        ) : (
          <div className="h-[64px]"></div>
        )}
        <img
          onClick={() => handlePopUp()}
          src="../images/man.png"
          className="w-[114px] hover:cursor-pointer"
        />
      </div>
    </section>
  );
};
