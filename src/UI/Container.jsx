import React from 'react';

export const Container = ({ className, children }) => {
  return (
    <div
      className={`${className} max-w-[480px] md:max-w-[768px] lg:max-w-[1200px] mx-auto px-5 sm:px-2`}
    >
      {children}
    </div>
  );
};
