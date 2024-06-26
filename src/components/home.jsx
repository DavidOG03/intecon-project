import React from 'react'
import HeroSlider from './slider'
import Clients from './clients'


const Home = () => {
  return (
    <>
      <main className='hero relative z-5 w-full h-full pb-[120px]'>
        {/* <section className="hero w-full h-[100%]"> */}
          <HeroSlider/>
          <Clients/>
        {/* </section> */}
      </main>
    </>
  )
}

export default Home
