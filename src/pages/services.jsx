import React, { useEffect, useRef } from "react";
import ServiceCard from "../components/service-card";
import Quote from "../components/quote";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PortfolioCard from "../components/portfolioCard";
import highway from '../../public/images/highway.webp'
import structure from '../../public/images/ogudu-3.webp'
import geoscience from '../../public/images/geosciences.webp'
import ndt from '../../public/images/testing.webp'
import video from '../../public/images/qaqc-13.webp'


const Services = () => {
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

  const container = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5, // Delay of 0.1 seconds between each child's animation
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
    <main className="services pt-[120px] bg-white">
      <motion.h3
        variants={fadeup}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        ref={mainContentRef}
        tabIndex="-1"
        className="text-[54px] md:text-[64px] lg:text-[74px] font-medium text-textblack col-start-1 col-end-4 font-host tracking-tight leading-tight mb-2 px-4 lg:px-3xl"
      >
        Our Services
      </motion.h3>
      <motion.p
        variants={fadeup}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-base md:text-[18px] max-w-[520px] font-jakarta font-normal tracking-tight leading-tight mb-[40px] px-4 lg:px-3xl"
      >
        Take a look at the services we offer. We're here to help make your
        project a success.
      </motion.p>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="services-box grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-stretch gap-4 mb-[120px] px-4 lg:px-3xl"
      >
        <ServiceCard
          link="/structural-design"
          name="Engineering Design"
          desc="Intecon, a leader in project development and engineering design, consistently exceeds client expectations. With extensive experience, we deliver successful projects in industrial, commercial, marine, and aviation facilities, highways, bridges, and infrastructure, including estates, terminals, warehouses, offices, and recreational facilities."
          img="/images/service-one.webp"
          alt="Engineering Design"
        />

        <ServiceCard
          link="/geosciences"
          name="Geosciences"
          desc="Intecon is proud of its achievements in construction, offering specialized services with advanced equipment and skilled manpower. With international experience in offshore geotechnical work and foundation design, we lead in geotechnical services for high-rise buildings, bridges, power lines, IPPs, LNG, and oil terminals in diverse terrains."
          img="/images/geosciences.webp"
          alt="Geosciences"
        />

        <ServiceCard
          link="/structural-design"
          name="Project Management"
          desc="Our highly skilled team manages projects of all complexities, offering cost-effective, sound approaches to achieve objectives. With diverse experience and up-to-date training, we ensure quality, timely, and cost-effective construction supervision. Our strategy involves working closely with contractors and providing comprehensive reports as needed."
          img="/images/project-management.jpg"
          alt="Project Management"
        />

        <ServiceCard
          link="/geosciences"
          name="Laboratory Testing"
          desc="Our Lagos laboratory is equipped with modern equipment for geotechnical, civil, and structural testing services. Our trained personnel perform tests to BS, ASTM, and other international standards. We test soil samples for foundation design and structural strength. We aim to collaborate with governments and builders to reduce structural failures due to construction materials."
          img="/images/lab-test.png"
          alt=""
        />

        <ServiceCard
          link="/non-destructive-testing"
          name="QA/QC"
          desc="Intecon has provided quality assurance, inspections, integrity checks, and failure analysis for government, corporations, and Oil & Gas companies. Leveraging our expertise, we conduct specialized tests for runway integrity, fire-damaged buildings, failing structures, design verification, QAQC document checking, and construction inspection. We also offer advisory services for process plants, tank farms on pile foundations, and oil terminal jetties."
          img="/images/qaqc-8.webp"
          alt="Quality Assurance/ Quality Control"
        />

        <ServiceCard
          link="/non-destructive-testing"
          name="NDT"
          desc="Intecon utilizes state-of-the-art non-destructive testing equipment and a highly trained inspection team to conduct detailed inspections meeting international standards. We specialize in inspecting diverse engineering infrastructures such as bridges, high-rise buildings, foundation structures, and steel facilities. Our commitment is to continuously enhance our non-destructive testing services to align with global trends and best practices."
          img="/images/testing.webp"
          alt="Non destructive testing"
        />
      </motion.div>
      <section className=" py-[20px] text-center px-4 lg:px-3xl">
        <motion.h3
          variants={fadeup}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }} className="text-[34px] md:text-[54px] capitalize tracking-tight font-host font-medium pb-6 lg:pb-8 max-w-[400px] md:max-w-[600px] mx-auto text-textblack leading-[1]">
          Explore Our Project Portfolio
        </motion.h3>
        <div className="links grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-3 gap-y-3 place-items-end">
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
    </main>
  );
};

export default Services;
