import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
// import { useInView } from "react-intersection-observer";

const AnimatedText = ({ text,style }) => {

  const fadeup = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.75,
        ease: "easeInOut",
        type: "tween",
        delay: 0.2,
      },
    },
  };
  

  return (
    <>
      <motion.div
      className="overflow-hidden"
      variants={fadeup}
      initial="hidden"
      whileInView="animate"
      viewport={{once:true}}
        transition={{ staggerChildren: 0.015 }}
      >
        {text.split(" ").{(word, index) => (
          <motion.span
            className={style}
            key={index}
          >
            {word}
          </motion.span>
        )}}
      </motion.div>
    </>
  );
};

export default AnimatedText;
