import React from 'react'
import {useDispatch} from 'react-redux'
import { removeUser } from '../../store/slices/userSlice'

import AddPost from '../../components/AddPost/AddPost'


function AdminPage() {

  const dispatch = useDispatch()

  return (
    <div>
        
        <button onClick={()=>dispatch(removeUser())}>Log Out</button>

        <br />

        <AddPost/>
      

    </div>
  )
}

export default AdminPage