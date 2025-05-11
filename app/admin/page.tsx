import SignOutButton from '@/components/auth/SignOutButton'
import React from 'react'
const Admin = () => {
  return (
    <div>Admin Pages with no navbar and footer
      <div className='flex w-full h-full flex-col justify-center items-center'>
        <h1 className='text-2xl font-bold'>Admin Page</h1>
        <SignOutButton></SignOutButton>
      </div>
    </div>
  )
}

export default Admin