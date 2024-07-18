import React from "react";
import { motion } from "framer-motion";
import Quote from "../components/quote";

const Ndt = () => {
  const fadeup = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
        type: "tween",
        delay: 0.2,
      },
    },
  };

  const fadein = {
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
    <main className="ndt-page bg-white pt-[60px]">
      <section className="intro px-3 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-6 place-items-stretch lg:gap-12 pt-0 pb-[60px]">
        <motion.div
          variants={fadeup}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="image-box w-full h-full max-h-[320px] xl:max-h-none overflow-hidden rounded-[12px]"
        >
          <img
            src="/images/testing.webp"
            alt="testing"
            className="object-cover w-full"
          />
        </motion.div>
        <div className="text">
          <motion.h3
            variants={fadeup}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="capitalize font-jakarta tracking-tighter text-[#1c1c1c] text-[36px] md:text-[48px] xl:text-[72px] text-left leading-tight font-medium mb-6 max-w-[768px]"
          >
            Non-Destructive Testing
          </motion.h3>
          <motion.p
            variants={fadeup}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-[14px] md:text-base text-[#1c1c1c] font-inter max-w-[768px]"
          >
            INTECON’S has state of the art non-destructive test equipment, and
            highly trained inspection team, in carried out detailed, and
            accurate inspection to international standard. Our team of expert
            has successfully investigated, engineering infrastructures of
            varying complexities, including, Bridges, High-rise Building,
            Foundation structures, Steel structural Facilities.
          </motion.p>
          <motion.p
            variants={fadeup}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-4 text-[14px] md:text-base text-[#1c1c1c] font-inter max-w-[768px]"
          >
            INTECON is working continuously to ensure continual improvement of
            its non-destructive services to global trends international best
            practices.
          </motion.p>
        </div>
      </section>
      <section className="gallery px-3 py-[60px]">
        <motion.h3
          variants={fadeup}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text capitalize font-jakarta font-medium tracking-tight text-[#1c1c1c] text-[36px] md:text-[48px] xl:text-[64px] text-center leading-tight mb-6  mx-auto max-w-[768px]"
        >
          Non-destructive Testing Projects gallery
        </motion.h3>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <motion.div
            variants={fadein}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="project-pic"
          >
            <img
              src="/images/ndt1.png"
              alt="non-destructive Testingwork"
              className="w-full max-w-[768px]"
            />
          </motion.div>
          <motion.div
            variants={fadein}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="project-pic"
          >
            <img
              src="/images/ndt2.png"
              alt="non-destructive Testingwork"
              className="w-full max-w-[768px]"
            />
          </motion.div>
          <motion.div
            variants={fadein}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="project-pic"
          >
            <img
              src="/images/ndt3.png"
              alt="non-destructive Testingwork"
              className="w-full max-w-[768px]"
            />
          </motion.div>
          <motion.div
            variants={fadein}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="project-pic"
          >
            <img
              src="/images/ndt4.png"
              alt="non-destructive Testingwork"
              className="w-full max-w-[768px]"
            />
          </motion.div>
          <motion.div
            variants={fadein}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="project-pic"
          >
            <img
              src="/images/ndt5.png"
              alt="non-destructive Testingwork"
              className="w-full max-w-[768px]"
            />
          </motion.div>
          <motion.div
            variants={fadein}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="project-pic"
          >
            <img
              src="/images/lab-test.png"
              alt="non-destructive Testingwork"
              className="w-full max-w-[768px]"
            />
          </motion.div>
          <motion.div
            variants={fadein}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="project-pic"
          >
            <img
              src="/images/qaqc.png"
              alt="non-destructive Testingwork"
              className="w-full max-w-[768px] "
            />
          </motion.div>
          <motion.div
            variants={fadein}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="project-pic"
          >
            <img
              src="/images/non-destructive.webp"
              alt="non-destructive Testingwork"
              className="w-full max-w-[768px]"
            />
          </motion.div>
        </div>
      </section>
      <Quote />
    </main>
  );
};

export default Ndt;
