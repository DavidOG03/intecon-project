import React from "react";

const HighwayBridges = () => {
  return (
    <main className="highway-design bg-white pt-[120px]">
      <section className="intro px-6 grid grid-cols-1 xl:grid-cols-2 gap-6 place-content-center items-stretch lg:gap-12 pt-6 pb-[120px]">
        <div className="image-box w-full h-full max-h-[320px] xl:max-h-none overflow-hidden">
          <img
            src="/images/road.png"
            alt="olive court"
            className="object-fill w-full"
          />
        </div>
        <div className="text">
          <h3 className="capitalize font-jakarta tracking-tighter text-[#1c1c1c] text-[54px] md:text-[68px] xl:text-[72px] text-left leading-[1.2] mb-6 max-w-[768px]">
            Highways and bridges design
          </h3>
          <p className="text-base md:text-[18px] text-[#1c1c1c] font-inter max-w-[768px]">
            INTECON has been involved in many highway and bridge projects for
            state, federal governments and multinationals across the length and
            breadth of Nigeria through different terrain raging from swampy in
            the Niger Delta to dry land in the hinterland. We have developed
            both human and technical skills over the years with highly qualified
            engineers on hand to handle the designs employing relevant standard
            and quality control procedures in the delivery project. We have
            up-to-date design packages for highway and bridge designs such as
            CIVILCAD, AUTOCAD, LAND DEVELOPMENT, SUPERSTRESS, STAADPRO etc.
          </p>
          <p className="mt-4 text-[14px] md:text-[18px] text-[#1c1c1c] font-inter max-w-[768px]">
            In our highway design we optimize sustainability and harmonize our
            design with the environment in form of developing design and
            construction schemes that minimizes or eliminate traffic
            interference during construction.
          </p>
        </div>
      </section>
      <section className="gallery px-6">
        <h3 className="text capitalize font-jakarta tracking-tighter text-[#1c1c1c] text-[36px] md:text-[45px] xl:text-[54px] text-left leading-tight mb-6 max-w-[768px]">
          Highway and bridges projects pictures
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <img src="/images/road.png" alt="road-work" className="w-full" />
          <img src="/images/road2.png" alt="road-work" className="w-full" />
          <img src="/images/road3.png" alt="road-work" className="w-full" />
          <img src="/images/road4.png" alt="road-work" className="w-full" />
          <img src="/images/road5.png" alt="road-work" className="w-full" />
          <img src="/images/road6.png" alt="road-work" className="w-full" />
          <img src="/images/road7.png" alt="road-work" className="w-full" />
        </div>
      </section>
    </main>
  );
};

export default HighwayBridges;
