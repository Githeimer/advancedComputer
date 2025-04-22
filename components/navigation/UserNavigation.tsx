import React from 'react'
import {Icon} from "@iconify/react";
import Link from 'next/link';

const UserNavigation = () => {
  return (
    <div className='flex flex-row gap-3 md:gap-5 items-center justify-center h-full'>    
        <Link href={"/user"}>
            <Icon icon="solar:user-bold" className='text-[24px] text-[#000000] hover:text-[var(--logo-color)] transition-all duration-200 ease-in-out' />
        </Link>
        <Link href={"/cart"}>
            <Icon icon="teenyicons:bag-solid" className='text-[21px] text-[#000000] hover:text-[var(--logo-color)] transition-all duration-200 ease-in-out' />
        </Link>
    </div>
  )
}

export default UserNavigation