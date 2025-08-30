import { motion } from "framer-motion";
import Button from "../components/Button";
import CustomScroller from "../components/CustomScroller";

function ToolBox() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, delay: 1.2 }}
      className="w-full flex flex-col items-center gap-8 px-2 relative z-10"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.4 }}
      >
        <Button text="Developer Toolbox" />
      </motion.div>
      <div className="w-full max-w-6xl">
        <CustomScroller />
      </div>
    </motion.div>
  );
}

export default ToolBox;
