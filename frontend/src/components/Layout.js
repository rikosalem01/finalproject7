import React from 'react'
import Header from './Header'
import Routers from '../router/Routers'
import Footer from './Footer'

const Layout = () => {
  return (
    <div>
      <Header/>
      <Routers/>
      <Footer/>
    </div>
  )
}

export default Layout