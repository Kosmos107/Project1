import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Containers/Header'
import Footer from './Containers/Footer'

const Layout = () => {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Layout