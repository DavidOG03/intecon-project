import React from 'react'

const Ndt = () => {
  return (
    <main className="ndt-page bg-white pt-[120px]">
      <section className="intro px-6 grid grid-cols-1 xl:grid-cols-2 gap-6 place-content-center lg:gap-12 pt-6 pb-[120px]">
        <div className="image-box w-full h-full max-h-[320px] xl:max-h-none overflow-hidden">
          <img
            src="/images/testing.webp"
            alt="olive court"
            className="object-fill w-full"
          />
        </div>
        <div className="text">
          <h3 className="capitalize font-jakarta tracking-tighter text-[#1c1c1c] text-[54px] md:text-[68px] xl:text-[72px] text-left leading-tight mb-6 max-w-[768px]">
            Non-Destructive Testing
          </h3>
          <p className="text-base md:text-[18px] text-[#1c1c1c] font-inter max-w-[768px]">
          INTECON’S has state of the art non-destructive test equipment, and highly trained inspection team, in carried out detailed, and accurate inspection to international standard. Our team of expert has successfully investigated, engineering infrastructures of varying complexities, including, Bridges, High-rise Building, Foundation structures, Steel structural Facilities.
          </p>
          <p className="mt-4 text-[14px] md:text-[18px] text-[#1c1c1c] font-inter max-w-[768px]">
          INTECON is working continuously to ensure continual improvement of its non-destructive services to global trends international best practices.
          </p>
          
        </div>
      </section>
      <section className="gallery px-6">
        <h3 className="text capitalize font-jakarta tracking-tighter text-[#1c1c1c] text-[36px] md:text-[45px] xl:text-[54px] text-left leading-tight mb-6 max-w-[768px]">
          Geoscience projects pictures
        </h3>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <img
            src="/images/non-destructive Testing.png"
            alt="non-destructive Testingwork"
            className="w-full max-w-[768px] "
          />
          <img
            src="/images/non-destructive Testing.png"
            alt="non-destructive Testingwork"
            className="w-full max-w-[768px]"
          />
          <img
            src="/images/non-destructive Testing.png"
            alt="non-destructive Testingwork"
            className="w-full max-w-[768px]"
          />
          <img
            src="/images/non-destructive Testing.png"
            alt="non-destructive Testingwork"
            className="w-full max-w-[768px]"
          />
          <img
            src="/images/non-destructive Testing.webp"
            alt="non-destructive Testingwork"
            className="w-full max-w-[768px]"
          />
          <img
            src="/images/lab-test.png"
            alt="non-destructive Testingwork"
            className="w-full max-w-[768px]"
          />
          <img
            src="/images/non-destructive Testing.png"
            alt="non-destructive Testingwork"
            className="w-full max-w-[768px] "
          />
          {/* <img
            src="/images/non-destructive Testing.png"
            alt="non-destructive Testingwork"
            className="w-full max-w-[768px]"
          /> */}
        </div>
      </section>
    </main>
  )
}

export default Ndt
