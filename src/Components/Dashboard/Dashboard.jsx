import React, {useContext, useEffect, useState} from 'react'
import { UserContext } from '../../context/UserContext'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

const Dashboard = () => {

    const {user} = useContext(UserContext);
    const navigate = useNavigate();
    useEffect( () => {
        if (user === null){
            navigate('/login')
        }
    }, [])

    const [me, setMe] = useState("");

  return (
    <>
        { user !== null ? 
        <div className='mt-[5em]'>Dashboard, Hi {user.name} {user.age} yos 
        <span>
            {me}
        </span>
            <button onClick={ async () => {
                const {data} = await axios.get('/me');
                console.log(data)
            }}>get</button>
        </div> :
        null}
    </>
  )
}

export default Dashboard