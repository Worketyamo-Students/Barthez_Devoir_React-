import React from 'react'

interface ILink extends React.HTMLAttributes<HTMLAnchorElement> {
    href: string;
    name: string;
}

const Link: React.FC<ILink> = (props: ILink) => {
  return (
    <>
        <a 
            className='line text-sm md:text-base font-openSans font-semibold text-gray lg:px-2 py-3 hover:text-primary'
            href={props.href}
        > 
            {props.name} 
        </a>
    </>
  )
}

export default Link
