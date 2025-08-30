import React from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const PortfolioLoader: React.FC = () => {
  const containerVariants: Variants = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const dotVariants: Variants = {
    initial: {
      y: 0,
      scale: 1,
      opacity: 0.7,
    },
    animate: {
      y: [-20, 0, -20],
      scale: [1, 1.2, 1],
      opacity: [0.7, 1, 0.7],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const ringVariants: Variants = {
    initial: {
      rotate: 0,
      scale: 1,
      opacity: 0.4,
    },
    animate: {
      rotate: 360,
      scale: [1, 1.1, 1],
      opacity: [0.4, 0.8, 0.4],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "linear",
      },
    },
  };

  const pulseVariants: Variants = {
    initial: {
      scale: 0.8,
      opacity: 0,
    },
    animate: {
      scale: [0.8, 1.2, 0.8],
      opacity: [0, 0.3, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeOut",
      },
    },
  };

  const particleVariants: Variants = {
    initial: {
      x: 0,
      y: 0,
      opacity: 0,
    },
    animate: {
      opacity: [0, 1, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="fixed inset-0 bg-transparent flex items-center justify-center z-50">
      <div className="absolute inset-0"></div>

      <motion.div
        className="relative"
        initial="initial"
        animate="animate"
        variants={containerVariants}
      >
        <motion.div
          className="absolute inset-0 w-32 h-32 rounded-full border-2 border-orange-500/40"
          variants={ringVariants}
        />

        <motion.div
          className="absolute inset-0 w-32 h-32 rounded-full border-t-2 border-r-2 border-orange-400/70"
          variants={{
            initial: { rotate: 0 },
            animate: {
              rotate: -360,
              transition: {
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              },
            },
          }}
        />

        <motion.div
          className="absolute inset-0 w-32 h-32 rounded-full bg-gradient-to-r from-orange-500/20 to-amber-500/20"
          variants={pulseVariants}
        />

        <motion.div
          className="flex items-center justify-center w-32 h-32"
          variants={containerVariants}
        >
          {[0, 1, 2].map((index: number) => (
            <motion.div
              key={index}
              className="w-3 h-3 mx-1 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 shadow-lg shadow-orange-500/50"
              variants={dotVariants}
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            />
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full"
        variants={particleVariants}
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
          opacity: [0, 1, 0],
          transition: {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
      />

      <motion.div
        className="absolute top-1/3 right-1/4 w-1 h-1 bg-purple-400 rounded-full"
        variants={particleVariants}
        animate={{
          x: [0, -80, 0],
          y: [0, 80, 0],
          opacity: [0, 1, 0],
          transition: {
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          },
        }}
      />

      <motion.div
        className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-blue-300 rounded-full"
        variants={particleVariants}
        animate={{
          x: [0, 60, 0],
          y: [0, -60, 0],
          opacity: [0, 1, 0],
          transition: {
            duration: 3.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          },
        }}
      />

      <motion.div
        className="absolute top-1/2 left-1/5 w-1 h-1 bg-purple-300 rounded-full"
        variants={particleVariants}
        animate={{
          x: [0, 120, 0],
          y: [0, -40, 0],
          opacity: [0, 0.8, 0],
          transition: {
            duration: 4.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          },
        }}
      />

      <motion.div
        className="absolute bottom-1/4 right-1/3 w-1.5 h-1.5 bg-blue-200 rounded-full"
        variants={particleVariants}
        animate={{
          x: [0, -90, 0],
          y: [0, -70, 0],
          opacity: [0, 0.9, 0],
          transition: {
            duration: 3.8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5,
          },
        }}
      />
    </div>
  );
};

export default PortfolioLoader;
