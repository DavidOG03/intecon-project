import React from 'react'

const Ndt = () => {
  return (
    <main className="ndt-page bg-white pt-[120px]">
      <section className="intro px-6 grid grid-cols-1 lg:grid-cols-2 gap-6 place-items-stretch lg:gap-12 pt-6 pb-[120px]">
        <div className="image-box w-full h-full max-h-[320px] xl:max-h-none overflow-hidden">
          <img
            src="/images/testing.webp"
            alt="testing"
            className="object-fill w-full"
          />
        </div>
        <div className="text">
          <h3 className="capitalize font-jakarta tracking-tighter text-[#1c1c1c] text-[24px] md:text-[48px] xl:text-[72px] text-left leading-tight mb-6 max-w-[768px]">
            Non-Destructive Testing
          </h3>
          <p className="text-[14px] md:text-base text-[#1c1c1c] font-inter max-w-[768px]">
          INTECON’S has state of the art non-destructive test equipment, and highly trained inspection team, in carried out detailed, and accurate inspection to international standard. Our team of expert has successfully investigated, engineering infrastructures of varying complexities, including, Bridges, High-rise Building, Foundation structures, Steel structural Facilities.
          </p>
          <p className="mt-4 text-[14px] md:text-base text-[#1c1c1c] font-inter max-w-[768px]">
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
            src="/images/ndt1.png"
            alt="non-destructive Testingwork"
            className="w-full max-w-[768px] "
          />
          <img
            src="/images/ndt2.png"
            alt="non-destructive Testingwork"
            className="w-full max-w-[768px]"
          />
          <img
            src="/images/ndt3.png"
            alt="non-destructive Testingwork"
            className="w-full max-w-[768px]"
          />
          <img
            src="/images/ndt4.png"
            alt="non-destructive Testingwork"
            className="w-full max-w-[768px]"
          />
          <img
            src="/images/ndt5.png"
            alt="non-destructive Testingwork"
            className="w-full max-w-[768px]"
          />
          <img
            src="/images/lab-test.png"
            alt="non-destructive Testingwork"
            className="w-full max-w-[768px]"
          />
          <img
            src="/images/qaqc.png"
            alt="non-destructive Testingwork"
            className="w-full max-w-[768px] "
          />
          <img
            src="/images/non-destructive.webp"
            alt="non-destructive Testingwork"
            className="w-full max-w-[768px]"
          />
        </div>
      </section>
    </main>
  )
}

export default Ndt
