import React from 'react'
import { SearchIcon } from '@heroicons/react/outline'
const Header = () => {
  return (
    <div className='w-full py-6 items-center justify-between flex px-12'>
    <div className='w-full lg:flex spacex-4 items-center justify-start py-2'>
     <SearchIcon className='w-4 h-4' />
    <input type="text" placeholder='Search anything...' className='bg-tranparent outline-none' />
    </div>
    <button className='button'>Click Me</button>
    </div>  
  )
}

export default Header