import React from 'react';

export const FooterLink = ({ children, link }) => {
  return (
    <a href={link} className="text-[#46B8C8]">
      {children}
    </a>
  );
};
