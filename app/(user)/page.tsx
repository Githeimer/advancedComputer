import DealersLogo from '@/components/Home/DealersLogo'
import FeaturedProducts from '@/components/Home/Product/FeaturedProducts'
import Hero from '@/components/Home/Hero'
import React from 'react'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import AdSection from '@/components/Home/AdSection'

const Home = () => {
  return (
    <div className='flex flex-col '>
      <Hero />
      <DealersLogo></DealersLogo>
      <FeaturedProducts></FeaturedProducts>
      <div className='flex flex-row items-center justify-center gap-1 font-semibold text-gray-800'>View More in 
         <Link href='/shop' className='text-[var(--fill-color)] font-semibold flex flex-row items-center justify-center gap-1 '> Shop <Icon icon="teenyicons:bag-solid" className='text-[21px] text-[var(--fill-color)] hover:text-[var(--logo-color)] transition-all duration-200 ease-in-out' />
      </Link>
      </div>
      <AdSection></AdSection>
    </div>
  )
}

export default Home