import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Quote from "../components/quote";
import { Link } from "react-router-dom";
import ProjectCard from "../components/projectCard";
import PortfolioCard from "../components/portfolioCard";
import highway from '../../public/images/highway.webp'
import structure from '../../public/images/ogudu-3.webp'
import ndt from '../../public/images/testing.webp'
import video from '../../public/images/qaqc-13.webp'


const Geosciences = () => {
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
  };
  const mainContentRef = useRef(null);

  useEffect(() => {
    if (mainContentRef.current) {
      mainContentRef.current.focus();
    }
  }, []);

  return (
    <main className="geosciences-page bg-white pt-[60px]">
      <section className="heading bg-[url('/images/grid-pattern.webp')] bg-cover bg-center bg-no-repeat h-[100vh] grid place-content-center bg-fixed">
        <motion.h1
          variants={fadeup}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          ref={mainContentRef}
          tabIndex="-1"
          className="heading font-host tracking-tight text-blackish text-[34px] md:text-[54px] xl:text-[64px] text-center leading-tight font-medium mb-6 py-[5rem] px-3 lg:pl-[3rem]"
        >
          We have provided
          <span className="text-blue"> Geotechnical survey </span>
          and <span className="text-blue"> Soil testing services</span> for
          different
          <span className="text-blue">
            {" "}
            multinational companies across the country.
          </span>
        </motion.h1>
      </section>
      <section className="intro px-3 lg:px-[48px] grid grid-cols-1 lg:grid-cols-2 gap-6 place-items-stretch lg:gap-12 pt-[60px] pb-[60px]">
        <motion.div
          variants={fadeup}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="image-box w-full h-full min-h-[320px] rounded-[12px] bg-[url('/images/geosciences.webp')] bg-cover bg-no-repeat bg-center"
        >
          {/* <img
            src="/images/geosciences.png"
            alt="geosciences"
            className="object-cover w-full"
          /> */}
        </motion.div>
        <div className="text">
          {/* <motion.h3
            variants={fadeup}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="capitalize font-host tracking-tight text-[#1c1c1c] text-[36px] md:text-[48px] xl:text-[72px] text-left leading-tight font-semibold mb-6 max-w-[768px]"
          >
            Geosciences
          </motion.h3> */}
          <motion.p
            variants={fadeup}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-[14px] md:text-base text-textblack font-jakarta max-w-[768px]"
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
            className="mt-4 text-[14px] md:text-base text-textblack font-jakarta max-w-[768px]"
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
            className="mt-4 text-[14px]s md:text-base text-textblack font-jakarta max-w-[768px]"
          >
            Our laboratory facility in Lagos is equipped with modern laboratory
            equipment for geotechnical/ civil/ structural testing services. Our
            personnel are well trained and experienced in the latest procedures
            and carry out testing to BS, ASTM and other international standards
            as may be applicable.
          </motion.p>
        </div>
      </section>
      <section className="gallery py-[60px] px-4 lg:px-[48px]">
        <motion.h3
          variants={fadeup}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text capitalize font-host font-semibold tracking-tight text-[#1c1c1c] text-[36px] md:text-[45px] xl:text-[54px] text-center leading-tight mb-[60px]  mx-auto max-w-[768px]"
        >
          Projects gallery
        </motion.h3>
        <div className="w-full grid grid-flow-dense grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          <ProjectCard
            img="/images/geosciences.webp"
            title="Geosciences Project"
            description="Consultancy services for the construction of NDLEA-GIZ k9 unit office building  at Muritala Mohammed Airport"
          />

          <ProjectCard
            img="/images/NAHCO_2.webp"
            title="Geosciences Project"
            description="Consultancy services for the construction of NDLEA-GIZ k9 unit office building  at Muritala Mohammed Airport"
          />
          <ProjectCard
            img="/images/NAHCO_3.webp"
            title="Geosciences Project"
            description="Consultancy services for the construction of NDLEA-GIZ k9 unit office building  at Muritala Mohammed Airport"
          />

          <ProjectCard
            img="/images/NAHCO_4.webp"
            title="Geosciences Project"
            description="Consultancy services for the construction of NDLEA-GIZ k9 unit office building  at Muritala Mohammed Airport"
          />
          <ProjectCard
            img="/images/NAHCO_5.webp"
            title="Geosciences Project"
            description="Consultancy services for the construction of NDLEA-GIZ k9 unit office building  at Muritala Mohammed Airport"
          />
          <ProjectCard
            img="/images/NAHCO_6.webp"
            title="Geosciences Project"
            description="Consultancy services for the construction of NDLEA-GIZ k9 unit office building  at Muritala Mohammed Airport"
          />
          <ProjectCard
            img="/images/NAHCO_7.webp"
            title="Geosciences Project"
            description="Consultancy services for the construction of NDLEA-GIZ k9 unit office building  at Muritala Mohammed Airport"
          />
        </div>
      </section>
      <section className="geosciences-projects px-4 py-[60px]">
        <motion.h3
          variants={fadeup}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text capitalize font-host font-semibold tracking-tight text-[#1c1c1c] text-[36px] md:text-[45px] xl:text-[54px] text-center leading-tight mb-[60px] mx-auto max-w-[768px]"
        >
          Past Geoscience Projects
        </motion.h3>
        <div className="projects-container xl:max-w-[70%] mx-auto w-full flex flex-col justify-start items-stretch gap-8 lg:flex-row relative">
          <div className="project-tabs basis-[20%] h-full flex flex-row lg:flex-col justify-between items-stretch gap-4 lg:gap-[60px] sticky top-[64px] lg:top-[90px] left-0 z-50 bg-white py-3">
            <button
              className={`project-tab w-full p-3 lg:p-10  text-[13px] text-base font-host font-bold rounded-lg hover:bg-lightblue ${
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
              className="max-w-[750px] mx-auto bg-white border border-gray-300 basis-[80%]"
            >
              <thead>
                <tr>
                  <th className=" py-2 border-[1px] border-gray-300 text-left text-[14px] md:text-base font-host pl-1 md:pl-4">
                    S/N
                  </th>
                  <th className=" py-2 border-[1px] border-gray-300 text-left text-[14px] md:text-base font-host pl-1 md:pl-4">
                    Project Description
                  </th>
                  <th className=" py-2 border-[1px] border-gray-300 text-left text-[14px] md:text-base font-host pl-1 md:pl-4">
                    Year
                  </th>
                  <th className=" py-2 border-[1px] border-gray-300 text-left text-[14px] md:text-base font-host pl-1 md:pl-4">
                    Clients
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className=" text-textblack px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-jakarta">
                    1
                  </td>
                  <td className=" text-textblack px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-jakarta">
                    Survey and Geotechnical Investigation for NGL Recovery
                    Project at Bonny Island.
                  </td>
                  <td className=" text-textblack px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-jakarta">
                    Sept 1993- April 1994
                  </td>
                  <td className=" text-textblack px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-jakarta">
                    ExxonMobil
                  </td>
                </tr>
                <tr>
                  <td className=" text-textblack px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-jakarta">
                    2
                  </td>
                  <td className=" text-textblack px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-jakarta">
                    Topographical Survey for QIT Storm water Drainage
                    Rehabilitation.
                  </td>
                  <td className=" text-textblack px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-jakarta">
                    1997
                  </td>
                  <td className=" text-textblack px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-jakarta">
                    ExxonMobil
                  </td>
                </tr>
                <tr>
                  <td className=" text-textblack px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-jakarta">
                    3
                  </td>
                  <td className=" text-textblack px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-jakarta">
                    Topography Survey, preliminary soil investigation and ground
                    water monitoring for Eket Landfill Project.
                  </td>
                  <td className=" text-textblack px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-jakarta">
                    {" "}
                    1998
                  </td>
                  <td className=" text-textblack px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-jakarta">
                    ExxonMobil
                  </td>
                </tr>
                <tr>
                  <td className=" text-textblack px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-jakarta">
                    4
                  </td>
                  <td className=" text-textblack px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-jakarta">
                    Site Survey and Geotechnical investigation for Mobil Bonny
                    Integrated Power Plant (IPP).
                  </td>
                  <td className=" text-textblack px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-jakarta">
                    Dec. 2000-Jan. 2001
                  </td>
                  <td className=" text-textblack px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-jakarta">
                    ExxonMobil
                  </td>
                </tr>
                <tr>
                  <td className=" text-textblack px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-jakarta">
                    5
                  </td>
                  <td className=" text-textblack px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-jakarta">
                    Geotechnical investigation of Tank 11 Replacement Project.
                  </td>
                  <td className=" text-textblack px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-jakarta">
                    2013 / 2014
                  </td>
                  <td className=" text-textblack px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-jakarta">
                    Chevron
                  </td>
                </tr>
                <tr>
                  <td className=" text-textblack px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-jakarta">
                    6
                  </td>
                  <td className=" text-textblack px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-jakarta">
                    Geophysical and Hydrogeological Studies of Chevron IPP site
                    at Agura, IPP Lagos.
                  </td>
                  <td className=" text-textblack px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-jakarta">
                    2006
                  </td>
                  <td className=" text-textblack px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-jakarta">
                    Chevron
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
                  <th className=" py-2 border-[1px] border-gray-300 text-left text-[14px] md:text-base font-host pl-2 md:pl-4">
                    S/N
                  </th>
                  <th className=" py-2 border-[1px] border-gray-300 text-left text-[14px] md:text-base font-host pl-2 md:pl-4">
                    Project Description
                  </th>
                  <th className=" py-2 border-[1px] border-gray-300 text-left text-[14px] md:text-base font-host pl-2 md:pl-4">
                    Year
                  </th>
                  <th className=" py-2 border-[1px] border-gray-300 text-left text-[14px] md:text-base font-host pl-2 md:pl-4">
                    Clients
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className=" text-textblack px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-jakarta">
                    7
                  </td>
                  <td className=" text-textblack px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-jakarta">
                    Soil & Underground Water Investigation for Obite IPP
                    Project.
                  </td>
                  <td className=" text-textblack px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-jakarta">
                    2006
                  </td>
                  <td className=" text-textblack px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-jakarta">
                    Elf Petroleum Nig.
                  </td>
                </tr>
                <tr>
                  <td className=" text-textblack px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-jakarta">
                    8
                  </td>
                  <td className=" text-textblack px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-jakarta">
                    Topographical Survey and Detailed Geotechnical investigation
                    of OKLNG Project, Ode Omi, Ogun State
                  </td>
                  <td className=" text-textblack px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-jakarta">
                    2006 - 2008
                  </td>
                  <td className=" text-textblack px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-jakarta">
                    British Gas /Chevron/SPDC/NNPC
                  </td>
                </tr>
                <tr>
                  <td className=" text-textblack px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-jakarta">
                    9
                  </td>
                  <td className=" text-textblack px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-jakarta">
                    OKLNG Project Hydrogeological Studies, Ode Omi Ogun State,
                    Nigeria, Ode Omi Ogun State, Nigeria.
                  </td>
                  <td className=" text-textblack px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-jakarta">
                    2007
                  </td>
                  <td className=" text-textblack px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-jakarta">
                    British Gas /Chevron/SPDC/NNPC
                  </td>
                </tr>
                <tr>
                  <td className=" text-textblack px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-jakarta">
                    10
                  </td>
                  <td className=" text-textblack px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-jakarta">
                    Geotechnical Survey of QIT Helicopter Flyway Project
                  </td>
                  <td className=" text-textblack px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-jakarta">
                    2007
                  </td>
                  <td className=" text-textblack px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-jakarta">
                    ExxonMobil
                  </td>
                </tr>
                <tr>
                  <td className=" text-textblack px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-jakarta">
                    11
                  </td>
                  <td className=" text-textblack px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-jakarta">
                    Geotechnical Survey and Topographical Survey for the Amakpe
                    Refinery, Eket, Akwa-Ibom State, Nigeria
                  </td>
                  <td className=" text-textblack px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-jakarta">
                    2008
                  </td>
                  <td className=" text-textblack px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-jakarta">
                    Ventech Engineers. Inc.
                  </td>
                </tr>
                <tr>
                  <td className=" text-textblack px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-jakarta">
                    12
                  </td>
                  <td className=" text-textblack px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-jakarta">
                    Detailed Site Investigation for the ExxonMobil House and
                    Mobil Court
                  </td>
                  <td className=" text-textblack px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-jakarta">
                    2010
                  </td>
                  <td className=" text-textblack px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-jakarta">
                    ExxonMobil
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
                  <th className=" py-2 border-[1px] border-gray-300 text-left text-[14px] md:text-base font-host px-2 md:px-4">
                    S/N
                  </th>
                  <th className=" py-2 border-[1px] border-gray-300 text-left text-[14px] md:text-base font-host px-2 md:px-4">
                    Project Description
                  </th>
                  <th className=" py-2 border-[1px] border-gray-300 text-left text-[14px] md:text-base font-host px-2 md:px-4">
                    Year
                  </th>
                  <th className=" py-2 border-[1px] border-gray-300 text-left text-[14px] md:text-base font-host px-2 md:px-4">
                    Clients
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className=" text-textblack px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-jakarta">
                    13
                  </td>
                  <td className=" text-textblack px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-jakarta">
                    Detailed Site Investigation for the ExxonMobil Creek Site.
                  </td>
                  <td className=" text-textblack px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-jakarta">
                    2010
                  </td>
                  <td className=" text-textblack px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-jakarta">
                    ExxonMobil
                  </td>
                </tr>
                <tr>
                  <td className=" text-textblack px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-jakarta">
                    14
                  </td>
                  <td className=" text-textblack px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-jakarta">
                    Detailed Site Investigation for ExxonMobil New office &
                    Multi Storey Car Park
                  </td>
                  <td className=" text-textblack px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-jakarta">
                    2010
                  </td>
                  <td className=" text-textblack px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-jakarta">
                    ExxonMobil
                  </td>
                </tr>
                <tr>
                  <td className=" text-textblack px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-jakarta">
                    15
                  </td>
                  <td className=" text-textblack px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-jakarta">
                    Topographical Survey and Subsurface Investigation for New
                    Eastern Pole Project, Victoria Island Lagos.
                  </td>
                  <td className=" text-textblack px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-jakarta">
                    2013
                  </td>
                  <td className=" text-textblack px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-jakarta">
                    Total E&P
                  </td>
                </tr>
                <tr>
                  <td className=" text-textblack px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-jakarta">
                    16
                  </td>
                  <td className=" text-textblack px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-jakarta">
                    Subsoil Investigation for New Office Building, Abuja.
                  </td>
                  <td className=" text-textblack px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-jakarta">
                    2013
                  </td>
                  <td className=" text-textblack px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-jakarta">
                    Total E&P
                  </td>
                </tr>
                <tr>
                  <td className=" text-textblack px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-jakarta">
                    17
                  </td>
                  <td className=" text-textblack px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-jakarta">
                    OKLNG Project –Additional Onshore Geotechnical
                    Investigations.
                  </td>
                  <td className=" text-textblack px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-jakarta">
                    2014
                  </td>
                  <td className=" text-textblack px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-jakarta">
                    OKLNG
                  </td>
                </tr>
                <tr>
                  <td className=" text-textblack px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-jakarta">
                    18
                  </td>
                  <td className=" text-textblack px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-jakarta">
                    Detailed Engineering Design of BRT Access Road including 1x
                    20m span bridge deck on pile.
                  </td>
                  <td className=" text-textblack px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-jakarta">
                    2003
                  </td>
                  <td className=" text-textblack px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-jakarta">
                    ExxonMobil
                  </td>
                </tr>
                <tr>
                  <td className=" text-textblack px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-jakarta">
                    19
                  </td>
                  <td className=" text-textblack px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-jakarta">
                    MHE By-Pass Road/Right of Way reestablishment survey at
                    Eket.
                  </td>
                  <td className=" text-textblack px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-jakarta">
                    2005
                  </td>
                  <td className=" text-textblack px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-jakarta">
                    ExxonMobil
                  </td>
                </tr>
              </tbody>
            </motion.table>
          )}
        </div>
      </section>
      <section className=" py-[20px] text-center px-4 lg:px-[48px]">
        <motion.h3
          variants={fadeup}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text capitalize font-host font-semibold tracking-tight text-black text-[36px] md:text-[45px] xl:text-[54px] text-center leading-[1] mb-[60px] mx-auto max-w-[400px] md:max-w-[600px]">
          Explore Other Projects Portfolio
        </motion.h3>
         <div className="links grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 place-items-end">
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

export default Geosciences;
