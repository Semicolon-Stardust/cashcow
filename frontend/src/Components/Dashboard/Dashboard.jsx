import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import LoggedInNavbar from "../Navbar/LoggedInNavbar";

const Dashboard = () => {
  const { user } = useContext(UserContext);
  // const navigate = useNavigate();
  // useEffect(() => {
  //   if (user === null) {
  //     navigate("/login");
  //   }
  // }, []);

  const [me, setMe] = useState("");

  return (
    <>
      <LoggedInNavbar />
      {/* { user !== null ? 
        <div className='mt-[5em]'>Dashboard, Hi {user.name} {user.age}
        <span>
            {me}
        </span>
            <button className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-100 text-blue-800 hover:bg-blue-200 disabled:opacity-50 disabled:pointer-events-none dark:hover:bg-blue-900 dark:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" onClick={ async () => {
                const {data} = await axios.get('/me');
                console.log(data)
            }}>get</button>
        </div> :
        null} */}

      <div className="w-full pt-10 px-4 sm:px-6 md:px-8 lg:ps-72"></div>
    </>
  );
};

export default Dashboard;
