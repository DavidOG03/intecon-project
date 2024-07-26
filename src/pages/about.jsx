import React, { useEffect, useRef } from "react";
import Director from "../components/director";
import Clients from "../components/clients";
import Quote from "../components/quote";
import AnimatedText from "../components/animatedText";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

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
};



const About = () => {
  const mainContentRef = useRef(null);

useEffect(() => {
  if (mainContentRef.current) {
    mainContentRef.current.focus();
  }
}, []);
  return (
    <main className="about w-full pt-[60px] lg:pt-[120px] bg-white ">
      <section className="heading bg-[url('/images/grid-pattern.webp')] bg-cover bg-center bg-no-repeat bg-fixed h-[100vh] grid place-content-center">
        <motion.h1
          variants={fadeup}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          ref={mainContentRef}
          tabIndex="-1"
          className="heading font-jakarta tracking-tighter text-blackish text-[32px] md:text-[48px] xl:text-[84px] text-center leading-tight font-medium mb-6 py-[5rem] px-3 lg:pl-[3rem]"
        >
          We are <span className="text-blue">consulting engineers</span> for{" "}
          <span className="text-blue">structure</span> and{" "}
          <span className="text-blue">highway projects</span>
        </motion.h1>
      </section>
      {/* <section className="intro px-3 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-6 place-items-stretch lg:gap-12 pt-0 pb-[60px]"></section> */}

      <section className="mission px-3 lg:px-8 relative py-[20px] pb-[80px] md:flex md:flex-row-reverse items-center flex-row-reverse gap-[60px] w-full">
        <motion.div
          variants={fadein}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="image-box w-full basis-[50%] h-[220px] lg:h-[320px] bg-[url('/images/mission.webp')] bg-cover bg-[100%] rounded-[12px]  "
        ></motion.div>
        <div className="text pt-6 md:pt-0 basis-[50%] overflow-hidden ">
          <motion.h3
            variants={fadeup}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-black font-jakarta font-medium text-[34px] md:text-[54px] relative z-10 "
          >
            Our Mission
          </motion.h3>
          <motion.p
            variants={fadeup}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-base font-inter text-textblack relative z-10 leading-relaxed text-justify"
          >
            Our mission is to provide technically sound engineering services on
            projects, to achieve the production of durable facilities and time
            tested solutions, at optimum costs to clients, and in a timely and
            environmentally friendly manner, utilizing highly trained manpower,
            cutting- edge technology and equipment.
          </motion.p>
        </div>
      </section>

      <section className="vision lg:flex lg:flex-row justify-center items-center gap-[60px] relative px-6 py-[80px] md:flex md:flex-row">
        <motion.div
          variants={fadein}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="image-box w-full basis-[50%] h-[220px] lg:h-[320px] bg-[url('/images/vision.webp')] bg-cover bg-[20%] rounded-[12px]  "
        ></motion.div>
        <div className="text pt-6 md:pt-0 basis-[50%]">
          <motion.h3
            variants={fadeup}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-black font-jakarta font-medium text-[34px] md:text-[54px] relative z-10"
          >
            Our Vision
          </motion.h3>
          <motion.p
            variants={fadeup}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-base text-textblack font-inter mb-6 relative z-10"
          >
            Our vision is to be one of the best consulting engineering firms in
            Africa and beyond, in the delivery of world class engineering
            services.
          </motion.p>
        </div>
      </section>

      <section className="overview px-6 relative py-[80px] md:flex md:flex-row-reverse items-center gap-[60px] w-full">
        <motion.div
          variants={fadein}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="image-box w-full basis-[50%] h-[220px] md:h-[515px] bg-[url('/images/homepage-4.webp')] bg-cover bg-[0%] rounded-[12px]  "
        ></motion.div>
        <div className="text pt-6 md:pt-0 basis-[50%]">
          <motion.h3
            variants={fadeup}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-black font-jakarta font-medium text-[34px] md:text-[54px] relative z-10"
          >
            Who We Are
          </motion.h3>
          <motion.p
            variants={fadeup}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-base text-textblack font-inter mb-6 relative z-10 leading-relaxed text-justify"
          >
            Intecon Partnership Limited is a leading ﬁrm of Nigerian Consulting
            Engineers specializing in areas of heavy industrial and large scale
            civil engineering works such as high-rise buildings, factories,
            stadia, highways and bridges, airstrips and hangars, helicopter
            bases, ports, jetties, oil terminals and housing estate. Established
            in 1976, the ﬁrm has been operating for over 40 years and is
            credited with many successfully completed projects within the length
            and breadth of Nigeria and along the west African Coast. INTECON’s
            clientele include operators in the Oil and Gas Industry, Federal and
            State Governments, Infrastructure Companies, Aviation and Private
            Institutions.
            <span className="font-bold font-inter block my-12">
              INTECON is an ISO 9001 :2015 Certiﬁed Company
            </span>
          </motion.p>
        </div>
      </section>

      <section className="division md:flex md:flex-row justify-between items-center gap-[60px] relative px-6 py-[60px] lg:py-[80px]">
        <motion.div
          variants={fadein}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="image-box w-full basis-[50%] flex flex-col gap-4 h-[220px] md:h-[515px] bg-[url('/images/geosciences.webp')] bg-cover bg-center rounded-[12px]  "
        ></motion.div>
        <div className="text pt-6 md:pt-0 basis-[50%]">
          <motion.p
            variants={fadeup}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-base text-textblack font-inter mb-6 relative z-10 text-justify"
          >
            Apart from its extensive consulting engineering capabilities,
            Intecon Partnership Ltd is the parent company of two other
            specialist companies viz: Automated Geotechnics Ltd and Interworks
            Engineering Ltd.
          </motion.p>
          <motion.p
            variants={fadeup}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-base text-textblack font-inter mb-6 relative z-10 text-justify"
          >
            <strong>AUTOMATED GEOTECHNICS</strong> was established in the year
            1997 in response to the dearth of competent local Geotechnical
            Engineering Companies equipped with modern facilities at the time.
            Thus, the philosophy behind its formation is to digitally ‘automate’
            its operations from the ﬁeld to the laboratory. Hence, it is
            equipped with such State-of-the-Art equipment, such as 20Tons Pagani
            CPT equipment; New Humboldt Automated Triaxial Testing Machine;
            Automated Sieve Analyses equipment e.t.c. <br />
            <br /> <strong>INTERWORKS ENGINEERING</strong> was established in
            1997, as well, to execute the Procurement and Construction of
            projects engineered by Intecon Partnership Ltd. or other entities.
            It has successfully completed the execution of several projects for
            the Oil & Gas Industry, Multinational Clients as well as Academic
            and Government Institutions across the country.
          </motion.p>
        </div>
      </section>
      <section className="institutions py-[60px] px-6 border-b border-t border-b-[#c9c7c7] border-t-[#c9c7c7]">
        <motion.h3
          variants={fadeup}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="font-jakarta font-medium capitalize text-black  text-[34px] md:text-[54px] text-center mb-12"
        >
          Statutory Institutions Registration
        </motion.h3>
        <div className="flex flex-row flex-wrap md:flex-nowrap justify-center items-stretch gap-12 md:gap-6">
          <motion.div
            variants={fadeup}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className=" cac flex flex-col justify-between items-center gap-4 h-[150px] md:h-[200px]"
          >
            <img
              className="w-[120px]"
              src="/images/cac.png"
              alt="corporate Affairs Commission logo"
            />
            <p className="text-center text-[1rem] text-textblack font-inter">
              Corporate Affairs Commission
            </p>
          </motion.div>
          <motion.div
            variants={fadeup}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className=" coren flex flex-col justify-between items-center gap-4 h-[150px] md:h-[200px]"
          >
            <img
              className="w-[200px]"
              src="/images/coren.webp"
              alt="Council for the Regulation of Engineering in Nigeria logo"
            />
            <p className="text-center text-[1rem] text-textblack font-inter">
              Council for the Regulation of Engineering in Nigeria
            </p>
          </motion.div>
          <motion.div
            variants={fadeup}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className=" acen flex flex-col justify-between items-center gap-4 h-[150px] md:h-[200px]"
          >
            <img
              className="w-[120px]"
              src="/images/acen.webp"
              alt="Association for Consulting Engineering Nigeria logo"
            />
            <p className="text-center text-[1rem] text-textblack font-inter">
              Association for Consulting Engineering Nigeria
            </p>
          </motion.div>
          <motion.div
            variants={fadeup}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className=" dpr flex flex-col justify-between items-center gap-4 h-[150px] md:h-[200px]"
          >
            <img
              className="w-[200px]"
              src="/images/dpr.webp"
              alt="Department of Petroleum Resources logo"
            />
            <p className="text-center text-[1rem] text-textblack font-inter">
              Department of Petroleum Resources
            </p>
          </motion.div>
          <motion.div
            variants={fadeup}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className=" nnpc flex flex-col justify-between items-center gap-4 h-[150px] md:h-[200px]"
          >
            <img
              className="w-[120px]"
              src="/images/nnpc.webp"
              alt="Nigerian National Petroleum Corporation"
            />
            <p className="text-center text-[1rem] text-textblack font-inter">
              Nigerian National Petroleum Corporation
            </p>
          </motion.div>
        </div>
      </section>
      <section className="directors py-[120px] border-b border-b-[#c9c7c7]">
        <motion.h3
          variants={fadeup}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className=" font-jakarta font-medium capitalize text-black tracking-tight text-[34px] md:text-[54px] text-center  leading-tight mb-12"
        >
          Meet Our Directors
        </motion.h3>
        <motion.div
          variants={fadeup}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="team flex flex-row flex-wrap justify-center items-start gap-8 px-6"
        >
          <Director
            img="/images/engr-ajibola.webp"
            name="Engr. O. Alade Ajibola"
            role="chairman/CEO"
            office="Intecon Partnership Group Ltd"
            degree="FNSE,FAEng"
          />
          <Director
            img="/images/engr-wale.webp"
            name="Engr. Wale Lagunju"
            role="Group Executive Director"
            office="Intecon Partnership Group Ltd"
            degree="b.sc,m.sc,mba,fnse, mni"
          />
          <Director
            img="/images/engr-aremu.webp"
            name="Engr. Kehinde Aremu"
            role="Managing Director"
            office="Interworks Engineering Ltd"
            degree="b.sc, m.sc, mba, mnse"
          />
          <Director
            img="/images/jinmi.png"
            name="Engr. Jinmi Ajibola"
            role="Managing Director"
            office="Automated Geotechnical Ltd"
            degree="b.sc, m.sc, dic,mnse"
          />
          <Director
            img="/images/engr-tunde.webp"
            name="Engr. Tunde Adefolaju"
            role="Director"
            office=" "
            degree="b.sc, m.sc,mnse"
          />
        </motion.div>
      </section>
      <section className="clients py-[69px]">
        <motion.h3
          variants={fadeup}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-[34px] mb-6 md:text-[54px] tracking-tight text-black font-jakarta font-medium capitalize text-center"
        >
          Our Clients
        </motion.h3>
        <Clients position="relative" />
      </section>
      <section className="goto py-[20px] text-center">
        <h3 className="text-[34px] md:text-[54px] capitalize font-jakarta font-medium pb-5">
        Explore Our Project Portfolio
        </h3>
        <Link
          to="/highway-bridges-design"
          className="goto block max-w-[300px] bg-blue text-white mx-auto mb-[60px] p-4 rounded-lg"
        >
          Highway and Bridges Design Projects
        </Link>
      </section>
      <Quote />
    </main>
  );
};

export default About;
