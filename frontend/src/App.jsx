import React from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "./Components/Routers/Router";
import { UserProvider } from "./context/UserContext";
import {Toaster} from 'react-hot-toast';
import axios from "axios";

axios.defaults.withCredentials = true;
axios.defaults.baseURL = "http://localhost:4000/api/v1";

function App() {


  return (
    <>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
      <div className="dark:bg-gray-800">
        <BrowserRouter>
            <Router />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
