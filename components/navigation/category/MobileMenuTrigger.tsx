'use client'

import { useState } from 'react'
import { Icon } from '@iconify/react'
import { CategoryBar } from './CategoryBar' // Import the CategoryBar component

export default function MobileMenuTrigger() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <button onClick={toggleSidebar}>
        <Icon icon="mdi:menu" className="text-2xl" />
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/5"
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar */}
      <div className={`fixed top-0 left-0 h-full w-80 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'} flex flex-col`}>
        <div className='h-10 bg-[#199f4c] flex flex-row items-center justify-between px-2 text-white montserrat text-sm font-semibold'>
          <h1>Welcome to Advance Computer</h1>
          <button onClick={toggleSidebar} className='text-2xl'>
            <Icon icon="mdi:close" />
          </button>
        </div>
        
        {/* Include the CategoryBar with vertical prop set to true */}
        <div className="flex-grow overflow-y-auto">
          <CategoryBar vertical={true} />
        </div>
      </div>
    </>
  )
}