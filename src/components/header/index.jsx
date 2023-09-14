import React, { useState } from 'react';
import { Container } from '../../UI/Container';
import { Button } from '../../UI/Button';
import { Burger } from './Burger';

export const Header = () => {
  const [isOpen, setOpen] = useState(false);
  const toggleMenu = () => {
    setOpen(!isOpen);
  };

  return (
    <header>
      <Container className="flex justify-between items-center h-[120px] relative">
        <img src="../images/logo.svg" className="hover:cursor-pointer" />
        <div className="hidden gap-[40px] items-center md:flex">
          <p className="text-lg hover:cursor-pointer">Startups</p>
          <p className="text-lg hover:cursor-pointer">Contact</p>
          <Button
            text="Work with us!"
            variant="outlined"
            className="px-[34px]"
          />
        </div>
        <Burger isOpen={toggleMenu} />
        {/* place for menu */}
      </Container>
    </header>
  );
};
