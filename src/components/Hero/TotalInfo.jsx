import React from 'react'

const TotalInfo = () => {
  return (
    <div className='bg-linear-to-l py-[70px] to-[#632EE3] from-[#9F62F2] text-white'>
        <h2 className='font-bold text-[30px] sm:text-[35px] md:text-[45px]'>Trusted by Millions, Built for You</h2>
        <div className='flex justify-around flex-wrap mt-9 gap-3 max-w-[1440px]  mx-auto'>
            <div>
                <h3>Total Downloads</h3>
                <h1 className='text-[30px] sm:text-[35px] md:text-[55px] font-bold'>29.6M</h1>
                <p>21% more than last month</p>
            </div>
            <div>
                <h3>Total Reviews</h3>
                <h1 className='text-[30px] sm:text-[35px] md:text-[55px] font-bold'>906K</h1>
                <p>46% more than last month</p>
            </div>
            <div>
                <h3>Active Apps</h3>
                <h1 className='text-[30px] sm:text-[35px] md:text-[55px] font-bold'>132+</h1>
                <p>31 more will Launch</p>
            </div>
        </div>
    </div>
  )
}

export default TotalInfo