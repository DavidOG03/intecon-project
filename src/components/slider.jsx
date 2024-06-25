import React from "react";
import Slider from "react-slick";

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

  return (
    <>
      <Slider {...settings}>
        <div className="hero-image first-image bg-gradient-to-br from-[#5161bb] to-[#7683ca] bg-cover bg-no-repeat bg-center w-full h-full flex justify-start items-center flex-grow">
          <h3 className="text-[#fff] text-[90px] ml-8 absolute top-[40%] left-[0%]  -translate-y-[60%] font-jakarta tracking-tighter leading-tight font-normal text-left w-full ">
            <span className="block text-[#fff]">Intecon Patnership Ltd</span>
            Consulting Engineers
          </h3>
        </div>
        <div className="hero-image second-image bg-heroImageTwo w-full h-full flex-grow">

        <h3 className="text-[#fff] text-[90px] ml-8 absolute top-[40%] left-[0%]  -translate-y-[60%] font-jakarta tracking-tighter leading-tight font-normal text-left w-full ">
            <span className="block text-[#fff]">Intecon Patnership Ltd</span>
            Project Managers
          </h3>
        </div>
        <div className="hero-image third-image bg-heroImageThree w-full h-full flex-grow">

        <h3 className="text-[#fff] text-[90px] ml-8 absolute top-[40%] left-[0%]  -translate-y-[60%] font-jakarta tracking-tighter leading-tight font-normal text-left w-full ">
            <span className="block text-[#fff]">Intecon Patnership Ltd</span>
            Geoscientists
          </h3>
        </div>
        <div className="hero-image fourth-image bg-heroImageFour w-full h-full flex-grow">

          <h3 className="text-[#fff] text-[90px] ml-8 absolute top-[40%] left-[0%]  -translate-y-[60%] font-jakarta tracking-tighter leading-tight font-normal text-left max-w-[75%] w-full ">
            <span className="block text-[#fff]">Intecon Patnership Ltd</span>
            Non Destructive Testers
          </h3>
        </div>
      </Slider>
    </>
  );
};

export default HeroSlider;
