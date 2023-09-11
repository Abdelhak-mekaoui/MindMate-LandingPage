import { motion } from "framer-motion";
import brain from "../assets/brain14.png"

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
const Hero = () => {
  return (
    <section className={`relative w-full h-screen md:h-[100%]  mx-auto bg-white`}>
      <div className="h-screen flex flex-row lg:flex-row gap-5 justify-center items-start md:items-start">
      <div className="flex h-screen md:h-[100%] sm:w-screen items-center justify-center lg:pl-10 gap-4">
        <div className="text-left relative left-10">
          <h1 className="text-tertiary font-medium lg:text-6xl sm:text-6xl xs:text-5xl text-4xl lg:leading-90 mt-2">
            <span className="text-[#461066] font-bold">MindMate<br /></span>Your Personal<br /><span className="text-[#BA68C8]">Alzheimer´s</span> Support
          </h1>
          <button className="bg-tertiary hover:bg-[#BA68C8] mt-5 text-white font-bold py-4 px-6 rounded-full border border-solid border-secondary rounded-[40] p-4">Get Started</button>
        </div>
      </div>
      <div className="w-full ">
        <img src={brain} alt="" className="hidden z-10 h-screen relative  md:block lg:block" />
      </div>
  </div>
      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-start'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-tertiary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-tertiary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
}; 

export default Hero;
