import DealersLogo from '@/components/Home/DealersLogo'
import Hero from '@/components/Home/Hero'
import React from 'react'

const Home = () => {
  return (
    <div className='flex flex-col '>
      <Hero />
      <DealersLogo></DealersLogo>
    </div>
  )
}

export default Home