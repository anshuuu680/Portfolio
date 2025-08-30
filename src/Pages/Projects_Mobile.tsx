import Button from "../components/Button";
import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";

type Tech = {
  text: string;
  path: string;
};

type Project = {
  name: string;
  link: string;
  video: string;
  github: string;
  description: string;
  tech: Tech[];
};

const projectsData: Project[] = [
  {
    name: "Closerrr",
    link: "https://closerrr.com",
    video:
      "https://ik.imagekit.io/anshuuuu680/Portfolio/Screen%20Recording%202025-08-05%20at%208.56.54%E2%80%AFPM_j8ebpo0aV.mov/ik-video.mp4?updatedAt=1754407755957",
    github: "",
    description:
      "Closerrr is a visually engaging animated landing page built for the Closerrr social media platform. The landing experience uses smooth animations and bold visuals to introduce users to a modern platform focused on real connections, interactive content, and a vibrant social feed.",
    tech: [
      { text: "React", path: "react.svg" },
      { text: "Tailwind", path: "node.svg" },
      { text: "Scroll Trigger", path: "scrollTrigger.svg" },
      { text: "Framer", path: "framer.svg" },
      { text: "Gsap", path: "Gsap.svg" },
    ],
  },
  {
    name: "Spark Ed-Platform",
    link: "https://spark-p0qa.onrender.com/",
    video:
      "https://ik.imagekit.io/anshuuuu680/Portfolio/Screen%20Recording%202025-08-05%20at%209.12.17%E2%80%AFPM_M6iDDfngxW.mov/ik-video.mp4?updatedAt=1754408645827",
    github: "https://github.com/anshuuu680/Spark-Ed-Tech.git",
    description:
      "Spark is a full-stack EdTech platform where users can purchase courses, instructors can upload and manage their content, and learners can track progress through personal tasks. It also features a social feed similar to Instagram, allowing users to post updates and engage with the learning community.",
    tech: [
      { text: "React", path: "react.svg" },
      { text: "Tailwind", path: "node.svg" },
      { text: "Node", path: "node.svg" },
      { text: "JWT", path: "framer.svg" },
      { text: "Gateway", path: "payment.svg" },
    ],
  },
];

const CustomButton = ({
  link,
  text,
  icon,
  variant = "default",
}: {
  link?: string;
  text: string;
  icon?: string;
  variant?: "default" | "freelance";
}) => {
  const baseClasses =
    "px-2 py-1 rounded-[16px] border text-sm font-medium flex items-center gap-2 transition-colors";
  const variantClasses =
    variant === "freelance"
      ? "bg-skill-heading-bg text-subheading border-skill-heading-border"
      : "border-blue-600 text-blue-600 hover:bg-blue-50";

  const content = (
    <>
      {icon && <img src={icon} alt="" className="w-4 h-4" />}
      {text}
    </>
  );

  return link ? (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseClasses} ${variantClasses}`}
    >
      {content}
    </a>
  ) : (
    <span className={`${baseClasses} ${variantClasses} cursor-default`}>
      {content}
    </span>
  );
};

function LazyVideo({ src }: { src: string }) {
  const ref = useRef<HTMLVideoElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <>
      {!isLoaded && (
        <div className="w-full h-[24vmax] bg-gray-200 rounded-[20px]" />
      )}
      <video
        ref={ref}
        src={isVisible ? src : undefined}
        autoPlay={isVisible}
        muted
        loop
        playsInline
        className={`w-full h-[24vmax] object-contain rounded-[20px] ${
          !isLoaded ? "hidden" : "block"
        }`}
        onLoadedData={() => setIsLoaded(true)}
      />
    </>
  );
}

function Projects_Mobile() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <div className="md:hidden min-h-screen flex flex-col gap-12 items-center w-full pb-[4em]">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <Button text="Developer Toolbox" />
      </motion.div>

      <div className="flex w-full flex-col gap-6 items-center">
        {projectsData.map((project, index) => {
          const isExpanded = expandedIndex === index;
          const isLong = project.description.length > 60;

          return (
            <motion.div
              key={index}
              layout
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="min-h-[32vmax] border-2 w-full max-w-[26rem] rounded-[20px] bg-white border-skill-heading-border shadow-xl overflow-hidden p-2"
            >
              <LazyVideo src={project.video || "/part-1.mp4"} />

              <div className="p-4 w-full">
                <div className="gap-3 flex mt-2">
                  {project.tech.map((obj, i) => (
                    <img
                      key={i}
                      src={obj.path}
                      alt={obj.text}
                      className="w-6 h-6 object-contain"
                    />
                  ))}
                </div>

                <div className="flex items-center gap-2 mt-3">
                  {project.github ? (
                    <CustomButton
                      link={project.github}
                      text="Github"
                      icon="/githubLink.svg"
                    />
                  ) : (
                    <CustomButton text="Freelance" variant="freelance" />
                  )}
                  {project.link && (
                    <CustomButton
                      link={project.link}
                      text="Demo"
                      icon="/link.svg"
                    />
                  )}
                </div>

                <h3 className="text-lg font-semibold mt-4">{project.name}</h3>

                <motion.div layout className="text-sm overflow-hidden">
                  <motion.span
                    layout
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  >
                    {isExpanded
                      ? project.description
                      : isLong
                      ? project.description.slice(0, 60) + "…"
                      : project.description}
                  </motion.span>
                  {isLong && (
                    <button
                      onClick={() =>
                        setExpandedIndex(isExpanded ? null : index)
                      }
                      className="ml-2 text-blue-500 underline inline"
                    >
                      {isExpanded ? "See less" : "See more"}
                    </button>
                  )}
                </motion.div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export default Projects_Mobile;
