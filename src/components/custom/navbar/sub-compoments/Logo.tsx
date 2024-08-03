import React from 'react'
import logo from '/src/assets/logo.png'

const Logo:React.FC = () => {
    return (
        <a 
            href='/#'
            className="inline-block"
        >
            <img src={logo} alt="logo society" className='w-full h-full'/>
        </a>
    )
}

export default Logo
