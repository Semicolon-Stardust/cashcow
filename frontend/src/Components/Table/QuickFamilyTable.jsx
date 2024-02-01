import React, { useState } from 'react'
import FamilyInputModal from '../Modals/FamilyInputModal'

function QuickFamilyTable() {

    const [familyData, setFamilyData] = useState([]);

  return (
    <div>

<div className="flex flex-col">
        <div className="-m-1.5 overflow-x-auto">
          <div className="p-1.5 min-w-full inline-block align-middle">
            <div className="my-4 flex justify-between items-center">
              <h1 className="text-2xl text-gray-800 dark:text-gray-200">
                Total Balance: <span className="text-red-500">₹ 0.00</span>
              </h1>
              <button className="flex items-center justify-center py-3 px-4 gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" data-hs-overlay="#family">
                Add Family
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
              {familyData.length > 0 ? 
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                    >
                      Family Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                    >
                      Family Amount
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                    >
                      Date
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase"
                    >
                      Payment Method
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  {familyData.map((family) => (
                    <tr key={family.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="text-sm font-medium text-gray-500">
                            {family.name}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500">
                          {family.amount}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500">
                          {family.date}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {family.paymentMethod}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              : null }
            </div>
          </div>
        </div>
        <FamilyInputModal />
      </div>
        
    </div>
  )
}

export default QuickFamilyTable