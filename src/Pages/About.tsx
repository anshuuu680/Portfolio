import { motion } from "framer-motion";
import Button from "../components/Button";
import Icon from "../components/Icon";

function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  };

  const leftCardVariants = {
    hidden: { opacity: 0, x: -80, rotateY: -15 },
    visible: {
      opacity: 1,
      x: 0,
      rotateY: 0,
      transition: {
        duration: 1,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  };

  const rightCardVariants = {
    hidden: { opacity: 0, x: 80, rotateY: 15 },
    visible: {
      opacity: 1,
      x: 0,
      rotateY: 0,
      transition: {
        duration: 1,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
        delay: 0.3,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
        delay: 0.4,
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.6, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.34, 1.56, 0.64, 1] as const,
        delay: 0.8,
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.7, y: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 1.2,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
        delay: 0.5,
      },
    },
  };

  const socialLinks = [
    {
      href: "https://www.instagram.com/anshuuuu____",
      path: "instagram-colored.svg",
    },
    { href: "https://wa.me/919131086950", path: "whatsapp.svg" },
    {
      href: "https://www.linkedin.com/in/anshu-patidar-478652228/",
      path: "linkedin.svg",
    },
    { href: "https://leetcode.com/u/anshuuuu____/", path: "leetcode.svg" },
  ];

  return (
    <motion.div
      id="about"
      className="md:min-h-screen md:pb-12 w-full flex flex-col items-center pt-[4em] lg:pt-[6em] gap-2 lg:gap-16 px-4 lg:px-8"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <motion.div variants={itemVariants}>
        <Button text="Know About Me" />
      </motion.div>

      <div className="w-full max-w-7xl flex flex-col-reverse lg:flex-row justify-center items-center gap-12 lg:gap-8 ">
        <motion.div
          className="w-full px-4 lg:w-[40%] lg:justify-center min-h-[400px] lg:min-h-[500px] flex flex-col  gap-4 lg:px-8 rounded-[30px] relative overflow-hidden"
          variants={leftCardVariants}
          style={{ transformStyle: "preserve-3d" }}
        >
          <motion.div
            className="absolute top-0 right-0 w-32  rounded-full -translate-y-16 translate-x-16"
            animate={{
              scale: [1, 1.3, 0.9, 1.2, 1],
              rotate: [0, 120, 240, 360],
              x: [0, -10, 10, -5, 0],
              y: [0, 5, -10, 8, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <motion.div
            className="absolute bottom-0 left-0 w-24 h-24 rounded-full translate-y-12 -translate-x-12"
            animate={{
              scale: [1, 0.7, 1.1, 0.8, 1],
              rotate: [360, 240, 120, 0],
              x: [0, 8, -12, 6, 0],
              y: [0, -8, 12, -4, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <motion.div
            className="w-full flex flex-col gap-4 lg:gap-6 relative z-10"
            variants={textVariants}
          >
            <motion.h1
              className="font-dmans font-bold text-3xl lg:text-4xl text-heading leading-tight lg:leading-[2.75rem] tracking-normal"
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.6,
                delay: 0.3,
                ease: [0.25, 0.46, 0.45, 0.94] as const,
              }}
              viewport={{ once: true }}
            >
              Hey, I'm Anshu, A <br className="hidden sm:block" />
              <motion.span
                className="block sm:inline text-subheading"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.2,
                  delay: 0.6,
                  ease: [0.25, 0.46, 0.45, 0.94] as const,
                }}
                viewport={{ once: true }}
              >
                Software Engineer
              </motion.span>
            </motion.h1>

            <motion.p
              className="text-paragraph text-md lg:text-[1rem] leading-relaxed max-w-md"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.2,
                delay: 0.4,
                ease: [0.25, 0.46, 0.45, 0.94] as const,
              }}
              viewport={{ once: true }}
            >
              I'm a passionate full-stack developer who loves creating
              innovative digital solutions. With expertise in modern web
              technologies, I build scalable applications that make a
              difference.
            </motion.p>
          </motion.div>

          <motion.div
            className="w-full flex flex-col justify-center  gap-2 mt-2 relative"
            variants={buttonVariants}
          >
            <div className="flex">
              {socialLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <motion.div
                    className="scale-75 cursor-pointer p-3 shadow-lg rounded-full hover:scale-110 transition-all ease-in-out duration-500"
                    initial={{ opacity: 0, scale: 0.5, rotate: -25 }}
                    whileInView={{ opacity: 1, scale: 0.75, rotate: 0 }}
                    transition={{ duration: 0.2, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <Icon path={link.path} />
                  </motion.div>
                </a>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: 0.3 }}
              viewport={{ once: true }}
              className="px-2"
            >
              <h1 className="font-signature text-signature text-2xl text-gray-800">
                Anshu Patidar
              </h1>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          className="w-full lg:w-[40%] xl:w-[40%] h-[400px] sm:h-[500px] lg:h-[600px] xl:h-[45vmax] max-h-[700px] rounded-[30px] overflow-hidden relative"
          variants={rightCardVariants}
          style={{ transformStyle: "preserve-3d" }}
        >
          <motion.img
            className="w-full h-full object-contain"
            src="/dp.png"
            alt="Anshu - Software Engineer"
            loading="lazy"
            variants={imageVariants}
            whileHover={{
              scale: 1.1,
              transition: {
                duration: 0.3,
                ease: [0.25, 0.46, 0.45, 0.94] as const,
              },
            }}
          />

          <motion.div
            className="absolute inset-0 to-transparent opacity-0"
            whileHover={{
              opacity: 1,
              transition: { duration: 0.4, ease: "easeOut" },
            }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
}

export default About;
