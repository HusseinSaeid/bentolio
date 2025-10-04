import Link from "next/link";
import { ExternalLink } from "lucide-react";

export default function ProjectsList() {
  const projects = [
    {
      name: "E-commerce Website",
      desc: "Responsive online store with Next.js & TailwindCSS.",
      link: "https://github.com/HusseinSaeid/ecommerce",
      tags: ["Next.js", "TailwindCSS"],
    },
    {
      name: "Portfolio Website",
      desc: "Showcasing UI/UX & frontend skills.",
      link: "https://github.com/HusseinSaeid/portfolio",
      tags: ["React", "UI/UX"],
    },
    {
      name: "Interactive Web App",
      desc: "Dynamic web app with API integration.",
      link: "https://github.com/HusseinSaeid/webapp",
      tags: ["React", "API"],
    },
    {
      name: "Blog Platform",
      desc: "Minimal blog with Markdown support.",
      link: "https://github.com/HusseinSaeid/blog",
      tags: ["Markdown", "CMS"],
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
                     transition-all duration-200 hover:shadow-md"
            aria-label={`View ${project.name} on GitHub`}
          >
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <h3 className="font-semibold text-base group-hover:underline">
                  {project.name}
                </h3>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2 line-clamp-2">
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
              className="flex-shrink-0 mt-1 text-gray-600 dark:text-gray-400 
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
