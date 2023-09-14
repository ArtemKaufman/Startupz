import React from 'react';

export const Burger = ({ isOpen }) => {
  return (
    <>
      <div
        className="w-6 h-6 relative block md:hidden hover:cursor-pointer"
        onClick={isOpen}
      >
        <div className="w-full h-1 bg-[#46B8C8] absolute top-1/4 left-0"></div>
        <div className="w-full h-1 bg-[#46B8C8] absolute top-1/2 left-0"></div>
        <div className="w-full h-1 bg-[#46B8C8] absolute top-3/4 left-0"></div>
      </div>
    </>
  );
};
