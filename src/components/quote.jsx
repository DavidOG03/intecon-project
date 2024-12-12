import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'


const Quote = () => {

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
  return (
    <section className="quote mt-[60px] pt-[80px] md:py-[60px] flex flex-col justify-center items-start md:flex-row  md:justify-between md:items-center px-4 lg:px-12 bg-fixed">
    <motion.h3 
     variants={fadeup}
     initial="hidden"
     whileInView="visible"
     viewport={{ once: true }}
    className="font-host capitalize text-white tracking-tight leading-tight text-[68px] lg:text-[90px] text-left pb-8 max-w-[320px] lg:max-w-[520px]">Let's Work Together</motion.h3>
    <div className="quote-btns flex flex-row gap-6">
        <Link to="/contact" className='quote-btn py-4 px-8 bg-[#fff] border-[2px] text-base lg:text-[18px] tracking-wide font-jakarta rounded-[48px] transition ease-in-out hover:bg-transparent hover:text-[#fff] font-semibold'>Contact Us<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#110F0E" className='inline-block transition-all ml-2'><path d="m256-240-56-56 384-384H240v-80h480v480h-80v-344L256-240Z"/></svg></Link>
        {/* <Link to="/services" className='py-4 px-8 bg-transparent text-[18px] font-jakarta text-[#fff] border-[2px] rounded-[48px] transition-all hover:bg-[#fff] hover:text-[#110F0E] font-semibold'>Our Services</Link> */}
    </div>
  </section>
  )
}

export default Quote
