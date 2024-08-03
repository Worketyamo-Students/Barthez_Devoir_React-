import { AiOutlineSearch } from "react-icons/ai"; 
import React from 'react'
import Logo from './sub-compoments/Logo'
import Link from './sub-compoments/Link';
import Button from "./sub-compoments/Button";

interface ILinksEle {
    key: number;
    name: string;
    href: string;
}

const linksEle: ILinksEle[]= [
    {
        "key": 1,
        'name': 'Home',
        'href': '/#'
    },
    {
        "key": 2,
        'name': 'About Us',
        'href': '/#'
    },
    {
        "key": 3,
        'name': 'Institutions',
        'href': '/#' 
    },
    {
        "key": 4,
        'name': 'Library',
        'href': '/#'
    },
    {
        "key": 5,
        'name': 'Projects',
        'href': '/#'
    },
    {
        "key": 6,
        'name': 'Contact Us',
        'href': '/#'
    }
]

const Navbar: React.FC = () => {
  return (
    <div className='flex justify-between items-center px-10 sm:px-12 md:px-25 py-7'>
        {/* Logo */}
        <Logo/>

        {/* NavLinks */}
        <div className="hidden lg:flex items-center gap-1 sm:gap-2 lg:gap-4">
            {
                linksEle.map((ele) => (
                    <Link key={ele.key} href={ele.href} name={ele.name} />
                ))
            }
        </div>

        {/* Search Icon and CTA buttons */}
        <div className="flex items-center gap-1 sm:gap-3">
            <button className="hidden sm:block p-2 rounded-full hover:bg-primary/10 transition-all duration-200">
                <AiOutlineSearch className="w-6 h-6 text-primary" />
            </button>

            {/* CTA Buttons */}
            <div className="flex gap-0 sm:gap-2 items-center">
                {/* Login */}
                <button className="ctaBtn1 hover:bg-primary/10">
                    Login
                </button>

                {/* register */}
                <Button name="Register" />
            </div>
        </div>
    </div>
  )
}

export default Navbar
