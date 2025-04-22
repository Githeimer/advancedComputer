import React from 'react'
import Logo from './Logo'
import SearchBar from './SearchBar'
import UserNavigation from './UserNavigation'
import { Icon } from '@iconify/react'
import MobileMenuTrigger from "./category/MobileMenuTrigger"
import { CategoryBar } from './category/CategoryBar'

const subCategories: Record<string, string[]> = {
  "Subcategory 1": ["/subcategory1"],
  "Subcategory 2": ["/subcategory2"],
  "Subcategory 3": ["/subcategory3"],
  "Subcategory 4": ["/subcategory4"],
  "Subcategory 5": ["/subcategory5"],
};

const Navbar = () => {
  return (
    <div className='landing_container flex flex-col w-full h-full'>
        <div className='flex flex-row items-center justify-between h-[60px]'>
            {/* hamburger menu on left for mobile */}
            {/* logo on left for desktop */}
          <div className='flex flex-row gap-3 items-center h-f'>
              <div className='sm:hidden flex items-center justify-center h-full'>
                <MobileMenuTrigger></MobileMenuTrigger>
                 </div>
                <Logo></Logo>
          </div>
         
          {/* search bar on right for desktop */}
          <div className='hidden sm:flex flex-row items-center justify-center h-full  '>
            <SearchBar></SearchBar>
            </div>

            {/*user navigation on right */}
            <UserNavigation/>
        </div>
        {/* Search bar for mobile */}
        <div className='sm:hidden w-full justify-center items-center flex  px-5'>
          <SearchBar/>
        </div>
        {/* Category Bar*/}
        <div className='hidden md:flex w-full  '> 
          <CategoryBar vertical={false}/>
        </div>
    </div>
  )
}

export default Navbar