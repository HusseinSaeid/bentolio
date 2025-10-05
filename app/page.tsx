import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Code } from "lucide-react";
import ProjectsCard from "@/components/ProjectsCard";
import CircularText from "@/components/CircularText";

export default function Home() {
  const phoneNumber = "+201021094777";
  return (
    <main
      className="max-h-full w-full grid gap-6  
                 grid-cols-6 md:grid-cols-8 lg:grid-cols-10 xl:grid-cols-12
                 auto-rows-auto font-kufam"
    >
      {/* Large Card Section */}
      <div className="rounded-xl gap-4 col-span-6 md:col-span-8 lg:col-span-12 xl:col-span-8 row-span-12 grid grid-cols-6 md:grid-cols-8 lg:grid-cols-10 xl:grid-cols-12">
        {/* Intro Card */}
        <div className="col-span-6 md:col-span-5 lg:col-span-6 xl:col-span-7 rounded-xl p-6 flex flex-col justify-between bg-[var(--primary)] hover:scale-103 hover:shadow-2xl duration-300 ease-in-out">
          <div className="self-end">
            <CircularText
              text="Hussein*ELSaeid*"
              onHover="speedUp"
              spinDuration={20}
              className="custom-class"
            />
          </div>
          <div>
            <p className="font-bold text-base md:text-lg lg:text-3xl xl:text-4xl">
              Frontend Developer <br />
              <span className="font-extralight font-poppins">Empowering </span>
              Modern <br />
              Web Experiences
            </p>
          </div>
        </div>

        {/* Image */}
        <div className="col-span-6 md:col-span-3 lg:col-span-4 xl:col-span-5 hover:scale-103 hover:shadow-2xl duration-300 ease-in-out rounded-xl">
          <Image
            src="/personal.jpg"
            alt="Hussein"
            priority
            fetchPriority="high"
            width={1000}
            height={800}
            className="w-full h-full object-cover object-center rounded-xl"
          />
        </div>

        {/* About Text */}
        <div className="col-span-6 md:col-span-6 lg:col-span-7 xl:col-span-6 hover:scale-103 hover:shadow-2xl duration-300 ease-in-out rounded-xl p-4 bg-[var(--primary)] justify-between flex flex-col gap-10">
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

        {/* WhatsApp Contact */}
        <Link
          target="_blank"
          href={`https://wa.me/${phoneNumber}`}
          className="gap-4 py-6 hover:scale-103 hover:shadow-2xl duration-300 ease-in-out col-span-6 md:col-span-2 lg:col-span-3 xl:col-span-6  rounded-xl p-2 px-4 xl:p-4 bg-[var(--secondary)] font-bold text-white flex flex-col justify-between"
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

      {/* Right Section */}
      <div className="gap-4 col-span-6 md:col-span-8 lg:col-span-12 xl:col-span-4 row-span-12 grid grid-cols-6 lg:grid-cols-12">
        {/* Projects Card */}
        <div className="rounded-xl bg-[var(--primary)] col-span-6 lg:col-span-12 row-span-12 p-6">
          <ProjectsCard />
        </div>

        {/* Links */}
        <div className="rounded-xl bg-[var(--primary)] text-sm xl:text-lg col-span-6 lg:col-span-12 p-4 md:px-12 gap-4 flex justify-between">
          <Link
            href="https://github.com/HusseinSaeid"
            target="_blank"
            className="link hover:scale-105 duration-300 ease-in-out"
          >
            GITHUB
          </Link>
          <Link
            href="https://www.linkedin.com/in/husseinsaeid/"
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
