import React from 'react'
import Navbar from '../Layout/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Layout/Footer'

const MainLayout = () => {
  return (
    <>
     <Navbar/>
   <Outlet/>
   <Footer/>
    </>
  )
}

export default MainLayout