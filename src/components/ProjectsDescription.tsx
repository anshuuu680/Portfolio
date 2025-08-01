import Button from "./Button";
import LargeButton from "./LargeButton";
import TextIconButton from "./TextIconButton";

const icons = ["react.svg", "node.svg", "mongodb.svg"];

function ProjectsDescription() {
  return (
    <div className="h-full w-[80%] lg:w-1/2 flex flex-col gap-4 border py-8">
      <div className="flex flex-col gap-6">
        <h1 className="text-projects-lg font-inter leading-[3rem] font-medium text-heading">
          Closerrr
        </h1>
        <p className="text-paragraph text-skill font-dmans font-light">
          Closerrr is a social media platform designed to connect people with
          similar interests. It allows users to share content, engage in
          discussions, and build communities around shared passions.
        </p>
        <div className="">
          <div className="w-fit lg:mb-4 mb-2">
            <Button text="Tech Stack" />
          </div>
          <div className="flex items-center gap-4 mt-2">
            {icons.map((icon, index) => (
              <TextIconButton
                key={index}
                path={`/${icon}`}
                opacity={100}
                size={6}
              />
            ))}
          </div>
        </div>
        <div className="flex items-center gap-2">
          <LargeButton
            text="Github"
            imgSrc="/githubLink.svg"
            textColorClass="text-[#394cdb]"
            borderColorClass="border-blue-600"
          />
          <LargeButton
            text="Demo"
            imgSrc="/link.svg"
            textColorClass="text-[#394cdb]"
            borderColorClass="border-blue-600"
          />
        </div>
      </div>
    </div>
  );
}

export default ProjectsDescription;
