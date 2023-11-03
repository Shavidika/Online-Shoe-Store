import React from 'react'
import MsgOnTop from '../Components/MsgOnTop'
import NavBar from '../Components/NavBar'
import ProductView from '../Components/ProductView'
import Footer from '../Components/Footer'

export default function ProductViewPage() {
  return (
    <div>
        <MsgOnTop />
        <NavBar />
        <ProductView />
        <Footer />
    </div>
  )
}
