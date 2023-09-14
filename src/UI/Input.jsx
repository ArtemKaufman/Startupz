import React from 'react';

const CustomInput = ({ placeholder, value, onChange, variant = 'small' }) => {
  const field =
    variant == 'small' ? (
      <input
        className={`bg-white text-black border  rounded-lg py-2 px-4 focus:outline-none max-w-[429px] w-[320px] md:w-[429px]  text-start h-[54px]`}
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    ) : (
      <textarea
        className={`bg-white text-black border  rounded-lg py-2 px-4 focus:outline-none max-w-[429px] text-start h-[270px] resize-none`}
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    );
  return <>{field}</>;
};

export default CustomInput;
