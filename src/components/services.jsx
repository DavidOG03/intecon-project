import React from 'react'
import ServiceCard from './service-card'
import Quote from './quote'

const Services = () => {
  return (
    <main className='services py-[120px]'>
      <h3 className="text-[90px] text-[#f0f0f0] col-start-1 col-end-4 font-jakarta tracking-tight font-normal pl-8">Our Services</h3>
      <div className="services-box grid grid-cols-3 items-stretch gap-4 px-8 mb-[120px]">
      <ServiceCard
      name="Engineering Design"
      desc="Intecon, a leader in project development and engineering design, consistently exceeds client expectations. With extensive experience, we deliver successful projects in industrial, commercial, marine, and aviation facilities, highways, bridges, and infrastructure, including estates, terminals, warehouses, offices, and recreational facilities."
      img="/images/service-one.jpg"
      alt="Engineering Design"/>

      <ServiceCard
      name="Geosciences"
      desc="Intecon is proud of its achievements in construction, offering specialized services with advanced equipment and skilled manpower. With international experience in offshore geotechnical work and foundation design, we lead in geotechnical services for high-rise buildings, bridges, power lines, IPPs, LNG, and oil terminals in diverse terrains."
      img="/images/geosciences.webp"
      alt="Geosciences"/>

      <ServiceCard
      name="Project Management"
      desc="Our highly skilled team manages projects of all complexities, offering cost-effective, sound approaches to achieve objectives. With diverse experience and up-to-date training, we ensure quality, timely, and cost-effective construction supervision. Our strategy involves working closely with contractors and providing comprehensive reports as needed."
      img="/images/project-management.jpg"
      alt="Project Management"/>

      <ServiceCard
      name="Laboratory Testing"
      desc="Our Lagos laboratory is equipped with modern equipment for geotechnical, civil, and structural testing services. Our trained personnel perform tests to BS, ASTM, and other international standards. We test soil samples for foundation design and structural strength. We aim to collaborate with governments and builders to reduce structural failures due to construction materials."
      img="/images/lab-test.png"
      alt=""/>

      <ServiceCard
      name="QA/QC"
      desc="Intecon has provided quality assurance, inspections, integrity checks, and failure analysis for government, corporations, and Oil & Gas companies. Leveraging our expertise, we conduct specialized tests for runway integrity, fire-damaged buildings, failing structures, design verification, QAQC document checking, and construction inspection. We also offer advisory services for process plants, tank farms on pile foundations, and oil terminal jetties."
      img="/images/qaqc.png"
      alt="Quality Assurance/ Quality Control"/>

      <ServiceCard
      name="NDT"
      desc="Intecon utilizes state-of-the-art non-destructive testing equipment and a highly trained inspection team to conduct detailed inspections meeting international standards. We specialize in inspecting diverse engineering infrastructures such as bridges, high-rise buildings, foundation structures, and steel facilities. Our commitment is to continuously enhance our non-destructive testing services to align with global trends and best practices."
      img="/images/testing.webp"
      alt="Non destructive testing"/>
      </div>
      <Quote/>
    </main>
  )
}

export default Services
