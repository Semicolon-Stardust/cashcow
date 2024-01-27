import { useState } from "react";

function TransactionInputModal(props) {

  

  const handleChange = (e) => {
    props.setInput({...props.input, [e.target.name]: e.target.value});
  };

  
  
  return (
    <div>
      <div
        id="transactions"
        className="hs-overlay hidden w-full h-full fixed top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto pointer-events-none "
      >
        <div className="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-4xl sm:w-full m-3 sm:mx-auto h-[calc(100%-3.5rem)]">
          <div className="max-h-full overflow-hidden flex flex-col bg-white border shadow-sm rounded-xl pointer-events-auto dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
            <div className="flex justify-between items-center py-3 px-4 border-b dark:border-gray-700">
              <h3 className="font-bold text-gray-800 dark:text-gray-200">
                Add Transaction
              </h3>
              <button
                type="button"
                className="flex justify-center items-center w-7 h-7 text-sm font-semibold rounded-lg border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:border-transparent dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                data-hs-overlay="#transactions"
              >
                <span className="sr-only">Close</span>
                <svg
                  className="flex-shrink-0 w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </button>
            </div>

            <form onSubmit={props.submitHandler}>
              <div className="mb-[9rem]">
                <div className="px-4 py-3">
                  <div className="relative">
                    <label
                      htmlFor="input-label"
                      className="block text-sm font-medium mb-2 dark:text-white"
                    >
                      Transaction Name
                    </label>
                    <input
                      value={props.name}
                      name="name"
                      type="text"
                      className="peer py-3 px-4 block w-full bg-gray-100 border-transparent rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-700 dark:border-transparent dark:text-gray-400 dark:focus:ring-gray-600"
                      placeholder="Type here..."
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="px-4 py-3">
                  <div className="relative">
                    <label
                      htmlFor="input-label"
                      className="block text-sm font-medium mb-2 dark:text-white"
                    >
                      Transaction Amount
                    </label>
                    <input
                      value={props.amount}
                      name="amount"
                      type="text"
                      className="peer py-3 px-4 block w-full bg-gray-100 border-transparent rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-700 dark:border-transparent dark:text-gray-400 dark:focus:ring-gray-600"
                      placeholder="Type here..."
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="px-4 py-3">
                  <div className="relative">
                    <label
                      htmlFor="input-label"
                      className="block text-sm font-medium mb-2 dark:text-white"
                    >
                      Transaction Date
                    </label>
                    <input
                      value={props.createdAt}
                      name="createdAt"
                      type="date"
                      className="peer py-3 px-4 block w-full bg-gray-100 border-transparent rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-700 dark:border-transparent dark:text-gray-400 dark:focus:ring-gray-600"
                      placeholder="DD/MM/YYYY"
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="px-4 py-3">
                  <div className="relative">
                    <label
                      htmlFor="input-label"
                      className="block text-sm font-medium mb-2 dark:text-white"
                    >
                      Payment Method
                    </label>
                    <div className="relative">
                      <div className="flex gap-x-6">
                        <div className="flex">
                          <input
                            type="radio"
                            className="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                            id="hs-radio-group-1"
                            name="paymentMethod"
                            value="UPI"
                            checked={props.paymentMethod === "UPI"}
                            onChange={(e) => {
                              props.setPaymentMethod(e.target.value)
                            }}
                          />
                          <label
                            htmlFor="hs-radio-group-1"
                            className="text-sm text-gray-500 ms-2 dark:text-gray-400"
                          >
                            UPI
                          </label>
                        </div>

                        <div className="flex">
                          <input
                            type="radio"
                            name="paymentMethod"
                            className="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                            id="hs-radio-group-2"
                            value="NetBanking"
                            checked={props.paymentMethod === "NetBanking"}
                            onChange={(e) => {
                              props.setPaymentMethod(e.target.value)
                            }}
                          />
                          <label
                            for="hs-radio-group-2"
                            className="text-sm text-gray-500 ms-2 dark:text-gray-400"
                          >
                            NetBanking
                          </label>
                        </div>

                        <div className="flex">
                          <input
                            type="radio"
                            name="paymentMethod"
                            className="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                            id="hs-radio-group-3"
                            value="Cash"
                            checked={props.paymentMethod === "Cash"}
                            onChange={(e) => {
                              props.setPaymentMethod(e.target.value)
                            }}
                          />
                          <label
                            for="hs-radio-group-3"
                            className="text-sm text-gray-500 ms-2 dark:text-gray-400"
                          >
                            Cash
                          </label>
                        </div>
                        
                        <div className="flex">
                          <input
                            type="radio"
                            name="paymentMethod"
                            className="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                            id="hs-radio-group-3"
                            value="Credit Card"
                            checked={props.paymentMethod === "Credit Card"}
                            onChange={(e) => {
                              props.setPaymentMethod(e.target.value)
                            }}
                          />
                          <label
                            for="hs-radio-group-3"
                            className="text-sm text-gray-500 ms-2 dark:text-gray-400"
                          >
                            Credit Card
                          </label>
                        </div>
                        
                        <div className="flex">
                          <input
                            type="radio"
                            name="paymentMethod"
                            className="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                            id="hs-radio-group-3"
                            value="Debit Card"
                            checked={props.paymentMethod === "Debit Card"}
                            onChange={(e) => {
                              props.setPaymentMethod(e.target.value)
                            }}
                          />
                          <label
                            for="hs-radio-group-3"
                            className="text-sm text-gray-500 ms-2 dark:text-gray-400"
                          >
                            Debit Card
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="px-4 py-3">
                  <div className="relative">
                    <label
                      htmlFor="input-label"
                      className="block text-sm font-medium mb-2 dark:text-white"
                    >
                      Transaction Type
                    </label>
                    <div className="relative">
                    <div className="flex">
                          <input
                            type="radio"
                            name="transactionType"
                            className="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                            id="hs-radio-group-"
                            value="Credit"
                            checked={props.transactionType === "Credit"}
                            onChange={(e) => {
                              props.setTransactionType(e.target.value)
                            }}
                          />
                          <label
                            for="hs-radio-group-"
                            className="text-sm text-gray-500 ms-2 dark:text-gray-400"
                          >
                            Credit
                          </label>
                        </div>
                        
                        <div className="flex">
                          <input
                            type="radio"
                            name="transactionType"
                            className="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                            id="hs-radio-group-"
                            value="Debit"
                            checked={props.transactionType === "Debit"}
                            onChange={(e) => {
                              props.setTransactionType(e.target.value)
                            }}
                          />
                          <label
                            for="hs-radio-group-"
                            className="text-sm text-gray-500 ms-2 dark:text-gray-400"
                          >
                            Debit
                          </label>
                        </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-end items-center gap-x-2 py-3 px-4 border-t dark:border-gray-700">
                <button type="submit" className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                  Add Transaction
                  <svg
                    className="flex-shrink-0 w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
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
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TransactionInputModal;
