import React from 'react'
import  { BallCanvas } from "./canvas"
import { SectionWrapper } from "../hoc"
import { technologies } from "../constants"
import xyzRotate from "../assets/xyzrotate.png";

const Tech = () => {
  return (
    <div>
    <div className='flex flex-row flex-wrap justify-center gap-10 '>
      
      {technologies.map((technology) => (
        <div className='w-28 h-28' key= {technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>

    <div className="opacity-50 top-[55%] flex items-right justify-end mt-[0.5rem]">
      <div className="relative w-20 h-20 ">
        <img src={xyzRotate} alt="Rotation Denoting Image" />
      </div>
    </div>
  </div>
  )
}

export default SectionWrapper(Tech,"");