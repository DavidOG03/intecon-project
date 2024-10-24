import React from 'react'
import HeroSlider from '../components/slider'
import Clients from '../components/clients'
import { Link } from 'react-router-dom'


const Home = () => {
  return (
    <>
      <main className='hero w-full h-full relative'>
          <HeroSlider/>
          <div className="flex flex-row w-full gap-2 py-1 px-4 lg:px-9 justify-center md:justify-start items-center absolute top-[65%] md:top-[70%] left-[50%] -translate-x-[50%] md:left-[0%] md:translate-x-[unset] -translate-y-[35%] md:-translate-y-[30%]">
          <Link to="/services" className=" px-6 py-2 border border-blue font-medium font-inter text-white transition-all duration-500 bg-blue hover:border-white hover:bg-white hover:text-black w-full text-center md:w-auto">Our Services</Link>
          <Link to="/contact" className=" px-6 py-2 border font-medium font-inter text-white transition-all duration-500 hover:border-blue hover:bg-blue w-full text-center md:w-auto">Get a Quote</Link>
          </div>
          {/* <Clients/> */}
      </main>
    </>
  )
}

export default Home
