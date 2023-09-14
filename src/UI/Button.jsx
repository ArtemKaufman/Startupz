import React from 'react';

export const Button = ({ text, variant, className, ...props }) => {
  const variants = {
    filled:
      ' bg-[#46B8C8] text-white border border-[#46B8C8]  hover:bg-[#fff] hover:text-[#46B8C8]',
    outlined:
      ' text-[#46B8C8] border border-[#46B8C8]  hover:bg-[#46B8C8] hover:text-[#fff] ',
    dark: 'bg-[#3D4F5C] text-[#fff] border border-[#3D4F5C]  hover:bg-[#fff] hover:text-[#3D4F5C]',
  };

  const variantStyles = variants[variant] || variants.filled;

  return (
    <button
      className={`rounded-[32px] py-[14px] font-bold text-lg leading-[18px] hover:cursor-pointer transition duration-150 ${className} ${variantStyles}`}
      {...props}
    >
      {text}
    </button>
  );
};
