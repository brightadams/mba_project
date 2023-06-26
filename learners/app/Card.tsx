import Image from "next/image";
import { ClockIcon, UsersIcon, StarIcon } from "@heroicons/react/24/solid";
const Card = () => {
  return (
    <div className="border border-gray-100 rounded-lg overflow-hidden shadow-sm hover:scale-105 hover:shadow-lg transition-all duration-500 ease-out dark:border-gray-600 hover:z-10">
      <div className="relative">
        <div className="relative w-full h-72">
          <Image src="/course-image.jpg" fill alt={"course-image.jpg"} />
        </div>
        <div className="absolute bottom-4 ml-1">
          <span className="bg-gray-100 text-gray-900 py-2 px-5 rounded-full dark:bg-gray-900 dark:text-gray-500">
            Beginner
          </span>
        </div>
      </div>
      <div className="px-8 py-1">
        <span className="text-xl font-sans font-extrabold dark:text-white">
          Name of Course
        </span>
        <div className="flex justify-between">
          <span>¢70</span>
          <span>4.5</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-400">Dr Emmanuel Awuni</span>
          <span>5hrs</span>
        </div>
        <div className="flex justify-between">
          <div className="flex justify-center items-center bg-gray-100 text-gray-900 py-2 px-4 rounded-full dark:bg-gray-700 dark:text-gray-500">
            <ClockIcon className="h-4 w-4 text-gray-200 dark:text-gray-500" />
            <span className="text-sm">45hrs</span>
          </div>
          <div className="flex justify-center items-center bg-gray-100 text-gray-900 py-2 px-4 rounded-full dark:bg-gray-700 dark:text-gray-500">
            <UsersIcon className="h-4 w-4 text-gray-200 dark:text-gray-500" />
            <span className="text-sm">1000+</span>
          </div>
          <div className="flex justify-center items-center bg-gray-100 text-gray-900 py-2 px-4 rounded-full dark:bg-gray-700 dark:text-gray-500">
            <StarIcon className="h-4 w-4 text-yellow-500 dark:text-yellow-500" />
            <span className="text-sm">4.5</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
