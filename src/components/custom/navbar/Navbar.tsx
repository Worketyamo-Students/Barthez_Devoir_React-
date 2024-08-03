import { AiOutlineSearch } from "react-icons/ai"; 
import React from 'react'
import Logo from './sub-compoments/Logo'
import Link from './sub-compoments/Link';

interface ILinksEle {
    name: string;
    href: string;
}

const linksEle: ILinksEle[] = [
    {
        'name': 'Home',
        'href': '/#'
    },
    {
        'name': 'About Us',
        'href': '/#'
    },
    {
        'name': 'Institutions',
        'href': '/#' 
    },
    {
        'name': 'Library',
        'href': '/#'
    },
    {
        'name': 'Projects',
        'href': '/#'
    },
    {
        'name': 'Contact Us',
        'href': '/#'
    }
]

const Navbar: React.FC = () => {
  return (
    <div className='flex justify-between items-center px-25 py-7'>
        {/* Logo */}
        <Logo/>

        {/* NavLinks */}
        <div className="flex items-center gap-4">
            {
                linksEle.map((ele) => (
                    <Link href={ele.href} name={ele.name} />
                ))
            }
        </div>

        {/* Search Icon and CTA buttons */}
        <div className="flex items-center gap-3 ">
            <button className="p-1">
                <AiOutlineSearch className="min-w-6 min-h-6 text-primary hover:scale-110" />
            </button>

            {/* CTA Buttons */}
            <div className="flex gap-2 items-center">
                {/* Login */}
                <button className="ctaBtn1 line">
                    Login
                </button>

                {/* register */}
                <button className="ctaBtn2">
                    Register
                </button>
            </div>
        </div>
    </div>
  )
}

export default Navbar
