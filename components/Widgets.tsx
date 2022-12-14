import { SearchIcon } from '@heroicons/react/outline'
import React from 'react'
import { TwitterTimelineEmbed } from 'react-twitter-embed'

const Widgets = () => {
  return (
    <div className='col-span-2 mt-2 hidden lg:inline px-2 '>
      <div className='mt-2 flex items-center space-x-2 bg-gray-100 p-3 rounded-full'>
        <SearchIcon className='h-5 w-5 text-gray-400' />
        <input type="text" placeholder='Search Twitter' className='bg-transparent flex-1 outline-none' />
        
        </div>

        <TwitterTimelineEmbed 
        screenName='ElishaKrasz' 
        sourceType='profile'
        options={{ height: 1000 }}
        />
    </div>
  )
}

export default Widgets