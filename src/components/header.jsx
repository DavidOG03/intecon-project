import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <header className='flex flex-row justify-between items-center w-[95%] absolute top-0 left-[50%] -translate-x-[50%] py-8 z-[100] border-b-[0.5px] border-b-[#413F3E] '>
        <Link to="/" className="logo">
          <img src="/images/intecon-logo.png" alt="intecon's logo" />
        </Link>
        <nav className="navbar">
          <ul className='uppercase text-[#f0f0f0]'>
            <li className='inline-block mx-4 font-jakarta text-[14px] tracking-[0.6px]'><Link to="/">Home</Link></li>
            <li className='inline-block mx-4 font-jakarta text-[14px] tracking-[0.6px]'><Link to="/about">About US</Link></li>
            <li className='inline-block mx-4 font-jakarta text-[14px] tracking-[0.6px]'><Link to="/contact">Contact Us</Link></li>
            <li className='inline-block mx-4 font-jakarta text-[14px] tracking-[0.6px]'><Link to="/services">services</Link></li>
            <li className='inline-block mx-4 font-jakarta text-[14px] tracking-[0.6px]'><Link to="/projects">projects</Link></li>
          </ul>
        </nav>
        <div className="contact-info absolute top-2 right-6">
          <a href='mailto:intecon@intecon.com.ng' target='blank' className="email flex flex-row gap-2 text-[#f0f0f0] font-inter">
            <img src="/images/envelope.svg" alt="envelope.svg" className='w-6' /> intecon@intecon.com.ng</a>
        </div>
      </header>
    </>
  )
}

export default Header
