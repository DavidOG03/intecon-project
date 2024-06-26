import React from "react";
import Director from "./director";
import Clients from "./clients";
import Quote from "./quote";

const About = () => {
  return (
    <main className="about w-full bg-[#110F0E] py-[120px]">
      <section className="mission px-6 relative py-[60px] lg:py-[120px] lg:flex lg:flex-row-reverse justify-center items-start rev gap-12 w-full">
      <div className="image-box w-full ">
          <img
            src="/images/mission.jpg"
            alt="consulting engineering"
            className=" w-full object-cover"
          />
        </div>
        <div className="text basis-[50%]">
        <h3 className="text-[#f0f0f0] font-jakarta text-[42px] md:[68px] lg:[90px] relative z-10">Our Mission</h3>
        <p className="text-base font-inter text-[#f0f0f0] relative z-10 leading-relaxed">
        Our mission is to provide technically sound engineering services on projects, to achieve the production of durable facilities and time tested solutions, at optimum costs to clients, and in a timely and environmentally friendly manner, utilizing highly trained manpower, cutting- edge technology and equipment.
        </p>
        </div>
        
        
      </section>

      <section className="vision lg:flex lg:flex-row justify-center items-start gap-12 mt-[120px] relative px-6 py-[60px] lg:py-[120px]">
        <div className="image-box w-full">
          <img
            src="/images/vision.jpg"
            alt="consulting engineering"
            className=" w-full"
          />
        </div>
        <div className="text ">
        <h3 className="text-[#f0f0f0] font-jakarta text-[42px] md:[68px] lg:[90px] relative z-10">Our Vision</h3>
        <p className="text-base text-[#f0f0f0] font-inter mb-6 relative z-10">
        Our vision is to be one of the best consulting engineering firms in Africa and beyond, in the delivery of world class engineering services.
        </p>
        </div>
        
      </section>

      <section className="overview px-6 relative py-[60px] lg:py-[120px] lg:flex lg:flex-row-reverse justify-center items-start rev gap-12 w-full">
      <div className="image-box w-full">
          <img
            src="/images/structural-engr.png"
            alt="consulting engineering"
            className=" w-full"
          />
        </div>
        <div className="text basis-[50%]">
        <h3 className="text-[#f0f0f0] font-jakarta text-[42px] md:[68px] lg:[90px] relative z-10">Who We Are</h3>
        <p className="text-base text-[#f0f0f0] font-inter mb-6 relative z-10 leading-relaxed">
          Intecon Partnership Limited is a leading ﬁrm of Nigerian Consulting
          Engineers specializing in areas of heavy industrial and large scale
          civil engineering works such as high-rise buildings, factories,
          stadia, highways and bridges, airstrips and hangars, helicopter bases,
          ports, jetties, oil terminals and housing estate. Established in 1976,
          the ﬁrm has been operating for over 40 years and is credited with many
          successfully completed projects within the length and breadth of
          Nigeria and along the west African Coast. INTECON’s clientele include
          operators in the Oil and Gas Industry, Federal and State Governments,
          Infrastructure Companies, Aviation and Private Institutions.
          <span className="font-bold font-inter block my-12">
            INTECON is an ISO 9001 :2015 Certiﬁed Company
          </span>
        </p>
        </div>
      </section>

      <section className="division lg:flex lg:flex-row justify-center items-start gap-12 relative px-6 py-[60px] lg:py-[120px]">
        <div className="image-box w-full">
          <img
            src="/images/geosciences.webp"
            alt="consulting engineering"
            className=" w-full "
          />
        </div>
        <div className="text basis-[50%]">
        <p className="text-base text-[#f0f0f0] font-inter mb-6 relative z-10 mt-[100px]">
          {" "}
          Apart from its extensive consulting engineering capabilities, Intecon
          Partnership Ltd is the parent company of two other specialist
          companies viz: Automated Geotechnics Ltd and Interworks Engineering
          Ltd.
        </p>
        <p className="text-base text-[#f0f0f0] font-inter mb-6 relative z-10">
          <strong>AUTOMATED GEOTECHNICS</strong> was established in the year
          1997 in response to the dearth of competent local Geotechnical
          Engineering Companies equipped with modern facilities at the time.
          Thus, the philosophy behind its formation is to digitally ‘automate’
          its operations from the ﬁeld to the laboratory. Hence, it is equipped
          with such State-of-the-Art equipment, such as 20Tons Pagani CPT
          equipment; New Humboldt Automated Triaxial Testing Machine; Automated
          Sieve Analyses equipment e.t.c. <br />
          <br /> <strong>INTERWORKS ENGINEERING</strong> was established in
          1997, as well, to execute the Procurement and Construction of projects
          engineered by Intecon Partnership Ltd. or other entities. It has
          successfully completed the execution of several projects for the Oil &
          Gas Industry, Multinational Clients as well as Academic and Government
          Institutions across the country.
        </p>
        </div>
        
      </section>
      <section className="institutions py-[120px] mt-[120px] px-6 border-b border-t border-b-[#292828] border-t-[#292828]">
        <h3 className="font-jakarta capitalize text-[#f0f0f0] text-[72px] text-center mb-12">
          Statutory Institutions Registration
        </h3>
        <div className="flex flex-row justify-center items-stretch gap-6">
          <div className=" cac flex flex-col justify-between items-center gap-4 h-[200px]">
            <img
              className="w-[120px]"
              src="/images/cac.png"
              alt="corporate Affairs Commission logo"
            />
            <p className="text-center text-[1rem] text-[#f0f0f0]">
              Corporate Affairs Commission
            </p>
          </div>
          <div className=" coren flex flex-col justify-between items-center gap-4 h-[200px]">
            <img
              className="w-[200px]"
              src="/images/coren.jpg"
              alt="Council for the Regulation of Engineering in Nigeria logo"
            />
            <p className="text-center text-[1rem] text-[#f0f0f0]">
              Council for the Regulation of Engineering in Nigeria
            </p>
          </div>
          <div className=" acen flex flex-col justify-between items-center gap-4 h-[200px]">
            <img
              className="w-[120px]"
              src="/images/acen.jpg"
              alt="Association for Consulting Engineering Nigeria logo"
            />
            <p className="text-center text-[1rem] text-[#f0f0f0]">
              Association for Consulting Engineering Nigeria
            </p>
          </div>
          <div className=" dpr flex flex-col justify-between items-center gap-4 h-[200px]">
            <img
              className="w-[200px]"
              src="/images/dpr.jpg"
              alt="Department of Petroleum Resources logo"
            />
            <p className="text-center text-[1rem] text-[#f0f0f0]">
              Department of Petroleum Resources
            </p>
          </div>
          <div className=" nnpc flex flex-col justify-between items-center gap-4 h-[200px]">
            <img
              className="w-[120px]"
              src="/images/nnpc.webp"
              alt="Nigerian National Petroleum Corporation"
            />
            <p className="text-center text-[1rem] text-[#f0f0f0]">
              Nigerian National Petroleum Corporation
            </p>
          </div>
        </div>
      </section>
      <section className="directors py-[120px] border-b border-b-[#292828]">
        <h3 className=" font-jakarta capitalize text-[#f0f0f0] tracking-tight text-[72px] text-center font-semibold mb-12">
          Meet Our Directors
        </h3>
        <div className="team flex flex-row flex-wrap justify-center items-stretch gap-8 px-6">
          <Director
            img="/images/engr-ajibola-profile.webp"
            name="Engr. O. Alade Ajibola"
            role="chairman/CEO"
            office="Intecon Partnership Group Ltd"
            degree="FNSE,FAEng"
          />
          <Director
            img="/images/engr-wale.webp"
            name="Engr. Wale Lagunju"
            role="Group Executive Director"
            office="Intecon Partnership Group Ltd"
            degree="b.sc,m.sc,mba,fnse, mni"
          />
          <Director
            img="/images/engr-kehinde.webp"
            name="Engr. Kehinde Aremu"
            role="Managing Director"
            office="Interworks Engineering Ltd"
            degree="b.sc, m.sc, mba, mnse"
          />
          <Director
            img="/images/engr-jimmy.webp"
            name="Engr. Jimmy Ajibola"
            role="Managing Director"
            office="Automated Geotechnical Ltd"
            degree="b.sc, m.sc, dic,mnse"
          />
          <Director
            img="/images/engr-tunde.webp"
            name="Engr. Tunde Adefolaju"
            role="Director"
            office=" "
            degree="b.sc, m.sc,mnse"
          />
        </div>
      </section>
      <section className="clients py-[69px]">
          <h3 className="text-[72px] tracking-tight  font-semibold mb-12 text-[#f0f0f0] font-jakarta capitalize text-center">
            Our Clients
          </h3>
      <Clients 
      position="relative"/>
      </section>
     <Quote/>
    </main>
  );
};

export default About;
