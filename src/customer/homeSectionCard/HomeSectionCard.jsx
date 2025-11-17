import React from 'react'




function HomeSectionCard() {
  return (
    <div className='cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden w-[15rem] mx-3'>
        
        <div className='h-[13rem] w-[10rem]'>
            <img className='object-cover object-top w-full h-full' src="https://media.istockphoto.com/id/1456884798/photo/handsome-athletic-man-dancing-alone.webp?a=1&s=612x612&w=0&k=20&c=NPdJCYhz6AICNWdwxM05WeqBD2VKBWfy6w5Ym8xIk1c=" alt="" srcset="" />
        </div>

        <div className='p-4'>
            <h3 className='text-lg font-medium text-gray-900'>Notifier</h3>
            <p className='mt-2 text-sm text-gray-500'>Men solid pure carton straight</p>
        </div>

    </div>
  )
}

export default HomeSectionCard