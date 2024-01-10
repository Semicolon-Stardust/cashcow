import React from 'react'
import Navbar from '../Navbar/Navbar'
import Home from '../Home/Home'
import FinLit from '../FinLit/FinLit'
import { Route, Routes } from 'react-router-dom'
import Footer from '../Footer/Footer'

function Router() {
  return (
    <div>
        <Navbar />

        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/financialLiteracy" element={<FinLit />}/>
        </Routes>

        <Footer />


    </div>
  )
}

export default Router