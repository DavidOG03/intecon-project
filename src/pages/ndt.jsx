import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Quote from "../components/quote";
import { Link } from "react-router-dom";
import ProjectCard from "../components/projectCard";
import PortfolioCard from "../components/portfolioCard";
import highway from '../../public/images/highway.webp'
import structure from '../../public/images/ogudu-3.webp'
import geoscience from '../../public/images/geosciences.webp'
import video from '../../public/images/qaqc-13.webp'


const Ndt = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [loading, setLoading] = useState(true); // Track loading state
  const [imagesLoaded, setImagesLoaded] = useState(0); // Track loaded images count
  const totalImages = 8; // Total number of images in the gallery

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
        ease: "easeOut",
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

  // Check loading state once all images have loaded
  useEffect(() => {
    if (imagesLoaded >= totalImages) {
      setLoading(false);
    }
  }, [imagesLoaded]);

  const handleImageLoad = () => {
    setImagesLoaded((prevCount) => prevCount + 1);
  };

  // if (loading) {
  //   // Display loading animation until all images are loaded
  //   return (
  //     <main className="h-full bg-gray-50 pt-[80px] text-center">
  //       <div className="h-full flex flex-col justify-center items-center gap-4">
  //         <div className="text-blue font-bold font-host
  // ">LOADING...</div>
  //       </div>
  //     </main>
  //   );
  // }

  return (
    <main className="ndt-page bg-white pt-[60px]">
      <section className="heading bg-[url('/images/grid-pattern.webp')] bg-cover bg-center bg-no-repeat h-[100vh] grid place-content-center bg-fixed">
        <motion.h1
          variants={fadeup}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          ref={mainContentRef}
          tabIndex="-1"
          className="heading font-host
           tracking-tight text-blackish text-[34px] md:text-[54px] xl:text-[64px] text-center md:text-center leading-tight font-medium mb-6 py-[3rem] px-3 lg:pl-[3rem]"
        >
          We have provided
          <span className="text-blue"> Non-Destructive Testing services </span>
          for different{" "}
          <span className="text-blue">
            {" "}
            multinational companies, Private organizations,
          </span>{" "}
          and
          <span className="text-blue">
            {" "}
            multinational companies across the country.
          </span>
        </motion.h1>
      </section>
      <section className="intro px-3 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-6 place-items-stretch lg:gap-12 pt-[60px] pb-[60px] items-center">
        <motion.div
          variants={fadeup}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="image-box w-full h-full max-h-[420px] overflow-hidden rounded-[12px]"
        >
          <img
            src="/images/qaqc-8.webp"
            alt="testing"
            className="object-cover w-full"
          />
        </motion.div>
        <div className="text">
          {/* <motion.h3
            variants={fadeup}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="capitalize font-host
             tracking-tight text-[#1c1c1c] text-[36px] md:text-[48px] xl:text-[72px] text-left leading-tight font-semibold mb-6 max-w-[768px]"
          >
            Non-Destructive Testing
          </motion.h3> */}
          <motion.p
            variants={fadeup}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-[14px] md:text-base text-textblack font-jakarta max-w-[768px] leading-8"
          >
            INTECON has state-of-the-art non-destructive testing equipment and a
            highly trained inspection team, capable of carrying out detailed and
            accurate inspections to international standards. Our team of experts
            has successfully investigated engineering infrastructures of varying
            complexities, including bridges, high-rise buildings, foundation
            structures, and steel facilities.
          </motion.p>
          <motion.p
            variants={fadeup}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-4 text-[14px] md:text-base text-textblack font-jakarta max-w-[768px] leading-8"
          >
            INTECON is committed to the continuous improvement of its
            non-destructive testing services, aligning with global trends and
            international best practices.
          </motion.p>
        </div>
      </section>
      <section className="gallery h-full px-3 py-[60px]">
        <motion.h3
          variants={fadeup}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text capitalize font-host
           font-semibold tracking-tight text-[#1c1c1c] text-[36px] md:text-[45px] xl:text-[54px] text-center leading-tight mb-[60px]  mx-auto max-w-[768px]"
        >
          Projects gallery
        </motion.h3>
        <div className="w-full grid grid-flow-dense grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          <ProjectCard
            img="/images/qaqc-11.webp"
            title="Quantity Assurance and Control"
            description="Structural integrity assessment of alapere pedestrian bridge"
            // onLoad={handleImageLoad}
          />
          <ProjectCard
            img="/images/qaqc-1.webp"
            title="Quantity Assurance and Control"
            description="Structural integrity assessment of alapere pedestrian bridge"
            // onLoad={handleImageLoad}
          />
          <ProjectCard
            img="/images/qaqc-4.webp"
            title="Quantity Assurance and Control"
            description="Structural integrity assessment of alapere pedestrian bridge"
            // onLoad={handleImageLoad}
          />
          <ProjectCard
            img="/images/qaqc-3.webp"
            title="Quantity Assurance and Control"
            description="Structural integrity assessment of alapere pedestrian bridge"
            // onLoad={handleImageLoad}
          />
          <ProjectCard
            img="/images/qaqc-15.webp"
            title="Quantity Assurance and Control"
            description="Structural integrity assessment of alapere pedestrian bridge"
            // onLoad={handleImageLoad}
          />
          <ProjectCard
            img="/images/qaqc-12.webp"
            title="Quantity Assurance and Control"
            description="Structural integrity assessment of alapere pedestrian bridge"
            // onLoad={handleImageLoad}
          />
          <ProjectCard
            img="/images/qaqc-8.webp"
            title="Quantity Assurance and Control"
            description="Structural integrity assessment of alapere pedestrian bridge"
            // onLoad={handleImageLoad}
          />
          <ProjectCard
            img="/images/qaqc-14.webp"
            title="Quantity Assurance and Control"
            description="Structural integrity assessment of alapere pedestrian bridge"
            // onLoad={handleImageLoad}
          />
        </div>
      </section>
      <section className="ndt-projects px-4 py-[60px]">
        <motion.h3
          variants={fadeup}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text capitalize font-host
           font-semibold tracking-tight text-[#1c1c1c] text-[36px] md:text-[45px] xl:text-[54px] text-center leading-tight mb-[60px] mx-auto max-w-[768px]"
        >
          Past Non-Destructive Testing Projects
        </motion.h3>
        <div className="projects-container xl:max-w-[70%] mx-auto w-full flex flex-col justify-start items-stretch gap-8 lg:flex-row relative">
          <div className="project-tabs basis-[20%] h-full flex flex-row lg:flex-col justify-between items-stretch gap-4 lg:gap-[60px] sticky top-[64px] lg:top-[90px] left-0 z-50 bg-white py-3">
            <button
              className={`project-tab w-full p-3 lg:p-10 text-[13px] text-base font-host
                 font-bold rounded-lg hover:bg-lightblue ${
                   activeTab === 1
                     ? "bg-blue text-white"
                     : "bg-gray-200 text-black"
                 }`}
              onClick={() => handleTabClick(1)}
            >
              Projects Tab 1
            </button>
            <button
              className={`project-tab w-full p-3 lg:p-10 text-[13px] text-base font-host
                 font-bold rounded-lg hover:bg-lightblue ${
                   activeTab === 2
                     ? "bg-blue text-white"
                     : "bg-gray-200 text-black"
                 }`}
              onClick={() => handleTabClick(2)}
            >
              Projects Tab 2
            </button>
            <button
              className={`project-tab w-full p-3 lg:p-10 text-[13px] text-base font-host
                 font-bold rounded-lg hover:bg-lightblue ${
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
                  <th
                    className=" py-2 border-[1px] border-gray-300 text-left text-[14px] md:text-base font-host
                   px-2 md:px-4"
                  >
                    S/N
                  </th>
                  <th
                    className=" py-2 border-[1px] border-gray-300 text-left text-[14px] md:text-base font-host
                   px-2 md:px-4"
                  >
                    Project Description
                  </th>
                  <th
                    className=" py-2 border-[1px] border-gray-300 text-left text-[14px] md:text-base font-host
                   px-2 md:px-4"
                  >
                    Year
                  </th>
                  <th
                    className=" py-2 border-[1px] border-gray-300 text-left text-[14px] md:text-base font-host
                   px-2 md:px-4"
                  >
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
                    Technical Evaluation of Burnt Ijora-7up Bridge Lagos
                  </td>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-jakarta">
                    2016
                  </td>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-jakarta">
                    Federal Ministry of Works Abuja
                  </td>
                </tr>
                <tr>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-jakarta">
                    2
                  </td>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-jakarta">
                    Structural Assessment of the Proposed Hotel & Conference
                    Centre at Plot 617, Sabon-Lugbe East District, Abuja
                  </td>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-jakarta">
                    2016
                  </td>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-jakarta">
                    Homtel Developers
                  </td>
                </tr>
                <tr>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-jakarta">
                    3
                  </td>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-jakarta">
                    Integrity Test of 16 Nos Concrete Column for the Proposed
                    Extension to the Banquet Hall.
                  </td>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-jakarta">
                    2016
                  </td>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-jakarta">
                    Central Council of Ibadan Indigenes.
                  </td>
                </tr>
                <tr>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-jakarta">
                    4
                  </td>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-jakarta">
                    Integrity Test of 8Nos Concrete Pile Extension for the
                    proposed Centre of Excellence Unilag.
                  </td>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-jakarta">
                    2016
                  </td>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-jakarta">
                    Quintec Construction Limited
                  </td>
                </tr>
                <tr>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-jakarta">
                    5
                  </td>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-jakarta">
                    Structural Audit of Oritamefa Baptist , Church, Basement
                    Extension Building.
                  </td>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-jakarta">
                    2016
                  </td>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-jakarta">
                    Multicad Nigeria Ltd
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
                  <th
                    className=" py-2 border-[1px] border-gray-300 text-left text-[14px] md:text-base font-host
                   px-2 md:px-4"
                  >
                    S/N
                  </th>
                  <th
                    className=" py-2 border-[1px] border-gray-300 text-left text-[14px] md:text-base font-host
                   px-2 md:px-4"
                  >
                    Project Description
                  </th>
                  <th
                    className=" py-2 border-[1px] border-gray-300 text-left text-[14px] md:text-base font-host
                   px-2 md:px-4"
                  >
                    Year
                  </th>
                  <th
                    className=" py-2 border-[1px] border-gray-300 text-left text-[14px] md:text-base font-host
                   px-2 md:px-4"
                  >
                    Clients
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-jakarta">
                    6
                  </td>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-jakarta">
                    Assessment of Existing Warehouse Floor and Concrete Road.
                  </td>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-jakarta">
                    2016
                  </td>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-jakarta">
                    Unilever
                  </td>
                </tr>
                <tr>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-jakarta">
                    7
                  </td>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-jakarta">
                    Technical Evaluation of Fire Damaged Ibagwa Bridge, Along
                    Ikot Ekpene – Abak – Ekparakwa – Ette Road in Akwa Ibom.
                  </td>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-jakarta">
                    2015
                  </td>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-jakarta">
                    Ministry of Works
                  </td>
                </tr>
                <tr>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-jakarta">
                    8
                  </td>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-jakarta">
                    Technical Evaluation of Burnt Bridge at CH 57 + 450 Along
                    Abuja – Abaji – Lokoja Road.
                  </td>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-jakarta">
                    2015
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
                    Structural Integrity Assessment of Heritage Mall – Cinema
                    Area for Odua Investment Company Ltd.
                  </td>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-jakarta">
                    2015
                  </td>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-jakarta">
                    Odua Investment Ltd
                  </td>
                </tr>
                <tr>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-jakarta">
                    10
                  </td>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-jakarta">
                    Structural Audit for a Bungalow Building within the Premises
                    of Central Bank of Nigeria, Abeokuta, Ogun State.
                  </td>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-jakarta">
                    2012
                  </td>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-jakarta">
                    CEDRA Nig. Ltd.
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
                  <th
                    className=" py-2 border-[1px] border-gray-300 text-left text-[14px] md:text-base font-host
                   px-2 md:px-4"
                  >
                    S/N
                  </th>
                  <th
                    className=" py-2 border-[1px] border-gray-300 text-left text-[14px] md:text-base font-host
                   px-2 md:px-4"
                  >
                    Project Description
                  </th>
                  <th
                    className=" py-2 border-[1px] border-gray-300 text-left text-[14px] md:text-base font-host
                   px-2 md:px-4"
                  >
                    Year
                  </th>
                  <th
                    className=" py-2 border-[1px] border-gray-300 text-left text-[14px] md:text-base font-host
                   px-2 md:px-4"
                  >
                    Clients
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-jakarta">
                    11
                  </td>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-jakarta">
                    Structural Integrity Audit of Costain and JDP Point Block
                    Towers In Rainbow Town Project Site.
                  </td>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-jakarta">
                    2013
                  </td>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-jakarta">
                    Rainbow Town Development Limited.
                  </td>
                </tr>
                <tr>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-jakarta">
                    12
                  </td>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-jakarta">
                    Structural Integrity Audit Of Masta Services Point Block
                    Tower In Rainbow Town Project Site.
                  </td>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-jakarta">
                    Feb 2013
                  </td>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-jakarta">
                    Rainbow Town Development Limited.
                  </td>
                </tr>
                <tr>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-jakarta">
                    13
                  </td>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-jakarta">
                    Structural Integrity Check for the Engineering Design for
                    the rehabilitation of Ijora – Apapa Bridge, Lagos State.
                  </td>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-jakarta">
                    October 2003
                  </td>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-jakarta">
                    Fujinkey
                  </td>
                </tr>
                <tr>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-jakarta">
                    14
                  </td>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-jakarta">
                    Structural Integrity Check for the Rehabilitation of Murtala
                    Mohammed Bridge at Kotonkarfe, Kogi State.
                  </td>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-jakarta">
                    2012
                  </td>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-jakarta">
                    Federal Ministry of Works
                  </td>
                </tr>
                <tr>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-jakarta">
                    15
                  </td>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-jakarta">
                    Engineering Design and Construction Supervision of Faculty
                    of Natural Science Building, Ajayi Crowther University.
                  </td>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-jakarta">
                    2009
                  </td>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-jakarta">
                    Ajayi Crowther University
                  </td>
                </tr>
                <tr>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-jakarta">
                    16
                  </td>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-jakarta">
                    Engineering, Procurement and Construction of Eket Airstrip
                    Control Tower, Eket, Akwa Ibom State.
                  </td>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-jakarta">
                    2007
                  </td>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-jakarta">
                    ExxonMobil
                  </td>
                </tr>
                <tr>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-jakarta">
                    17
                  </td>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-jakarta">
                    Detailed Engineering: Architectural, Structural, Mechanical
                    and Electrical Engineering Design Services for Geological
                    Warehouse and QIT Laboratory projects, Qua Iboe Terminal
                    Eket, Akwa Ibom State.
                  </td>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-jakarta">
                    2006
                  </td>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-jakarta">
                    Exxonmobil
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
      <section className=" py-[20px] text-center px-3">
        <h3
          className="text capitalize font-host
         font-semibold tracking-tight text-black text-[36px] md:text-[45px] xl:text-[54px] text-center leading-[1] mb-[60px] mx-auto max-w-[400px] md:max-w-[600px]"
        >
          Explore Other Projects Portfolio
        </h3>
        {/* <div className="links flex flex-col justify-center items-center lg:flex-row gap-2 mx-auto">
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
            to="/geosciences"
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
                d="M8 2.75A.75.75 0 0 1 8.75 2h1.5a.75.75 0 0 1 .75.75V3h1.25a.75.75 0 0 1 .75.75v1.785q.013 0 .025.002A8.25 8.25 0 0 1 16.994 20.5h3.256a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1 0-1.5h8.527A6.75 6.75 0 0 0 13 7.042v5.208a.75.75 0 0 1-.75.75h-.75v1a2 2 0 1 1-4 0v-1h-.75a.75.75 0 0 1-.75-.75v-8.5A.75.75 0 0 1 6.75 3H8zM9 13v1a.5.5 0 0 0 1 0v-1zm-3.25 4.5a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5z"
              ></path>
            </svg>
            Geosciences{" "}
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
        </div> */}
        <div className="links grid grid-cols-2 md:grid-cols-3 gap-x-3 gap-y-6 place-items-end">
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

export default Ndt;
