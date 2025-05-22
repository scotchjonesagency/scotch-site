import { motion } from "framer-motion";
import React from "react";

const quote = {
  initial: {
    opacity: 0,
    y: 50
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const AnimatedText = ({ text, className = "" }) => {
  return (
    <div className="py-2 w-full mx-auto flex flex-col items-center justify-center text-center overflow-hidden sm:py-0">
      <motion.h1
        className={`inline-block text-dark dark:text-light
        text-8xl font-bold w-full capitalize ${className} xl:text-6xl`}
        variants={quote}
        initial="initial"
        animate="animate"
      >
        {text}
      </motion.h1>
    </div>
  );
};

export default AnimatedText;
