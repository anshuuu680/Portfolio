import LargeButton from "./LargeButton";

type Tech = {
  text: string;
  path: string;
};

type Project = {
  name: string;
  link: string;
  video: string;
  github?: string;
  tech: Tech[];
  description?: string;
};

type ProjectsDescriptionProps = {
  project: Project;
};

function ProjectsDescription({ project }: ProjectsDescriptionProps) {
  return (
    <div className="h-full w-full flex flex-col justify-center gap-4 lg:py-8">
      <div className="flex flex-col gap-2 lg:gap-6">
        <h1 className="text-projects-md lg:text-projects-lg font-inter lg:leading-[3rem] lg:font-medium text-heading font-bold">
          {project.name}
        </h1>
        <p className="text-paragraph lg:text-skill text-base sm:text-lg font-dmans font-light">
          {project.description}
        </p>

        <div className="flex items-center gap-2">
          {project.github ? (
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              <LargeButton
                link={project.github}
                text="Github"
                imgSrc="/githubLink.svg"
                textColorClass="text-[#394cdb]"
                borderColorClass="border-blue-600"
              />
            </a>
          ) : (
            <div className="px-3 py-2.5 text-sm font-medium font-dmans rounded-[20px] bg-[var(--color-skill-heading-bg)] text-[var(--color-subheading)] border border-gray-300">
              Freelance
            </div>
          )}
          {project.link && (
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <LargeButton
                link={project.link}
                text="Demo"
                imgSrc="/link.svg"
                textColorClass="text-[#394cdb]"
                borderColorClass="border-blue-600"
              />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectsDescription;
