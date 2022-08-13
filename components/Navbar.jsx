import React from 'react'
import Link from 'next/link'
import { useState } from 'react'
import { useEffect } from 'react'
function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <div className='hidden items-center justify-between p-6 border-b-[1px] border-gray-200 md:flex'>
        <div>
          <p className='font-semibold text-2xl'>😭PTO-COINS</p>
        </div>

        <div className='flex justify-between gap-10'>
          <Link href="/"><p className='font-normal hover:text-blue-600 font-semibold cursor-pointer'>Home</p></Link>
          <Link href="/about"><p className='font-normal hover:text-blue-600 font-semibold cursor-pointer'>About</p></Link>
          <Link href="/contact"><p className='font-normal hover:text-blue-600 font-semibold cursor-pointer'>Contact</p></Link>
        </div>

      </div>

      <div className='flex items-center justify-end p-6 border-b-[1px] border-gray-200 md:hidden'>
        <button className='font-bold hover:cursor-pointer' onClick={() => setIsOpen(true)}>=</button>

        {isOpen &&
          <div className='fixed top-0  right-0 bottom-0 w-[60%] bg-gray-200 shadow-lg'>
            <div className='flex flex-col justify-between transition'>

              <p className='font-semibold text-2xl text-center m-20'>😭-<span className='text-indigo-600'>COINS</span></p>
              <button className='block font-bold hover:cursor-pointer m-auto text-2xl' onClick={() => setIsOpen(false)}>=</button>
            
              <div className='flex flex-col items-center justify-between gap-10 mt-10'>
                <Link href="/"><p className='font-normal hover:text-blue-600 font-semibold cursor-pointer' onClick={() => setIsOpen(false)}>Home</p></Link>
                <Link href="/about"><p className='font-normal hover:text-blue-600 font-semibold cursor-pointer' onClick={() => setIsOpen(false)}>About</p></Link>
                <Link href="/contact"><p className='font-normal hover:text-blue-600 font-semibold cursor-pointer' onClick={() => setIsOpen(false)}>Contact</p></Link>
              </div>
            </div>
          </div>
        }
      </div>
    </div>
  )
}

export default Navbar