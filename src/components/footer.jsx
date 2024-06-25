import React from 'react'

const Footer = () => {
  return (
    <>
      <footer className='py-2 px-12 bg-[#110F0E] z-50 fixed bottom-0 left-0 w-full flex justify-between items-center border-t border-t-[#292828]'>
        <div className="certification px-4 py-2 bg-[#f0f0f0] border border-[#837f7f] inline-block text-[14px] font-jakarta">
        ISO 9001:2015 Certified | RC 311767
        </div>
        <small className='text-[14px] font-jakarta text-[#f0f0f0]'>Copyright © 2024 All rights reserved. </small>
      </footer>
    </>
  )
}

export default Footer
