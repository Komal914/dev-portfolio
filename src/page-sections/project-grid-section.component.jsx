import { PROJECTS } from "../projects";
import ProjectTile from "../components/project-tile/project-tile.component";

const ProjectGridSection = () => {
  return (
    <div>
      <h1>Projects</h1>
      {PROJECTS.map((project) => {
        return <ProjectTile key={project.id} project={project}></ProjectTile>;
      })}
    </div>
  );
};

export default ProjectGridSection;
