import React from "react";
import { motion } from "framer-motion";

const Geosciences = () => {
  const fadeup = {
    hidden: { opacity: 0, y: -30 },
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

  const fadein = {
    hidden: { opacity: 0, y: -50 },
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
    <main className="geosciences-page bg-white pt-[120px]">
      <section className="intro px-6 grid grid-cols-1 lg:grid-cols-2 gap-6 place-items-stretch lg:gap-12 pt-6 pb-[120px]">
        <motion.div
          variants={fadein}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="image-box w-full h-full max-h-[320px] xl:max-h-none overflow-hidden"
        >
          <img
            src="/images/geosciences.png"
            alt="geosciences"
            className="object-fill w-full"
          />
        </motion.div>
        <div className="text">
          <motion.h3
            variants={fadeup}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="capitalize font-jakarta tracking-tighter text-[#1c1c1c] text-[24px] md:text-[48px] xl:text-[72px] text-left leading-tight mb-6 max-w-[768px]"
          >
            Geosciences
          </motion.h3>
          <motion.p
            variants={fadeup}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-[14px] md:text-base text-[#1c1c1c] font-inter max-w-[768px]"
          >
            INTECON is very proud of its achievement in providing this
            specialized service in the construction industry over the years.
            INTECON boasts of sophisticated equipments and highly skilled
            manpower, with international exposure and experience in offshore
            geotechnical work, analysis and foundation design.
          </motion.p>
          <motion.p
            variants={fadeup}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-4 text-[14px] md:text-base text-[#1c1c1c] font-inter max-w-[768px]"
          >
            INTECON has led others in providing geotechnical services on sites
            for high rise buildings and bridges in sand fill areas, power lines
            through thick forest and swampy terrain, Independent Power Projects,
            LNG and Oil Terminals development Projects. Our experience and
            knowledge of almost all the terrains in the country proves to be our
            great advantage.ent and software that comply with international
            standards.
          </motion.p>
          <motion.p
            variants={fadeup}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-4 text-[14px] md:text-base text-[#1c1c1c] font-inter max-w-[768px]"
          >
            Our laboratory facility in Lagos is equipped with modern laboratory
            equipment for geotechnical/ civil/ structural testing services. Our
            personnel are well trained and experienced in the latest procedures
            and carry out testing to BS, ASTM and other international standards
            as may be applicable.
          </motion.p>
        </div>
      </section>
      <section className="gallery px-6">
        <motion.h3
          variants={fadeup}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text capitalize font-jakarta tracking-tighter text-[#1c1c1c] text-[36px] md:text-[45px] xl:text-[54px] text-left leading-tight mb-6 max-w-[768px]"
        >
          Geoscience projects pictures
        </motion.h3>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <img
            src="/images/geosciences.png"
            alt="geo-work"
            className="w-full max-w-[768px] "
          />
          <img
            src="/images/geo2.png"
            alt="geo-work"
            className="w-full max-w-[768px]"
          />
          <img
            src="/images/geo3.png"
            alt="geo-work"
            className="w-full max-w-[768px]"
          />
          <img
            src="/images/geo4.png"
            alt="geo-work"
            className="w-full max-w-[768px]"
          />
          <img
            src="/images/geosciences.webp"
            alt="geo-work"
            className="w-full max-w-[768px]"
          />
          <img
            src="/images/lab-test.png"
            alt="geo-work"
            className="w-full max-w-[768px]"
          />
          <img
            src="/images/geo1.png"
            alt="geo-work"
            className="w-full max-w-[768px] "
          />
          {/* <img
            src="/images/geo6.png"
            alt="geo-work"
            className="w-full max-w-[768px]"
          /> */}
        </div>
      </section>
    </main>
  );
};

export default Geosciences;
