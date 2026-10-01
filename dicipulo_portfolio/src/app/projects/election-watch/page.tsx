import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const page = () => {
  return (
    <div className='flex flex-col min-h-screen font-albert pattern-background'>
      <Navbar />
      <Footer />
    </div>
  )
}

export default page