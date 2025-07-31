import TextIconButton from "../components/TextIconButton";
import { motion } from "framer-motion";

type ScrollDirection = "normal" | "alternate";

type CustomScrollerProps = {
  direction?: ScrollDirection;
};

const skills = [
  { text: "JavaScript", path: "/javaScript.svg" },
  { text: "TypeScript", path: "/typescript.svg" },
  { text: "React", path: "/react.svg" },
  { text: "Node.js", path: "/node.svg" },
];

function CustomScroller({ direction = "normal" }: CustomScrollerProps) {
  const isAlternate = direction === "alternate";
  const duplicatedSkills = [...skills, ...skills, ...skills];

  return (
    <div className="w-full mx-auto relative overflow-hidden py-4 bg-[#fefeff]">
      {/* Left smooth blur */}
      <div className="pointer-events-none absolute top-0 left-0 h-full w-40 z-10">
        <div className="w-full h-full bg-gradient-to-r from-[#fefeff] via-[#fefeff]/60 to-transparent blur-xl" />
      </div>

      {/* Right smooth blur */}
      <div className="pointer-events-none absolute top-0 right-0 h-full w-40 z-10">
        <div className="w-full h-full bg-gradient-to-l from-[#fefeff] via-[#fefeff]/60 to-transparent blur-xl" />
      </div>

      {/* Scrolling content */}
      <motion.div
        className="flex gap-16 whitespace-nowrap"
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
          <div key={`${skill.text}-${idx}`} className="flex-shrink-0">
            <TextIconButton text={skill.text} path={skill.path} />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default CustomScroller;
