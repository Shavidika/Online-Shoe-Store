import React from 'react'
import MsgOnTop from '../Components/MsgOnTop'
import NavBar from '../Components/NavBar'
import AllProducts from '../Components/AllProducts'
import Footer from '../Components/Footer'

export default function AllProductsPage() {
  return (
    <div>
        <MsgOnTop />
        <NavBar />  
        <AllProducts />
        <Footer />
    </div>
  )
}
