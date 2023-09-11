import React from "react";
import { Tilt } from "react-tilt";
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
  link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-[#FFFFFF] p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[330px] p-10">
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl "
          />
        </div>

        <div className="mt-5">
          <h3 className="text-tertiary text-center font-bold text-[24px]">{name}</h3>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <div className="lg:h-screen">
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText} cursor-default text-center`}>
        Alzheimer’s symptoms
        </h2>
      </motion.div>
      <div className="mt-20 flex flex-wrap gap-7 justify-center h-[100%]">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Works, "");
