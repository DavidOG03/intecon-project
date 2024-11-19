import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Quote from "../components/quote";
import { Link } from "react-router-dom";
import ProjectCard from "../components/projectCard";
import PortfolioCard from "../components/portfolioCard";
import highway from '../../public/images/highway.webp'
import geoscience from '../../public/images/geosciences.webp'
import ndt from '../../public/images/testing.webp'
import video from '../../public/images/qaqc-13.webp'


const StructuralDesign = () => {
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
    exit: {
      opacity: 0,
      y: -20,
    },
  };

  const mainContentRef = useRef(null);

  useEffect(() => {
    if (mainContentRef.current) {
      mainContentRef.current.focus();
    }
  }, []);

  return (
    <main className="structural-design bg-white pt-[60px]">
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
          We have{" "}
          <span className="text-blue">
            designed & built amazing structures{" "}
          </span>
          that meet <span className="text-blue">the desire</span> of our{" "}
          <span className="text-blue">Clients</span>
        </motion.h1>
      </section>

      <section className="intro px-3 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-6 place-items-stretch lg:gap-12 pt-[60px] pb-[60px] items-center">
        <motion.div
          variants={fadeup}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="image-box w-full h-full min-h-[320px] rounded-[12px] bg-[url('/images/olive-court.webp')] bg-cover bg-no-repeat bg-center"
        ></motion.div>
        <div className="text ">
          {/* <motion.h3
            variants={fadeup}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="capitalize font-host tracking-tight text-[#1c1c1c] text-[36px] md:text-[48px] xl:text-[72px] text-left leading-tight font-semibold mb-6 max-w-[768px]"
          >
            Structural Engineering design
          </motion.h3> */}
          <motion.p
            variants={fadeup}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-[14px] md:text-base text-textblack font-inter max-w-[768px] "
          >
            INTECON has gained experience in design of many structural
            engineering projects including high rise buildings, factories,
            warehouses etc. and also developed technical capabilities in
            handling structural projects of all sizes. The structural
            engineering team utilizes different analysis and design software
            such as STAAD PRO, CADRC and AUTOCAD, using standard procedures and
            quality production of drawing
          </motion.p>
          <motion.p
            variants={fadeup}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-4 text-[14px] md:text-base text-textblack font-inter max-w-[768px]"
          >
            INTECON is well known as a top civil/structural engineering
            consulting firm providing sound technical solutions to engineering
            needs in the society. Our extensive structural engineering services
            include design of industrial buildings, factories, warehouses and
            heavy civil engineering works. Our achievements in this field are
            being enhanced through continuous development of our qualified
            professionals and utilization of state of the art equipment and
            software that comply with international standards.
          </motion.p>
        </div>
      </section>
      <section className="gallery px-3 py-[60px]">
        <motion.h3
          variants={fadeup}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text capitalize font-host font-semibold tracking-tight text-[#1c1c1c] text-[36px] md:text-[45px] xl:text-[54px] text-center leading-[1.2] mb-[60px] mx-auto max-w-[620px]"
        >
          Projects gallery
        </motion.h3>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          <ProjectCard
            img="/images/ogudu-1.webp"
            title="Ogudu Project"
            description="Structural Design Project"
          />
          <ProjectCard
            img="/images/ogudu-2.webp"
            title="Ogudu Project"
            description="Structural Design Project"
          />
          <ProjectCard
            img="/images/ogudu-6.webp"
            title="Ogudu Project"
            description="Structural Design Project"
          />
          <ProjectCard
            img="/images/ogudu-7.webp"
            title="Ogudu Project"
            description="Structural Design Project"
          />
          <ProjectCard
            img="/images/isi-building.jpeg"
            title="The International School Ibadan"
            description="Structural Design Project"
          />
          <ProjectCard
            img="/images/structure2.png"
            title="Olive Court"
            description="Structural Design Project"
          />
          <ProjectCard
            img="/images/structure3.png"
            title="Faculty of Natural Sciences, Ajayi Crowther University, Oyo."
            description="Structural Design Project"
          />
          <ProjectCard
            img="/images/structure4.png"
            title="Bowen University Library Complex"
            description="Structural Design Project"
          />
          <ProjectCard
            img="/images/staircase.png"
            title="Heritage Mall, Ibadan"
            description="Structural Design Project"
          />
          <ProjectCard
            img="/images/structure5.png"
            title="Ajayi Crowther University Female Hostel Block"
            description="Structural Design Project"
          />
          <ProjectCard
            img="/images/structural-engr.png"
            title="Ace Estate"
            description="Structural Design Project"
          />
          <ProjectCard
            img="/images/structure6.png"
            title="Cargo terminal federal airport, Ilorin"
            description="Structural Design Project"
          />
        </div>
      </section>
      <section className="structural-projects px-4 py-[60px]">
        <motion.h3
          variants={fadeup}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text capitalize font-host font-semibold tracking-tight text-[#1c1c1c] text-[36px] md:text-[45px] xl:text-[54px] text-center leading-tight mb-[60px] mx-auto max-w-[768px]"
        >
          Past Structural Design Projects
        </motion.h3>
        <div className="projects-container xl:max-w-[70%] mx-auto w-full flex flex-col justify-start items-stretch gap-8 lg:flex-row relative">
          <div className="project-tabs basis-[20%] h-full flex flex-row lg:flex-col justify-between items-stretch gap-4 lg:gap-[60px] sticky top-[64px] lg:top-[90px] left-0 z-50 bg-white py-3">
            <button
              className={`project-tab w-full p-3 lg:p-10 text-[13px] text-base font-host font-bold rounded-lg hover:bg-lightblue ${
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
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-inter">
                    1
                  </td>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-inter">
                    Construction of School Block at Ogbona Secondary School,
                    Ogbona, Edo State.
                  </td>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-inter">
                    On-going
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
                    Structural Engineering Consultancy Services for Proposed
                    Development for Oodua Investment Company Ltd at Jericho
                    Area, Ibadan (ACE Project)
                  </td>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-inter">
                    On-going
                  </td>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-inter">
                    Odua Investment Company
                  </td>
                </tr>
                <tr>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-inter">
                    3
                  </td>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-inter">
                    Engineering Design of Proposed academic planning Complex for
                    Oshun State , Polytechnic, Iree
                  </td>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-inter">
                    On-going
                  </td>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-inter">
                    Design Haven Consult
                  </td>
                </tr>
                <tr>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-inter">
                    4
                  </td>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-inter">
                    Structural Engineering Design of Elevator Backup at Level
                    24.0m of F&HC Building
                  </td>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-inter">
                    2016
                  </td>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-inter">
                    Procter & Gamble
                  </td>
                </tr>
                <tr>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-inter">
                    5
                  </td>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-inter">
                    Structural Engineering Consultancy Services for Design and
                    Construction Supervision of Distance learning Institute
                    Building, University of Lagos
                  </td>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-inter">
                    2015
                  </td>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-inter">
                    Unilag
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
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-inter">
                    6
                  </td>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-inter">
                    Structural Engineering Design and Construction Supervision
                    Services for the Proposed Residential Development at Agodi,
                    Ibadan, Oyo State.
                  </td>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-inter">
                    2016
                  </td>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-inter">
                    UACN Property Dev. Company
                  </td>
                </tr>
                <tr>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-inter">
                    7
                  </td>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-inter">
                    Design Phase and detailing of the Steel Roof Structure
                    covering the existing playground including the
                    electromechanical services for French School Lagos
                  </td>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-inter">
                    April - Oct 2014
                  </td>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-inter">
                    Association Francaise de Nigeria
                  </td>
                </tr>
                <tr>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-inter">
                    8
                  </td>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-inter">
                    Construction Supervision of Osun State Stadium
                  </td>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-inter">
                    2013- Date
                  </td>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-inter">
                    Osun State Govt.
                  </td>
                </tr>
                <tr>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-inter">
                    9
                  </td>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-inter">
                    Consultancy Services for the Proposed Lecture theatre for
                    the Faculty of Science, University of Ibadan
                  </td>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-inter">
                    2013 - Date
                  </td>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-inter">
                    University of Ibadan
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
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-inter">
                    10
                  </td>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-inter">
                    300 Bed hostel for Ajayi Crowther University, Oyo State.
                  </td>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-inter">
                    2013
                  </td>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-inter">
                    Ajayi Crowther University
                  </td>
                </tr>
                <tr>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-inter">
                    11
                  </td>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-inter">
                    Engineering Design and Supervision of Heritage Shopping Mall
                    for Odua Investment.
                  </td>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-inter">
                    2013
                  </td>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-inter">
                    Odua Investment Group
                  </td>
                </tr>
                <tr>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-inter">
                    12
                  </td>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-inter">
                    Bowen University Library Complex, Iwo.
                  </td>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-inter">
                    2012
                  </td>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-inter">
                    Bowen University
                  </td>
                </tr>
                <tr>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-inter">
                    13
                  </td>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-inter">
                    Detailed Engineering Design and Construction Supervision of
                    the Trauma Centre for the National Hospital, Abuja.
                  </td>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-inter">
                    2012-2013
                  </td>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-inter">
                    ab.dt. Partnership Project Managers
                  </td>
                </tr>
                <tr>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-inter">
                    14
                  </td>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-inter">
                    Structural Engineering design and supervision of the Ilorin
                    Airport Cargo Terminal, Ilorin
                  </td>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-inter">
                    2008-2010
                  </td>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-inter">
                    FAAN/Kwara State Govt
                  </td>
                </tr>
                <tr>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-inter">
                    15
                  </td>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-inter">
                    Engineering Design and Construction Supervision of Faculty
                    of Natural Science Building, Ajayi Crowther University.
                  </td>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-inter">
                    2009
                  </td>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-inter">
                    Ajayi Crowther University
                  </td>
                </tr>
                <tr>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-inter">
                    16
                  </td>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-inter">
                    Engineering, Procurement and Construction of Eket Airstrip
                    Control Tower, Eket, Akwa Ibom State.
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
                    17
                  </td>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-inter">
                    Detailed Engineering: Architectural, Structural, Mechanical
                    and Electrical Engineering Design Services for Geological
                    Warehouse and QIT Laboratory projects, Qua Iboe Terminal
                    Eket, Akwa Ibom State.
                  </td>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-inter">
                    2006
                  </td>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-inter">
                    Exxonmobil
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
      <section className=" py-[20px] text-center p-3">
        <h3 className="text capitalize font-host font-semibold tracking-tight text-black text-[36px] md:text-[45px] xl:text-[54px] text-center leading-[1] mb-[60px] mx-auto max-w-[400px] md:max-w-[600px]">
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
            Highway and Bridges Design
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
            Geosciences
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
            Non-destructive Testing
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

export default StructuralDesign;
