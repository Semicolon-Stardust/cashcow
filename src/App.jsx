import React from 'react'
import { BrowserRouter } from "react-router-dom";
import Router from "./Components/Routers/Router";
import {UserProvider} from "./context/UserContext";
import axios from 'axios';

// axios.defaults.withCredentials = true;
axios.defaults.baseURL = "http://localhost:4000/api/v1";

function App() {


  return (
    <>
      
      <BrowserRouter>
        <UserProvider>
          <Router/>
        </UserProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
