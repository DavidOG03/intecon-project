import React from "react";
import { motion } from "framer-motion";
import Quote from "../components/quote";

const StructuralDesign = () => {
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
    <main className="structural-design bg-white pt-[60px]">
      <section className="intro px-3 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-6 place-items-stretch lg:gap-12 pt-6 pb-[120px]">
        <motion.div
          variants={fadeup}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="image-box w-full h-full max-h-[320px] md:max-h-[450px] xl:max-h-none overflow-hidden rounded-[12px]"
        >
          <img
            src="/images/olive-court.webp"
            alt="olive court"
            className="object-cover w-full"
          />
        </motion.div>
        <div className="text ">
          <motion.h3
            variants={fadeup}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="capitalize font-jakarta tracking-tighter text-[#1c1c1c] text-[36px] md:text-[48px] xl:text-[72px] text-left leading-tight font-medium mb-6 max-w-[768px]"
          >
            Structural Engineering design
          </motion.h3>
          <motion.p
            variants={fadeup}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-[14px] md:text-base text-[#1c1c1c] font-inter max-w-[768px] "
          >
            INTECON has gained experience in design of many structural
            engineering projects including high rise buildings, factories,
            warehouses etc. and also developed technical capabilities in
            handling structural projects of all sizes. The structural
            engineering team utilizes different analysis and design software
            such as STAAD PRO, CADRC and AUTOCAD, using standard procedures and
            quality production of drawing
          </motion.p>
          <motion.p
            variants={fadeup}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-4 text-[14px] md:text-basetext-[#1c1c1c] font-inter max-w-[768px]"
          >
            INTECON is well known as a top civil/structural engineering
            consulting firm providing sound technical solutions to engineering
            needs in the society. Our extensive structural engineering services
            include design of industrial buildings, factories, warehouses and
            heavy civil engineering works. Our achievements in this field are
            being enhanced through continuous development of our qualified
            professionals and utilization of state of the art equipment and
            software that comply with international standards.
          </motion.p>
        </div>
      </section>
      <section className="gallery px-6 py-[60px]">
        <motion.h3
          variants={fadeup}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text capitalize font-jakarta font-bold tracking-tight text-[#1c1c1c] text-[36px] md:text-[45px] xl:text-[54px] text-center leading-tight mb-6  mx-auto max-w-[620px]"
        >
          Structural Design projects gallery
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
              src="/images/structure1.png"
              alt="structure-work"
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
              src="/images/structure2.png"
              alt="structure-work"
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
              src="/images/structure3.png"
              alt="structure-work"
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
              src="/images/structure4.png"
              alt="structure-work"
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
              src="/images/staircase.png"
              alt="structure-work"
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
              src="/images/structure5.png"
              alt="structure-work"
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
              src="/images/structural-engr.png"
              alt="structure-work"
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
              src="/images/structure6.png"
              alt="structure-work"
              className="w-full max-w-[768px]"
            />
          </motion.div>
        </div>
      </section>
      <Quote />
    </main>
  );
};

export default StructuralDesign;