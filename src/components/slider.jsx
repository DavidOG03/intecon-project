import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";;

const HeroSlider = () => {
  var settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // waitForAnimate: false,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: false,
  };

  const fadeup = {
    hidden: {
      y: 20,
      opacity: 0.5
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "tween",
        duration: 0.8,
        delay: 0.2,
      },
    },
  };

  return (
    <>
      <Slider {...settings}>
        <div className="hero-image first-image bg-gradient-to-br from-[#5161bb] to-[#7683ca] bg-cover bg-no-repeat bg-center w-full h-auto flex justify-start items-center flex-grow">
          <motion.h3
            variant={fadeup}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="font-medium text-[#fff] text-[48px] md:text-[60px] lg:text-[64px] ml-8 absolute top-[40%] left-[0%] -translate-y-[60%] font-jakarta tracking-tight leading-tight text-left w-full "
          >
            <span className="block text-[#fff] text-[90px]">Intecon Patnership Ltd</span>
            Consulting Engineers
          </motion.h3>
        </div>
        <div className="hero-image second-image bg-heroImageTwo w-full h-auto flex-grow">
          <motion.h3
            variant={fadeup}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="font-medium text-[#fff] text-[64px] ml-8 absolute top-[40%] left-[0%]  -translate-y-[60%] font-jakarta tracking-tight leading-tight text-left w-full "
          >
            <span className="block text-[#fff] text-[90px]">Intecon Patnership Ltd</span>
            Project Managers
          </motion.h3>
        </div>
        <div className="hero-image third-image bg-heroImageThree w-full h-auto flex-grow">
          <motion.h3
            variant={fadeup}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="font-medium text-[#fff] text-[64px] ml-8 absolute top-[40%] left-[0%]  -translate-y-[60%] font-jakarta tracking-tight leading-tight text-left w-full "
          >
            <span className="block text-[#fff] text-[90px]">Intecon Patnership Ltd</span>
            Expert Engineering Solutions
          </motion.h3>
        </div>
        <div className="hero-image fourth-image bg-heroImageFour w-full h-auto flex-grow">
          <motion.h3
            variant={fadeup}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="font-medium text-[#fff] text-[64px] ml-8 absolute top-[40%] left-[0%]  -translate-y-[60%] font-jakarta tracking-tight leading-tight text-left max-w-[75%] w-full "
          >
            <span className="block text-[#fff] text-[90px]">Intecon Patnership Ltd</span>
            Innovative Contruction and design
          </motion.h3>
        </div>
      </Slider>
    </>
  );
};

export default HeroSlider;
