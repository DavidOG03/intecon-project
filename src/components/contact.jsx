import React from "react";

export default function Contact() {
  return (
    <main className="contact-page py-[120px] bg-[#110F0E] ">
      {/* <div className="contact-header">
        <h1 className="heading font-electrolize font-medium text-[#f0f0f0] text-[48px]">
          Contact Us
        </h1>
      </div> */}
      <section className="contact-body px-6 grid grid-cols-2 gap-12 py-12">
        <div className="contact-text">
          <h3 className="heading font-jakarta font-medium tracking-tighter text-[#f0f0f0] text-[90px] text-left leading-tight mb-6">
            Let's work together
          </h3>
          <p className="text-base text-[#f0f0f0] font-inter max-w-[520px]">
            Feel free to talk to our Business Department at any time you please
            using our Live Chat system on our website or one of the below
            instant messaging programs. Please be patient while waiting for
            response.
            <strong className="block mt-6">
              {" "}
              Phone General Inquiries: +234 803 671 8778
            </strong>
          </p>
          <div className="address text-[#f0f0f0] mt-6 font-inter">
            <h3 className="text-base pb-4">Company Address</h3>
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
          </div>
          <div className="address-two mt-6 text-[#f0f0f0] font-inter">
            <h3 className="text-base pb-4">Company Address Two</h3>
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
          </div>
        </div>
        <form
          action=""
          className="contact-form grid grid-cols-2 justify-start items-start font-inter mt-4"
        >
          {/* <h3 className="heading text-left text-[32px] font-electrolize uppercase text-[#f0f0f0] auto-rows-auto">
            Contact Form
          </h3> */}
          <div className="input-group mb-6 flex flex-col justify-start items-start row">
            <label className="text-[#f0f0f0] block mb-2" htmlFor="name">
              Full Name
            </label>
            <input
              className="bg-transparent border-b border-b-[#413F3E] hover:border-b-[#ffffffaf] focus:border-b-[#fff] pb-6"
              type="text"
              placeholder="Enter your full name"
              id="name"
              required
            />
          </div>
          <div className="input-group mb-6 flex flex-col justify-start items-start row">
            <label className="text-[#f0f0f0] block mb-2" htmlFor="email">
              Email Address
            </label>
            <input
              className="bg-transparent border-b border-b-[#413F3E]  pb-6 hover:border-b-[#ffffffaf] focus:border-b-[#fff]"
              type="email"
              placeholder="Enter your Email Address"
              id="email"
              required
            />
          </div>
          <div className="input-group mb-6 flex flex-col justify-start items-start row">
            <label className="text-[#f0f0f0] block mb-2" htmlFor="company">
              Company
            </label>
            <input
              className="bg-transparent border-b border-b-[#413F3E]  pb-6 hover:border-b-[#ffffffaf] focus:border-b-[#fff]"
              type="text"
              placeholder="Enter your Company Name"
              id="company"
              required
            />
          </div>
          <div className="input-group mb-6 flex flex-col justify-start items-start row">
            <label className="text-[#f0f0f0] block mb-2" htmlFor="telephone">
              Telephone
            </label>
            <input
              className="bg-transparent border-b border-b-[#413F3E] pb-6 hover:border-b-[#ffffffaf] focus:border-b-[#fff]"
              type="phone"
              placeholder="Enter your Telephone Number"
              id="telephone"
              required
            />
          </div>
          <div className="input-group mb-6 flex flex-col justify-start items-start col-start-1 col-end-3">
            <label className="text-[#f0f0f0] block mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              className="bg-transparent border-b border-b-[#413F3E] w-full hover:border-b-[#ffffffaf] focus:border-b-[#fff]"
              name="message"
              id="message"
              cols="30"
              rows="5"
              placeholder="Enter Your Message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="font-inter font-semibold text-base py-6 px-8 rounded-[48px] border border-transparent transition ease-in bg-[#f0f0f0] hover:bg-transparent hover:border hover:border-[#f0f0f0] hover:text-[#f0f0f0]"
          >
            Send Message
          </button>
        </form>
      </section>
    </main>
  );
}
