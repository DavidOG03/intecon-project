import React from 'react'
import { Link } from 'react-router-dom'

const Quote = () => {
  return (
    <section className="quote pt-[120px] flex flex-col justify-center items-start md:flex-row  md:justify-between md:items-center px-6">
    <h3 className="font-jakarta capitalize text-white tracking-tight leading-tight text-[72px] md:text-[90px] text-left mb-12 max-w-[520px]">Let's Work Together</h3>
    <div className="quote-btns flex flex-row gap-6">
        <Link to="/contact" className='quote-btn py-4 px-8 bg-[#f0f0f0] border-[2px] text-[18px] tracking-wide font-jakarta rounded-[48px] transition-all hover:bg-transparent hover:text-[#f0f0f0] font-semibold'>Contact Us <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#110F0E" className='inline-block transition-all ml-2'><path d="m256-240-56-56 384-384H240v-80h480v480h-80v-344L256-240Z"/></svg></Link>
        {/* <Link to="/services" className='py-4 px-8 bg-transparent text-[18px] font-jakarta text-[#f0f0f0] border-[2px] rounded-[48px] transition-all hover:bg-[#f0f0f0] hover:text-[#110F0E] font-semibold'>Our Services</Link> */}
    </div>
  </section>
  )
}

export default Quote
