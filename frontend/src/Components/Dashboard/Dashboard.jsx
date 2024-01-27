import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
import ExpenditureChart from "./ExpenditureChart";
import axios from "axios";
import LoggedInNavbar from "../Navbar/LoggedInNavbar";
import DashboardNavbar from "../Navbar/DashboardNavbar";
import QuickExpenseTable from "../Table/QuickExpenseTable";
import QuickFamilyTable from "../Table/QuickFamilyTable";

const Dashboard = () => {
  const { user } = useContext(UserContext);

  const [transactions, setTransactions] = useState([]);

  return (
    <div>
      <LoggedInNavbar />
      <DashboardNavbar />
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
      <div className="flex justify-center items-center min-h-screen sm:flex-row flex-col">
        <div className="pt-10 px-4 sm:px-6 md:px-8 lg:ps-72 w-[50%] text-gray-800 dark:text-gray-200">
          <ExpenditureChart transaction={transactions} />
        </div>
        <div className="border-t sm:border-t-0 sm:border-s border-gray-200 dark:border-gray-700"></div>
        <div className="flex flex-col justify-center items-center gap-10">
          <div className="flex flex-col gap-5 justify-center items-center">
            <QuickExpenseTable transactions={transactions} setTransactions={setTransactions} balance={user.currentBalance} />
          </div>
          <div className="flex flex-col gap-5 justify-center items-center">
            <QuickFamilyTable />
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Dashboard;
