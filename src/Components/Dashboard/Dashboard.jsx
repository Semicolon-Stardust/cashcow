import React, {useContext} from 'react'
import { UserContext } from '../../context/UserContext'

const Dashboard = () => {

    const {user} = useContext(UserContext);

  return (
    <div className='mt-[5em]'>Dashboard, Hi {user.name} {user.age} </div>
  )
}

export default Dashboard