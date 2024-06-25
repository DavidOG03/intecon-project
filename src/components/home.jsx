import React from 'react'
import HeroSlider from './slider'


const Home = () => {
  return (
    <>
      <main className='hero relative z-5 w-full h-full'>
        {/* <section className="hero w-full h-[100%]"> */}
          <HeroSlider/>
        {/* </section> */}
      </main>
    </>
  )
}

export default Home
