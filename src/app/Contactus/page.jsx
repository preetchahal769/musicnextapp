"use client";
import React from "react";
import Link from "next/link";

function Contactus() {
  return (
    <main style={{ marginTop: "10rem" }}>
      <div className="w-full  flex flex-col items-center justify-center bg-black-900  text-center text-4xl font-medium tracking-tight">
        <div className="w-full flex flex-col items-center justify-center bg-black-900 h-auto text-center text-4xl font-medium tracking-tight">
          <h1 className="text-4xl font-bold text-center mb-10">Contact Us</h1>
        </div>
        <div className="w-full flex flex-col items-center justify-center bg-black-900 h-auto text-center text-4xl font-medium tracking-tight">
          {" "}
          <form className="flex flex-col items-center justify-center ">
            <input
              type="email"
              placeholder="Email"
              className="shadow mb-4 w-3/3 appearance-none border rounded  text-gray-700 leading-tight  focus:outline-none focus:shadow-outline"
            />
            <input
              type="text"
              placeholder="Name"
              className="shadow mb-4 w-3/3 appearance-none border rounded  text-gray-700 leading-tight  focus:outline-none focus:shadow-outline"
            />
            <Link
              href={"/pricing"}
              className="shadow-[0_0_0_3px_#000000_inset] px-3 py-2 mt-10 bg-transparent text-2xl border border-black dark:border-white dark:text-white text-black rounded-lg  transform hover:-translate-y-1 transition duration-400"
            >
              View All
            </Link>
          </form>{" "}
        </div>
        <div></div>
      </div>
    </main>
  );
}

export default Contactus;
