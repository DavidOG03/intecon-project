import React from 'react'

const ServiceCard = ({img,name, desc,alt}) => {
  return (
    <div className='service'>
      <h3 className="name text-[24px] text-left text-[#f0f0f0] font-semibold">{name}</h3>
      <p className="desc text-[14px] text-left text-[#f0f0f091]">{desc}</p>
      <div className="image-box">
        {img && <img src={img} alt={alt}/>}
      </div>
    </div>
  )
}

export default ServiceCard
