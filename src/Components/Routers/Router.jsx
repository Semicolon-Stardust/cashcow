import React from 'react'
import Navbar from '../Navbar/Navbar'
import Home from '../Home/Home'
import FinLit from '../FinLit/FinLit'
import { Route, Routes } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Login from '../Login/Login'
import Register from '../Register/Register'

function Router() {
  return (
    <div>
        <Navbar />

        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/financialLiteracy" element={<FinLit />}/>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
        </Routes>

        <Footer />


    </div>
  )
}

export default Router