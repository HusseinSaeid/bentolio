import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Code } from "lucide-react";
import ProjectsCard from "@/components/ProjectsCard";
import CircularText from "@/components/CircularText";

export default function Home() {
  const phoneNumber = "+201021094777";
  return (
    <main
      className="max-h-screen w-full grid col-span-12 gap-6  
                     grid-cols-12 
                     auto-rows-auto font-kufam "
    >
      {/* Large Card */}
      <div className=" rounded-xl gap-4 col-span-12 xl:col-span-8 row-span-12  grid grid-cols-12">
        <div className=" col-span-12 xl:col-span-7 rounded-xl p-6 flex flex-col justify-between  bg-[var(--primary)] hover:scale-101 hover:shadow-2xl duration-300 ease-in-out">
          <div className="self-end">
            <CircularText
              text="Hussein*ELSaeid*"
              onHover="speedUp"
              spinDuration={20}
              className="custom-class"
            />
          </div>
          <div className="">
            <p className="font-bold text-3xl xl:text-5xl ">
              Frontend Developer <br />
              <span className="font-extralight font-poppins">
                Empowering
              </span>{" "}
              Modern <br />
              Web Experiences
            </p>
          </div>
        </div>
        <div className=" hover:scale-101 hover:shadow-2xl duration-300 ease-in-out col-span-12 xl:col-span-5 rounded-xl">
          <Image
            src="/personal.jpg"
            alt="Husseun"
            width={1000}
            height={800}
            className="w-full h-full object-cover object-center  rounded-xl "
          />
        </div>
        <div className="hover:scale-101 hover:shadow-2xl duration-300 ease-in-out col-span-12 xl:col-span-6 rounded-xl p-4 bg-[var(--primary)] justify-between flex flex-col gap-10 ">
          <Code />
          <p>
            Hussein ELSaeid is a creative Frontend Developer, passionate about
            crafting modern and responsive web experiences. With expertise in
            React, Next.js, and UI/UX principles, he blends clean code with
            thoughtful design to deliver interfaces that are visually engaging.
            Based in Egypt, he builds digital experiences accessible to users
            worldwide.
          </p>
        </div>
        <Link
          target="_blank"
          href={`https://wa.me/${phoneNumber}`}
          className="gap-4 py-6 hover:scale-101  hover:shadow-2xl duration-300 ease-in-out col-span-12 xl:col-span-6 rounded-xl p-2 px-4  xl:p-4 bg-[var(--secondary)] flex flex-col justify-between"
        >
          <div className="flex justify-between">
            <p>
              Have some <br className="hidden lg:block" /> questions?
            </p>
            <ArrowUpRight />
          </div>
          <div>
            <p>Contact Me</p>
          </div>
        </Link>
      </div>
      <div className="   gap-4  col-span-12  xl:col-span-4 row-span-12 grid grid-cols-12 ">
        <div className="  rounded-xl  bg-[var(--primary)] col-span-12 row-span-12 p-6">
          <ProjectsCard />
        </div>
        <div className=" rounded-xl bg-[var(--primary)]  col-span-12 p-4 md:px-12 gap-4 flex justify-between">
          <Link
            href="https://github.com/HusseinSaeid"
            target="_blank"
            className="link hover:scale-105 duration-300 ease-in-out"
          >
            GITHUB
          </Link>
          <Link
            href="https://github.com/HusseinSaeid"
            target="_blank"
            className="link hover:scale-105 duration-300 ease-in-out"
          >
            LINKEDIN
          </Link>
          <Link
            href="https://mostaql.com/u/Husseinsaeid98"
            target="_blank"
            className="link hover:scale-105 duration-300 ease-in-out"
          >
            MOSTAQL
          </Link>
        </div>
      </div>
    </main>
  );
}
