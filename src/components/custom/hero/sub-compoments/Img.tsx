import React from 'react'
import heroImg from '/src/assets/filles-en-joie.png'

const Img: React.FC = () => {
  return (
    <div className='max-w-screen-md'>
      <div className="bgImg w-full h-full bg-[#C5B6D3] rounded-[2rem] rounded-br-[5rem] overflow-hidden mx-10">
        <img src={heroImg} alt="jeunes-filles-contentes" className='contain' />
      </div>
    </div>
  )
}

export default Img
