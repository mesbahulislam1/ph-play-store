import React from 'react'
import Logo from '../../assets/img/logo.png'
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa'

const FooterPage = () => {
  return (
    <div className='bg-[#001931] py-10 mt-10 '>
      <div className='max-w-[1440px]  mx-auto text-white px-5'>
        <div className='border-b border-white/20 flex justify-between items-center'>
          <div className='flex items-center gap-2'>
          <img src={Logo} alt="" className='w-[40px]'/>
          <h3 className='font-extrabold'>HERO.IO</h3>
        </div>
        <div className=''>
          <h3 className='text-[20px]'>Social Links</h3>
          <div className='flex items-center text-2xl gap-2'>
            <a href=""><FaTwitter></FaTwitter></a>
            <a href=""><FaLinkedin></FaLinkedin></a>
            <a href=""><FaFacebook></FaFacebook></a>
          </div>
        </div>
        </div>
        <p className='mt-7 text-center'>Copyright © 2025 - All right reserved</p>
      </div>
    </div>
  )
}

export default FooterPage