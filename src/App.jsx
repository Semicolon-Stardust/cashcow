import React from 'react'
import { BrowserRouter } from "react-router-dom";
import Router from "./Components/Routers/Router";
import {UserProvider} from "./context/UserContext";

function App() {

    const baseUrl = "http://localhost:4000/api/v1";

  return (
    <>
      
      <BrowserRouter>
        <UserProvider baseUrl = {baseUrl}>
          <Router baseUrl = {baseUrl} />
        </UserProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
