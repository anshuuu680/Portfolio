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
    <div className="w-full mx-auto relative overflow-hidden lg:py-4 py-2 rounded-[50px]">
      <div className="pointer-events-none absolute top-0 left-0 h-full w-12 z-10">
        <div className=" relative w-full h-full overflow-hidden">
          <div className="absolute inset-0 backdrop-blur-md bg-white/10 [mask-image:linear-gradient(to_right,black,transparent)]" />
        </div>
      </div>

      <div className="pointer-events-none absolute top-0 left-0 h-full w-12 z-10">
        <div className="  relative w-full h-full overflow-hidden">
          <div className="absolute inset-0 backdrop-blur-md bg-white/10 [mask-image:linear-gradient(to_right,black,transparent)]" />
        </div>
      </div>

      <motion.div
        className="flex lg:gap-32 gap-20 whitespace-nowrap"
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
            <Icon opacity={80} path={skill.path} />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default CustomScroller;
