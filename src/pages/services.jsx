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
        className="text-[54px] md:text-[64px] lg:text-[74px] font-medium text-textblack col-start-1 col-end-4 font-host tracking-tight leading-tight pl-4 md:pl-8 mb-2"
      >
        Our Services
      </motion.h3>
      <motion.p
        variants={fadeup}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-base md:text-[18px] max-w-[520px] font-jakarta font-normal tracking-tight leading-tight mb-[100px] pl-4 md:pl-8"
      >
        Take a look at the services we offer. We're here to help make your
        project a success.
      </motion.p>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="services-box grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-stretch gap-4 px-4 md:px-8 mb-[120px]"
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
      <section className=" py-[20px] text-center px-3">
        <h3 className="text-[34px] md:text-[54px] capitalize tracking-tight font-host font-medium pb-6 max-w-[400px] md:max-w-[600px] mx-auto text-textblack leading-[1]">
          Explore Our Project Portfolio
        </h3>
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
        {/* <div className="links flex flex-col justify-center items-center gap-2 mx-auto">
          <Link
            to="/highway-bridges-design"
            className="goto flex max-w-[300px] bg-blue text-white mx-auto mb-6 py-4 px-2 rounded-[3rem] items-center gap-2"
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
            className="goto flex max-w-[300px] bg-blue text-white mx-auto mb-6 p-4 rounded-[3rem] items-center gap-2"
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
            className="goto flex max-w-[300px] bg-blue text-white mx-auto mb-6 p-4 rounded-[3rem] items-center gap-2"
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
            to="/non-destructive-testing"
            className="goto flex max-w-[300px] bg-blue text-white mx-auto mb-6 p-4 rounded-[3rem] items-center gap-2"
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
        </div> */}
      </section>
      <Quote />
    </main>
  );
};

export default Services;
