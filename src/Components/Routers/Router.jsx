import React from 'react'
import Navbar from '../Navbar/Navbar'
import Home from '../Home/Home'
import { Route, Routes } from 'react-router-dom'

function Router() {
  return (
    <div>
        <Navbar />

        <Routes>
            <Route path="/" element={<Home/>} />
        </Routes>



    </div>
  )
}

export default Router