import React from 'react'
import './AdminPage.sass'

import AddPost from '../../components/AddPost/AddPost'

import { UserAuth } from '../../context/AuthContext';



function AdminPage() {

  const { user } = UserAuth()

  return (
    <div className='adminPage'>
      Welcome, {user && user.email}
      <div>
      <AddPost />
      
      </div>


    </div>
  )
}

export default AdminPage