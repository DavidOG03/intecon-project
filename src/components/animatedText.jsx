import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
// import { useInView } from "react-intersection-observer";

const AnimatedText = ({ text, height, margin,from,style }) => {
  const words = Array.from(text);

  const letter = {
    hidden: { opacity: 1, y: from },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.75,
        ease: "easeInOut",
        type: "tween",
        delay: 0.5,
      },
    },
  };

  return (
    <>
      <motion.div
      className="overflow-hidden"
      initial={{ opacity: 1}}
      animate={{ opacity: 1}}
        style={{ maxHeight: `${height}px` }}
        transition={{ staggerChildren: 0.015 }}
      >
        {words.map((word, index) => (
          <motion.span
            className={style}
            style={{ marginRight: `${margin}px`, display: "inline-block" }}
            key={index}
            variants={letter}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {word}
          </motion.span>
        ))}
      </motion.div>
    </>
  );
};

export default AnimatedText;
