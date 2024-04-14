"use client";
import React from "react";
import CoursesData from "@/data/music_courses.json";
function pricing() {
  const courses = CoursesData.courses;
  return (
    <div
      style={{
        // width: "100vw ",
        display: "flex",
        height: "100vh ",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {" "}
      <div
        style={{
          width: "90vw ",
          height: "auto",
          marginTop: "10rem",
          display: "grid",

          alignItems: "center",
          justifyContent: "center",
          // gridTemplateRows: "1fr 1fr 1fr ",
          gridTemplateColumns: "1fr 1fr  1fr ",
        }}
      >
        {courses.map((course) => (
          <div
            style={{
              border: "2px solid white  ",
              borderRadius: "20px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              margin: "1rem",
            }}
          >
            <h1
              style={{
                textAlign: "center",
                padding: "1rem ",
                fontSize: "2rem",
              }}
            >
              {course.name}
            </h1>{" "}
            <p
              style={{ textAlign: "center", padding: "1rem", fontSize: "1rem" }}
            >
              {course.description}
            </p>{" "}
            <p
              style={{ textAlign: "center", padding: "1rem", fontSize: "1rem" }}
            >
              Price : {course.price}Rs
            </p>{" "}
            <button>Book Now</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default pricing;
