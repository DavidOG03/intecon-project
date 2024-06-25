import React from 'react'

const Director = ({img,name,role,office,degree}) => {
  return (
    <div className="director flex flex-col min-w-[400px] justify-center items-start">
            <div className="image-box w-full">
              {img && <img src={img} alt={name} className='w-full object-cover' />}
            </div>
            <h4 className="text-[2rem] font-bold text-[#f0f0f0] font-jakarta tracking-tighter leading-tight">{name}</h4>
            <p className="text-[18px] font-semibold text-[#f0f0f0]">{role}</p>
            <p className="text-[18px] font-medium text-[#f0f0f0] mt-6">{office}</p>
            <p className="text-base font-normal text-[#f0f0f0]">{degree}</p>

          </div>
  )
}

export default Director
