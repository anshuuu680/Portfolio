import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "../components/Button";
import ProjectContainer from "../components/ProjectContainer";
import ProjectsDescription from "../components/ProjectsDescription";

gsap.registerPlugin(ScrollTrigger);

function Projects() {
  const triggerRef = useRef<HTMLDivElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const [currentContainer, setCurrentContainer] = useState(0);
  const [currentDescription, setCurrentDescription] = useState(0);

  const containers = [
    <ProjectContainer key="container1" />,
    <ProjectContainer key="container2" />,
    <ProjectContainer key="container3" />,
    <ProjectContainer key="container4" />,
  ];

  const descriptions = [
    <ProjectsDescription key="desc1" />,
    <ProjectsDescription key="desc2" />,
    <ProjectsDescription key="desc3" />,
    <ProjectsDescription key="desc4" />,
  ];

  useEffect(() => {
    if (!triggerRef.current || !pinRef.current || !progressBarRef.current)
      return;

    const trigger = triggerRef.current;
    const pinElement = pinRef.current;
    const progressBar = progressBarRef.current;

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
      pinAnimation.kill();
      ScrollTrigger.refresh();
    };
  }, [
    containers.length,
    descriptions.length,
    currentContainer,
    currentDescription,
  ]);

  useEffect(() => {
    ScrollTrigger.refresh();
  }, []);

  return (
    <div ref={triggerRef}>
      <div
        ref={pinRef}
        className="lg:relative h-screen w-full overflow-hidden  flex flex-col lg:flex-row items-center justify-center px-4 pt-6 lg:pt-0"
      >
        <div className="lg:absolute lg:top-[8em] lg:px-18 flex lg:justify-start justify-center w-full mb-4 lg:mb-0">
          <div className="w-fit">
            <Button text="My Work" />
          </div>
        </div>
        <div id="portfolio" className="flex items-center justify-center h-full">
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

            <div className="w-12 min-h-[32vmax] hidden lg:flex flex-col justify-center gap-4 items-center">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
