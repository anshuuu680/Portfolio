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
    <div className="min-h-[32vmax] border-2 w-fit rounded-[20px] bg-white border-skill-heading-border shadow-xl overflow-hidden p-2">
      <video
        className="w-full h-[24vmax] object-contain rounded-[20px]"
        src={project.video || "/part-1.mp4"}
        autoPlay
        muted
        loop
      ></video>
      <div className="p-4 w-full">
        <div className=" gap-2 mt-2 flex flex-wrap w-fit">
          {project.tech.map((obj, index) => (
            <TextIcon key={index} text={obj.text} icon={obj.path} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectContainer;
