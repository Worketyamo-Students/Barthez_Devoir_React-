import { TbUsers } from "react-icons/tb"; 
import React from 'react'
import GroupBtn from './sub-compoments/GroupBtn'

const Group: React.FC = () => {
  return (
    <section className="container w-full flex justify-center my-10">
      <div className='flex items-center justify-center flex-wrap gap-4 md:gap-10'>
          <GroupBtn name='Orphans' icon={<TbUsers />} />
          <GroupBtn name='Poverty Relieved Childen' icon={<TbUsers />} />
          <GroupBtn name='Scholarship Based Students' icon={<TbUsers />} />
      </div>
    </section>
  )
}

export default Group
