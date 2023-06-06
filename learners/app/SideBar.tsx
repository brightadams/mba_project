import Link from "next/link";
import React from "react";

const SideBar = () => {
  return (
    <>
      <h3 className="text-lg font-extrabold dark:text-white">Categories</h3>
      <ul>
        {["Education", "Programming", "Finance"].map((category) => (
          <li className="" key={category}>
            <Link
              href={`/category/${category}`}
              className="hover:bg-gray-100 py-2 px-5 flex flex-1 rounded-md"
            >
              {category}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default SideBar;
