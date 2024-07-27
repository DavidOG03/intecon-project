import React from "react";
import { motion } from "framer-motion";

const Director = ({ img, name, role, office, degree }) => {
  const fadeup = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
        type: "tween",
        delay: 0.2,
      },
    },
  };
  return (
    <motion.div
      variants={fadeup}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="director flex flex-col flex-grow min-w-[300px] max-w-[400px] justify-center items-start mt-6 overflow-hidden"
    >
      <div className="image-box w-full bg-[#f1f1f1] min-h-[519px] flex justify-end items-center flex-col">
        {img && (
          <img src={img} alt={name} className="w-full h-full object-cover" />
        )}
      </div>
      <h4 className="text-[2rem] font-medium capitalize text-black font-jakarta tracking-tight leading-relaxed pt-4">
        {name}
      </h4>
      <p className="text-[18px] font-normal text-[#1c1c1ce5] capitalize font-jakarta">
        {role}
      </p>
      <p className="text-[18px] font-light text-[#1c1c1ccb] uppercase mt-3 font-inter">
        {office}
      </p>
      <p className="text-base font-light text-[#1c1c1ca8] capitalize font-inter">
        {degree}
      </p>
    </motion.div>
  );
};

export default Director;
