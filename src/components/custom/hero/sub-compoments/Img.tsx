import React from 'react'
import heroImg from '/src/assets/filles-en-joie.png'

const Img: React.FC = () => {
  return (
    <div className='relative max-w-screen-md'>
      <div className="bgImageHero"></div>
      <div className="relative w-full h-full bg-[#C5B6D3] rounded-[2rem] rounded-br-[5rem] overflow-hidden md:mx-10">
        <img src={heroImg} alt="jeunes-filles-contentes" className='object-contain' />
      </div>
    </div>
  )
}

export default Img
