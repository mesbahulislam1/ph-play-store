import React from 'react'
import Hero from '../components/Hero/Hero'
import HeroImg from '../assets/img/hero.png'
import TotalInfo from '../components/Hero/TotalInfo'
import { Link, useLoaderData } from 'react-router'
import Card from '../components/Card/Card'



const HomePage = () => {

  const AppData = useLoaderData()
  
   
  return (
    <div>
      <div className='text-center bg-[#F5F5F5] space-y-7'>
      <Hero></Hero>
      <img src={HeroImg} alt="" className='mx-auto'/>
      <TotalInfo></TotalInfo>
      <div className='max-w-[1440px]  mx-auto px-5'>
        <h1 className='text-[45px] font-bold'>Trending Apps</h1>
        <p className='text-[#627382]'>Explore All Trending Apps on the Market developed by us</p>

        <div>
          
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 mt-9'>
              {
                AppData.slice(0,8).map((app, index)=>{
                  return <Card key={index} app={app}></Card>
                })
              }
            </div>

        </div>
        
      </div>
    </div>
    <div className='text-center'>
      <Link to={'/apps'} className='bg-linear-to-l  mt-8 inline-block cursor-pointer to-[#632EE3] from-[#9F62F2] text-white px-7 py-2.5 rounded-[7px] mt-8'>Show All</Link>
    </div>
    </div>
  )
}

export default HomePage
