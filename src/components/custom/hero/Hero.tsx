import React from 'react'
import Content from './sub-compoments/Content'
import Img from './sub-compoments/Img'

const Hero: React.FC = () => {
  return (
    <section className='container'>
      <div className="flex justify-between items-center gap-4 px-16 py-8">
        <Content/>
        <Img/>
      </div>
    </section>
  )
}

export default Hero
