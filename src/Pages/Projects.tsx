import ProjectsDescription from "../components/ProjectsDescription";

function Projects() {
  return (
    <div
      id="projects"
      className="min-h-screen w-full flex flex-col items-center justify-center"
    >
      <div className="w-full min-h-72  lg:max-w-6xl flex flex-col lg:flex-row items-center gap-8 border">
        <ProjectsDescription />
        <div className="min-h-72 w-1/2"></div>
      </div>
    </div>
  );
}

export default Projects;
