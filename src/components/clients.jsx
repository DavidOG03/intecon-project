import React from 'react'
import Marquee from "react-fast-marquee";

const Clients = () => {
  return (
    
          <div className='marquee-container  py-[66px] md:py-[88px] bg-[#fff]'>
            <Marquee speed={100}>
              <span className="client">
                <img
                  src="/images/coat-of-arms.png"
                  alt="Nigerian coat of arms no background"
                />
              </span>
              <span className="client">
                <img src="/images/exxon.webp" alt="ExxonMobil logo webp" />
              </span>
              <span className="client">
                <img src="/images/p-and-g.webp" alt="Procter and gamble logo " />
              </span>
              <span className="client">
                <img
                  src="/images/excellence-and-godliness.webp"
                  alt="Excellence and godliness logo"
                />
              </span>
              <span className="client">
                <img
                  src="/images/ui-logo.webp"
                  alt="University of Ibadan logo"
                />
              </span>
              <span className="client">
                <img
                  src="/images/oodua.webp"
                  alt="O'dua Investment company Limited"
                />
              </span>
              <span className="client">
                <img src="/images/updc.webp" alt="updc logo" />
              </span>
              <span className="client">
                <img
                  src="/images/ajayi-crowther-logo.webp"
                  alt="Ajayi Crowther University Logo"
                />
              </span>
              <span className="client">
                <img src="/images/faan.webp" alt="FAAN Logo" />
              </span>
              <span className="client">
                <img src="/images/unilever.webp" alt="Unilever Logo" />
              </span>
            </Marquee>
          </div>
        
  )
}

export default Clients
