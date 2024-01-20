import React, { useState, useEffect } from 'react'

import Sidebar from './Sidebar'
import Budgeting from './Budgeting'

function FinLit() {
  return (
    <div className='min-h-screen flex'>
      <Sidebar/>
      <Budgeting/>
    </div>
  )
}

export default FinLit