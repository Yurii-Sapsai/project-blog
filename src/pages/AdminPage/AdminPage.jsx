import React, { useState, useEffect } from 'react'

import AddPost from '../../components/AddPost/AddPost'

import { useDispatch } from 'react-redux'
import { removeUser } from '../../store/slices/userSlice';

import { UserAuth } from '../../context/AuthContext';

import { useNavigate } from 'react-router-dom';


function AdminPage() {

  const { user, logout } = UserAuth()
  const navigate = useNavigate()

  const dispatch = useDispatch()

  const handlerLogout = async () => {
    try {
      await logout()
      navigate('/admin/login')

    } catch (error) {
      console.log(error)
    }
  }



  return (
    <div>
      
      <button onClick={() => handlerLogout()}>Log Out</button>
      <br />

      <AddPost />
      email {user && user.email}


    </div>
  )
}

export default AdminPage