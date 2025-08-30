import { motion } from "framer-motion";
import Icon from "./Icon";

type ScrollDirection = "normal" | "alternate";

type CustomScrollerProps = {
  direction?: ScrollDirection;
};

const skills = [
  { text: "JavaScript", path: "/javaScript.svg" },
  { text: "TypeScript", path: "/typescript.svg" },
  { text: "React", path: "/react.svg" },
  { text: "Node.js", path: "/node.svg" },
  { text: "Java", path: "/java.svg" },
  { text: "Github", path: "/github.svg" },
  { text: "docker", path: "/docker.svg" },
  { text: "mongoDB", path: "/mongodb.svg" },
];

function CustomScroller({ direction = "normal" }: CustomScrollerProps) {
  const isAlternate = direction === "alternate";
  const duplicatedSkills = [...skills, ...skills, ...skills];

  return (
    <div className="w-full mx-auto relative overflow-hidden lg:py-6 py-4 rounded-full">
      <div className="pointer-events-none absolute top-0 left-0 h-full w-4 z-10">
        <div className="relative w-full h-full overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-white/80 to-transparent backdrop-blur-sm" />
        </div>
      </div>

      <div className="pointer-events-none absolute top-0 right-0 h-full w-4 z-10">
        <div className="relative w-full h-full overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-l from-white/80 to-transparent backdrop-blur-sm" />
        </div>
      </div>

      <motion.div
        className="flex lg:gap-32 gap-20 whitespace-nowrap px-8"
        animate={{
          x: isAlternate ? ["-33.33%", "0%"] : ["0%", "-33.33%"],
        }}
        transition={{
          duration: 25,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop",
        }}
        style={{ width: "max-content" }}
      >
        {duplicatedSkills.map((skill, idx) => (
          <motion.div
            key={`${skill.text}-${idx}`}
            className="flex-shrink-0 hover:scale-110 transition-transform duration-300"
            whileHover={{ scale: 1.1 }}
          >
            <Icon path={skill.path} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default CustomScroller;
