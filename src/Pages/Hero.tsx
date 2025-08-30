import { motion } from "framer-motion";
import LargeButton from "../components/LargeButton";

function Hero() {
  return (
    <div
      id="home"
      className="flex flex-col items-center min-h-fit md:min-h-screen justify-start md:justify-center  lg:gap-24 gap-8 px-4 sm:px-8 relative overflow-hidden pt-[18em] py-[12em] md:py-0 md:pt-0"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-6xl flex items-center justify-center gap-8 text-start relative z-10"
      >
        <div className="max-w-3xl flex items-center flex-col gap-12">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-center text-heading text-4xl lg:text-5xl leading-[2.75rem] sm:leading-[3rem] lg:leading-[3.5rem] font-bold px-12"
          >
            <span className="font-inter">
              Building the web, one <br className="hidden sm:block" />
              <motion.span
                className="bg-gradient-to-r from-subheading to-button-hover bg-clip-text text-transparent"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                pixel at time.{" "}
              </motion.span>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-paragraph text-center font-dmsans text-md lg:text-[1rem] leading-relaxed"
          >
            Crafting digital experiences that blend creativity with clean code.
            I design and build modern, responsive websites and interfaces that
            are fast, functional, and visually compelling. From concept to
            deployment, every project is driven by purpose, precision, and
            passion for great design.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex items-center gap-6 "
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <LargeButton
                text="Github"
                imgSrc="/github.svg"
                link="https://github.com/anshuuu680"
              />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <LargeButton
                link="/resume/resume.pdf"
                text="Download CV"
                isDownload={true}
                textColorClass="text-white"
                borderColorClass="border-[#fe832b]"
                bgColorClass="bg-[linear-gradient(180deg,_rgb(251,163,75)_0%,_rgb(240,103,5)_100%)]"
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      <motion.img
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, delay: 1 }}
        className="hidden lg:block w-[24vmax] h-[24vmax] absolute bottom-[2em] right-[4em] pointer-events-none z-0"
        src="/vector-1.png"
        alt=""
      />
    </div>
  );
}

export default Hero;
