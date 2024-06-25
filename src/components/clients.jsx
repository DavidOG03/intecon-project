import React from 'react'
import Marquee from "react-fast-marquee";

const Clients = (position) => {
  return (
    
          <div className={`marquee-container ${position} pt-[88px] pb-[124px]`}>
            <Marquee speed={250}>
              <span className="client">
                <img
                  src="/images/coat-of-arms.png"
                  alt="Nigerian coat of arms no background"
                />
              </span>
              <span className="client">
                <img src="/images/exxon.png" alt="ExxonMobil logo png" />
              </span>
              <span className="client">
                <img src="/images/p-and-g.png" alt="Procter and gamble logo " />
              </span>
              <span className="client">
                <img
                  src="/images/excellence-and-godliness.png"
                  alt="Excellence and godliness logo"
                />
              </span>
              <span className="client">
                <img
                  src="/images/ui-logo.png"
                  alt="University of Ibadan logo"
                />
              </span>
              <span className="client">
                <img
                  src="/images/oodua.png"
                  alt="O'dua Investment company Limited"
                />
              </span>
              <span className="client">
                <img src="/images/updc.png" alt="updc logo" />
              </span>
              <span className="client">
                <img
                  src="/images/ajayi-crowther-logo.webp"
                  alt="Ajayi Crowther University Logo"
                />
              </span>
              <span className="client">
                <img src="/images/faan.png" alt="FAAN Logo" />
              </span>
              <span className="client">
                <img src="/images/unilever.png" alt="Unilever Logo" />
              </span>
            </Marquee>
          </div>
        
  )
}

export default Clients
