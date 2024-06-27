import React from 'react'
import HeroSlider from './slider'
import Clients from './clients'


const Home = () => {
  return (
    <>
      <main className='hero relative z-5 w-full h-full'>
          <HeroSlider/>
          {/* <Clients/> */}
      </main>
    </>
  )
}

export default Home
