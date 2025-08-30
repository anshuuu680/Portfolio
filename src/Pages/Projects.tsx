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
    video:
      "https://ik.imagekit.io/anshuuuu680/Portfolio/Screen%20Recording%202025-08-05%20at%208.56.54%E2%80%AFPM_j8ebpo0aV.mov/ik-video.mp4?updatedAt=1754407755957",
    github: "",
    description:
      "Closerrr is a visually engaging animated landing page built for the Closerrr social media platform. The landing experience uses smooth animations and bold visuals to introduce users to a modern platform focused on real connections, interactive content, and a vibrant social feed.",
    tech: [
      { text: "React", path: "react.svg" },
      { text: "Scroll Trigger", path: "" },
      { text: "Framer", path: "" },
      { text: "Gsap", path: "" },
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
      { text: "Tailwind", path: "" },
      { text: "Node", path: "node.svg" },
      { text: "MongoDB", path: "mongodb.svg" },
      { text: "JWT", path: "" },
      { text: "Gateway", path: "payment.svg" },
    ],
  },
];

function Projects() {
  const triggerRef = useRef(null);
  const pinRef = useRef(null);
  const progressBarRef = useRef(null);
  const [currentContainer, setCurrentContainer] = useState(0);
  const [currentDescription, setCurrentDescription] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const containers = [
    <ProjectContainer key="container1" project={projectsData[0]} />,
    <ProjectContainer key="container4" project={projectsData[1]} />,
  ];

  const descriptions = [
    <ProjectsDescription key="desc1" project={projectsData[0]} />,
    <ProjectsDescription key="desc2" project={projectsData[1]} />,
  ];

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);

    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  useEffect(() => {
    if (!triggerRef.current || !pinRef.current || !progressBarRef.current)
      return;

    const trigger = triggerRef.current;
    const pinElement = pinRef.current;
    const progressBar = progressBarRef.current;

    if (isMobile) {
      const simpleAnimation = ScrollTrigger.create({
        trigger: trigger,
        start: "top 80%",
        onEnter: () => {
          if (!hasAnimated) {
            setHasAnimated(true);
          }
        },
      });

      return () => {
        simpleAnimation.kill();
        ScrollTrigger.refresh();
      };
    }

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
      scrub: 0.5,
      onUpdate: (self) => {
        const progress = self.progress;

        requestAnimationFrame(() => {
          gsap.set(progressBar, {
            height: `${20 + progress * 80}%`,
            ease: "none",
          });
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
    isMobile,
  ]);

  useEffect(() => {
    ScrollTrigger.refresh();
  }, []);

  return (
    <motion.div
      ref={triggerRef}
      className="hidden md:block"
      initial={{ opacity: 0 }}
      animate={{ opacity: hasAnimated ? 1 : 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <div
        ref={pinRef}
        className="hidden md:flex relative h-screen w-full overflow-hidden  flex-row items-center justify-center px-4 pt-0"
      >
        <motion.div
          className="absolute hidden md:flex top-[8em] px-18  justify-start w-full"
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
          <div className="container flex flex-row items-center justify-center w-full max-w-7xl gap-6">
            <motion.div
              className="w-[45%] px-0"
              key={`desc-${currentDescription}`}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              {descriptions[currentDescription]}
            </motion.div>

            <motion.div
              className="w-[42%] flex justify-end"
              key={currentContainer}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              {containers[currentContainer]}
            </motion.div>

            <motion.div
              className="w-12 min-h-[32vmax] flex flex-col justify-center gap-4 items-center"
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
                  className="w-full bg-subheading rounded-full"
                  style={{ height: "20%" }}
                />
              </div>
              <h1 className="font-inter font-light text-heading">
                0{containers.length}
              </h1>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Projects;
