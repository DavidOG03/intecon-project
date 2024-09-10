import React from 'react'
import {motion} from 'framer-motion'
import { Link } from 'react-router-dom';


const ServiceCard = ({link, img,name, desc,alt}) => {

  const fadeup = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.75,
        ease: "easeInOut",
        type: "tween",
        delay: 0.2,
      },
    },
  };

  return (
    <Link to={link}>
    <motion.div 
    variants={fadeup}
    initial="hidden"
    whileInView="visible"
    viewport={{once:true}}
    className='service relative w-full h-full pt-12 border border-[#413f3e79] flex flex-col justify-between'>
      <h3 className="name text-[24px] text-left text-black px-4 font-semibold mb-4 font-jakarta">{name}</h3>
      <p className="desc text-[14px] text-textblack px-4 mb-4 font-inter">{desc}</p>
      <div className="image-box h-[300px] w-full border-t border-t-[#413f3e79] overflow-hidden">
        {img && <img src={img} alt={alt} className='w-full h-full scale-110 object-cover transition-all duration-300'/>}
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="24px" fill="#1C1C1C" className="w-4 absolute top-[56px] right-4 hidden"><path d="m256-240-56-56 384-384H240v-80h480v480h-80v-344L256-240Z"/></svg>
    </motion.div>
    </Link>
    
  )
}

export default ServiceCard
