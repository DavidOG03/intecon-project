import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Quote from "../components/quote";
import { Link } from "react-router-dom";
import ProjectVideos from "../components/projectVideo";
import ProjectCard from "../components/projectCard";
import PortfolioCard from "../components/portfolioCard";
import structure from '../../public/images/ogudu-3.webp'
import geoscience from '../../public/images/geosciences.webp'
import ndt from '../../public/images/testing.webp'
import video from '../../public/images/qaqc-13.webp'


const HighwayBridges = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

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
    hidden: { opacity: 0.5, y: 20 },
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
    exit: { opacity: 0, y: -20 },
  };

  const mainContentRef = useRef(null);

  useEffect(() => {
    if (mainContentRef.current) {
      mainContentRef.current.focus();
    }
  }, []);

  return (
    <main className="highway-design  bg-white pt-[60px] ">
      <section className="heading bg-[url('/images/grid-pattern.webp')] bg-cover bg-center bg-no-repeat bg-fixed h-[100vh] grid place-content-center">
        <motion.h1
          variants={fadeup}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          ref={mainContentRef}
          tabIndex="-1"
          className="heading font-host tracking-tight text-blackish text-[34px] md:text-[54px] xl:text-[64px] text-center leading-tight font-medium mb-6 py-[5rem] px-3 lg:pl-[3rem]"
        >
          We have <span className="text-blue">designed road networks</span> that
          meet <span className="text-blue">modern day needs</span> for both{" "}
          <span className="text-blue">Government </span>and{" "}
          <span className="text-blue">private institutions</span>
        </motion.h1>
      </section>

      <section className="intro px-3 lg:px-[48px] grid grid-cols-1 lg:grid-cols-2 gap-6 place-items-stretch lg:gap-12 pt-[60px] pb-[60px] items-center">
        <motion.div
          variants={fadeup}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="image-box w-full h-full min-h-[320px] rounded-[12px] bg-[url('/images/road-project-4.webp')] bg-no-repeat bg-cover bg-center"
        ></motion.div>
        <div className="text">
          <motion.p
            variants={fadeup}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-[14px] md:text-base text-textblack font-jakarta max-w-[768px]"
          >
            INTECON has been involved in many highway and bridge projects for
            state, federal governments and multinationals across the length and
            breadth of Nigeria through different terrain raging from swampy in
            the Niger Delta to dry land in the hinterland. We have developed
            both human and technical skills over the years with highly qualified
            engineers on hand to handle the designs employing relevant standard
            and quality control procedures in the delivery project. We have
            up-to-date design packages for highway and bridge designs such as
            CIVILCAD, AUTOCAD, LAND DEVELOPMENT, SUPERSTRESS, STAADPRO etc.
          </motion.p>
          <motion.p
            variants={fadeup}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-4 text-[14px] md:text-base text-textblack font-jakarta max-w-[768px]"
          >
            In our highway design we optimize sustainability and harmonize our
            design with the environment in form of developing design and
            construction schemes that minimizes or eliminate traffic
            interference during construction.
          </motion.p>
        </div>
      </section>
      <section className="gallery px-3 lg:px-[48px] py-[60px]">
        <motion.h3
          variants={fadeup}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text capitalize font-host font-semibold tracking-tight text-black text-[36px] md:text-[45px] xl:text-[54px] text-center leading-[1.2] mb-[60px] mx-auto max-w-[720px]"
        >
          Projects gallery
        </motion.h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          <ProjectCard
            img="/images/road-project.webp"
            title="Highway/Road Construction"
            description="Construction Supervision Of Iseyin Ogbomosho Road"
          />
          <ProjectCard
            img="/images/road-project-2.webp"
            title="Highway/Road Construction"
            description="Construction Supervision Of Iseyin Ogbomosho Road"
          />
          <ProjectCard
            img="/images/road-project-3.webp"
            title="Highway/Road Construction"
            description="Construction Supervision Of Iseyin Ogbomosho Road"
          />
          <ProjectCard
            img="/images/road-project-4.webp"
            title="Highway/Road Construction"
            description="Construction Supervision Of Iseyin Ogbomosho Road"
          />
          <ProjectCard
            img="/images/road-project-5.webp"
            title="Highway/Road Construction"
            description="Construction Supervision Of Iseyin Ogbomosho Road"
          />
          <ProjectCard
            img="/images/quarry-3.webp"
            title="Highway/Road Construction"
            description="Construction Supervision Of Iseyin Ogbomosho Road"
          />
        </div>
      </section>

      <ProjectVideos />

      <section className="projects px-3 lg:px-[48px] py-[60px] ">
        <motion.h3
          variants={fadeup}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text capitalize font-host font-semibold tracking-tight text-black text-[36px] md:text-[45px] xl:text-[54px] text-center leading-[1] mb-[60px] mx-auto max-w-[768px]"
        >
          Past Highway and Bridges Projects
        </motion.h3>
        <div className="projects-container xl:max-w-[70%] mx-auto w-full flex flex-col justify-start items-stretch gap-8 lg:flex-row relative">
          <div className="project-tabs basis-[20%] h-full flex flex-row lg:flex-col justify-between items-stretch gap-4 lg:gap-[60px] sticky top-[64px] lg:top-[90px] left-0 z-50 bg-white py-3">
            <button
              className={`project-tab w-full p-3 lg:p-12 text-[13px] text-base font-host font-bold rounded-lg hover:bg-lightblue ${
                activeTab === 1
                  ? "bg-blue text-white"
                  : "bg-gray-200 text-black"
              }`}
              onClick={() => handleTabClick(1)}
            >
              Projects Tab 1
            </button>
            <button
              className={`project-tab w-full p-3 lg:p-10 text-[13px] text-base font-host font-bold rounded-lg hover:bg-lightblue ${
                activeTab === 2
                  ? "bg-blue text-white"
                  : "bg-gray-200 text-black"
              }`}
              onClick={() => handleTabClick(2)}
            >
              Projects Tab 2
            </button>
            <button
              className={`project-tab w-full p-3 lg:p-10 text-[13px] text-base font-host font-bold rounded-lg hover:bg-lightblue ${
                activeTab === 3
                  ? "bg-blue text-white"
                  : "bg-gray-200 text-black"
              }`}
              onClick={() => handleTabClick(3)}
            >
              Projects Tab 3
            </button>
          </div>

          {activeTab === 1 && (
            <motion.table
              variants={fadein}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="max-w-[750px] ml-auto bg-white border border-gray-300 basis-[80%]"
            >
              <thead>
                <tr>
                  <th className=" py-2 border-[1px] border-gray-300 text-left text-[14px] md:text-base font-host px-1">
                    S/N
                  </th>
                  <th className=" py-2 border-[1px] border-gray-300 text-left text-[14px] md:text-base font-host px-1">
                    Project Description
                  </th>
                  <th className=" py-2 border-[1px] border-gray-300 text-left text-[14px] md:text-base font-host px-1">
                    Year
                  </th>
                  <th className=" py-2 border-[1px] border-gray-300 text-left text-[14px] md:text-base font-host px-1">
                    Clients
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-jakarta">
                    1
                  </td>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-jakarta">
                    Consultancy Services for the Supervision, Rehabilitation and
                    Reconstruction of Lagos – Ibadan Dual Carriageway under
                    Private Finance Initiative
                  </td>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-jakarta">
                    Project On-Hold
                  </td>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-jakarta">
                    Motorways Asset Ltd/FMW
                  </td>
                </tr>
                <tr>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-jakarta">
                    2
                  </td>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-jakarta">
                    Consultancy Services for the Engineering Design for the
                    Dualization of Ilorin – Jebba – Mokwa Highway
                  </td>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-jakarta">
                    2014
                  </td>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-jakarta">
                    Federal Ministry of Works Abuja
                  </td>
                </tr>
                <tr>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-jakarta">
                    3
                  </td>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-jakarta">
                    Engineering Design of Interchange Near Lokoja International
                    Market and NNPC Mega Station, Along Abuja – Lokoja Road
                    Dualization, Section IV
                  </td>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-jakarta">
                    Oct 2010 - July 2014
                  </td>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-jakarta">
                    Federal Ministry of Works Abuja
                  </td>
                </tr>
                <tr>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-jakarta">
                    4
                  </td>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-jakarta">
                    Consultancy Services for the Supervision of the
                    Rehabilitation of Kunya- Kanya – Babura - Bababmutum Road
                  </td>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-jakarta">
                    2013
                  </td>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-jakarta">
                    Federal Ministry of Works Abuja
                  </td>
                </tr>
                <tr>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-jakarta">
                    5
                  </td>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-jakarta">
                    Emergency Reconstruction of Flooded Sections of Abuja –
                    Lokoja Road, CH 23 + 400 to CH 26 + 395 (Kotonkarfe –
                    Lokoja) in Kogi State.
                  </td>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-jakarta">
                    2013
                  </td>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-jakarta">
                    Federal Ministry of Works Abuja
                  </td>
                </tr>
                <tr>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-jakarta">
                    6
                  </td>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-jakarta">
                    Engineering Design for the Rehabilitation of Ilorin – Jebba
                    – Mokwa Highway.
                  </td>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-jakarta">
                    2013
                  </td>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-jakarta">
                    Federal Ministry of Works Abuja
                  </td>
                </tr>
              </tbody>
            </motion.table>
          )}
          {/* 2nd Table */}
          {activeTab === 2 && (
            <motion.table
              variants={fadein}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="max-w-[750px] mx-auto bg-white border border-gray-300 basis-[80%]"
            >
              <thead>
                <tr>
                  <th className=" py-2 border-[1px] border-gray-300 text-left text-[14px] md:text-base font-host px-1">
                    S/N
                  </th>
                  <th className=" py-2 border-[1px] border-gray-300 text-left text-[14px] md:text-base font-host px-1">
                    Project Description
                  </th>
                  <th className=" py-2 border-[1px] border-gray-300 text-left text-[14px] md:text-base font-host px-1">
                    Year
                  </th>
                  <th className=" py-2 border-[1px] border-gray-300 text-left text-[14px] md:text-base font-host px-1">
                    Clients
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-jakarta">
                    7
                  </td>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-jakarta">
                    Consultancy Services for the Engineering Design for the
                    Rehabilitation of Ijora – Apapa Bridge.
                  </td>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-jakarta">
                    2013
                  </td>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-jakarta">
                    Federal Ministry of Works Abuja
                  </td>
                </tr>
                <tr>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-jakarta">
                    8
                  </td>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-jakarta">
                    Detailed Design and Preparation of Bidding Document for the
                    Rehabilitation of Mokwa Bida Road in Niger State.
                  </td>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-jakarta">
                    2012
                  </td>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-jakarta">
                    Federal Ministry of Works Abuja
                  </td>
                </tr>
                <tr>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-jakarta">
                    9
                  </td>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-jakarta">
                    Consultancy Services for the Assessment of Railway Bridges,
                    Western Line (KM 56,727- 488,034)
                  </td>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-jakarta">
                    2011
                  </td>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-jakarta">
                    Nigerian Railway Corporation
                  </td>
                </tr>
                <tr>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-jakarta">
                    10
                  </td>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-jakarta">
                    Consultancy Services for the Engineering Design for the
                    Rehabilitation of Murtala Mohammed Bridge, Kotonkarfe, Kogi
                    State.
                  </td>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-jakarta">
                    2011
                  </td>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-jakarta">
                    Federal Ministry of Works Abuja
                  </td>
                </tr>
                <tr>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-jakarta">
                    11
                  </td>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-jakarta">
                    Consultancy services for Engineering Design for the
                    Rehabilitation of Mokwa – New Bussa –Kaima to Oyo State
                    Border in Niger/Kwara States.
                  </td>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-jakarta">
                    2010
                  </td>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-jakarta">
                    Federal Ministry of Works Abuja
                  </td>
                </tr>
                <tr>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-jakarta">
                    12
                  </td>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-jakarta">
                    Engineering Supervision for Rehabilitation of Mararaba
                    -Pambeguwa - Saminaka - Jos Road, Section 1: Mararaba
                    -Pambeguwa in Kaduna State.
                  </td>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-jakarta">
                    Feb 2010 (20 month)
                  </td>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-jakarta">
                    Federal Ministry of Works & Urban Dev.
                  </td>
                </tr>
              </tbody>
            </motion.table>
          )}
          {/* 3rd table */}
          {activeTab === 3 && (
            <motion.table
              variants={fadein}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="max-w-[750px] mx-auto bg-white border border-gray-300 basis-[80%]"
            >
              <thead>
                <tr>
                  <th className=" py-2 border-[1px] border-gray-300 text-left text-[14px] md:text-base font-host px-1">
                    S/N
                  </th>
                  <th className=" py-2 border-[1px] border-gray-300 text-left text-[14px] md:text-base font-host px-1">
                    Project Description
                  </th>
                  <th className=" py-2 border-[1px] border-gray-300 text-left text-[14px] md:text-base font-host px-1">
                    Year
                  </th>
                  <th className=" py-2 border-[1px] border-gray-300 text-left text-[14px] md:text-base font-host px-1">
                    Clients
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-jakarta">
                    13
                  </td>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-jakarta">
                    Consultancy Engineering Supervision for Rehabilitation of
                    Gombe -Numan-Yola Road Section II-Numan -Gombe in Gombe
                    Adamawa States.
                  </td>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-jakarta">
                    October 2009 – Feb 2011
                  </td>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-jakarta">
                    Federal Ministry of Works & Urban Dev.
                  </td>
                </tr>
                <tr>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-jakarta">
                    14
                  </td>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-jakarta">
                    Dualization of Oba Adesida- Isinkan - Ondo Road Project
                  </td>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-jakarta">
                    Oct 2010 – July 2014
                  </td>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-jakarta">
                    Ondo State Government
                  </td>
                </tr>
                <tr>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-jakarta">
                    15
                  </td>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-jakarta">
                    Structural Engineering Design and Construction Supervision
                    of Ilorin Cargo Terminal.
                  </td>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-jakarta">
                    2018 - 2010
                  </td>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-jakarta">
                    FAAN / Kwara State Govt.
                  </td>
                </tr>
                <tr>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-jakarta">
                    16
                  </td>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-jakarta">
                    Consultancy Services for the Dualization of Abuja – Abaji –
                    Lokoja Road, Section IV
                  </td>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-jakarta">
                    March 2007 to date
                  </td>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-jakarta">
                    Federal Ministry of Works Abuja
                  </td>
                </tr>
                <tr>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-jakarta">
                    17
                  </td>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-jakarta">
                    National Highways and urban Roads Rehabilitation project lot
                    14:Akure -owo,owo –Akungba –Isua Ibilo,Okene, Kabba,-Omua
                    –Okaegbe –Ikare Akungba, Owo township Road, okaegbe township
                    road.
                  </td>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-jakarta">
                    1998
                  </td>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-jakarta">
                    Petroleum (special)Trust fund(PTF)
                  </td>
                </tr>
                <tr>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-jakarta">
                    18
                  </td>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-jakarta">
                    Detailed Engineering Design of BRT Access Road including 1x
                    20m span bridge deck on pile.
                  </td>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-jakarta">
                    2003
                  </td>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-jakarta">
                    ExxonMobil
                  </td>
                </tr>
                <tr>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-jakarta">
                    19
                  </td>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-jakarta">
                    MHE By-Pass Road/Right of Way reestablishment survey at
                    Eket.
                  </td>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-jakarta">
                    2005
                  </td>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-jakarta">
                    ExxonMobil
                  </td>
                </tr>
              </tbody>
            </motion.table>
          )}
        </div>
      </section>
      <section className="py-[20px] text-center px-4 lg:px-[48px]">
        <motion.h3
          variants={fadeup}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }} className="text capitalize font-host font-semibold tracking-tight text-black text-[36px] md:text-[45px] xl:text-[54px] text-center leading-[1] mb-[60px] mx-auto max-w-[400px] md:max-w-[600px]">
          Explore Other Projects Portfolio
        </motion.h3>
         <div className="links grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 place-items-end">
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
    </main>
  );
};

export default HighwayBridges;
