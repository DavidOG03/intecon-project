import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const PortfolioCard = ({ img, title, description, link }) => {
  const fadein = {
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
    exit: { opacity: 0, y: -20 },
  };
  return (
    <div className="portfolio-card shadow-sm w-full h-full">
      <Link
        to={link}
        variants={fadein}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="project-pic relative w-full h-full overflow-hidden transition-all duration-500 block"
      >
        {img && (
          <img
            src={img}
            alt={description}
            className="w-full scale-110 transition-all duration-700 object-cover h-full max-h-[270px]"
          />
        )}
        <div className="media-content bg-gradient-to-b from-blackish to-textblack text-white absolute inset-0 transition-all duration-300 w-full pt-[0.5rem] md:pt-[1.5rem]">
          <h3 className="media-title text-[1.5rem] font-host px-[1rem] pb-[0.5rem] md:pb-[1rem] absolute -bottom-12 ">
            {title}
          </h3>
          <p className="media-description text-base font-inter px-[1rem] pb-[0.5rem] md:pb-[1rem]">
            {description}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default PortfolioCard;
