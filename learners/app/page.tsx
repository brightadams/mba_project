import CoursesList from "./CoursesList";
import SideBar from "./SideBar";
import AccordionLayout from "./AccordionLayout";
export default function Home() {
  return (
    <main className="sm:flex mt-5 mb-10">
      <div className="hidden md:block md:basis-1/6 px-4">
        <SideBar />
      </div>
      <div className="px-5 md:basis-5/6">
        <CoursesList />
        <div className="w-1/2">
          <AccordionLayout title="Week 1">
            <div>
              <span>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam
                quisquam veritatis ipsa. Cumque, atque soluta deleniti modi
                reiciendis corrupti error itaque voluptates consectetur in
                possimus, omnis dolore iure ut nulla!
              </span>
            </div>
          </AccordionLayout>
        </div>
      </div>
    </main>
  );
}
