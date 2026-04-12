import React from 'react'
import { useLoaderData } from 'react-router'
import Card from '../components/Card/Card'

const AppsPage = () => {
  const Apps = useLoaderData()
  
  return (

    <div className='space-y-8 mt-9 max-w-[1440px] px-5 mx-auto '>
      <div className='text-center'>
        <h2 className='text-[45px] font-bold'>Our All Applications</h2>
      <p>Explore All Apps on the Market developed by us. We code for Millions</p>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5'>
              {
                Apps.map((app, index)=>{
                  return <Card key={index} app={app}></Card>
                })
              }
            </div>
    </div>
    
  )
}

export default AppsPage
