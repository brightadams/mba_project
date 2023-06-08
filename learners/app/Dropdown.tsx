import React, { ReactNode } from "react";

const Dropdown = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative">
      {React.Children.map(children, (child, index) => {
        if (React.isValidElement(child) && child.type === Button) {
          return React.cloneElement(child);
        }
        return null;
      })}
      <>
        {React.Children.map(children, (child, index) => {
          if (React.isValidElement(child) && child.type === Content) {
            return React.cloneElement(child);
          }
          return null;
        })}
      </>
    </div>
  );
};

const Button = ({ children }: { children: ReactNode }) => {
  return <span className="peer">{children}</span>;
};

const Content = () => {
  return (
    <div
      className="hidden peer-hover:flex hover:flex
         w-[200px]
         flex-col bg-white drop-shadow-lg absolute z-10"
    >
      <a className="px-5 py-3 hover:bg-gray-200" href="#">
        About Us
      </a>
      <a className="px-5 py-3 hover:bg-gray-200" href="#">
        Contact Us
      </a>
      <a className="px-5 py-3 hover:bg-gray-200" href="#">
        Privacy Policy
      </a>
    </div>
  );
};

Dropdown.Button = Button;
Dropdown.Content = Content;

export default Dropdown;
