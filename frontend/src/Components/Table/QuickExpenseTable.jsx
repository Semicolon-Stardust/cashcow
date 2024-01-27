import { useState, useEffect, useContext } from "react";
import TransactionInputModal from "../Modals/TransactionInputModal";
import { UserContext } from "../../context/UserContext";
import axios from "axios";
import toast from "react-hot-toast";

function QuickExpenseTable({ transactions, setTransactions, balance}) {

  const { user, setUser } = useContext(UserContext);
  
  const [input, setInput] = useState({
    name: "",
    amount: "",
    createdAt: "",
  });

  const [paymentMethod, setPaymentMethod] = useState("UPI");
  const [transactionType, setTransactionType] = useState("Credit");

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
    const amount = transactionType === "Credit" ? input.amount : -input.amount;

    const { data } = await axios.post("/transaction/new", {
      name: input.name,
      amount: amount,
      createdAt: input.createdAt,
      paymentMethod,
    });

    if (data.success === true) {
      setTransactions([data.transaction, ...transactions]);
      setUser(data.user);
      toast.success("Transaction Added Successfully")
    }
    else {
      toast.error(data.message);
    }

  } catch (err) {
    toast.error(err.response.data.message)
  }

 
  }

  useEffect(() => {
    const fetchData = async () => {
      let { data } = await axios.get("/transaction/transactions/");
      setTransactions(data.transaction);
    };
    fetchData();
  }, [])

  const deleteTransaction = async (id) => {
    try {
      const { data } = await axios.delete(`/transaction/${id}`);
      if (data.success === true) {
        toast.success("Transaction Deleted Successfully");
        setTransactions(transactions.filter((transaction) => transaction._id !== id));
        setUser(data.user);
      }
      else {
        toast.error(data.message);
      }
    } catch (err) {
      toast.error(err.response.data.message);
    }
  }


  return (
    <div>
      <div className="flex flex-col">
        <div className="-m-1.5 overflow-x-auto">
          <div className="p-1.5 min-w-full inline-block align-middle">
            <div className="my-4 flex justify-between items-center">
              <h1 className="text-2xl text-gray-800 dark:text-gray-200">
                Total Balance: <span className="text-red-500">₹ {balance}</span>
              </h1>
              <button className="flex items-center justify-center py-3 px-4 gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" data-hs-overlay="#transactions">
                Add Transaction
                <svg
                  className="w-5 h-5 ms-1 inline-block"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                    <path
                        fillRule="evenodd"
                        d="M12 2a1 1 0 0 1 1 1v8h8a1 1 0 1 1 0 2h-8v8a1 1 0 1 1-2 0v-8H3a1 1 0 1 1 0-2h8V3a1 1 0 0 1 1-1z"
                        clipRule="evenodd"
                    />
                </svg>

              </button>
            </div>
            <div className="border overflow-hidden dark:border-gray-700">
              { transactions.length === 0 ? null : 
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                    >
                      Transaction Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                    >
                      Transaction Amount
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                    >
                      Transaction Date
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase"
                    >
                      Payment Method
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase"
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  {transactions.slice(0, 3).map((transaction, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="text-sm font-medium text-gray-500">
                            {transaction.name}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500">
                          {transaction.amount}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500">
                          {`${new Date(transaction.createdAt).getDate()} ${new Date(transaction.createdAt).toLocaleString('default', { month: 'short' })} ${new Date(transaction.createdAt).getFullYear()}`}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {transaction.paymentMethod}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <button onClick={() => {deleteTransaction(transaction._id)}} className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-red-500 hover:bg-red-100 hover:text-red-800 disabled:opacity-50 disabled:pointer-events-none dark:hover:bg-red-800/30 dark:hover:text-red-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">Delete</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
        }
            </div>
          </div>
        </div>
      </div>
      <TransactionInputModal input={input} setInput={setInput} paymentMethod={paymentMethod} setPaymentMethod={setPaymentMethod} transactionType={transactionType} setTransactionType={setTransactionType} submitHandler={submitHandler} />
    </div>
  );
}

export default QuickExpenseTable;
