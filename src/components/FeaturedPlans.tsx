"use client";
import React from "react";
import coursesData from "@/data/music_courses.json";
import Link from "next/link";

interface Course {
  id: number;
  name: string;
  description: string;
  level: string;

  time: string;
  instructor: string;
  image: string;
  price: number;
  isFeatured: boolean;
}
function FeaturedPlans() {
  const courseData = coursesData.courses;
  const featuredCourses = courseData.filter(
    (course: Course) => course.isFeatured
  );

  return (
    <div className=" w-full flex flex-col items-center justify-center   bg-black-900  h-auto text-center text-4xl font-medium tracking-tight">
      <h1 className="text-5xl font-bold text-center mt-[3rem]">
        Featured Plans
      </h1>
      <div className="relative mx-auto mt-[3rem] flex flex-row  w-full h-full justify-center bg-gradient-to-br from-slate-300 to-slate-500  bg-clip-text text-center text-4xl font-medium tracking-tight">
        {featuredCourses.map((course: Course) => (
          <div
            key={course.id}
            className="bg-white rounded-xl  shadow-lg p-8 m-4 text-black w-1/3 h-1/2 mx-[3rem]"
          >
            <h1 className="text-3xl font-bold text-center mb-6">
              {course.name}
            </h1>
            <p className="text-lg text-center mb-6">{course.description}</p>
            <p className="text-lg text-center mb-6">Price : {course.price}Rs</p>
            <button className="w-full py-4 rounded-lg border border-gray-300 text-gray-700 bg-gray-200 hover:bg-gray-300 transition duration-200">
              More Details
            </button>
          </div>
        ))}
      </div>
      <Link
        href={"/pricing"}
        className="shadow-[0_0_0_3px_#000000_inset] px-6 py-2 mt-10 bg-transparent border border-black dark:border-white dark:text-white text-black rounded-lg  transform hover:-translate-y-1 transition duration-400"
      >
        View All
      </Link>
    </div>
  );
}

export default FeaturedPlans;
