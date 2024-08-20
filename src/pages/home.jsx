import React from 'react'
import HeroSlider from '../components/slider'
import Clients from '../components/clients'
import { Link } from 'react-router-dom'


const Home = () => {
  return (
    <>
      <main className='hero w-full h-full relative'>
          <HeroSlider/>
          {/* <Clients/> */}
      </main>
    </>
  )
}

export default Home
