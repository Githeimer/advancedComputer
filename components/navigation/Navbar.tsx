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
    <div className="flex flex-col w-full bg-white ">
      <div className="flex flex-row items-center justify-between h-[60px] landing_container">
        <div className="flex flex-row gap-3 items-center h-full">
          <div className="sm:hidden flex items-center justify-center h-full">
            <MobileMenuTrigger />
          </div>
          <Logo />
        </div>
    
        <div className="hidden sm:flex flex-row items-center justify-center h-full">
          <SearchBar />
        </div>
    
        <UserNavigation />
      </div>
    
      <div className="sm:hidden w-full justify-center items-center flex px-5">
        <SearchBar />
      </div>
    
      <div className="hidden md:flex w-full landing_container ">
        <CategoryBar vertical={false} />
      </div>
    </div>
  );
}

export default Navbar