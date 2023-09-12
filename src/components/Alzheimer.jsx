import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import alz from "../assets/section3back.svg"

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";


const Alzheimer = () => {
  return (
    <div className="justify-center">
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText} cursor-default`}>
          What is Alzheimer?
        </h2>
      </motion.div>
      <div className="flex flex-wrap justify-center items-center">
        <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-4 text-secondary text-[25px] max-w-3xl leading-[30px]"
        >
Alzheimer's is a type of dementia that affects memory, thinking and behavior. Symptoms eventually grow severe enough to interfere with daily tasks.        </motion.p>

        <div className="mt-20 flex justify-center items-center">
          <img className="w-[22rem]" src={alz} alt="" />
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Alzheimer, "Alzheimer");
