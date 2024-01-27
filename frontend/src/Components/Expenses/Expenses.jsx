import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/UserContext";
import LoggedInNavbar from "../Navbar/LoggedInNavbar";
import ExpenseTable from "../Table/ExpenseTable";

function Expenses() {
  const { user } = useContext(UserContext);

  const [transactions, setTransactions] = useState([]);

  return (
    <div>
      <LoggedInNavbar />
      <div className="flex justify-center items-center min-h-screen sm:flex-row flex-col">
        <ExpenseTable
          transactions={transactions}
          setTransactions={setTransactions}
          balance={user.currentBalance}
        />
      </div>
    </div>
  );
}

export default Expenses;
