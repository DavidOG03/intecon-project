import React from "react";
import { motion } from "framer-motion";
import Quote from "../components/quote";

const StructuralDesign = () => {
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
        duration: 0.75,
        ease: "easeInOut",
        type: "tween",
        delay: 0.2,
      },
    },
  };

  return (
    <main className="structural-design bg-white pt-[60px]">
      <motion.h1
         variants={fadeup}
         initial="hidden"
         whileInView="visible"
         viewport={{ once: true }} 
         className="heading font-jakarta tracking-tighter text-blackish text-[42px] md:text-[68px] xl:text-[90px] text-left leading-tight font-medium mb-6 py-[5rem] pl-[3rem]">We have <span className="text-blue">designed & built amazing structures </span> that meet <span className="text-blue">the desire</span> of our <span className="text-blue">Clients</span></motion.h1>
      
      <section className="intro px-3 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-6 place-items-stretch lg:gap-12 pt-0 pb-[60px]">
        <motion.div
          variants={fadeup}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="image-box w-full h-full max-h-[320px] md:max-h-[450px] xl:max-h-none overflow-hidden rounded-[12px] bg-[url('/images/olive-court.webp')] bg-cover bg-no-repeat bg-center"
        >
        </motion.div>
        <div className="text ">
          <motion.h3
            variants={fadeup}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="capitalize font-jakarta tracking-tighter text-[#1c1c1c] text-[36px] md:text-[48px] xl:text-[72px] text-left leading-tight font-medium mb-6 max-w-[768px]"
          >
            Structural Engineering design
          </motion.h3>
          <motion.p
            variants={fadeup}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-[14px] md:text-base text-[#1c1c1c] font-inter max-w-[768px] "
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
            className="mt-4 text-[14px] md:text-basetext-[#1c1c1c] font-inter max-w-[768px]"
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
          className="text capitalize font-jakarta font-medium tracking-tight text-[#1c1c1c] text-[36px] md:text-[48px] xl:text-[64px] text-center leading-[1] mb-6  mx-auto max-w-[620px]"
        >
          Structural Design projects gallery
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
              src="/images/structure1.png"
              alt="structure-work"
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
              src="/images/structure2.png"
              alt="structure-work"
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
              src="/images/structure3.png"
              alt="structure-work"
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
              src="/images/structure4.png"
              alt="structure-work"
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
              src="/images/staircase.png"
              alt="structure-work"
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
              src="/images/structure5.png"
              alt="structure-work"
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
              src="/images/structural-engr.png"
              alt="structure-work"
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
              src="/images/structure6.png"
              alt="structure-work"
              className="w-full max-w-[768px]"
            />
          </motion.div>
        </div>
      </section>
      <section className="structural-projects">
      <motion.h3
          variants={fadeup}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text capitalize font-jakarta font-medium tracking-tight text-[#1c1c1c] text-[36px] md:text-[45px] xl:text-[54px] text-center leading-tight mb-6  mx-auto max-w-[768px]"
        >
         Past Structural Design Projects
        </motion.h3>
        <div className="projects-container w-full flex flex-col justify-start items-stretch gap-8 lg:flex-row">
        <div className="project-tabs basis-[20%] h-full flex flex-row lg:flex-col justify-between items-stretch gap-8">
          <button className="project-tab w-full p-6 lg:p-12 bg-[#0499CF] text-white">
            Projects Tab 1 
          </button>
          <button className="project-tab w-full p-6 lg:p-12 bg-[#0499CF] text-white">
            Projects Tab 2
          </button>
          <button className="project-tab w-full p-6 lg:p-12 bg-[#0499CF] text-white">
            Projects Tab 3
          </button>
        </div>
      <table className="max-w-[750px] mx-auto bg-white border border-gray-300 basis-[80%]">
          <thead>
            <tr>
              <th className=" py-2 border-[1px] border-gray-300 text-left text-[14px] md:text-base font-jakarta px-1">S/N</th>
              <th className=" py-2 border-[1px] border-gray-300 text-left text-[14px] md:text-base font-jakarta px-1">
                Project Description
              </th>
              <th className=" py-2 border-[1px] border-gray-300 text-left text-[14px] md:text-base font-jakarta px-1">Year</th>
              <th className=" py-2 border-[1px] border-gray-300 text-left text-[14px] md:text-base font-jakarta px-1">Clients</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-inter">1</td>
              <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-inter">
              Consultancy Services for the Supervision, Rehabilitation and Reconstruction of Lagos – Ibadan Dual Carriageway under Private Finance Initiative
              </td>
              <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-inter">Project On-Hold</td>
              <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-inter">Motorways Asset Ltd/FMW</td>
            </tr>
            <tr>
              <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-inter">2</td>
              <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-inter">
              Consultancy Services for the Engineering Design for the Dualization of Ilorin – Jebba – Mokwa Highway
              </td>
              <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-inter">2014</td>
              <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-inter">Federal Ministry of Works Abuja</td>
            </tr>
            <tr>
              <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-inter">3</td>
              <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-inter">
              Engineering Design of Interchange Near Lokoja International Market and NNPC Mega Station, Along Abuja – Lokoja Road Dualization, Section IV
              </td>
              <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-inter">Oct 2010 - July 2014</td>
              <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-inter">
              Federal Ministry of Works Abuja
              </td>
            </tr>
            <tr>
              <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-inter">4</td>
              <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-inter">
              Consultancy Services for the Supervision of the Rehabilitation of Kunya- Kanya – Babura - Bababmutum Road
              </td>
              <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-inter">2013</td>
              <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-inter">
              Federal Ministry of Works Abuja
              </td>
            </tr>
            <tr>
              <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-inter">5</td>
              <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-inter">
              Emergency Reconstruction of Flooded Sections of Abuja – Lokoja Road, CH 23 + 400 to CH 26 + 395 (Kotonkarfe – Lokoja) in Kogi State.
              </td>
              <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-inter">2013</td>
              <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-inter">
              Federal Ministry of Works Abuja
              </td>
            </tr>
            <tr>
              <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-inter">6</td>
              <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-inter">
              Engineering Design for the Rehabilitation of Ilorin – Jebba – Mokwa Highway.
              </td>
              <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-inter">2013</td>
              <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-inter">
              Federal Ministry of Works Abuja
              </td>
            </tr>
          </tbody>
        </table>
        {/* 2nd Table */}
        <table className="max-w-[750px] mx-auto bg-white border border-gray-300 basis-[80%] hidden">
          <thead>
            <tr>
              <th className=" py-2 border-[1px] border-gray-300 text-left text-[14px] md:text-base font-jakarta pl-4">S/N</th>
              <th className=" py-2 border-[1px] border-gray-300 text-left text-[14px] md:text-base font-jakarta pl-4">
                Project Description
              </th>
              <th className=" py-2 border-[1px] border-gray-300 text-left text-[14px] md:text-base font-jakarta pl-4">Year</th>
              <th className=" py-2 border-[1px] border-gray-300 text-left text-[14px] md:text-base font-jakarta pl-4">Clients</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-inter">7</td>
              <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-inter">
              Consultancy Services for the Engineering Design for the Rehabilitation of Ijora – Apapa Bridge.
              </td>
              <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-inter">2013</td>
              <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-inter">Federal Ministry of Works Abuja</td>
            </tr>
            <tr>
              <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-inter">8</td>
              <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-inter">
              Detailed Design and Preparation of Bidding Document for the Rehabilitation of Mokwa Bida Road in Niger State.
              </td>
              <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-inter">2012</td>
              <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-inter">Federal Ministry of Works Abuja</td>
            </tr>
            <tr>
              <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-inter">9</td>
              <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-inter">
              Consultancy Services for the Assessment of Railway Bridges, Western Line (KM 56,727- 488,034)
              </td>
              <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-inter">2011</td>
              <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-inter">
              Nigerian Railway Corporation
              </td>
            </tr>
            <tr>
              <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-inter">10</td>
              <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-inter">
              Consultancy Services for the Engineering Design for the Rehabilitation of Murtala Mohammed Bridge, Kotonkarfe, Kogi State.
              </td>
              <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-inter">2011</td>
              <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-inter">
              Federal Ministry of Works Abuja
              </td>
            </tr>
            <tr>
              <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-inter">11</td>
              <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-inter">
              Consultancy services for Engineering Design for the Rehabilitation of Mokwa – New Bussa –Kaima to Oyo State Border in Niger/Kwara States.
              </td>
              <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-inter">2010</td>
              <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-inter">
              Federal Ministry of Works Abuja
              </td>
            </tr>
            <tr>
              <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-inter">12</td>
              <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-inter">
              Engineering Supervision for Rehabilitation of Mararaba -Pambeguwa - Saminaka - Jos Road, Section 1: Mararaba -Pambeguwa in Kaduna State.
              </td>
              <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-inter">Feb 2010 (20 month)</td>
              <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-inter">
              Federal Ministry of Works & Urban Dev.
              </td>
            </tr>
          </tbody>
        </table>
        {/* 3rd table */}
        <table className="max-w-[750px] mx-auto bg-white border border-gray-300 basis-[80%] hidden">
          <thead>
            <tr>
              <th className=" py-2 border-[1px] border-gray-300 text-left text-[14px] md:text-base font-jakarta pl-4">S/N</th>
              <th className=" py-2 border-[1px] border-gray-300 text-left text-[14px] md:text-base font-jakarta pl-4">
                Project Description
              </th>
              <th className=" py-2 border-[1px] border-gray-300 text-left text-[14px] md:text-base font-jakarta pl-4">Year</th>
              <th className=" py-2 border-[1px] border-gray-300 text-left text-[14px] md:text-base font-jakarta pl-4">Clients</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-inter">13</td>
              <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-inter">
              Consultancy Engineering Supervision for Rehabilitation of Gombe -Numan-Yola Road Section II-Numan -Gombe in Gombe Adamawa States.
              </td>
              <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-inter">October 2009 – Feb 2011</td>
              <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-inter">Federal Ministry of Works & Urban Dev.</td>
            </tr>
            <tr>
              <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-inter">14</td>
              <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-inter">
              Dualization of Oba Adesida- Isinkan - Ondo Road Project
              </td>
              <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-inter">Oct 2010 – July 2014</td>
              <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-inter">Ondo State Government</td>
            </tr>
            <tr>
              <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-inter">15</td>
              <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-inter">
              Structural Engineering Design and Construction Supervision of Ilorin Cargo Terminal.
              </td>
              <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-inter">2018 - 2010</td>
              <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-inter">
              FAAN / Kwara State Govt.
              </td>
            </tr>
            <tr>
              <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-inter">16</td>
              <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-inter">
              Consultancy Services for the Dualization of Abuja – Abaji – Lokoja Road, Section IV
              </td>
              <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-inter">March 2007 to date</td>
              <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-inter">
              Federal Ministry of Works Abuja
              </td>
            </tr>
            <tr>
              <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-inter">17</td>
              <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-inter">
              National Highways and urban Roads Rehabilitation project lot 14:Akure -owo,owo –Akungba –Isua Ibilo,Okene, Kabba,-Omua –Okaegbe –Ikare Akungba, Owo township Road, okaegbe township road.
              </td>
              <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-inter">1998</td>
              <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-inter">
              Petroleum (special)Trust fund(PTF)
              </td>
            </tr>
            <tr>
              <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-inter">18</td>
              <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-inter">
              Detailed Engineering Design of BRT Access Road including 1x 20m span bridge deck on pile.
              </td>
              <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-inter">2003</td>
              <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-inter">
              ExxonMobil
              </td>
            </tr>
            <tr>
              <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-inter">19</td>
              <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-inter">
              MHE By-Pass Road/Right of Way reestablishment survey at Eket.
              </td>
              <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-inter">2005</td>
              <td className="px-2 md:px-4 py-2 border border-gray-300 text-left text-[14px] md:text-base font-inter">
              ExxonMobil
              </td>
            </tr>
          </tbody>
        </table>
        </div>
      </section>
      <Quote />
    </main>
  );
};

export default StructuralDesign;
