import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Quote from "../components/quote";
import { Link } from "react-router-dom";
import ProjectCard from "../components/projectCard";

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
      <section className="intro px-3 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-6 place-items-stretch lg:gap-12 pt-[60px] pb-[60px]">
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
      <section className="gallery px-3 py-[60px]">
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
      <section className=" py-[20px] text-center px-3">
        <h3 className="text capitalize font-host font-semibold tracking-tight text-black text-[36px] md:text-[45px] xl:text-[54px] text-center leading-[1] mb-[60px] mx-auto max-w-[400px] md:max-w-[600px]">
          Explore Other Projects Portfolio
        </h3>
        <div className="links flex flex-col justify-center items-center lg:flex-row gap-2 mx-auto">
          <Link
            to="/highway-bridges-design"
            className="goto flex w-full md:max-w-[300px] bg-blue text-white mx-auto mb-6 py-3 px-2 rounded-[3rem]  items-center gap-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 20 20"
            >
              <path
                fill="#fff"
                d="M5.996 2.566a.5.5 0 0 0-.992-.132l-2 15a.5.5 0 0 0 .992.132zm9-.132a.5.5 0 0 0-.992.132l2 15a.5.5 0 0 0 .992-.132zM10.5 2.5a.5.5 0 0 0-1 0v3a.5.5 0 0 0 1 0zm-1 9a.5.5 0 0 0 1 0v-3a.5.5 0 0 0-1 0zm0 3a.5.5 0 0 1 1 0v3a.5.5 0 0 1-1 0z"
              ></path>
            </svg>
            Highway and Bridges Design{" "}
            <img
              src="/images/arrow_outward.svg"
              alt="arrow_outward.svg"
              className="w-4"
            />
          </Link>
          <Link
            to="/structural-design"
            className="goto flex w-full md:max-w-[300px] bg-blue text-white mx-auto mb-6 py-3 px-2 rounded-[3rem] items-center gap-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <path
                fill="#fff"
                d="M6.25 3.5a.75.75 0 0 0-.75.75V20.5h2v-2.75c0-.69.56-1.25 1.25-1.25h6.5c.69 0 1.25.56 1.25 1.25v2.75h2v-8.75a.75.75 0 0 0-.75-.75h-2a.75.75 0 0 1-.75-.75v-6a.75.75 0 0 0-.75-.75zM9 18v2.5h2.25V18zm3.75 0v2.5H15V18zm6.5 4H4.75a.75.75 0 0 1-.75-.75v-17A2.25 2.25 0 0 1 6.25 2h8a2.25 2.25 0 0 1 2.25 2.25V9.5h1.25A2.25 2.25 0 0 1 20 11.75v9.5a.75.75 0 0 1-.75.75M7.5 6.5a1 1 0 1 1 2 0a1 1 0 0 1-2 0m1 6a1 1 0 1 0 0 2a1 1 0 0 0 0-2m0-3.5a1 1 0 1 0 0 2a1 1 0 0 0 0-2M12 5.5a1 1 0 1 0 0 2a1 1 0 0 0 0-2m0 7a1 1 0 1 0 0 2a1 1 0 0 0 0-2m3.5 0a1 1 0 1 0 0 2a1 1 0 0 0 0-2M12 9a1 1 0 1 0 0 2a1 1 0 0 0 0-2"
              ></path>
            </svg>
            Structural Design{" "}
            <img
              src="/images/arrow_outward.svg"
              alt="arrow_outward.svg"
              className="w-4"
            />
          </Link>
          <Link
            to="/non-destructive-testing"
            className="goto flex w-full md:max-w-[300px] bg-blue text-white mx-auto mb-6 py-3 px-2 rounded-[3rem] items-center gap-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 2048 2048"
            >
              <path
                fill="#fff"
                d="M1930 220q26 45 47 86t38 83t24 87t9 100q0 79-20 152t-58 138t-91 117t-117 90t-137 58t-153 21q-23 0-46-2t-47-6l-806 806q-48 48-109 73t-129 25q-69 0-130-26t-106-72t-72-107t-27-130q0-67 25-128t73-110l806-806q-4-23-6-46t-2-47q0-79 20-152t58-138t91-117t117-90t137-58t153-21q54 0 99 8t88 25t83 37t86 48l-394 394l102 102zm-458 804q93 0 174-35t142-96t96-142t36-175q0-73-24-141l-360 359l-282-282l359-360q-68-24-141-24q-93 0-174 35t-142 96t-96 142t-36 175q0 35 6 68t14 66l-855 856q-29 29-45 67t-16 80t16 80t45 66t66 44t80 17q42 0 80-16t67-45l856-855q33 8 66 14t68 6"
              ></path>
            </svg>
            Non-destructive Testing{" "}
            <img
              src="/images/arrow_outward.svg"
              alt="arrow_outward.svg"
              className="w-4"
            />
          </Link>
          <Link
            to="/youtube-videos"
            className="goto  rounded-[3rem] flex w-full md:max-w-[300px] bg-blue text-white mx-auto mb-6 py-3 px-2 items-center gap-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 2048 2048"
            >
              <path
                fill="currentColor"
                d="M0 1408V512h1408v896zm1536-640l512-256v896l-512-256z"
              ></path>
            </svg>
            Project Videos{" "}
            <img
              src="/images/arrow_outward.svg"
              alt="arrow_outward.svg"
              className="w-4"
            />
          </Link>
        </div>
      </section>
      <Quote />
    </main>
  );
};

export default Geosciences;
