import React from 'react'

const projectCard = ({img, title,description}) => {
    const fadein = {
        hidden: { opacity: 0, y: 10 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.3,
            ease: "easeInOut",
            type: "tween",
            delay: 0.2,
          },
        },
        exit: { opacity: 0, y: -20 },
      };
  return (
    <motion.div
            variants={fadein}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="project-pic relative"
          >
           {img && <img
              src={img}
              alt={description}
              className="w-full"
            />}
             <div className="media-content bg-blue text-white absolute ">
        <h3 className="media-title text-[1.5rem] font-jakarta px-[1rem] pb-[1rem]">{title}</h3>
        <p className="media-description text-base font-inter px-[1rem] pb-[1rem]">{description}</p>
      </div>
          </motion.div>
  )
}

export default projectCard
