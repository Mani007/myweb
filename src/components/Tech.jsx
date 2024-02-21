import React from "react";
import { textVariant } from "../utils/motion";
import { BallCanvas } from "./canvas";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { motion } from "framer-motion";
const Tech = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          My Expertise
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Technology Stack
        </h2>
      </motion.div> <br />
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          <img src={technology.icon} alt={technology.name} />
          {/* <BallCanvas icon={technology.icon} /> */}
        </div>
      ))}
    </div>
    </>
  );
};

export default SectionWrapper(Tech, "");