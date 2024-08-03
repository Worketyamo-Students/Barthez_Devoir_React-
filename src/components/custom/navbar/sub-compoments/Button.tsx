import React from 'react'

interface IButton extends React.HTMLAttributes<HTMLButtonElement> {
    name: string
}

const Button: React.FC<IButton> = (props: IButton) => {
  return (
    <button className='ctaBtn2'>
      {props.name}
    </button>
  )
}

export default Button
