import React from 'react'
import Navbar from '../Components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Components/Footer'

export default function MainHome() {
  return (
    <div>
        <Navbar></Navbar>
       <div className='container mx-auto'>
       <Outlet></Outlet>
       </div>
        <Footer></Footer>
    </div>
  )
}
