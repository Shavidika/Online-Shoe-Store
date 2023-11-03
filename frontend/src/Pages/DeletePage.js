import React from 'react'
import MsgOnTop from '../Components/MsgOnTop'
import NavBar from '../Components/NavBar'
import DeleteItem from '../Components/DeleteItem'
import Footer from '../Components/Footer'

export default function DeletePage() {
  return (
    <div>
        <MsgOnTop />
        <NavBar />
        <DeleteItem />
        <Footer />
    </div>
  )
}
