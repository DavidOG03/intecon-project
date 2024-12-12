import React, { useEffect, useRef } from "react";
import Director from "../components/director";
import Clients from "../components/clients";
import Quote from "../components/quote";
import AnimatedText from "../components/animatedText";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ScrollToTopButton from "../components/scrolltotopbtn";
import PortfolioCard from "../components/portfolioCard";
import highway from "../../public/images/highway.webp";
import structure from "../../public/images/ogudu-3.webp";
import geoscience from "../../public/images/geosciences.webp";
import ndt from "../../public/images/testing.webp";
import video from "../../public/images/qaqc-13.webp";

const fadeup = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      type: "spring",
      delay: 0.2,
    },
  },
};

const fadein = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      type: "spring",
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
      <section className="heading bg-[url('/images/grid-pattern.webp')] bg-cover bg-center bg-no-repeat bg-fixed h-[100vh] grid place-content-center px-4 lg:px-[48px]">
        <motion.h1
          variants={fadeup}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          ref={mainContentRef}
          tabIndex="-1"
          className="heading font-host tracking-tight text-blackish text-[34px] md:text-[54px] xl:text-[84px] text-center leading-tight font-medium mb-6 py-[5rem] px-3 lg:px-[3rem]"
        >
          We are <span className="text-blue">consulting engineers</span> for{" "}
          <span className="text-blue">structure</span> and{" "}
          <span className="text-blue">highway projects</span>
        </motion.h1>
      </section>

      <section className="mission px-4 lg:px-[48px] relative mt-[20px] md:mt-[100px] pb-[60px] md:flex items-center gap-[60px] w-full py-12">
        <div className="text pb-6 md:pt-0 basis-[50%] overflow-hidden ">
          <motion.h3
            variants={fadeup}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-black font-host tracking-[0px] font-medium text-[34px] md:text-[54px] relative z-10 "
          >
            Our Mission
          </motion.h3>
          <motion.p
            variants={fadeup}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-base font-jakarta text-textblack relative z-10 leading-relaxed text-left"
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

      <img
        src="/images/intecon-thick.png"
        alt="intecon"
        className="absolute z-1 translate-x-[50%]"
      />

      <section className="vision justify-center items-center gap-[60px] relative px-4 lg:px-[48px] py-12 md:flex md:flex-row-reverse">
        <div className="text pb-6 md:pt-0 basis-[50%]">
          <motion.h3
            variants={fadeup}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-black font-host tracking-[0px] font-medium text-[34px] md:text-[54px] relative z-10"
          >
            Our Vision
          </motion.h3>
          <motion.p
            variants={fadeup}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-base text-textblack font-jakarta mb-6 relative z-10 text-left"
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

      <section className="overview px-4 lg:px-[48px] relative py-12 md:flex items-center gap-[60px] w-full">
        <div className="text pb-6 md:pt-0 basis-[50%]">
          <motion.h3
            variants={fadeup}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-black font-host tracking-[0px] font-medium text-[34px] md:text-[54px] relative z-10"
          >
            Who We Are
          </motion.h3>
          <motion.p
            variants={fadeup}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-base text-textblack font-jakarta mb-6 relative z-10 leading-relaxed text-left"
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
            <span className="font-bold font-jakarta block py-3">
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

      <section className="division md:flex md:flex-row-reverse justify-between items-center gap-[60px] relative px-4 lg:px-[48px] py-12 lg:py-[80px]">
        <div className="text pb-6 md:pt-0 basis-[50%]">
          <motion.p
            variants={fadeup}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-base text-textblack font-jakarta mb-6 relative z-10 text-left"
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
            className="text-base text-textblack font-jakarta mb-6 relative z-10 text-left"
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
      <section className="institutions py-12 px-4 lg:px-[48px] border-b border-t border-b-[#f1f1f1] border-t-[#f1f1f1] min-h-[100vh">
        <motion.h3
          variants={fadeup}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="font-host tracking-[0px] font-medium capitalize text-black text-[34px] md:text-[54px] text-center mb-8 max-w-[400px] md:max-w-[600px] mx-auto"
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
            <p className="text-center text-[1rem] text-textblack font-jakarta">
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
            <p className="text-center text-[1rem] text-textblack font-jakarta">
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
            <p className="text-center text-[1rem] text-textblack font-jakarta">
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
            <p className="text-center text-[1rem] text-textblack font-jakarta">
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
            <p className="text-center text-[1rem] text-textblack font-jakarta">
              Nigerian National Petroleum Corporation
            </p>
          </motion.div>
        </div>
      </section>

      <section className="directors py-12 px-4 lg:px-[48px] border-b border-b-[#f1f1f1]">
        <motion.h3
          variants={fadeup}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className=" font-host  font-medium capitalize text-black tracking-tight text-[34px] md:text-[54px] text-center  leading-tight mb-12"
        >
          Meet Our Directors
        </motion.h3>
        <motion.div
          variants={fadeup}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="team grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10"
        >
          <Director
            img="/images/engr-ajibola.webp"
            name="Engr. O. Alade Ajibola"
            role="chairman/CEO"
            office="Intecon Partnership Group Ltd"
            degree="FNSE, FAEng"
          />
          <Director
            img="/images/dr-adefolaju.webp"
            name="Late Engr. Dr. G.O. Adefolaju"
            role="Co-founder"
            office="Intecon Partnership Group Ltd"
            degree="PhD, FNSE"
          />
          <Director
            img="/images/engr-wale.webp"
            name="Engr. Wale Lagunju"
            role="Group Executive Director"
            office="Intecon Partnership Group Ltd"
            degree="b.sc, m.sc, mba, fnse, mni"
          />
          <Director
            img="/images/engr-aremu.webp"
            name="Engr. Kehinde Aremu"
            role="Managing Director"
            office="Interworks Engineering Ltd"
            degree="b.sc, m.sc, mba, MNSE"
          />
          <Director
            img="/images/jinmi.png"
            name="Engr. Jinmi Ajibola"
            role="Managing Director"
            office="Automated Geotechnical Ltd"
            degree="b.sc, m.sc, dic, MNSE"
          />
          <Director
            img="/images/engr-tunde.webp"
            name="Engr. Tunde Adefolaju"
            role="Director"
            office="Intecon Partnership Group Ltd "
            degree="b.sc, m.sc, MNSE"
          />
          <Director
            img="/images/engr-atilade.webp"
            name="Engr. Atilade Otunla"
            role="Chief Operating Officer"
            office="Intecon Partnership Group Ltd"
            degree="B.Tech, Msc, MNSE, MNIstruct.E"
          />
          <Director
            img="/images/engr-tomiwa.webp"
            name="Engr. Tomiwa Togonu-Bickersteth"
            role="Chief Operating Officer"
            office="Interworks Engineering Ltd"
            degree="B.sc, MNSE, C.eng"
          />
        </motion.div>
      </section>
      <section className="clients py-[60px] border border-transparent border-b-[#f1f1f1]">
        <motion.h3
          variants={fadeup}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-[34px] mb-6 md:text-[54px] tracking-tight text-black font-host  font-medium capitalize text-center"
        >
          Our Clients
        </motion.h3>
        <Clients position="relative" />
      </section>
      <section className=" py-[60px] text-center px-4 lg:px-[48px]">
        <motion.h3
          variants={fadeup}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-[34px] mb-6 md:text-[54px] tracking-tight text-black font-host font-medium capitalize text-center pb-5 max-w-[400px] md:max-w-[600px] mx-auto"
        >
          Explore Our Project Portfolio
        </motion.h3>
        <div className="links grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 place-items-end">
          <PortfolioCard
            img={highway}
            title="Highway and Bridges Projects"
            description=""
            link="/highway-bridges-design"
          />
          <PortfolioCard
            img={structure}
            title="Structural Design Projects"
            description=""
            link="/structural-design"
          />
          <PortfolioCard
            img={geoscience}
            title="Geosciences Projects"
            description=""
            link="/geosciences"
          />
          <PortfolioCard
            img={ndt}
            title="Non-Destructive Testing Projects"
            description=""
            link="/non-destructive-testing"
          />
          <PortfolioCard
            img={video}
            title="Projects Videos"
            description=""
            link="/youtube-videos"
          />
        </div>
      </section>
      <Quote />
      <ScrollToTopButton />
    </main>
  );
};

export default About;
