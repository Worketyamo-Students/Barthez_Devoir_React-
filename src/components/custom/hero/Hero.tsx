import React from 'react'
import Content from './sub-compoments/Content'
import Img from './sub-compoments/Img'

const Hero: React.FC = () => {
  return (
    <section className='container'>
      <div className="bg-gradient-to-tr from-primary/5 rounded-[3rem] to-transparent flex flex-col md:flex-row justify-center md:justify-between items-center gap-12 md:gap-4 md:px-16 py-8">
        <Content/>
        <Img/>
      </div>
    </section>
  )
}

export default Hero
