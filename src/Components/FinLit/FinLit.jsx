import React, { useState, useEffect } from 'react'

import Sidebar from './Sidebar'
import Budgeting from './Budgeting'
import Savings from './Savings'
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
	if (pageID === 'Budgeting') 
	{
		return (
			<div>
				<Budgeting/>
			</div>
		)
	}

	else if (pageID === 'Savings') 
	{
		return (
			<div>
				<Savings/>
			</div>
		)
	}

	else
	{
		return (
			<div>
				<Budgeting/>
			</div>
		)
	}
}

export default FinLit