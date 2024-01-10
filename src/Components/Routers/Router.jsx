import React from 'react'
import Navbar from '../Navbar/Navbar'
import Home from '../Home/Home'
import { Route, Routes } from 'react-router-dom'
import Footer from '../Footer/Footer'

function Router() {
  return (
    <div>
        <Navbar />

        <Routes>
            <Route path="/" element={<Home/>} />
        </Routes>

        <Footer />


    </div>
  )
}

export default Router