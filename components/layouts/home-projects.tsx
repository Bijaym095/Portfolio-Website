import { FaGithub, HiArrowTopRightOnSquare } from "@/lib/icon";
import Image from "next/image";

import { SectionHeader, SectionTitle, SectionWrapper } from "../ui/section-wrapper";
import { Column, TwoColLayout } from "../ui/two-col-block";

const PROJECTS = [
  {
    imgUrl: "/images/taskflow-team-productivity-app-img.jpg",
    name: "TaskFlow — Team Productivity App",
    description:
      "A collaborative task and project management tool built for small teams. Supports drag-and-drop kanban boards, deadlines, file attachments, and real-time notifications.",
    technologies: ["React", "TypeScript", "Firebase", "Tailwind CSS"],
    liveDemo: "https://taskflow-app.com",
    githubUrl: "#",
  },
  {
    imgUrl: "/images/inventry-pro-img.jpg",
    name: "InventoryPro — Stock Management System",
    description:
      "Inventory management system designed for warehouse operations with product tracking, low-stock alerts, barcode scanning, and user roles.",
    technologies: ["Node.js", "Express", "MongoDB", "React"],
    liveDemo: "inventorypro.io",
    githubUrl: "#",
  },
  {
    imgUrl: "/images/bitpoint-img.jpg",
    name: " BitpointX Website",
    description:
      "Responsive company website for BitpointX (your company) featuring service listings, client testimonials, and smooth scrolling navigation.",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
    liveDemo: "bitpointx.com",
    githubUrl: "#",
  },
  {
    imgUrl: "/images/finance-tracker-img.jpg",
    name: "FinanceTrackr — Personal Expense Tracker",
    description:
      "A clean, user-friendly app to log daily expenses, set savings goals, and visualise spending through charts.",
    technologies: ["React Native", "Expo", "SQLite"],
    liveDemo: "https://taskflow-app.com",
    githubUrl: "#",
  },
  {
    imgUrl: "/images/dev-blog-img.jpg",
    name: "DevBlog — Markdown Blogging Platform",
    description:
      "A minimal blogging platform where developers can write, edit, and publish Markdown-based posts with custom themes and tags.",
    technologies: ["Next.js", "Prisma", "PostgreSQL", "Vercel"],
    liveDemo: "devblog.dev",
    githubUrl: "#",
  },
];

function Projects() {
  return (
    <SectionWrapper id="projects">
      <SectionHeader className="text-center" data-aos="fade-down">
        <SectionTitle>Projects</SectionTitle>
      </SectionHeader>

      <div className="space-y-12">
        {PROJECTS.map(
          (
            { name, description, githubUrl, liveDemo, technologies, imgUrl },
            index
          ) => {
            const isEven = index % 2 === 0;
            return (
              <TwoColLayout
                key={name}
                wrapReverse
                rowReverse={isEven}
                className="gap-y-4 text-black/60"
              >
                <Column data-aos={isEven ? "fade-right" : "fade-left"}>
                  <h3 className="font-medium text-[1.125rem] 2xl:text-[1.25rem] leading-tight text-black mb-2">
                    {name}
                  </h3>
                  <p>{description}</p>
                  <div className="flex gap-2 text-[0.9375rem]">
                    <strong className="font-medium text-black">
                      Technologies:
                    </strong>
                    <div className="flex flex-wrap gap-y-2 gap-x-4">
                      {technologies.map((tech, index) => (
                        <span key={index}>{tech}</span>
                      ))}
                    </div>
                  </div>
                </Column>
                <Column data-aos={isEven ? "fade-left" : "fade-right"}>
                  <div className="group relative z-[1] h-full rounded-2xl overflow-hidden after:content-[''] after:absolute after:inset-0 after:bg-black/50  after:transition-all after:duration-300 md:after:opacity-0 md:hover:after:opacity-100">
                    <Image
                      className="w-full transition-all duration-300 aspect-[624/351] object-cover object-center  group-hover:scale-105"
                      src={imgUrl}
                      alt={name}
                      width={624}
                      height={351}
                    />
                    <div className="absolute top-1/2 left-1/2 z-[1] -translate-x-1/2 -translate-y-1/2 flex flex-wrap items-center gap-4 text-white transition-all duration-300 md:opacity-0 md:invisible group-hover:opacity-100 group-hover:visible [&_svg]:size-6 [&_a:hover]:text-primary">
                      <a href={liveDemo} target="_blank">
                        <HiArrowTopRightOnSquare />
                      </a>
                      <a href={githubUrl} target="_blank">
                        <FaGithub />
                      </a>
                    </div>
                  </div>
                </Column>
              </TwoColLayout>
            );
          }
        )}
      </div>
    </SectionWrapper>
  );
}

export default Projects;
