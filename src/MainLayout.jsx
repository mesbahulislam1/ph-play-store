import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Outlet } from 'react-router'
import FooterPage from './components/Footer/Footer'

const MainLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <FooterPage></FooterPage>
    </div>
  )
}

export default MainLayout
