import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import xyzRotate from "../assets/xyzrotate.png";


const Hero = () => {
  const [textIndex, setTextIndex] = useState(0);
  const textOptions = [
    "Front-end Developer",
    "Web Developer",
    "Software Engineer",
    "Fullstack Developer",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % textOptions.length);
    }, 2700);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-screen mx-auto" >
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I am <span className="gradient-text">Mahijeet</span>
          </h1>
          <h2 className={`${styles.heroSubText} mt-2 text-white-100`}>
            I am a{" "}
            <motion.span
              key={textIndex}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
              style={{
                background: 'linear-gradient(45deg, #fcb045, #fd1d1d, #833ab4)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
              className="inline-block"
            >
              {textOptions[textIndex]}
            </motion.span>{" "}
          </h2>
        </div>
      </div>

      <ComputersCanvas />


      <div className="absolute right-24 opacity-50 top-[55%] flex items-center justify-center">
        <div className="relative w-20 h-20 ">
      <img src={xyzRotate} alt="Rotation Denoting Image" />
        </div>
      </div>



      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
