"use client";
import React from "react";
type Props = {
  styles: string;
  children: React.ReactNode;
  handleClick?: () => void;
};
const Button = ({ styles, children, handleClick }: Props) => {
  return (
    <button
      className={`rounded px-1 sm:px-5 py-2 ${styles}`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default Button;
