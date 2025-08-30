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
    <div className="h-full w-full flex flex-col justify-center gap-4 lg:py-8 shadow-md p-6 lg:p-6 bg-white/5 rounded-[20px]">
      <div className="flex flex-col gap-2 lg:gap-6">
        <h1 className="text-projects-md lg:text-projects-lg font-inter lg:leading-[3rem] lg:font-medium text-heading font-bold">
          {project.name}
        </h1>
        <p className="text-paragraph lg:text-skill text-base sm:text-lg font-dmans font-light">
          {project.description}
        </p>

        <div className="flex items-center gap-2">
          {project.github ? (
            <LargeButton
              link={project.github}
              text="Github"
              imgSrc="/githubLink.svg"
              textColorClass="text-[#394cdb]"
              borderColorClass="border-blue-600"
            />
          ) : (
            <LargeButton
              text="Freelance"
              textColorClass="text-subheading"
              bgColorClass="bg-skill-heading-bg"
              borderColorClass="border-skill-heading-border"
            />
          )}
          {project.link && (
            <LargeButton
              link={project.link}
              text="Demo"
              imgSrc="/link.svg"
              textColorClass="text-[#394cdb]"
              borderColorClass="border-blue-600"
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectsDescription;
