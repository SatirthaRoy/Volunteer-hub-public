import React from 'react'

const Gallery = () => {
  return (
    <div className='w-[95%] mx-auto space-y-14'>
      <h1 className='text-4xl md:text-7xl font-semibold text-center dark:text-white'>Gallery</h1>
      <p className='text-center font-normal dark:text-white text-xl'>Some moments captured that been made possible through our platform.</p>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        <img src="https://www.wastatepta.org/wp-content/uploads/2016/11/Senior-volunteer-helping-African-American-man-register-for-marathon-000065245281_Medium.jpg" alt="" className='rounded-2xl h-full object-cover lg:col-span-2'/>
        <img src="https://kindful.com/wp-content/uploads/volunteer-management_Feature.jpg" alt="" className='rounded-2xl h-full object-cover'/>
        <img src="https://www.stollerykids.com/content/uploads/2022/07/CubCinema_volunteers.jpg" alt="" className='lg:row-span-2 rounded-2xl h-full object-cover'/>
        <img src="https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/health/wp-content/uploads/2022/09/older_adults_volunteer.jpg" alt="" className='rounded-2xl h-full object-cover'/>
        <img src="https://images.ctfassets.net/pdf29us7flmy/STWIeKU4PudCChhz55jsd/ae29a51cb79d38d829bb6fced9017c22/resized.jpeg?w=720&q=100&fm=jpg" alt="" className='rounded-2xl h-full object-cover'/>
        <img src="https://bloomerang.co/wp-content/uploads/2023/03/how-to-start-a-volunteer-program-feature.jpg.webp" alt="" className='lg:col-span-2 rounded-2xl h-full object-cover'/>
        
        

      </div>
    </div>
  )
}

export default Gallery