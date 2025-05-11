"use client"
import React from 'react'
import {Icon} from "@iconify/react";
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import { useState } from 'react';

const UserNavigation = () => {
  const { data: session } = useSession();
  const [userRole, setUserRole] = useState<"user" | "admin" | undefined>()

  React.useEffect(() => {
    if (session) {
      setUserRole(session.user.role);
    }
  }, [session]);
  return (
    <div className='flex flex-row gap-3 md:gap-5 items-center justify-center h-full'>    
        <Link href={`/${userRole === "admin" ? "admin" : "profile"}`}>
            <Icon icon="solar:user-bold" className='text-[24px] text-[#000000] hover:text-[var(--logo-color)] transition-all duration-200 ease-in-out' />
        </Link>
        <Link href={"/cart"}>
            <Icon icon="teenyicons:bag-solid" className='text-[21px] text-[#000000] hover:text-[var(--logo-color)] transition-all duration-200 ease-in-out' />
        </Link>
    </div>
  )
}

export default UserNavigation