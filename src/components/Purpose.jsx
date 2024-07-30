import React from "react";
import {Tilt} from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
      >
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            {/* <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={github}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div> */}
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Purpose = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>Work Ethics</p>
        <h2 className={`${styles.sectionHeadText}`}>Core Values</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          I operate under a self-imposed framework of ethics, values, fairness and objectivity. 
          These values continue to direct the growth, peace and prosperity in my career. 
          

        </motion.p>
      </div> <br />
      <motion.div variants={textVariant()}>
      <p className={`${styles.sectionSubText} `}>Integrity</p>
       
      </motion.div>
      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          To be fair, honest, transparent and ethical in all my conduct; In the world of social media, everything we do must stand the test of public scrutiny. 
          

        </motion.p>
      </div> <br />
      <motion.div variants={textVariant()}>
      <p className={`${styles.sectionSubText} `}>Reliability</p>
       
      </motion.div>
      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          To integrate high moral and social principles in professional practices, to ensure “what’s promised must be delivered on time, or else complete refund/reparation for the loss” 
          

        </motion.p>
      </div> <br />
      <motion.div variants={textVariant()}>
      <p className={`${styles.sectionSubText} `}>Excellence</p>
       
      </motion.div>
      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Always ensuring the highest standards of quality, always delivering best possible technology solutions.
          

        </motion.p>
      </div> <br />
      <motion.div variants={textVariant()}>
      <p className={`${styles.sectionSubText} `}>Innovation</p>
       
      </motion.div>
      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Be bold and always take on challenges, head on, to develop promising and innovative solutions.

        </motion.p>
      </div> <br />
      <motion.div variants={textVariant()}>
      <p className={`${styles.sectionSubText} `}>People</p>
       
      </motion.div>
      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
         People matter! Always be humble to enable continuous learning, and build a collaborative environment to develop trust and mutual respect. 
          

        </motion.p>
      </div> <br />
       

      
    </>
  );
};

export default SectionWrapper(Purpose, "");