import CoursesList from "./CoursesList";
import SideBar from "./SideBar";

export default function Home() {
  return (
    <main className="sm:flex mt-5 mb-10">
      <div className="hidden md:block md:basis-1/6 px-4">
        <SideBar />
      </div>
      <div className="px-5 md:basis-5/6">
        <CoursesList />
      </div>
    </main>
  );
}
