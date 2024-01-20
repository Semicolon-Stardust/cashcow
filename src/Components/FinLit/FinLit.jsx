import React, { useState, useEffect } from 'react'

import Sidebar from './Sidebar'
import Budgeting from './Budgeting'
import { useParams } from 'react-router-dom'

function FinLit() {
	const {pageID} = useParams()

	return (
		<div className='min-h-screen flex'>
			<Sidebar/>
			<Pages pageID = {pageID}/>
		</div>
	)
}

function Pages({pageID}) 
{
	if (pageID === 'budgeting') 
	{
		return (
			<div>
				<Budgeting/>
			</div>
		)
	}
}

export default FinLit