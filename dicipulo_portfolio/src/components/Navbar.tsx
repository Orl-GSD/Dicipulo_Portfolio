import React from 'react'
import Link from 'next/link' // Import Next.js Link
import Button from './Button'

const Navbar = () => {
  return (
    <div className='fixed top-0 z-50 flex items-center justify-between w-full px-6 md:px-12 py-4 border-b-2 border-mainblue bg-mainwhite'>
      
      <div>

        <Link href="/">
          <p className='font-albert font-black text-2xl text-mainblue cursor-pointer'>EARL</p>
        </Link>
      </div>

      <div className='hidden md:flex gap-4 items-center'>

        <Link href="/about">
          <Button variant="ghost">About Me</Button>
        </Link>
        
        <Link href="/projects">
          <Button variant="ghost">Projects</Button>
        </Link>
        
          <Button variant="ghost">Resume</Button>

          <Button variant="primary">Get in Touch</Button>

      </div>

      <div className="md:hidden flex items-center">
        <button className="text-mainblue font-bold">Menu</button>
      </div>

    </div>
  )
}

export default Navbar