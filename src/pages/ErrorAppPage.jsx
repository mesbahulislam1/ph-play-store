import React from 'react'
import ErrorAppImag from '../assets/img/App-Error.png'
import { Link } from 'react-router'
const ErrorAppPage = () => {
  return (
    <div className='flex justify-center h-screen items-center'>
        <div className='max-w-[1440px]   mx-auto text-center'>
            <img src={ErrorAppImag} alt="" className='mx-auto' />
            <h1 className='text-[40px] font-bold'>OPPS!! APP NOT FOUND</h1>
            <p className='text-[#627382]'>The App you are requesting is not found on our system.  please try another apps</p>

            <Link to={'/'} className='bg-linear-to-l to-[#632EE3] from-[#9F62F2] btn text-white mt-4'>Go Back!</Link>
        </div>
    </div>
  )
}

export default ErrorAppPage