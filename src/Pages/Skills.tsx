import { motion } from "framer-motion";
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
  return (
    <div
      id="skills"
      className="min-h-screen w-full flex flex-col items-center lg:pt-[6em] gap-28"
    >
      <Button text="Behind the Code" />
      <div className="w-full max-w-6xl grid gird-col-2 lg:flex lg:items-start lg:justify-center text-center gap-4 md:gap-6 py-8 px-4">
        <motion.div
          initial={{ opacity: 0, y: 120 }}
          whileInView={{ opacity: 1, y: 40 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
        >
          <Card skill="Languages" tech={skills[0]} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 120 }}
          whileInView={{ opacity: 1, y: -40 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <Card skill="Development" tech={skills[1]} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 120 }}
          whileInView={{ opacity: 1, y: 90 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          <Card skill="Tools" tech={skills[2]} />
        </motion.div>
      </div>
    </div>
  );
}

export default Skills;
