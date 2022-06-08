import React from 'react'
import {useDispatch} from 'react-redux'
import { removeUser } from '../../store/slices/userSlice'


function AdminPage() {

  const dispatch = useDispatch()

  return (
    <div>
      AdminPage
        
        <button onClick={()=>dispatch(removeUser())}>Log Out</button>

        <br />
      

    </div>
  )
}

export default AdminPage