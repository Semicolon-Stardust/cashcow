import React, { useState, useEffect } from 'react'

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
        <aside className={`relative h-screen border-[1px] mt-[4rem] bg-[dark purple] duration-[200ms] ${sidebarWidth}`}>
            <button className='absolute top-[3rem] right-[-1rem] btn rounded-full bg-[white] text-[black] btn-outline items-center' onClick={toggleSidebar}>
                &lt;
            </button>
        </aside>
    )
}

export default Sidebar