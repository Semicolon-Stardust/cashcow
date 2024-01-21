import { BrowserRouter } from "react-router-dom";
import Router from "./Components/Routers/Router";
import {UserProvider} from "./context/UserContext";

function App() {
  return (
    <>
      
      <BrowserRouter>
        <UserProvider>
          <Router />
        </UserProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
