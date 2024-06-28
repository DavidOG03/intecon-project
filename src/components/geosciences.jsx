import React from "react";

const Geosciences = () => {
  return (
    <main className="geosciences-page bg-white pt-[120px]">
      <section className="intro px-6 grid grid-cols-1 xl:grid-cols-2 gap-6 place-content-center lg:gap-12 pt-6 pb-[120px]">
        <div className="image-box w-full h-full max-h-[320px] xl:max-h-none overflow-hidden">
          <img
            src="/images/geosciences.png"
            alt="olive court"
            className="object-fill w-full"
          />
        </div>
        <div className="text">
          <h3 className="capitalize font-jakarta tracking-tighter text-[#1c1c1c] text-[54px] md:text-[68px] xl:text-[90px] text-left leading-tight mb-6 max-w-[768px]">
            Geosciences
          </h3>
          <p className="text-base md:text-[18px] text-[#1c1c1c] font-inter max-w-[768px]">
            INTECON is very proud of its achievement in providing this
            specialized service in the construction industry over the years.
            INTECON boasts of sophisticated equipments and highly skilled
            manpower, with international exposure and experience in offshore
            geotechnical work, analysis and foundation design.
          </p>
          <p className="mt-4 text-[14px] md:text-[18px] text-[#1c1c1c] font-inter max-w-[768px]">
            INTECON has led others in providing geotechnical services on sites
            for high rise buildings and bridges in sand fill areas, power lines
            through thick forest and swampy terrain, Independent Power Projects,
            LNG and Oil Terminals development Projects. Our experience and
            knowledge of almost all the terrains in the country proves to be our
            great advantage.ent and software that comply with international
            standards.
          </p>
          <p className="mt-4 text-[14px] md:text-[18px] text-[#1c1c1c] font-inter max-w-[768px]">
            Our laboratory facility in Lagos is equipped with modern laboratory
            equipment for geotechnical/ civil/ structural testing services. Our
            personnel are well trained and experienced in the latest procedures
            and carry out testing to BS, ASTM and other international standards
            as may be applicable.
          </p>
        </div>
      </section>
      <section className="gallery px-6">
        <h3 className="text capitalize font-jakarta tracking-tighter text-[#1c1c1c] text-[36px] md:text-[45px] xl:text-[54px] text-left leading-tight mb-6 max-w-[768px]">
          Geoscience projects pictures
        </h3>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <img
            src="/images/geosciences.png"
            alt="geo-work"
            className="w-full max-w-[768px] "
          />
          <img
            src="/images/geo2.png"
            alt="geo-work"
            className="w-full max-w-[768px]"
          />
          <img
            src="/images/geo3.png"
            alt="geo-work"
            className="w-full max-w-[768px]"
          />
          <img
            src="/images/geo4.png"
            alt="geo-work"
            className="w-full max-w-[768px]"
          />
          <img
            src="/images/geosciences.webp"
            alt="geo-work"
            className="w-full max-w-[768px]"
          />
          <img
            src="/images/lab-test.png"
            alt="geo-work"
            className="w-full max-w-[768px]"
          />
          <img
            src="/images/geo1.png"
            alt="geo-work"
            className="w-full max-w-[768px] "
          />
          {/* <img
            src="/images/geo6.png"
            alt="geo-work"
            className="w-full max-w-[768px]"
          /> */}
        </div>
      </section>
    </main>
  );
};

export default Geosciences;
