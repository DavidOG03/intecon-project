import React from 'react'
import {motion} from 'framer-motion'


const ServiceCard = ({img,name, desc,alt}) => {

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
    <motion.div 
    variants={fadeup}
    initial="hidden"
    whileInView="visible"
    viewport={{once:true}}
    className='service w-full h-full pt-12 border border-[#413F3E] flex flex-col justify-between'>
      <h3 className="name text-[24px] text-left text-[#1c1c1c] px-4 font-semibold mb-4 font-jakarta">{name}</h3>
      <p className="desc text-[14px] text-left text-[#1c1c1ce3] px-4 mb-4 font-inter">{desc}</p>
      <div className="image-box h-[40%] w-full border-t border-t-[#413F3E] max-h-[300px] overflow-hidden">
        {img && <img src={img} alt={alt} className='w-full object-cover'/>}
      </div>
    </motion.div>
  )
}

export default ServiceCard
