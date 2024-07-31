import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import {Outlet} from 'react-router-dom'
import ContactUs from './components/ContactUs/ContactUs'

function Layout() {
  return (
    <>
        {/* <Header/>
        <Outlet/>
        <Home/>
        <ContactUs/>
        <Footer/>
       */}
     
     <Header/>
    <Outlet />
  
    <Footer />
        
    </>
  )
}

export default Layout