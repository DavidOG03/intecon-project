import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Quote from "../components/quote";
import { Link } from "react-router-dom";

const Geosciences = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

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
        duration: 0.3,
        ease: "easeInOut",
        type: "tween",
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
          className="heading font-jakarta tracking-tighter text-blackish text-[34px] md:text-[54px] xl:text-[74px] text-center md:text-left leading-tight font-medium mb-6 py-[5rem] px-3 lg:pl-[3rem]"
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
          className="image-box w-full h-full min-h-[300px] max-h-[320px] xl:max-h-none overflow-hidden rounded-[12px] bg-[url('/images/geosciences.webp')] bg-cover bg-no-repeat bg-center"
        >
          {/* <img
            src="/images/geosciences.png"
            alt="geosciences"
            className="object-cover w-full"
          /> */}
        </motion.div>
        <div className="text">
          <motion.h3
            variants={fadeup}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="capitalize font-jakarta tracking-tighter text-[#1c1c1c] text-[36px] md:text-[48px] xl:text-[72px] text-left leading-tight font-semibold mb-6 max-w-[768px]"
          >
            Geosciences
          </motion.h3>
          <motion.p
            variants={fadeup}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-[14px] md:text-base text-textblack font-inter max-w-[768px]"
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
            className="mt-4 text-[14px] md:text-base text-textblack font-inter max-w-[768px]"
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
            className="mt-4 text-[14px]s md:text-base text-[#1c1c1c] font-inter max-w-[768px]"
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
          className="text capitalize font-jakarta font-semibold tracking-tight text-[#1c1c1c] text-[36px] md:text-[48px] xl:text-[64px] text-center leading-tight mb-6  mx-auto max-w-[768px]"
        >
          Geoscience projects gallery
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
              src="/images/geosciences.webp"
              alt="geo-work"
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
              src="/images/NAHCO_2.webp"
              alt="geo-work"
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
              src="/images/NAHCO_3.webp"
              alt="geo-work"
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
              src="/images/NAHCO_4.webp"
              alt="geo-work"
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
              src="/images/NAHCO_5.webp"
              alt="geo-work"
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
              src="/images/NAHCO_6.webp"
              alt="geo-work"
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
              src="/images/NAHCO_7.webp"
              alt="geo-work"
              className="w-full max-w-[768px] "
            />
          </motion.div>
        </div>
      </section>
      <section className="geosciences-projects px-4 py-[60px]">
        <motion.h3
          variants={fadeup}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text capitalize font-jakarta font-semibold tracking-tight text-[#1c1c1c] text-[36px] md:text-[45px] xl:text-[54px] text-center leading-tight mb-[60px] mx-auto max-w-[768px]"
        >
          Past Geoscience Projects
        </motion.h3>
        <div className="projects-container w-full flex flex-col justify-start items-stretch gap-8 lg:flex-row my-[60px relative]">
          <div className="project-tabs basis-[20%] h-full flex flex-row lg:flex-col justify-between items-stretch gap-4 lg:gap-[60px] sticky top-[49px] left-0 z-50 bg-white py-4">
            <button
              className={`project-tab w-full p-3 lg:p-12  text-[13px] text-base font-jakarta font-bold rounded-lg ${
                activeTab === 1
                  ? "bg-[#0499CF] text-white"
                  : "bg-gray-200 text-black"
              }`}
              onClick={() => handleTabClick(1)}
            >
              Projects Tab 1
            </button>
            <button
              className={`project-tab w-full p-3 lg:p-12 text-[13px] text-base font-jakarta font-bold rounded-lg ${
                activeTab === 2
                  ? "bg-[#0499CF] text-white"
                  : "bg-gray-200 text-black"
              }`}
              onClick={() => handleTabClick(2)}
            >
              Projects Tab 2
            </button>
            <button
              className={`project-tab w-full p-3 lg:p-12 text-[13px] text-base font-jakarta font-bold rounded-lg ${
                activeTab === 3
                  ? "bg-[#0499CF] text-white"
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
                  <th className=" py-2 border-[1px] border-gray-300 text-left text-[14px] md:text-base font-jakarta px-1">
                    S/N
                  </th>
                  <th className=" py-2 border-[1px] border-gray-300 text-left text-[14px] md:text-base font-jakarta px-1">
                    Project Description
                  </th>
                  <th className=" py-2 border-[1px] border-gray-300 text-left text-[14px] md:text-base font-jakarta px-1">
                    Year
                  </th>
                  <th className=" py-2 border-[1px] border-gray-300 text-left text-[14px] md:text-base font-jakarta px-1">
                    Clients
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-inter">
                    1
                  </td>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-inter">
                    Survey and Geotechnical Investigation for NGL Recovery
                    Project at Bonny Island.
                  </td>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-inter">
                    Sept 1993- April 1994
                  </td>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-inter">
                    ExxonMobil
                  </td>
                </tr>
                <tr>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-inter">
                    2
                  </td>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-inter">
                    Topographical Survey for QIT Storm water Drainage
                    Rehabilitation.
                  </td>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-inter">
                    1997
                  </td>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-inter">
                    ExxonMobil
                  </td>
                </tr>
                <tr>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-inter">
                    3
                  </td>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-inter">
                    Topography Survey, preliminary soil investigation and ground
                    water monitoring for Eket Landfill Project.
                  </td>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-inter">
                    {" "}
                    1998
                  </td>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-inter">
                    ExxonMobil
                  </td>
                </tr>
                <tr>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-inter">
                    4
                  </td>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-inter">
                    Site Survey and Geotechnical investigation for Mobil Bonny
                    Integrated Power Plant (IPP).
                  </td>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-inter">
                    Dec. 2000-Jan. 2001
                  </td>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-inter">
                    ExxonMobil
                  </td>
                </tr>
                <tr>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-inter">
                    5
                  </td>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-inter">
                    Geotechnical investigation of Tank 11 Replacement Project.
                  </td>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-inter">
                    2013 / 2014
                  </td>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-inter">
                    Chevron
                  </td>
                </tr>
                <tr>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-inter">
                    6
                  </td>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-inter">
                    Geophysical and Hydrogeological Studies of Chevron IPP site
                    at Agura, IPP Lagos.
                  </td>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-inter">
                    2006
                  </td>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-inter">
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
                  <th className=" py-2 border-[1px] border-gray-300 text-left text-[14px] md:text-base font-jakarta pl-4">
                    S/N
                  </th>
                  <th className=" py-2 border-[1px] border-gray-300 text-left text-[14px] md:text-base font-jakarta pl-4">
                    Project Description
                  </th>
                  <th className=" py-2 border-[1px] border-gray-300 text-left text-[14px] md:text-base font-jakarta pl-4">
                    Year
                  </th>
                  <th className=" py-2 border-[1px] border-gray-300 text-left text-[14px] md:text-base font-jakarta pl-4">
                    Clients
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-inter">
                    7
                  </td>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-inter">
                    Soil & Underground Water Investigation for Obite IPP
                    Project.
                  </td>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-inter">
                    2006
                  </td>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-inter">
                    Elf Petroleum Nig.
                  </td>
                </tr>
                <tr>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-inter">
                    8
                  </td>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-inter">
                    Topographical Survey and Detailed Geotechnical investigation
                    of OKLNG Project, Ode Omi, Ogun State
                  </td>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-inter">
                    2006 - 2008
                  </td>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-inter">
                    British Gas /Chevron/SPDC/NNPC
                  </td>
                </tr>
                <tr>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-inter">
                    9
                  </td>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-inter">
                    OKLNG Project Hydrogeological Studies, Ode Omi Ogun State,
                    Nigeria, Ode Omi Ogun State, Nigeria.
                  </td>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-inter">
                    2007
                  </td>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-inter">
                    British Gas /Chevron/SPDC/NNPC
                  </td>
                </tr>
                <tr>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-inter">
                    10
                  </td>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-inter">
                    Geotechnical Survey of QIT Helicopter Flyway Project
                  </td>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-inter">
                    2007
                  </td>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-inter">
                    ExxonMobil
                  </td>
                </tr>
                <tr>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-inter">
                    11
                  </td>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-inter">
                    Geotechnical Survey and Topographical Survey for the Amakpe
                    Refinery, Eket, Akwa-Ibom State, Nigeria
                  </td>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-inter">
                    2008
                  </td>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-inter">
                    Ventech Engineers. Inc.
                  </td>
                </tr>
                <tr>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-inter">
                    12
                  </td>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-inter">
                    Detailed Site Investigation for the ExxonMobil House and
                    Mobil Court
                  </td>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-inter">
                    2010
                  </td>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-inter">
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
                  <th className=" py-2 border-[1px] border-gray-300 text-left text-[14px] md:text-base font-jakarta pl-4">
                    S/N
                  </th>
                  <th className=" py-2 border-[1px] border-gray-300 text-left text-[14px] md:text-base font-jakarta pl-4">
                    Project Description
                  </th>
                  <th className=" py-2 border-[1px] border-gray-300 text-left text-[14px] md:text-base font-jakarta pl-4">
                    Year
                  </th>
                  <th className=" py-2 border-[1px] border-gray-300 text-left text-[14px] md:text-base font-jakarta pl-4">
                    Clients
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-inter">
                    13
                  </td>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-inter">
                    Detailed Site Investigation for the ExxonMobil Creek Site.
                  </td>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-inter">
                    2010
                  </td>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-inter">
                    ExxonMobil
                  </td>
                </tr>
                <tr>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-inter">
                    14
                  </td>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-inter">
                    Detailed Site Investigation for ExxonMobil New office &
                    Multi Storey Car Park
                  </td>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-inter">
                    2010
                  </td>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-inter">
                    ExxonMobil
                  </td>
                </tr>
                <tr>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-inter">
                    15
                  </td>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-inter">
                    Topographical Survey and Subsurface Investigation for New
                    Eastern Pole Project, Victoria Island Lagos.
                  </td>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-inter">
                    2013
                  </td>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-inter">
                    Total E&P
                  </td>
                </tr>
                <tr>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-inter">
                    16
                  </td>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-inter">
                    Subsoil Investigation for New Office Building, Abuja.
                  </td>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-inter">
                    2013
                  </td>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-inter">
                    Total E&P
                  </td>
                </tr>
                <tr>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-inter">
                    17
                  </td>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-inter">
                    OKLNG Project –Additional Onshore Geotechnical
                    Investigations.
                  </td>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-inter">
                    2014
                  </td>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-inter">
                    OKLNG
                  </td>
                </tr>
                <tr>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-inter">
                    18
                  </td>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-inter">
                    Detailed Engineering Design of BRT Access Road including 1x
                    20m span bridge deck on pile.
                  </td>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-inter">
                    2003
                  </td>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-inter">
                    ExxonMobil
                  </td>
                </tr>
                <tr>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-inter">
                    19
                  </td>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-inter">
                    MHE By-Pass Road/Right of Way reestablishment survey at
                    Eket.
                  </td>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-inter">
                    2005
                  </td>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-inter">
                    ExxonMobil
                  </td>
                </tr>
              </tbody>
            </motion.table>
          )}
        </div>
      </section>
      <section className=" py-[20px] text-center px-3">
        <h3 className="text capitalize font-jakarta font-semibold tracking-tight text-black text-[36px] md:text-[45px] xl:text-[54px] text-center leading-[1] mb-[60px] mx-auto max-w-[768px]">
          Explore Other Project Portfolio
        </h3>
        <div className="links flex flex-col justify-center items-center md:flex-row md:justify-center gap-2">
          <Link
            to="/highway-bridges-design"
            className="goto flex max-w-[300px] bg-blue text-white mx-auto mb-6 py-3 px-2 rounded-lg  items-center gap-2"
          >
            Highway and Bridges Design <img src="/images/arrow_outward.svg" alt="arrow_outward.svg" className="w-4" />
          </Link>
          <Link
            to="/structural-design"
            className="goto flex max-w-[300px] bg-blue text-white mx-auto mb-6 py-3 px-2 rounded-lg items-center gap-2"
          >
            Structural Design <img src="/images/arrow_outward.svg" alt="arrow_outward.svg" className="w-4" />
          </Link>
          <Link
            to="/non-destructive-testing"
            className="goto flex max-w-[300px] bg-blue text-white mx-auto mb-6 py-3 px-2 rounded-lg items-center gap-2"
          >
            Non-destructive Testing <img src="/images/arrow_outward.svg" alt="arrow_outward.svg" className="w-4" />
          </Link>
        </div>
      </section>
      <Quote />
    </main>
  );
};

export default Geosciences;
