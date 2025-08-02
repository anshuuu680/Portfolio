import LargeButton from "./LargeButton";

function ProjectsDescription() {
  return (
    <div className="h-full w-full flex flex-col justify-center gap-4 lg:py-8">
      <div className="flex flex-col gap-2 lg:gap-6">
        <h1 className="text-projects-md lg:text-projects-lg font-inter lg:leading-[3rem] lg:font-medium text-heading font-bold">
          Closerrr
        </h1>
        <p className="text-paragraph lg:text-skill text-base sm:text-lg font-dmans font-light">
          Closerrr is a social media platform designed to connect people with
          similar interests. It allows users to share content, engage in
          discussions, and build communities around shared passions.
        </p>

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
