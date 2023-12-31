import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import { step } from "../constants";
import "react-vertical-timeline-component/style.min.css";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

import playstore from "../assets/playstore.png";
import appstore from "../assets/appstore.png";
import arrow from "../assets/Arrow-Down.gif";
import mobile from "/src/assets/iphoone.svg";
import React, { useState } from 'react';


function ExperienceAccordion({ experience, playstore, appstore }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex justify-center items-center flex-col rounded-lg" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <h3 className="text-white text-25px p-0 m-0">
        {experience.title}
      </h3>
      {experience.title === "Download Our App" && !isHovered && (
        <div className="tooltip text-black">
          <img src={arrow} alt="Arrow Icon" width="50rem"/>
        </div>
      )}
      {experience.title === "Download Our App" && isHovered && (
        <div className="grid grid-cols-12">
          <div className="col-span-6 p-4 text-white flex items-center">
            <a href="https://play.google.com/store/games" target="_blank" rel="noopener noreferrer">
              <img src={playstore} width="30rem" alt="Play Store"/>
            </a>
          </div>
          <div className="col-span-6 p-4 flex items-center">
            <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
              <img src={appstore} width="30rem" alt="App Store"/>
            </a>
          </div>
        </div>
      )}
    </div>
  );
}


const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#7A3BB5",
        color: "#FFFFFF", 
        paddingLeft: "2rem", 
        paddingRight: "2rem",
        paddingTop: "0.5rem",
        paddingBottom: "0.5rem",
        borderRadius: "3rem",
      }}
      contentArrowStyle={{ borderRight: "0px solid  #05668D", paddingTop: "0.5rem"}}
      iconStyle={{ background: "#7A3BB5", color: "#05668D" }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={experience.img}
            alt={experience.company_name}
            className='w-[70%] h-[70%] object-contain'
          />
        </div>
      }
    >
    <ExperienceAccordion experience={experience} playstore={playstore} appstore={appstore} />
    </VerticalTimelineElement>
  );
};

const Steps = () => {

  return (
    <div className="h-screen bg-hero-pattern bg-center bg-cover bg-no-repeat">
      <h2 className={`${styles.sectionHeadText} text-center text-[1D455F] pt-10`}>
        Getting Started
      </h2>
      <br />
      <div className="flex justify-center lg:grid lg:grid-cols-12">
        <div className="flex justify-center timeline md:col-span-9 flex items-center ml-20">
          <VerticalTimeline lineColor={"#7A3BB5"}>
            {step.map((experience, index) => (
              <ExperienceCard
                key={`experience-${index}`}
                experience={experience}
              />
            ))}
          </VerticalTimeline>

        </div>
        <motion.div variants={fadeIn("top", "", 0.1, 2)} className="phone lg:col-span-3 hidden lg:block">
          <div className="mt-0">
            <img src={mobile} className=" imageC h-5 lg:h-[12%] pt-10" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SectionWrapper(Steps, "Steps");
