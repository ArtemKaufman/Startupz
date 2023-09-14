import React from 'react';

export const PopUp = ({ close }) => {
  return (
    <div className="flex gap-[69px] mr-[30px]">
      <img src="../images/popup.png" />
      <div
        onClick={close}
        className="text-[#939393] text-[25px] hover:cursor-pointer"
      >
        x
      </div>
    </div>
  );
};
