import React from "react";

const Button = ({ href, children }) => {
  return (
    <button className="relative">
      <a
        className="bg-white border-8 px-10 py-3 text-2xl font-bold rounded-md border-[#8b1915] text-[#8b1915]"
        href={href}
        target="_blank"
      >
        {children}
      </a>
    </button>
  );
};

export default Button;
