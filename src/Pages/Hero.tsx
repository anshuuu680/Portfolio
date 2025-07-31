import { motion } from "framer-motion";
import Button from "../components/Button";
import CustomScroller from "../components/CustomScroller";
import LargeButton from "../components/LargeButton";

function Hero() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-primary pt-42 gap-24 px-4 sm:px-8 relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-5xl flex justify-center items-center flex-col gap-6 text-center"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          style={{ lineHeight: "5rem" }}
          className="text-heading text-4xl sm:text-5xl md:text-6xl font-bold font-inter"
        >
          Building the web, one <br /> pixel at time.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-center font-light font-dmsans-light text-base sm:text-lg max-w-2xl"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          magni ea, ducimus delectus doloremque id necessitatibus qui et quos
          voluptatibus aperiam sequi. Suscipit, non.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex flex-col sm:flex-row justify-center items-center gap-6"
        >
          <LargeButton
            text="Hire Me"
            color="#fff"
            borderColor="#fe832b"
            bgColor="linear-gradient(180deg, rgb(251, 163, 75) 0%, rgb(240, 103, 5) 100%) rgba(0, 0, 0, 0)"
          />
          <LargeButton text="Contact Me" />
        </motion.div>
      </motion.div>

      <motion.img
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, delay: 1 }}
        className="absolute top-24 left-[45em]"
        src="/vector-1.png"
        alt=""
      />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 1.2 }}
        className="w-full flex flex-col items-center gap-12 mt-12 px-2"
      >
        <Button text="Know My Skills" />
        <div className="w-full max-w-6xl">
          <CustomScroller />
          <CustomScroller direction="alternate" />
        </div>
      </motion.div>
    </div>
  );
}

export default Hero;
