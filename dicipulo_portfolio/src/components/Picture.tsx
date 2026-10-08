import React from 'react'
import Image from 'next/image'
import Button from './Button'

const Picture = () => {
  return (
        <div className='flex flex-row gap-24 w-full items-center justify-center'>

          {/* LEFT COLUMN */}
          <div className='flex flex-row relative'>

            {/* Left */}
            <div className="flex flex-col justify-between z-1">
              <div className="px-2 py-2 bg-blue-600 translate-x-2 -translate-y-2 rounded-full" />
              <div className="px-2 py-2 bg-blue-600 translate-x-2 translate-y-2 rounded-full" />
            </div>

            {/* Center */}
            <div className="p-4 border-2 border-mainblue">
              <div className="w-110 h-110 relative rounded-full overflow-hidden group">
                <Image 
                  src="/images/ThisIsMe.jpg"
                  alt="Profile Picture"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            </div>


            {/* Right */}
            <div className="flex flex-col justify-between">
              <div className="px-2 py-2 bg-blue-600 -translate-x-2 -translate-y-2 rounded-full" />
              <div className="px-2 py-2 bg-blue-600 -translate-x-2 translate-y-2 rounded-full" />
            </div>                        

          </div>
        </div>
  )
}

export default Picture
