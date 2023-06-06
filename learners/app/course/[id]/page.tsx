import Button from "@/app/Button";
import CourseDetailsSection from "@/app/CourseDetailsSection";
import {
  CheckCircleIcon,
  StarIcon,
  BookOpenIcon,
  ClockIcon,
  MicrophoneIcon,
  DocumentTextIcon,
  Square3Stack3DIcon,
  DevicePhoneMobileIcon,
  BoltIcon,
  TrophyIcon,
} from "@heroicons/react/24/solid";
import Image from "next/image";
import React from "react";

const Category = ({ params }: { params: { id: string } }) => {
  return (
    <div className="flex w-full px-5">
      <div className="grid lg:grid-cols-3 pt-7 mb-6">
        <div className="lg:col-span-2 mx-5">
          <span className="flex flex-col text-5xl font-extrabold dark:text-white">
            Adobe XD Basic to Advance: Web Design
          </span>
          <div className="grid grid-cols-2 md:grid-cols-4 mt-4">
            <div className="flex items-center">
              <StarIcon className="h-4 w-4 cursor-pointer text-yellow-500 mr-5" />
              <span className="text-sm font-extrabold">4.5</span>
              <span className="text-xs font-extralight">(1,234 Reviews)</span>
            </div>
            <div className="flex  items-center">
              <BookOpenIcon className="h-4 w-4 cursor-pointer text-gray-200 mr-5" />
              <span className="text-sm font-bold">Lessons: 16</span>
            </div>
            <div className="flex  items-center">
              <BookOpenIcon className="h-4 w-4 cursor-pointer text-gray-200 mr-5" />
              <span className="text-sm font-bold">Assignments/Tests: 2</span>
            </div>
            <div className="flex  items-center">
              <ClockIcon className="h-4 w-4 cursor-pointer text-gray-200 mr-5" />
              <span className="text-sm">2hrs 10min</span>
            </div>
          </div>
          <div className="mt-3 w-full h-96 relative">
            <Image alt="course-image" src="/course-image.jpg" fill />
          </div>
          <div className="mt-4">
            <CourseDetailsSection title="About Page">
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
                sit enim rem eaque doloremque, expedita officia aliquam nam
                accusantium, veritatis omnis explicabo. Distinctio a assumenda,
                voluptatibus sit culpa blanditiis. Autem!
              </span>
            </CourseDetailsSection>
          </div>
          <div className="mt-8">
            <CourseDetailsSection title="After completing this Course you will be able to;">
              <ul>
                {[1, 2, 3, 4, 5, 6, 7, 8].map((skills) => (
                  <div className="flex items-center mb-4" key={skills}>
                    <CheckCircleIcon
                      className="h-4 w-4 cursor-pointer text-blue-700 mr-2"
                      key={skills}
                    />
                    <li>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </li>
                  </div>
                ))}
              </ul>
            </CourseDetailsSection>
          </div>
          <div className="mt-8">
            <CourseDetailsSection title="Requirements">
              <ul>
                {[1, 2, 3, 4, 5, 6, 7, 8].map((skills) => (
                  <div className="flex items-center mb-4" key={skills}>
                    <CheckCircleIcon className="h-4 w-4 cursor-pointer text-blue-700 mr-2" />
                    <li>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </li>
                  </div>
                ))}
              </ul>
            </CourseDetailsSection>
          </div>
        </div>
        <div className="lg:col-span-1">
          <div className="border-l-2 dark:border-l-gray-600">
            <div className="border-b border-dashed pb-5 dark:border-b-gray-600">
              <div className="flex items-center ml-2 mb-3">
                <MicrophoneIcon className="h-4 w-4 cursor-pointer text-gray-200 mr-5" />
                <span className="text-sm">English</span>
              </div>
              <div className="flex items-center ml-2 mb-3">
                <DocumentTextIcon className="h-4 w-4 cursor-pointer text-gray-200 mr-5" />
                <span className="text-sm">
                  Exercises and quizes to help you put what you learn to
                  practice
                </span>
              </div>
              <div className="flex items-center ml-2 mb-3">
                <Square3Stack3DIcon className="h-4 w-4 cursor-pointer text-gray-200 mr-5" />
                <span className="text-sm">Beginner and Intermediate</span>
              </div>
              <div className="flex items-center ml-2 mb-3">
                <DevicePhoneMobileIcon className="h-4 w-4 cursor-pointer text-gray-200 mr-5" />
                <span className="text-sm">Access on mobile and desktop</span>
              </div>
              <div className="flex items-center ml-2 mb-3">
                <BoltIcon className="h-4 w-4 cursor-pointer text-gray-200 mr-5" />
                <span className="text-sm">Lifetime access</span>
              </div>
              <div className="flex items-center ml-2 mb-3">
                <TrophyIcon className="h-4 w-4 cursor-pointer text-gray-200 mr-5" />
                <span className="text-sm">Certificate on completion</span>
              </div>
            </div>
            <div className="ml-5 my-5">
              <span className="text-2xl text-blue-700">$500</span>
            </div>
            <div className="flex justify-center">
              <Button styles="bg-blue-700 px-7">
                <span className="text-gray-100">Enroll Now</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
