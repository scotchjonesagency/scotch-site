import { motion } from "framer-motion";
import React from "react";

const TransitionEffect = () => {
  return (
    <>
      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-primary"
        initial={{ x: "100%", width: "100%" }}
        animate={{ x:"0%", width:"0%" }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      />
    </>
  );
};

export default TransitionEffect;
