import React from "react";
import Director from "./director";
import Clients from "./clients";
import Quote from "./quote";
import AnimatedText from "./animatedText";
import { motion } from "framer-motion";

const fadeup = {
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

const About = () => {
  return (
    <main className="about w-full pt-[60px] lg:pt-[120px] bg-white ">
      <section className="mission px-3 lg:px-8 relative py-[20px] pb-[80px] md:flex md:flex-row-reverse items-start flex-row-reverse gap-12 w-full">
        <motion.div
          variants={fadein}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="image-box w-full basis-[50%] h-[220px] lg:h-[320px] bg-[url('/images/mission.webp')] bg-cover bg-[100%] rounded-[12px] shadow-xl "
        >
         
        </motion.div>
        <div className="text pt-6 md:pt-0 basis-[50%] overflow-hidden ">
          <motion.h3
            variants={fadeup}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-[#1c1c1c] font-jakarta text-[42px] md:text-[68px] xl:text-[90px] relative z-10"
          >
            Our Mission
            
          </motion.h3>
          <motion.p
            variants={fadeup}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-base font-inter text-[#1c1c1c] relative z-10 leading-relaxed"
          >
            Our mission is to provide technically sound engineering services on
            projects, to achieve the production of durable facilities and time
            tested solutions, at optimum costs to clients, and in a timely and
            environmentally friendly manner, utilizing highly trained manpower,
            cutting- edge technology and equipment.
            
          </motion.p>
        </div>
      </section>

      <section className="vision lg:flex lg:flex-row justify-center items-start gap-12 relative px-6 py-[80px] md:flex md:flex-row">
        <motion.div
          variants={fadein}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="image-box w-full basis-[50%] h-[220px] lg:h-[320px] bg-[url('/images/vision.webp')] bg-cover bg-[20%] rounded-[12px] shadow-xl "
        >
          
        </motion.div>
        <div className="text pt-6 md:pt-0 basis-[50%]">
          <motion.h3
            variants={fadeup}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-[#1c1c1c] font-jakarta text-[42px] md:text-[68px] xl:text-[90px] relative z-10"
          >
            Our Vision
          </motion.h3>
          <motion.p
            variants={fadeup}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-base text-[#1c1c1c] font-inter mb-6 relative z-10"
          >
            Our vision is to be one of the best consulting engineering firms in
            Africa and beyond, in the delivery of world class engineering
            services.
          </motion.p>
        </div>
      </section>

      <section className="overview px-6 relative py-[80px] md:flex md:flex-row-reverse items-start rev gap-4 w-full">
        <motion.div
          variants={fadein}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="image-box w-full basis-[50%] h-[220px] lg:h-[515px] bg-[url('/images/homepage-4.webp')] bg-cover bg-[100%] rounded-[12px] shadow-xl "
        >
        </motion.div>
        <div className="text pt-6 md:pt-0 basis-[50%]">
          <motion.h3
            variants={fadeup}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-[#1c1c1c] font-jakarta text-[42px] md:text-[68px] xl:text-[90px] relative z-10"
          >
            Who We Are
          </motion.h3>
          <motion.p
            variants={fadeup}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-base text-[#1c1c1c] font-inter mb-6 relative z-10 leading-relaxed"
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

      <section className="division md:flex md:flex-row justify-between items-start gap-12 relative px-6 py-[60px] lg:py-[80px]">
        <motion.div
          variants={fadein}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="image-box w-full basis-[50%] flex flex-col gap-4 h-[220px] lg:h-[515px] bg-[url('/images/geosciences.webp')] bg-cover bg-center rounded-[12px] shadow-xl "
        >
        </motion.div>
        <div className="text pt-6 md:pt-0 basis-[50%]">
          <motion.p
            variants={fadeup}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-base text-[#1c1c1c] font-inter mb-6 relative z-10"
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
            className="text-base text-[#1c1c1c] font-inter mb-6 relative z-10"
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
          className="font-jakarta capitalize text-[#1c1c1c]  text-[42px] md:text-[68px] xl:text-[90px] text-center mb-12"
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
            <p className="text-center text-[1rem] text-[#1c1c1c]">
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
            <p className="text-center text-[1rem] text-[#1c1c1c]">
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
            <p className="text-center text-[1rem] text-[#1c1c1c]">
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
            <p className="text-center text-[1rem] text-[#1c1c1c]">
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
            <p className="text-center text-[1rem] text-[#1c1c1c]">
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
          className=" font-jakarta capitalize text-[#1c1c1c] tracking-tight text-[42px] md:text-[68px] xl:text-[90px] text-center  leading-tight mb-12"
        >
          Meet Our Directors
        </motion.h3>
        <div className="team flex flex-row flex-wrap justify-center items-start gap-8 px-6">
          <Director
            img="/images/engr-ajibola-profile.webp"
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
            img="/images/engr-kehinde.webp"
            name="Engr. Kehinde Aremu"
            role="Managing Director"
            office="Interworks Engineering Ltd"
            degree="b.sc, m.sc, mba, mnse"
          />
          <Director
            img="/images/engr-jimmy.webp"
            name="Engr. Jimmy Ajibola"
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
        </div>
      </section>
      <section className="clients py-[69px]">
        <motion.h3
          variants={fadeup}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-[54px] mb-6 md:text-[90px] tracking-tight text-[#1c1c1c] font-jakarta capitalize text-center"
        >
          Our Clients
        </motion.h3>
        <Clients position="relative" />
      </section>
      <Quote />
    </main>
  );
};

export default About;
