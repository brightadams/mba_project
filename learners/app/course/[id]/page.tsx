import { PlayCircleIcon, BookOpenIcon } from "@heroicons/react/24/outline";

const Course = ({ params }: { params: { id: string } }) => {
  return (
    <div className="flex">
      <div className="hidden lg:flex lg:flex-col lg:basis-3/12 h-screen sticky top-0 overflow-scroll">
        <div>
          {[1, 2, 3, 4, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map(
            (item, index) => (
              <div
                className={`flex py-3 border-b border-b-gray-400 dark:border-b-gray-800 ${
                  index === 1 && "border-l-8 border-l-blue-500"
                }`}
                key={index}
              >
                <div className="basis-2/12 items-center justify-center flex">
                  {index % 2 === 0 ? (
                    <PlayCircleIcon className="h-8 w-8 cursor-pointer text-black" />
                  ) : (
                    <BookOpenIcon className="h-8 w-8 cursor-pointer text-black" />
                  )}
                </div>
                <div className="basis-10/12 flex flex-col">
                  <span className="dark:text-gray-500">
                    <span className="font-extrabold">Video: </span>
                    <span>Module Framework Surveys</span>
                  </span>
                  <span className="text-gray-300">11 mins</span>
                </div>
              </div>
            )
          )}
        </div>
      </div>
      <div className="w-full lg:basis-9/12 max-h-max">
        <div className="h-10 w-full bg-black flex flex-col justify-center">
          <span className="text-white pl-5">Title of course video</span>
        </div>
        <video src="https://neilpatel.com/blog/embed-videos/" controls />
        <div></div>
      </div>
    </div>
  );
};

export default Course;
