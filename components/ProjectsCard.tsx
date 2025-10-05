import Link from "next/link";
import { ExternalLink } from "lucide-react";

export default function ProjectsList() {
  const projects = [
    {
      name: "Personal-Portfolio",
      desc: "A personal portfolio built with Next.js, Tailwind CSS, Framer Motion, and Swiper.js.",
      link: "https://github.com/HusseinSaeid/Personal-Portfolio",
      tags: [
        "Next.js",
        "TypeScript",
        "TailwindCSS",
        "Framer Motion",
        "Swiper.js",
      ],
    },
    {
      name: "FasterUI ",
      desc: "A modern agency template built with Next.js, Tailwind CSS, Framer Motion, and shadcn/ui.",
      link: "https://github.com/HusseinSaeid/fasterui",
      tags: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Framer Motion",
        "shadcn/ui",
      ],
    },
    {
      name: "Resumix",
      desc: "A modern web application that  analyze resumes with (ATS) compatibility ,Built with Next.js + TypeScript and powered by Puter.js",
      link: "https://github.com/HusseinSaeid/ats-resume-checker",
      tags: ["Next.js", "TypeScript", "Puter.js", "Tailwind CSS"],
    },
    {
      name: "Bentolio",
      desc: "Minimal Personal Portfolio built with Next.js, Tailwind CSS",
      link: "https://github.com/HusseinSaeid/bentolio",
      tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    },
  ];

  return (
    <div className="flex flex-col gap-6 justify-between ">
      <h2 className="text-2xl font-bold">Recent Projects</h2>
      <div className="flex flex-col gap-3">
        {projects.map((project) => (
          <Link
            key={project.name}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group w-full flex justify-between items-start gap-4 p-4 rounded-lg 
                     bg-[var(--secondary)] hover:bg-opacity-80 
                     transition-all duration-200 hover:shadow-md hover:scale-101"
            aria-label={`View ${project.name} on GitHub`}
          >
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <h3 className="font-semibold text-base group-hover:underline">
                  {project.name}
                </h3>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-600 mb-2 line-clamp-2">
                {project.desc}
              </p>
              {project.tags && (
                <div className="flex gap-2 flex-wrap">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 rounded-full bg-[var(--primary)] 
                               text-gray-700 dark:text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
            <ExternalLink
              size={18}
              className="flex-shrink-0 mt-1 text-gray-600 dark:text-gray-600 
                       group-hover:text-gray-900 dark:group-hover:text-white 
                       transition-colors"
              aria-hidden="true"
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
