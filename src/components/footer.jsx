import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <footer className='py-2 px-4 md:px-12 bg-black w-full flex flex-wrap gap-4 justify-between items-center border-t border-t-[#292828]'>
        <Link to="/"><img src="/images/intecon-logo-too.png" alt="intecon logo too" className='h-[34px] md:h-[54px]'/></Link>
        <span className="certification px-1 md:px-4 py-2 bg-[#f0f0f0] border border-[#837f7f] inline-block text-[8px] md:text-[12px] font-jakarta">
        ISO 9001:2015 Certified | RC 311767
        </span>
        <div className="contact-info w-full border-b border-b-textblack md:hidden flex flex-row flex-wrap justify-center items-center gap-3 px-6 pb-6">
          <div className="email flex flex-row items-center gap-2">
            <img
              src="/images/envelope.svg"
              alt="envelope.svg"
              className="inline-block w-3"
            />
            <a
              href="mailto:intecon@intecon.com.ng"
              target="blank"
              className=" text-[#fff] font-inter text-[11px] xl:text-[13px]"
            >
              intecon@intecon.com.ng
            </a>
          </div>
          <div className="email flex flex-row gap-2">
            <img
              src="/images/phone-too.svg"
              alt="contact icon"
              className="inline-block w-3"
            />{" "}
            <a href="tel:+2348033242026" className=" text-[#fff] font-inter text-[11px] xl:text-[13px]">
              Call +234 803 324 2026
            </a>
            <a href="tel:+2348033283101" className=" text-[#fff] font-inter text-[11px] xl:text-[13px]">
              +234 803 328 3101
            </a>
          </div>
        </div>
        <small className='text-[12px] font-jakarta text-[#f0f0f0] block mx-auto md:mx-0 text-center'>Copyright © 2024 All rights reserved. </small>
      </footer>
    </>
  )
}

export default Footer
