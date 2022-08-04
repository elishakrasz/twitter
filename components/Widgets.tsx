import { SearchIcon } from '@heroicons/react/outline'
import React from 'react'

const Widgets = () => {
  return (
    <div>
        <div className='flex items-center space-x-2 bg-gray-100 p-3'>
            <SearchIcon className='h-5 w-5'/>
            <input type="text" placeholder='Search Twitter' className='bg-transparent'/></div>
    </div>
  )
}

export default Widgets