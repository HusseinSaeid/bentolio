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
      name: "FasterUI",
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
      desc: "A modern web app that analyzes resumes for ATS compatibility. Built with Next.js + TypeScript and powered by Puter.js.",
      link: "https://github.com/HusseinSaeid/ats-resume-checker",
      tags: ["Next.js", "TypeScript", "Puter.js", "Tailwind CSS"],
    },
    {
      name: "Bentolio",
      desc: "Minimal personal portfolio built with Next.js and Tailwind CSS.",
      link: "https://github.com/HusseinSaeid/bentolio",
      tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    },
  ];

  return (
    <section
      aria-labelledby="projects-heading"
      className="flex flex-col gap-6 justify-between"
    >
      <h2
        id="projects-heading"
        className="text-2xl font-bold text-[var(--foreground)]"
      >
        Recent Projects
      </h2>

      <div className="flex flex-col gap-4">
        {projects.map((project) => (
          <article
            key={project.name}
            className="w-full rounded-xl bg-[var(--secondary)] bg-opacity-95
                       transition-all duration-300 hover:bg-opacity-100
                       hover:scale-105 hover:shadow-lg
                       focus-within:ring-2 focus-within:ring-[var(--primary)]
                       focus-within:ring-offset-2 focus-within:ring-offset-[var(--background)]"
          >
            <Link
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex justify-between items-start gap-4 p-5 focus-visible:outline-none"
              aria-label={`View ${project.name} on GitHub`}
            >
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-base text-white dark:text-[var(--foreground)] group-hover:underline">
                  {project.name}
                </h3>

                <p className="text-sm text-[var(--background)] dark:text-[var(--foreground)] mb-3 line-clamp-2">
                  {project.desc}
                </p>

                {project.tags && (
                  <div className="flex gap-2 flex-wrap">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 shadow-lg py-1 rounded-full bg-[var(--primary)] text-black dark:text-white font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              <ExternalLink
                size={18}
                className="flex-shrink-0 mt-1 text-white dark:text-[var(--foreground)]
                           group-hover:text-[var(--primary)]
                           transition-colors duration-200"
                aria-hidden="true"
              />
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
