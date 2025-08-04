import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "../components/Button";
import ProjectContainer from "../components/ProjectContainer";
import ProjectsDescription from "../components/ProjectsDescription";

gsap.registerPlugin(ScrollTrigger);

const projectsData = [
  {
    name: "Closerrr",
    link: "https://closerrr.com",
    video: "",
    github: "",
    description: "",
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
    video: "",
    github: "https://github.com/anshuuu680/Spark-Ed-Tech.git",
    description: "",
    tech: [
      { text: "React", path: "react.svg" },
      { text: "Tailwind", path: "node.svg" },
      { text: "Node", path: "node.svg" },
      { text: "JWT", path: "framer.svg" },
      { text: "Payment Gateway", path: "payment.svg" },
    ],
  },
];

function Projects() {
  const triggerRef = useRef<HTMLDivElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const [currentContainer, setCurrentContainer] = useState(0);
  const [currentDescription, setCurrentDescription] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  const containers = [
    <ProjectContainer key="container1" project={projectsData[0]} />,
    <ProjectContainer key="container4" project={projectsData[1]} />,
  ];

  const descriptions = [
    <ProjectsDescription key="desc1" project={projectsData[0]} />,
    <ProjectsDescription key="desc2" project={projectsData[1]} />,
  ];

  useEffect(() => {
    if (!triggerRef.current || !pinRef.current || !progressBarRef.current)
      return;

    const trigger = triggerRef.current;
    const pinElement = pinRef.current;
    const progressBar = progressBarRef.current;

    const animationTrigger = ScrollTrigger.create({
      trigger: trigger,
      start: "top 80%",
      onEnter: () => {
        if (!hasAnimated) {
          setHasAnimated(true);
        }
      },
    });

    const pinAnimation = ScrollTrigger.create({
      trigger: trigger,
      start: "top top",
      end: "bottom top",
      pin: pinElement,
      pinSpacing: true,
      onUpdate: (self) => {
        const progress = self.progress;

        gsap.set(progressBar, {
          height: `${20 + progress * 80}%`,
        });

        const containerIndex = Math.floor(progress * containers.length);
        const finalIndex = Math.min(containerIndex, containers.length - 1);

        if (finalIndex !== currentContainer) {
          setCurrentContainer(finalIndex);
          setCurrentDescription(finalIndex);
        }
      },
      onLeave: () => {
        setCurrentContainer(containers.length - 1);
        setCurrentDescription(descriptions.length - 1);
      },
    });

    return () => {
      animationTrigger.kill();
      pinAnimation.kill();
      ScrollTrigger.refresh();
    };
  }, [
    containers.length,
    descriptions.length,
    currentContainer,
    currentDescription,
    hasAnimated,
  ]);

  useEffect(() => {
    ScrollTrigger.refresh();
  }, []);

  return (
    <motion.div
      ref={triggerRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: hasAnimated ? 1 : 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <div
        ref={pinRef}
        className="lg:relative h-screen w-full overflow-hidden  flex flex-col lg:flex-row items-center justify-center px-4 pt-6 lg:pt-0"
      >
        <motion.div
          className="lg:absolute lg:top-[8em] lg:px-18 flex lg:justify-start justify-center w-full mb-4 lg:mb-0"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: hasAnimated ? 0 : -30, opacity: hasAnimated ? 1 : 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeInOut" }}
        >
          <div className="w-fit">
            <Button text="My Work" />
          </div>
        </motion.div>
        <motion.div
          id="portfolio"
          className="flex items-center justify-center h-full"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: hasAnimated ? 0 : 30, opacity: hasAnimated ? 1 : 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
        >
          <div className="container flex flex-col-reverse lg:flex-row items-center justify-center w-full max-w-7xl gap-6">
            <motion.div
              className="w-full lg:w-[45%] px-2 lg:px-0"
              key={`desc-${currentDescription}`}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              {descriptions[currentDescription]}
            </motion.div>

            <motion.div
              className="w-full lg:w-[42%] flex justify-end"
              key={currentContainer}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              {containers[currentContainer]}
            </motion.div>

            <motion.div
              className="w-12 min-h-[32vmax] hidden lg:flex flex-col justify-center gap-4 items-center"
              initial={{ opacity: 0, x: 30 }}
              animate={{
                opacity: hasAnimated ? 1 : 0,
                x: hasAnimated ? 0 : 30,
              }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeInOut" }}
            >
              <h1 className="font-inter font-light text-heading">
                0{currentContainer + 1}
              </h1>
              <div className="w-1 h-[26.5vmax] bg-gray-200 rounded-full overflow-hidden">
                <div
                  ref={progressBarRef}
                  className="w-full bg-subheading rounded-full transition-all duration-100 ease-in-out"
                  style={{ height: "20%" }}
                />
              </div>
              <h1 className="font-inter font-light text-heading">04</h1>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Projects;
