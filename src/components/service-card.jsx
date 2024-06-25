import React from 'react'

const ServiceCard = ({img,name, desc,alt}) => {
  return (
    <div className='service w-full h-full pt-12 border border-[#413F3E] flex flex-col justify-between'>
      <h3 className="name text-[24px] text-left text-[#f0f0f0] px-4 font-semibold mb-4 font-jakarta">{name}</h3>
      <p className="desc text-[14px] text-left text-[#f0f0f0d3] px-4 mb-4 font-inter">{desc}</p>
      <div className="image-box h-auto w-full  max-h-[300px] overflow-hidden">
        {img && <img src={img} alt={alt} className='w-full object-contain'/>}
      </div>
    </div>
  )
}

export default ServiceCard
