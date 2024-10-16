import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

import { Collapsible, CollapsibleContent } from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";
import ViewMore from "./viewmore-button";

interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    repo?: string;
    demo?: string;
    images: string[];
    technologies: string[];
  };
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Collapsible className="border border-gray-400 transition-all rounded-md p-2 mb-4">
      <h3 className="text-lg">{project.title}</h3>
      <p className="text-zinc-600 dark:text-zinc-400 mr-0 md:mr-10">
        {project.description}
      </p>
      <CollapsibleContent>
        <div>
          <h4 className="mb-1 mt-2">Tecnologías</h4>
          <ul className="flex flex-wrap space-x-2">
            {project.technologies.map((tech, index) => (
              <li
                key={index}
                className="border border-zinc-600 dark:border-zinc-400 text-zinc-600 dark:text-zinc-400 rounded-md px-2 py-1 text-sm"
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>
        {
          project.images.length > 0 && (
            <div className="pb-1">
              <h4 className="mb-1 mt-2">Demo</h4>
              <div className="flex space-y-2 justify-between flex-col">
                {project.images.map((image, index) => (
                  <Image
                    key={index}
                    src={image}
                    width={450}
                    height={450}
                    alt="Demo"
                    className="rounded-md object-cover"
                  />
                ))}
              </div>
            </div>
          )
        }
      </CollapsibleContent>
      <div className="flex justify-between items-center pt-2">
        <div className="space-x-2">
          {
            project.demo && (
              <Button size="icon" variant="secondary" asChild>
                <a href={project.demo} target="_blank">
                  <ExternalLink size={24} />
                </a>
              </Button>
            )
          }
          {
            project.repo && (
              <Button size="icon" variant="secondary" asChild>
                <a href={project.repo} target="_blank">
                  <Github size={24} />
                </a>
              </Button>
            )
          }
        </div>
        <ViewMore />
      </div>
    </Collapsible>
  );
};

export default ProjectCard;
