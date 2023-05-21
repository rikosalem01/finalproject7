import React from 'react'
import '../styles/pages/home.css'
import Hero from '../components/Hero'
import Services from '../components/Service'
import Featured from '../components/Featured'
import Gallery from '../components/Gallery'
import Testi from '../components/Testi'

const HomePage = () => {
  return (
    <>
      <Hero />
      <Services />
      <Featured />
      <Gallery/>
      <Testi/>
    </>
  )
}

export default HomePage
