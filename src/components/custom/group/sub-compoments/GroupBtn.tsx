import React, { HTMLProps, ReactNode } from 'react'

interface IBtn extends HTMLProps<HTMLButtonElement>{
    icon: ReactNode;
    name: string;
}

const GroupBtn:React.FC<IBtn> = (props: IBtn) => {
  return (
    <button className='flex items-center gap-3 py-2 px-4 bg-[#EEDDDD] hover:bg-[#f8dede]  rounded'>
        <div className="rounded-full bg-primary text-white p-3">
            {props.icon}
        </div>

        <span className='text-primary font-medium font-poppins'>
            {props.name}
        </span>
    </button>
  )
}

export default GroupBtn
