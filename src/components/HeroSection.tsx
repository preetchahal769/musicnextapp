"use client";
import { BackgroundBeams } from "@/components/ui/background-beams";
import Link from "next/link";

function HeroSection() {
  return (
    <div className="h-auto md:h-[60rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10  md:py-0">
      {" "}
      <div className="p-4 relative z-10 w-full text-center ">
        {" "}
        <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          Unleash Your Potential. Explore the World of Martial Arts.
        </h1>
        <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
          {" "}
          A path to self-discovery through a variety of martial arts
          disciplines. Whether you seek self-defense skills, improved fitness,
          or a deeper understanding of martial arts traditions, we have a
          program to empower you. Our experienced instructors will guide you on
          your journey, fostering discipline, confidence, and a sense of
          community.{" "}
        </p>
        <div className="mt-4">
          <Link href={"/services"}>
            {" "}
            <button className="p-[3px] relative">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
              <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
                Explore Services
              </div>
            </button>
          </Link>
        </div>
      </div>
      <BackgroundBeams />
    </div>
  );
}

export default HeroSection;
