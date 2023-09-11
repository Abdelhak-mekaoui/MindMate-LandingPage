import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import alz from "../assets/section3back.svg"

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";


const Alzheimer = () => {
  return (
    <div className="h-screen justify-center">
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} cursor-default`}>
          Introduction
        </p>
        <h2 className={`${styles.sectionHeadText} cursor-default`}>
          What is Alzheimer?
        </h2>
      </motion.div>
      <div className="flex flex-wrap">
        <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-4 text-secondary text-[20px] max-w-3xl leading-[30px]"
        >
            Alzheimer's disease, a progressive and devastating brain disorder, relentlessly chips away at memory, cognition, and behavior. It begins with subtle memory lapses but gradually infiltrates broader cognitive domains, impairing reasoning and language skills, while behavioral changes like mood swings and agitation often emerge. This relentless decline is underpinned by the presence of amyloid plaques and tau tangles in the brain. Alzheimer's not only affects individuals but places a significant emotional and practical burden on caregivers and strains healthcare resources. Though a cure remains elusive, ongoing research offers hope for improved treatments, emphasizing the importance of early diagnosis and intervention in managing this complex and far-reaching disease.
        </motion.p>

        <div className="mt-20 flex justify-center items-center md:hidden lg:hidden sm:hidden-image">
          <img src={alz} alt="" />
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Alzheimer, "Alzheimer");
