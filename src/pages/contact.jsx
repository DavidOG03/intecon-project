import React, { useEffect, useRef } from "react";
import MapComponent from "../components/map";
import AnimatedText from "../components/animatedText";
import { motion } from "framer-motion";

export default function Contact() {
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

  const mainContentRef = useRef(null);

  useEffect(() => {
    if (mainContentRef.current) {
      mainContentRef.current.focus();
    }
  }, []);

  const companyCoordinates = { lat: 7.376736, lng: 3.939786 };
  const companyName = "Intecon Partnershipt Limited";
  return (
    <main className="contact-page py-[60px] bg-[#fff] ">
      <section className="contact-body px-6 grid grid-cols-1 md:grid-cols-2 gap-12 pt-6 pb-[60px]">
        <div className="contact-text">
          <motion.h3
            variants={fadeup}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            ref={mainContentRef}
            tabIndex="-1"
            className="heading font-jakarta tracking-tighter text-[#1c1c1c] text-[54px] md:text-[68px] lg:text-[90px] text-left leading-[1] font-medium mb-6 focus:outline-none"
          >
            Let's work together
          </motion.h3>

          <motion.p
            variants={fadeup}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-base text-[#1c1c1c] font-inter max-w-[520px]"
          >
            Feel free to talk to our Business Department at any time you please
            using our Live Chat system on our website or one of the below
            instant messaging programs. Please be patient while waiting for
            response.
            <strong className="block mt-6">
              Phone General Inquiries:
              <a href="tel:+2348036718778">+234 803 671 8778</a>
            </strong>
          </motion.p>
          <motion.div
            variants={fadeup}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="address text-[#1c1c1c] mt-6 font-inter"
          >
            <h3 className="text-base pb-4 font-bold">Company Address</h3>
            <p className="text-[14px] pb-2">
              16 Aperin Street, off Awolowo Road, Old Bodija Ibadan.
            </p>
            <p className="text-[14px] pb-2">
              Telephone: +234 803 324 2026, +234 803 328 3101
            </p>
            <p className="text-[14px] pb-2">
              E-mail:{" "}
              <a
                href="mailto:intecon@intecon.com.ng"
                className="text-[#25257c]"
              >
                intecon@intecon.com.ng
              </a>
            </p>
          </motion.div>
          <motion.div
            variants={fadeup}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="address-two mt-6 text-[#1c1c1c] font-inter"
          >
            <h3 className="text-base pb- font-bold">Company Address Two</h3>
            <p className="text-[14px] pb-2">
              Tecon House, Ikeja, Lagos Nigeria
            </p>
            <p className="text-[14px] pb-2">
              Telephone: +234 803 242 2026, +234 803 671 8778
            </p>
            <p className="text-[14px] pb-2">
              E-mail:{" "}
              <a
                href="mailto:intecon@intecon.com.ng"
                className="text-[#25257c]"
              >
                intecon@intecon.com.ng
              </a>
            </p>
          </motion.div>
        </div>
        <form
          action=""
          className="contact-form grid grid-cols-1 md:grid-cols-2 gap-3 justify-start items-start font-inter mt-4"
        >
          <motion.div
            variants={fadeup}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="input-group mb-6 flex flex-col justify-start items-start row"
          >
            <label className="text-[#1c1c1c] block mb-2" htmlFor="name">
              Full Name
            </label>
            <input
              className="bg-transparent border-b border-b-[#1f1f1f83] hover:border-b-[#1c1c1caf] focus:border-b-[#1c1c1c] pb-2 md:pb-6 text-[#1c1c1c] w-full"
              type="text"
              placeholder="Enter your full name"
              id="name"
              required
            />
          </motion.div>
          <motion.div
            variants={fadeup}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="input-group mb-6 flex flex-col justify-start items-start row"
          >
            <label className="text-[#1c1c1c] block mb-2" htmlFor="email">
              Email Address
            </label>
            <input
              className="bg-transparent border-b border-b-[#1f1f1f83]  pb-2 md:pb-6 hover:border-b-[#1c1c1caf] focus:border-b-[#1c1c1c] text-[#1c1c1c] w-full"
              type="email"
              placeholder="Enter your Email Address"
              id="email"
              required
            />
          </motion.div>
          <motion.div
            variants={fadeup}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="input-group mb-6 flex flex-col justify-start items-start row"
          >
            <label className="text-[#1c1c1c] block mb-2" htmlFor="company">
              Company
            </label>
            <input
              className="bg-transparent border-b border-b-[#1f1f1f83]  pb-2 md:pb-6 hover:border-b-[#1c1c1caf] focus:border-b-[#1c1c1c] text-[#1c1c1c] w-full"
              type="text"
              placeholder="Enter your Company Name"
              id="company"
              required
            />
          </motion.div>
          <motion.div
            variants={fadeup}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="input-group mb-6 flex flex-col justify-start items-start row"
          >
            <label className="text-[#1c1c1c] block mb-2" htmlFor="telephone">
              Telephone
            </label>
            <input
              className="bg-transparent border-b border-b-[#1f1f1f83] pb-2 md:pb-6 hover:border-b-[#1c1c1caf] focus:border-b-[#1c1c1c] text-[#1c1c1c] w-full"
              type="phone"
              placeholder="Enter your Telephone Number"
              id="telephone"
              required
            />
          </motion.div>
          <motion.div
            variants={fadeup}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="input-group mb-6 flex flex-col justify-start items-start md:col-start-1 md:col-end-3"
          >
            <label className="text-[#1c1c1c] block mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              className="bg-transparent border-b border-b-[#1f1f1f83] text-[#1c1c1c] w-full hover:border-b-[#1c1c1caf] focus:border-b-[#1c1c1c]"
              name="message"
              id="message"
              cols="30"
              rows="5"
              placeholder="Enter Your Message"
            ></textarea>
          </motion.div>
          <button
            type="submit"
            className="font-inter font-semibold text-base py-3 px-6 md:py-6 md:px-8 rounded-[48px] border border-transparent w-full  transition ease-in text-[#fff] bg-[#1c1c1c] hover:bg-transparent hover:border hover:border-[#1c1c1c] hover:text-[#1c1c1c]"
          >
            Send Message
          </button>
        </form>
      </section>
      {/* <MapComponent lat={companyCoordinates.lat} lng={companyCoordinates.lng} companyName={companyName}/> */}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4161.548606124598!2d3.9079503997520906!3d7.416167548707161!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103992abe5918b3b%3A0xd7e210c9d7f6bbdc!2sIntecon%20Partnership%20Limited!5e0!3m2!1sen!2sng!4v1719492042675!5m2!1sen!2sng"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </main>
  );
}
