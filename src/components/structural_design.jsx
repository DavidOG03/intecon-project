import React from "react";

const StructuralDesign = () => {
  return (
    <main className="structural-design bg-white pt-[120px]">
      <section className="intro px-6 grid grid-cols-1 xl:grid-cols-2 gap-6 place-content-center lg:gap-12 pt-6 pb-[120px]">
        <div className="image-box w-full h-full max-h-[320px] xl:max-h-none overflow-hidden">
          <img
            src="/images/olive-court.jpg"
            alt="olive court"
            className="object-fill w-full"
          />
        </div>
        <div className="text">
          <h3 className="capitalize font-jakarta tracking-tighter text-[#1c1c1c] text-[54px] md:text-[68px] xl:text-[90px] text-left leading-tight mb-6 max-w-[768px]">
            Strctural Engineering design
          </h3>
          <p className="text-base md:text-[18px] text-[#1c1c1c] font-inter max-w-[768px]">
            INTECON has gained experience in design of many structural
            engineering projects including high rise buildings, factories,
            warehouses etc. and also developed technical capabilities in
            handling structural projects of all sizes. The structural
            engineering team utilizes different analysis and design software
            such as STAAD PRO, CADRC and AUTOCAD, using standard procedures and
            quality production of drawing
          </p>
          <p className="mt-4 text-[14px] md:text-[18px] text-[#1c1c1c] font-inter max-w-[768px]">
            INTECON is well known as a top civil/structural engineering
            consulting firm providing sound technical solutions to engineering
            needs in the society. Our extensive structural engineering services
            include design of industrial buildings, factories, warehouses and
            heavy civil engineering works. Our achievements in this field are
            being enhanced through continuous development of our qualified
            professionals and utilization of state of the art equipment and
            software that comply with international standards.
          </p>
        </div>
      </section>
      <section className="gallery px-6">
        <h3 className="text capitalize font-jakarta tracking-tighter text-[#1c1c1c] text-[36px] md:text-[45px] xl:text-[54px] text-left leading-tight mb-6 max-w-[768px]">
          Structure projects pictures
        </h3>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <img
            src="/images/structure1.png"
            alt="structure-work"
            className="w-full max-w-[768px] "
          />
          <img
            src="/images/structural-engr.png"
            alt="structure-work"
            className="w-full max-w-[768px] "
          />
          <img
            src="/images/structure2.png"
            alt="structure-work"
            className="w-full max-w-[768px]"
          />
          <img
            src="/images/structure3.png"
            alt="structure-work"
            className="w-full max-w-[768px]"
          />
          <img
            src="/images/structure4.png"
            alt="structure-work"
            className="w-full max-w-[768px]"
          />
            <img
              src="/images/staircase.png"
              alt="structure-work"
              className="w-full max-w-[768px]"
            />
          <img
            src="/images/structure5.png"
            alt="structure-work"
            className="w-full max-w-[768px]"
          />
          <img
            src="/images/structure6.png"
            alt="structure-work"
            className="w-full max-w-[768px]"
          />
        </div>
      </section>
    </main>
  );
};

export default StructuralDesign;
