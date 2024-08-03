import React from 'react'
import Content from './sub-compoments/Content'
import Img from './sub-compoments/Img'

const Hero: React.FC = () => {
  return (
    <div className='container'>
      <div className="flex justify-between items-center gap-4 px-16">
        <Content/>
        <Img/>
      </div>
    </div>
  )
}

export default Hero
