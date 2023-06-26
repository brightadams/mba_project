"use client";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";
import React, { ReactNode, useState } from "react";

interface Props {
  title: string;
  children: ReactNode;
}

const AccordionLayout = ({ title, children }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex w-full justify-between rounded bg-gray-300 px-3 py-5"
      >
        <div className="flex">
          <div className="text-black font-bold">{title}</div>
        </div>
        <div className="flex items-center justify-center">
          {isOpen ? (
            <ChevronUpIcon className={"h-4 w-4"} />
          ) : (
            <ChevronDownIcon className={"h-4 w-4"} />
          )}
        </div>
      </div>
      <div
        className={`${
          isOpen ? "block opacity-100" : "hidden opacity-0"
        } shadow-3xl w-full shadow-cyan-500/50 transition-opacity duration-1000 ease-out`}
      >
        {children}
      </div>
    </>
  );
};

export default AccordionLayout;
