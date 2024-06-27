import React from 'react'

const Director = ({img,name,role,office,degree}) => {
  return (
    <div className="director flex flex-col min-w-[400px] justify-center items-start mt-6">
            <div className="image-box w-full bg-[#f1f1f1]">
              {img && <img src={img} alt={name} className='w-full h-full object-cover' />}
            </div>
            <h4 className="text-[2rem] font-bold capitalize text-[#1c1c1c] font-jakarta tracking-tight leading-relaxed pt-4">{name}</h4>
            <p className="text-[18px] font-semibold text-[#1c1c1ce5] capitalize font-jakarta">{role}</p>
            <p className="text-[18px] font-medium text-[#1c1c1ccb] uppercase mt-6 font-inter">{office}</p>
            <p className="text-base font-normal text-[#1c1c1ca8] capitalize font-inter">{degree}</p>

          </div>
  )
}

export default Director
