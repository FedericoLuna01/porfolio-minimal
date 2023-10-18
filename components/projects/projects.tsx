import { ProjectsItems } from "@/data/data"
import ProjectCard from "./project-card"

const Projects = () => {
  return (
    <section
      className="pt-10"
    >
      <h2
        className="text-xl mb-2"
      >
        Los últimos proyectos en los que estuve trabajando
      </h2>
      {
        ProjectsItems.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
          />
        ))
      }
    </section>
  )
}

export default Projects