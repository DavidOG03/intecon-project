import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";

const HeroSlider = () => {
  var settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: true,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: false,
  };

  const fadeup = {
    hidden: {
      y: 10,
      opacity: 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        ease: "easeInOut",
        type: "tween",
        duration: 0.5,
        delay: 0.25,
      },
    },
  };

  return (
    <>
      <Slider {...settings}>
        <div className="hero-image first-image bg-cover bg-no-repeat bg-top w-full h-auto flex justify-start items-center flex-grow">
          
          <motion.h3
          variants={fadeup}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
            className="font-medium text-white text-[24px] md:text-[36px] lg:text-[54px] ml-3 md:ml-3  font-jakarta tracking-tight leading-tight text-left w-full max-w-[320px] md:max-w-[1024px] absolute top-[50%] left-0 lg:left-8 -translate-y-[50%] drop-shadow-lg"
          >
            <span className="block text-white text-[45px] md:text-[68px] lg:text-[90px]">
              Intecon Partnership Ltd
            </span>
            Consulting Engineers
          </motion.h3>
            </div>
        
        <div className="hero-image second-image bg-heroImageTwo w-full h-auto flex-grow">
        

          <motion.h3
          variants={fadeup}
          initial="hidden"
          whileInView="visible"
          viewport={true}
            className="font-medium text-white text-[24px] md:text-[36px] lg:text-[54px] ml-3 md:ml-3 font-jakarta tracking-tight leading-tight text-left w-full max-w-[320px] md:max-w-[1024px] absolute top-[50%] left-0 lg:left-8 -translate-y-[50%] drop-shadow-lg"
          >
            <span className="block text-white text-[45px] md:text-[68px] lg:text-[90px]">
              Intecon Partnership Ltd
            </span>
            Project Managers
          </motion.h3></div>
       
        <div className="hero-image third-image bg-heroImageThree w-full h-auto flex-grow">
                    

          <motion.h3
          variants={fadeup}
          initial="hidden"
          whileInView="visible"
          viewport={{once:true}}
            className="font-medium text-white text-[24px] md:text-[36px] lg:text-[54px] ml-3 md:ml-3 font-jakarta tracking-tight leading-tight text-left w-full max-w-[320px] md:max-w-[1024px] absolute top-[50%] left-0 lg:left-8 -translate-y-[50%] drop-shadow-lg"
          >
            <span className="block text-white text-[45px] md:text-[68px] lg:text-[90px]">
              Intecon Partnership Ltd
            </span>
            Expert Solutions
          </motion.h3></div>
       
        <div className="hero-image fourth-image bg-heroImageFour w-full h-auto flex-grow">
                    

          <motion.h3
          variants={fadeup}
          initial="hidden"
          whileInView="visible"
          viewport={true}
            className="font-medium text-white text-[24px] md:text-[36px] lg:text-[54px] ml-3 md:ml-3 font-jakarta tracking-tight leading-tight text-left w-full max-w-[320px] md:max-w-[1024px] absolute top-[50%] left-0 lg:left-8 -translate-y-[50%] drop-shadow-lg"
          >
            <span className="block text-white text-[45px]  md:text-[68px] lg:text-[90px]">
              Intecon Partnership Ltd
            </span>
            Innovative Design
          </motion.h3></div>
      </Slider>
    </>
  );
};

export default HeroSlider;
