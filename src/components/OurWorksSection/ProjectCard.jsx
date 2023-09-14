import React from 'react';
import { Button } from '../../UI/Button';

export const ProjectCard = ({ img, title, desc, color }) => {
  return (
    <div
      className="shadow-md flex flex-col items-center justify-center rounded-xl px-[100px] pt-[45px] pb-[50px]"
      style={JSON.parse(`{
        "box-shadow": "0px 8px 35px 0px rgba(187, 169, 142, 0.15);"
      }`)}
    >
      <h6
        style={{ color: color }}
        className=" text-[32px] font-bold leading-[30px] mb-[25px]"
      >
        {title}
      </h6>
      <p className="leading-[20px] text-base text-center mb-[45px] ">{desc}</p>
      <img src={img} className="mb-[45px]" />
      <Button text="More" variant="outlined" className="w-[107px]" />
    </div>
  );
};
