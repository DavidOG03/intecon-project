import React, { useEffect, useRef } from "react";
import Director from "../components/director";
import Clients from "../components/clients";
import Quote from "../components/quote";
import AnimatedText from "../components/animatedText";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ScrollToTopButton from "../components/scrolltotopbtn";

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
    <main className="about w-full pt-[60px] lg:pt-[120px] bg-white relative">
      <section className="heading bg-[url('/images/grid-pattern.webp')] bg-cover bg-center bg-no-repeat bg-fixed h-[100vh] grid place-content-center">
        <motion.h1
          variants={fadeup}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          ref={mainContentRef}
          tabIndex="-1"
          className="heading font-jakarta tracking-tighter text-blackish text-[34px] md:text-[54px] xl:text-[84px] text-center leading-tight font-medium mb-6 py-[5rem] px-3 lg:px-[3rem]"
        >
          We are <span className="text-blue">consulting engineers</span> for{" "}
          <span className="text-blue">structure</span> and{" "}
          <span className="text-blue">highway projects</span>
        </motion.h1>
      </section>

      <section className="mission px-3 lg:px-8 relative py-[20px] pb-[60px] md:flex items-center gap-[60px] w-full">
      

        <div className="text pb-6 md:pt-0 basis-[50%] overflow-hidden ">
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
            className="text-base font-inter text-textblack relative z-10 leading-relaxed text-left"
          >
            Our mission is to provide technically sound engineering services on
            projects, to achieve the production of durable facilities and time
            tested solutions, at optimum costs to clients, and in a timely and
            environmentally friendly manner, utilizing highly trained manpower,
            cutting- edge technology and equipment.
          </motion.p>
        </div>
        <motion.div
          variants={fadein}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="image-box w-full basis-[50%] h-[220px] lg:h-[320px] bg-[url('/images/mission.webp')] bg-cover bg-[100%] bg-no-repeat  rounded-[6px]  "
        ></motion.div>
      </section>


      <img src="/images/intecon-thick.png" alt="intecon"  className="absolute z-1 translate-x-[50%]"/>

      <section className="vision justify-center items-center gap-[60px] relative px-3 lg:px-8 py-[80px] md:flex md:flex-row-reverse min-h-[100vh]" >
        <div className="text pb-6 md:pt-0 basis-[50%]">
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
            className="text-base text-textblack font-inter mb-6 relative z-10 text-left"
          >
            Our vision is to be one of the best consulting engineering firms in
            Africa and beyond, in the delivery of world class engineering
            services.
          </motion.p>
        </div>
        <motion.div
          variants={fadein}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="image-box w-full basis-[50%] h-[220px] lg:h-[320px] bg-[url('/images/vision.webp')] bg-cover bg-[20%] rounded-[6px]  "
        ></motion.div>
      </section>

      <section className="overview px-6 relative py-[80px] md:flex items-center gap-[60px] w-full min-h-[100vh">
        
        <div className="text pb-6 md:pt-0 basis-[50%]">
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
            className="text-base text-textblack font-inter mb-6 relative z-10 leading-relaxed text-left"
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
            <span className="font-bold font-inter block my-3">
              INTECON is an ISO 9001 :2015 Certiﬁed Company
            </span>
          </motion.p>
        </div>
        <motion.div
          variants={fadein}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="image-box w-full basis-[50%] h-[320px] md:h-[515px] bg-[url('/images/qaqc-13.webp')] bg-cover bg-center rounded-[6px]  "
        ></motion.div>
      </section>

      <section className="division md:flex md:flex-row-reverse justify-between items-center gap-[60px] relative px-6 py-[60px] lg:py-[80px] min-h-[100vh">
        <div className="text pb-6 md:pt-0 basis-[50%]">
          <motion.p
            variants={fadeup}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-base text-textblack font-inter mb-6 relative z-10 text-left"
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
            className="text-base text-textblack font-inter mb-6 relative z-10 text-left"
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
        <motion.div
          variants={fadein}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="image-box w-full basis-[50%] flex flex-col gap-4 h-[320px] md:h-[515px] bg-[url('/images/geosciences.webp')] bg-cover bg-center rounded-[6px]  "
        ></motion.div>
      </section>
      <section className="institutions py-[60px] px-6 border-b border-t border-b-[#f1f1f1] border-t-[#c9c7c7] min-h-[100vh">
        <motion.h3
          variants={fadeup}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="font-jakarta font-medium capitalize text-black text-[34px] md:text-[54px] text-center mb-8 max-w-[400px] md:max-w-[600px] mx-auto"
        >
          Statutory Institutions Registration
        </motion.h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-3 gap-y-6 place-items-end">
          <motion.div
            variants={fadeup}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className=" cac flex flex-col justify-between items-center gap-4"
          >
            <img
              className="object-cover"
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
            className=" coren flex flex-col justify-between items-center gap-4 "
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
            className=" acen flex flex-col justify-between items-center gap-4 "
          >
            <img
              className="object-cover"
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
            className=" dpr flex flex-col justify-between items-center gap-4 "
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
            className=" nnpc flex flex-col justify-between items-center gap-4 "
          >
            <img
              className="object-cover"
              src="/images/nnpc.webp"
              alt="Nigerian National Petroleum Corporation"
            />
            <p className="text-center text-[1rem] text-textblack font-inter">
              Nigerian National Petroleum Corporation
            </p>
          </motion.div>
        </div>
      </section>
      <section className="directors py-[120px] border-b border-b-[#f1f1f1]">
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
          className="team grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-3 gap-y-4 px-3 md:px-6"
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
      <section className="clients py-[69px] border border-transparent border-b-[#f1f1f1]">
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
      <section className=" py-[20px] text-center px-3">
        <h3 className="text-[34px] mb-6 md:text-[54px] tracking-tight text-black font-jakarta font-medium capitalize text-center pb-5 max-w-[400px] md:max-w-[600px] mx-auto">
          Explore Our Project Portfolio
        </h3>
        <div className="links flex flex-col justify-center items-center lg:flex-row gap-2">
          <Link
            to="/highway-bridges-design"
            className="goto flex w-full md:max-w-[300px] bg-blue text-white mx-auto mb-6 py-3 px-2 rounded-lg items-center gap-2"
          >
            Highway and Bridges Design <img src="/images/arrow_outward.svg" alt="arrow_outward.svg" className="w-4" />
          </Link>
          <Link
            to="/structural-design"
            className="goto flex w-full md:max-w-[300px] bg-blue text-white mx-auto mb-6 py-3 px-2 rounded-lg items-center gap-2"
          >
            Structural Design <img src="/images/arrow_outward.svg" alt="arrow_outward.svg" className="w-4" />
          </Link>
          <Link
            to="/geosciences"
            className="goto flex w-full md:max-w-[300px] bg-blue text-white mx-auto mb-6 py-3 px-2 rounded-lg items-center gap-2"
          >
            Geosciences <img src="/images/arrow_outward.svg" alt="arrow_outward.svg" className="w-4" />
          </Link>
          <Link
            to="/non-destructive-testing"
            className="goto flex w-full md:max-w-[300px] bg-blue text-white mx-auto mb-6 py-3 px-2 rounded-lg items-center gap-2"
          >
            Non-destructive Testing <img src="/images/arrow_outward.svg" alt="arrow_outward.svg" className="w-4" />
          </Link>
        </div>
      </section>
      <Quote />
      <ScrollToTopButton/>
    </main>
  );
};

export default About;
