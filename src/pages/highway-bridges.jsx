import React from "react";
import { motion } from "framer-motion";
import Quote from "../components/quote";

const HighwayBridges = () => {
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
    <main className="highway-design bg-white pt-[60px]">
      <section className="intro px-3 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-6 place-items-stretch lg:gap-12 pt-6 pb-[120px]">
        <motion.div
          variants={fadeup}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="image-box w-full h-full max-h-[320px] xl:max-h-none overflow-hidden rounded-[12px]"
        >
          <img
            src="/images/road.png"
            alt="highway road"
            className="object-cover w-full"
          />
        </motion.div>
        <div className="text">
          <motion.h3
            variants={fadeup}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="capitalize font-jakarta tracking-tighter text-[#1c1c1c] text-[36px] md:text-[60px] xl:text-[72px] text-left leading-tight font-medium mb-6 max-w-[768px]"
          >
            Highways and bridges design
          </motion.h3>
          <motion.p
            variants={fadeup}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-[14px] md:text-base text-[#1c1c1c] font-inter max-w-[768px]"
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
            className="mt-4 text-[14px] md:text-base text-[#1c1c1c] font-inter max-w-[768px]"
          >
            In our highway design we optimize sustainability and harmonize our
            design with the environment in form of developing design and
            construction schemes that minimizes or eliminate traffic
            interference during construction.
          </motion.p>
        </div>
      </section>
      <section className="gallery px-6 py-[60px]">
        <motion.h3
          variants={fadeup}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text capitalize font-jakarta tracking-tight text-[#1c1c1c] text-[36px] md:text-[45px] xl:text-[54px] text-left leading-tight mb-6 max-w-[768px]"
        >
          Highway and bridges projects pictures
        </motion.h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <motion.div 
          variants={fadein}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="project-pic">
            <img src="/images/road.png" alt="road-work" className="w-full" />
          </motion.div>
          <motion.div 
          variants={fadein}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="project-pic">
            <img src="/images/road2.png" alt="road-work" className="w-full" />
          </motion.div>
          <motion.div 
          variants={fadein}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="project-pic">
            <img src="/images/road3.png" alt="road-work" className="w-full" />
          </motion.div>
          <motion.div 
          variants={fadein}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="project-pic">
            <img src="/images/road4.png" alt="road-work" className="w-full" />
          </motion.div>
          <motion.div 
          variants={fadein}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="project-pic">
            <img src="/images/road5.png" alt="road-work" className="w-full" />
          </motion.div>
          <motion.div 
          variants={fadein}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="project-pic">
            <img src="/images/road6.png" alt="road-work" className="w-full" />
          </motion.div>
          <motion.div 
          variants={fadein}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="project-pic">
            <img src="/images/road7.png" alt="road-work" className="w-full" />
          </motion.div>
        </div>
      </section>

      <section className="projects px-4 py-[60px]">
        <table className="max-w-[750px] mx-auto bg-white border border-gray-300">
          <thead>
            <tr>
              <th className=" py-2 border-b-2 border-gray-300 text-left pl-4">S/N</th>
              <th className=" py-2 border-b-2 border-gray-300 text-left pl-4">
                Project Description
              </th>
              <th className=" py-2 border-b-2 border-gray-300 text-left pl-4">Year</th>
              <th className=" py-2 border-b-2 border-gray-300 text-left pl-4">Clients</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2 border-b border-gray-300 text-left">1</td>
              <td className="px-4 py-2 border-b border-gray-300 text-left">
              Consultancy Services for the Supervision, Rehabilitation and Reconstruction of Lagos – Ibadan Dual Carriageway under Private Finance Initiative
              </td>
              <td className="px-4 py-2 border-b border-gray-300 text-left">Project On-Hold</td>
              <td className="px-4 py-2 border-b border-gray-300 text-left">Motorways Asset Ltd/FMW</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border-b border-gray-300 text-left">2</td>
              <td className="px-4 py-2 border-b border-gray-300 text-left">
              Consultancy Services for the Engineering Design for the Dualization of Ilorin – Jebba – Mokwa Highway
              </td>
              <td className="px-4 py-2 border-b border-gray-300 text-left">2014</td>
              <td className="px-4 py-2 border-b border-gray-300 text-left">Federal Ministry of Works Abuja</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border-b border-gray-300 text-left">3</td>
              <td className="px-4 py-2 border-b border-gray-300 text-left">
              Engineering Design of Interchange Near Lokoja International Market and NNPC Mega Station, Along Abuja – Lokoja Road Dualization, Section IV
              </td>
              <td className="px-4 py-2 border-b border-gray-300 text-left">Oct 2010 - July 2014</td>
              <td className="px-4 py-2 border-b border-gray-300 text-left">
              Federal Ministry of Works Abuja
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2 border-b border-gray-300 text-left">4</td>
              <td className="px-4 py-2 border-b border-gray-300 text-left">
              Consultancy Services for the Supervision of the Rehabilitation of Kunya- Kanya – Babura - Bababmutum Road
              </td>
              <td className="px-4 py-2 border-b border-gray-300 text-left">2013</td>
              <td className="px-4 py-2 border-b border-gray-300 text-left">
              Federal Ministry of Works Abuja
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2 border-b border-gray-300 text-left">5</td>
              <td className="px-4 py-2 border-b border-gray-300 text-left">
              Emergency Reconstruction of Flooded Sections of Abuja – Lokoja Road, CH 23 + 400 to CH 26 + 395 (Kotonkarfe – Lokoja) in Kogi State.
              </td>
              <td className="px-4 py-2 border-b border-gray-300 text-left">2013</td>
              <td className="px-4 py-2 border-b border-gray-300 text-left">
              Federal Ministry of Works Abuja
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2 border-b border-gray-300 text-left">6</td>
              <td className="px-4 py-2 border-b border-gray-300 text-left">
              Engineering Design for the Rehabilitation of Ilorin – Jebba – Mokwa Highway.
              </td>
              <td className="px-4 py-2 border-b border-gray-300 text-left">2013</td>
              <td className="px-4 py-2 border-b border-gray-300 text-left">
              Federal Ministry of Works Abuja
              </td>
            </tr>
          </tbody>
          	



        </table>
      </section>
      <Quote />
    </main>
  );
};

export default HighwayBridges;
