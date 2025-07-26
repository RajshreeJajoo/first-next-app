import UserFetch from '@/components/UserFetch'
import React from 'react'
const UserPage = () => {

 
  return (
       <div className='bg-yellow-300 min-h-screen w-full'>
      <h1 className="text-3xl pt-14 ml-150 pb-2">Users List </h1>
      <div className='ml-40'>
      <UserFetch/>
      </div>
    </div>
    
  )
}

export default UserPage