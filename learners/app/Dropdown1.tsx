import React from "react";

const Dropdown = ({ title }) => {
  return (
    <div className="relative">
      <button className="peer px-5 py-2 bg-green-600 hover:bg-green-700 text-white">
        {title}
      </button>

      <div
        className="hidden peer-hover:flex hover:flex
         w-[200px]
         flex-col bg-white drop-shadow-lg absolute"
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
    </div>
  );
};

export default Dropdown;
