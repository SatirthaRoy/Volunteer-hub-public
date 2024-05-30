import React from 'react'

const Stat = () => {
  return (
    <div className='dark:text-white flex justify-center flex-col space-y-16'>
      <h1 className='text-center font-semibold text-4xl md:text-7xl'>Stats</h1>
      <div className="stats stats-vertical lg:stats-horizontal shadow mx-auto w-[95%] dark:bg-black dark:text-black">
  
        <div className="stat place-items-center dark:text-white">
          <div className="stat-title dark:text-white">Posts</div>
          <div className="stat-value">31K</div>
          <div className="stat-desc dark:text-white">From January 1st to February 1st</div>
        </div>
        
        <div className="stat place-items-center">
          <div className="stat-title dark:text-white">Users</div>
          <div className="stat-value text-primary">4,200</div>
          <div className="stat-desc text-primary">↗︎ 40 (2%)</div>
        </div>
        
        <div className="stat place-items-center dark:text-white">
          <div className="stat-title dark:text-white">New Registers</div>
          <div className="stat-value">1,200</div>
          <div className="stat-desc dark:text-white">↘︎ 90 (14%)</div>
        </div>
        
      </div>
    </div>
  )
}

export default Stat