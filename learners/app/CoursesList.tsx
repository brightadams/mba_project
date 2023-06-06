import React from "react";
import Card from "./Card";
import Link from "next/link";

const CoursesList = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((course) => (
        <Link href={`/course/${1}`} key={course}>
          <Card key={course} />
        </Link>
      ))}
      <Card />
    </div>
  );
};

export default CoursesList;
