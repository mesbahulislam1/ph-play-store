import React from 'react'
import { Link, NavLink } from 'react-router'
import Logo from '../../assets/img/logo.png'
import { IoLogoGithub } from "react-icons/io";




const Navbar = () => {

  const NavLinks = [
    {
      path: '/',
      name: 'Home',
    },
    {
      path: '/apps',
      name: 'Apps',
    },
    {
      path: '/installation',
      name: 'Installation',
    }
  ]
  return (
    <div className='shadow-sm'>
      <div className="navbar bg-base-100 max-w-[1440px]  mx-auto ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-white rounded-box z-1 mt-3 w-52 p-2 shadow w-[200px] space-y-3 fixed bottom-0 top-15">
        {
          NavLinks.map((link,index)=>{
            return <NavLink key={index} to={link.path} className={({isActive})=> `${isActive ? 'bg-linear-to-l to-[#632EE3] from-[#9F62F2] underline text-transparent bg-clip-text underline-offset-5':''} text-[16px] font-medium`}>{link.name}</NavLink>
          })
        }
      </ul>
    </div>
    <Link to={'/'} className="bg-linear-to-l to-[#632EE3] from-[#9F62F2] font-bold text-transparent bg-clip-text flex items-center gap-1 cursor-pointer"><img src={Logo} alt="" className='w-[40px]'/>HERO.IO</Link>

  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal gap-3 px-1">
      {
        NavLinks.map((link, index)=>{
          return <NavLink key={index} to={link.path} className={({isActive})=> `${isActive ? 'bg-linear-to-l to-[#632EE3] from-[#9F62F2] underline text-transparent bg-clip-text underline-offset-5':''} text-[16px] font-medium`}>{link.name}</NavLink>
        })
      }
    </ul>
  </div>
  <div className="navbar-end">
    <button className='btn bg-linear-to-l to-[#632EE3] from-[#9F62F2] text-white font-medium'><IoLogoGithub className=' text-2xl'/> Contribute</button>
  </div>
</div>
    </div>
    
  )
}

export default Navbar
