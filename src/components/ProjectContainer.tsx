import TextIcon from "./TextIcon";

type Tech = {
  text: string;
  path: string;
};

type ProjectProps = {
  project: {
    name: string;
    link: string;
    video: string;
    github?: string;
    tech: Tech[];
  };
};

function ProjectContainer({ project }: ProjectProps) {
  return (
    <div className="min-h-[32vmax] border-2 w-full rounded-[20px] bg-white border-skill-heading-border shadow-xl overflow-hidden p-2">
      <video
        className="w-full min-h-[24vmax] object-contain rounded-[20px]"
        src={project.video || "/part-1.mp4"}
        autoPlay
        muted
        loop
      ></video>
      <div className="p-4 w-[80%]">
        <div className="grid gap-1 mt-2 w-full grid-cols-[repeat(auto-fit,minmax(120px,1fr))]">
          {project.tech.map((obj, index) => (
            <TextIcon key={index} text={obj.text} icon={obj.path} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectContainer;
