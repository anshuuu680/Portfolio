import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Button from "../components/Button";
import Card from "../components/Card";

const skills = [
  [
    { text: "JavaScript", path: "/javaScript.svg" },
    { text: "Java", path: "/java.svg" },
    { text: "TypeScript", path: "/typescript.svg" },
  ],
  [
    { text: "Next.js", path: "/next.svg" },
    { text: "React.js", path: "/react.svg" },
    { text: "Node.js", path: "/node.svg" },
    { text: "SQL", path: "/sql.svg" },
    { text: "MongoDB", path: "/mongodb.svg" },
  ],
  [
    { text: "GitHub", path: "/github.svg" },
    { text: "Docker", path: "/docker.svg" },
    { text: "Postman", path: "/postman.svg" },
  ],
];

function Skills() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const getMotionProps = (index: number) => {
    const baseDelay = 0.1 + index * 0.15;
    const transition = {
      duration: 0.8,
      delay: baseDelay,
      ease: "easeInOut" as const,
    };

    if (isMobile) {
      return {
        initial: { opacity: 0, x: -60 },
        whileInView: { opacity: 1, x: 0 },
        transition,
      };
    } else {
      const yShift = index === 1 ? -30 : index === 2 ? 60 : 30;
      return {
        initial: { opacity: 0, y: 80 },
        whileInView: { opacity: 1, y: yShift },
        transition,
      };
    }
  };

  return (
    <div
      id="skills"
      className="w-full flex flex-col items-center  md:pb-16 pb-[9em]  lg:pb-28 md:gap-10 lg:gap-[8em]"
    >
      <Button text="Behind the Code" />

      <div className="w-full  flex justify-center">
        <div className="max-w-6xl   mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-6  lg:px-10 justify-items-center">
          {[0, 1, 2].map((index) => {
            const { initial, whileInView, transition } = getMotionProps(index);
            return (
              <motion.div
                key={index}
                initial={initial}
                whileInView={whileInView}
                transition={transition}
                viewport={{ once: true, amount: 0.3 }}
                className="w-full max-w-[20rem]"
              >
                <Card
                  skill={["Languages", "Development", "Tools"][index]}
                  tech={skills[index]}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Skills;
