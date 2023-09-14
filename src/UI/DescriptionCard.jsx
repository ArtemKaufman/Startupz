import React from 'react';

export const DescriptionCard = ({ order, description }) => {
  return (
    <div>
      <div className="font-bold text-[30px] text-[#FB8958] pb-[19px] ">
        {order}
      </div>
      <div className="w-[50px] h-[1px] bg-[#3D4F5C]"></div>
      <h3 className="mt-[26px] text-[30px] leading-[38px] font-normal">
        {description}
      </h3>
    </div>
  );
};
