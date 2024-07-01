import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <footer className='py-2 px-4 md:px-12 bg-[#1c1c1c] w-full flex flex-wrap gap-4 justify-between items-center border-t border-t-[#292828]'>
        <Link to="/"><img src="/images/intecon-logo-too.png" alt="intecon logo too" className='h-[34px] md:h-[54px]'/></Link>
        <span className="certification px-1 md:px-4 py-2 bg-[#f0f0f0] border border-[#837f7f] inline-block text-[8px] md:text[18px] font-jakarta">
        ISO 9001:2015 Certified | RC 311767
        </span>
        <small className='text-[12px] font-jakarta text-[#f0f0f0] block mx-auto md:mx-0 text-center'>Copyright © 2024 All rights reserved. </small>
      </footer>
    </>
  )
}

export default Footer
