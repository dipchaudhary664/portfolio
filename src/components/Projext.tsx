import { Project } from "@/Data/ProjectsData";
import Image from "next/image";
import React from "react";
import CustomLink from "./CustomLink";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import Heading from "./Heading";

export default function Projext() {
  return (
    <section id="projects" className="scroll-mt-28">
      <div className="mb-5 mt-0 sm:mt-20 flex justify-between">
        <div className="">
          <Heading title="Project" desc="Projects I Have Built" />
        </div>
        <div className="mt-10">
          <CustomLink
            href="https://github.com/dipchaudhary664?tab=repositories"
            linkType="primary"
            target="_blank"
            className="flex gap-2 items-center text-zinc-500"
          >
            See All Projects
            <MdKeyboardDoubleArrowRight />
          </CustomLink>
        </div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Project.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
}

interface IProjectCard {
  project: (typeof Project)[0];
}

function ProjectCard({ project }: IProjectCard) {
  return (
    <div className="bg-zinc-800/50 border border-zinc-800 rounded-lg overflow-hidden">
      <div>
        <Image
          src={project.image}
          alt={project.title}
          width={400}
          height={400}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <ul className="flex gap-4 mb-2">
          {project.stacks.map((stack, index) => (
            <li
              key={index}
              className="text-zinc-400 text-xs px-4 py-1 border border-zinc-700 rounded-md"
            >
              {stack}
            </li>
          ))}
        </ul>
        <p className="text-zinc-400 font-medium text-lg">{project.title}</p>
        <p className="text-zinc-400 text-sm">{project.description}</p>
        <div className="flex gap-4 mt-4">
          <CustomLink
            href="https://github.com/dipchaudhary664"
            target="_blank"
            linkType="secondary"
          >
            Source Code
          </CustomLink>
          <CustomLink
            href={project.liveAt}
            target="_blank"
            linkType="secondary"
          >
            Live At
          </CustomLink>
        </div>
      </div>
    </div>
  );
}
