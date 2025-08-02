import TextIcon from "./TextIcon";

const icons = [
  { text: "React", path: "react.svg" },
  { text: "Node.js", path: "node.svg" },
  { text: "MongoDB", path: "mongodb.svg" },
];
function ProjectContainer() {
  return (
    <div className="min-h-[32vmax] border-2 w-full  rounded-[20px] bg-white border-skill-heading-border shadow-xl overflow-hidden p-2">
      <video
        className="w-full min-h-[24vmax] object-cover rounded-[20px]"
        src="/part-1.mp4"
        autoPlay
        muted
        loop
      ></video>
      <div className="p-4">
        <h1 className="hidden lg:block text-project-detail-lg">Tech Stack</h1>
        <div className="">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-1.5 mt-2 w-fit">
            {icons.map((obj, index) => (
              <TextIcon key={index} text={obj.text} icon={obj.path} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectContainer;
