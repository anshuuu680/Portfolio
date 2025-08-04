import { motion } from "framer-motion";
import Button from "../components/Button";
import CustomScroller from "../components/CustomScroller";
import LargeButton from "../components/LargeButton";

function Hero() {
  return (
    <div
      id="home"
      className="flex flex-col items-center justify-center min-h-screen  lg:pt-42 pt-32 lg:gap-24 gap-6 px-4 sm:px-8 relative overflow-hidden"
    >
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
          className="text-heading text-4xl sm:text-5xl md:text-6xl leading-[2.5rem] sm:leading-[3.5rem] lg:leading-[4.5rem]"
        >
          <div className="w-fit xs:pl-6 sm:pl-0">
            <Button text="Full Stack Developer" />
          </div>
          <span className="fonnt-inter font-bold">
            Building the web, one <br /> pixel at time.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-center text-paragraph font-light font-dmsans-light text-base sm:text-lg max-w-2xl text-paragraph-md"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          magni ea, ducimus delectus doloremque id necessitatibus qui et quos
          voluptatibus aperiam sequi. Suscipit, non.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex justify-center items-center gap-6"
        >
          <LargeButton
            text="Let's talk"
            textColorClass="text-white"
            borderColorClass="border-[#fe832b]"
            bgColorClass="bg-[linear-gradient(180deg,_rgb(251,163,75)_0%,_rgb(240,103,5)_100%)]"
          />
          <LargeButton text="Github" imgSrc="/github.svg" />
        </motion.div>
      </motion.div>

      <motion.img
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, delay: 1 }}
        className="hidden lg:block w-[24vmax] h-[24vmax] absolute bottom-[6em] right-[4em] pointer-events-none"
        src="/vector-1.png"
        alt=""
      />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 1.2 }}
        className="w-full flex flex-col items-center gap-8 mt-12 px-2"
      >
        <Button text="Developer Toolbox" />
        <div className="w-full max-w-6xl">
          <CustomScroller />
        </div>
      </motion.div>
    </div>
  );
}

export default Hero;
