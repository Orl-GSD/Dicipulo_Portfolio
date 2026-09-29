import React from 'react'
import Button from './Button'

const Navbar = () => {
  return (
    <div className='fixed flex items-center justify-between w-full px-12 py-4 border-b-2 border-mainblue bg-mainwhite'>
      
      <div>
        <p className='font-albert font-black text-2xl text-mainblue'>EARL</p>
      </div>

      <div className='space-x-2'>
        <Button variant="ghost">About Me</Button>
        <Button variant="ghost">Projects</Button>
        <Button variant="ghost">Resume</Button>
        <Button variant="primary">Get in Touch</Button>
      </div>

    </div>
  )
}

export default Navbar
