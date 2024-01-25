import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'

function Sidebar() {
    const [sidebarWidth, setSidebarWidth] = useState('w-[20vw]')

    function toggleSidebar() {
        if (sidebarWidth === 'w-[20vw]') {
            setSidebarWidth('w-[5vw]')
        }
        else {
            setSidebarWidth('w-[20vw]')
        }
    }

    return (
        <aside className={`relative h-screen flex flex-col border-[1px] mt-[4rem] bg-[dark purple] duration-[200ms] ${sidebarWidth}`}>
            <button className='absolute top-[3rem] right-[-1rem] btn rounded-full bg-[white] text-[black] btn-outline items-center' onClick={toggleSidebar}>
                &lt;
            </button>
            {sidebarWidth === 'w-[20vw]' ?

                <div className='flex flex-col text-lg py-[1rem] px-[2rem] justify-center'>
                    <NavLink to="/FinancialLiteracy/Budgeting">
                        <h3>1. Budgeting</h3>
                    </NavLink>
                    <NavLink to="/FinancialLiteracy/Savings">
                        <h3>2. Savings</h3>
                    </NavLink>
                    <NavLink to="/FinancialLiteracy/Quiz1">
                        <h3>3. Quiz 1</h3>
                    </NavLink>
                </div>
            : null}
        </aside>
    )
}

export default Sidebar