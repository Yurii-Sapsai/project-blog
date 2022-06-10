import React from 'react'

import AddPost from '../../components/AddPost/AddPost'

import { UserAuth } from '../../context/AuthContext';



function AdminPage() {

  const { user } = UserAuth()

  return (
    <div>
    
      <AddPost />
      email {user && user.email}


    </div>
  )
}

export default AdminPage