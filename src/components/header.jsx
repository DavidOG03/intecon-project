import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <header className='flex flex-row justify-between items-end w-[95%] absolute top-0 left-[50%] -translate-x-[50%] py-8 z-[100] border-b-[0.5px] border-b-[#413F3E] '>
        <Link to="/" className="logo">
          <img src="/images/intecon-logo.png" alt="intecon's logo" />
        </Link>
        <nav className="navbar">
          <ul className='uppercase text-[#f0f0f0]'>
            <li className='inline-block mx-4 font-jakarta text-[14px] tracking-[0.6px]'><NavLink to="/" exact activeClassName="active">Home</NavLink></li>
            <li className='inline-block mx-4 font-jakarta text-[14px] tracking-[0.6px]'><NavLink to="/about">About US</NavLink></li>
            <li className='inline-block mx-4 font-jakarta text-[14px] tracking-[0.6px]'><NavLink to="/contact">Contact Us</NavLink></li>
            <li className='inline-block mx-4 font-jakarta text-[14px] tracking-[0.6px]'><NavLink to="/services">services</NavLink></li>
            <li className='inline-block mx-4 font-jakarta text-[14px] tracking-[0.6px]'><NavLink to="/projects">projects</NavLink></li>
          </ul>
        </nav>
        <div className="contact-info absolute flex flex-row justify-end items-center gap-6 top-2 right-6">
          <a href='mailto:intecon@intecon.com.ng' target='blank' className="email flex flex-row gap-2 text-[#f0f0f0] font-inter">
            <img src="/images/envelope.svg" alt="envelope.svg" className='w-6' /> intecon@intecon.com.ng</a>
            <a href="tel:+2348033242026" className="email flex flex-row gap-2 text-[#f0f0f0] font-inter" ><img src="/images/phone-too.svg" alt="contact icon" className='inline-block w-6' /> Call +234 803 324 2026  <a href="tel:+2348033283101">+234 803 328 3101</a></a>
        </div>
      </header>
    </>
  )
}

export default Header
