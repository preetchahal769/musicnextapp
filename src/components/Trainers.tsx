"use client";
import React from "react";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
const people = [
  {
    id: 1,
    name: "John Doe",
    designation: "boxing coach",
    letter: "J",
  },
  {
    id: 2,
    name: "Robert Johnson",
    designation: "Martial Artist",
    letter: "R",
  },
  {
    id: 3,
    name: "Jane Smith",
    designation: "Martial Artist",
    letter: "J",
  },
  {
    id: 4,
    name: "Emily Davis",
    designation: "Martial Artist",
    letter: "E",
  },
  {
    id: 5,
    name: "Tyler Durden",
    designation: "Martial Artist",
    letter: "T",
  },
  {
    id: 6,
    name: "Dora",
    designation: "Martial Artist",
    letter: "D",
  },
];

function Trainers() {
  return (
    <div className="w-full flex flex-col items-center justify-center bg-black-900 h-auto text-center text-4xl font-medium tracking-tight mt-[5rem]">
      <h1 className="text-4xl font-bold text-center mb-10">
        <u>Top Trainers</u>{" "}
      </h1>
      <div className="flex flex-row items-center justify-center mt-[5rem] mb-10 w-full">
        <AnimatedTooltip items={people} />
      </div>
    </div>
  );
}

export default Trainers;
