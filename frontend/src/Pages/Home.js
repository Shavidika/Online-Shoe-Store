import React from 'react'
import MsgOnTop from '../Components/MsgOnTop'
import NavBar from '../Components/NavBar'
import HomeHeader from '../Components/HomeHeader'
import Brands from '../Components/Brands'
import New_arrivals from '../Components/New_arrivals'
import HomeFooter from '../Components/HomeFooter'
import Footer from '../Components/Footer'
import Top_selling from '../Components/Top_selling'

export default function Home() {
  return (
    <div>
        <MsgOnTop />
        <NavBar />
        <HomeHeader />
        <Brands/>
        <New_arrivals />
        <Top_selling />
        <HomeFooter />
        <Footer />
    </div>
  )
}
