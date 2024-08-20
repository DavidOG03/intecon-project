import React from 'react'
import HeroSlider from '../components/slider'
import Clients from '../components/clients'
import { Link } from 'react-router-dom'


const Home = () => {
  return (
    <>
      <main className='hero w-full h-full relative'>
          <HeroSlider/>
          <div className="flex flex-row w-full gap-2 py-1 justify-start items-center absolute top-[70%] left-3 md:left-9 -translate-y-[30%]">
          <Link to="/about" className=" px-4 py-2 border font-bold text-white transition-all duration-500 hover:border-blue hover:bg-blue w-auto">About us</Link>
          <Link to="/contact" className=" px-4 py-2 border font-bold text-white transition-all duration-500 hover:border-blue hover:bg-blue w-auto">Contact Us</Link>
          </div>
          {/* <Clients/> */}
      </main>
    </>
  )
}

export default Home
