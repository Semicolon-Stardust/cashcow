import React, {useEffect, useContext} from 'react'
import Navbar from '../Navbar/Navbar'
import Home from '../Home/Home'
import { Route, Routes } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Login from '../Login/Login'
import Register from '../Register/Register'
import Dashboard from '../Dashboard/Dashboard'
import { UserContext } from '../../context/UserContext'
import axios from 'axios';

function Router() {

  const {user, setUser} = useContext(UserContext);

  
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register />} />
            { user != null ? <Route path="/dashboard" element={<Dashboard />} /> : <Route path="/dashboard" element={<Login />} /> }
            {/* <Route path="/dashboard" element={<Dashboard />} /> */}
        </Routes>

    </div>
  )
}

export default Router