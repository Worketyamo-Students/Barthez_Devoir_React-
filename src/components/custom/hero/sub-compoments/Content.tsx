import React from 'react'
import Button from '../../navbar/sub-compoments/Button'

const Content:React.FC = () => {
  return (
    <div className='max-w-screen-md flex flex-col items-start gap-5'>
      {/* Title */}
      <h1 className="font-bold text-6xl font-poppins">
        Help build a <span className="text-primary">Better Society</span> for <span className="text-primary">All</span>
      </h1>

      {/* Description */}
      <p className="text-lg text-dark font-source">
        Lorem ipsum dolor sit amet consectetur. Ac amet libero facilisis hendrerit pulvinar massa placerat.
      </p>
      
      {/* Cta Button */}
      <div className="mt-6">
        <Button name='Donate now'/>
      </div>
    </div>
  )
}

export default Content
