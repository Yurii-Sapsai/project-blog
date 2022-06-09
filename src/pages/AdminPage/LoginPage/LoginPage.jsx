import React, { useState } from 'react'
import Form from '../../../components/Form/Form'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import { setUser } from '../../../store/slices/userSlice'


import { auth } from '../../../firebase'

import { UserAuth } from '../../../context/AuthContext'

function LoginPage() {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const {signIn} = UserAuth()

  const [errorLogin, setErrorLogin] = useState(false)

  const handleLogin = async (email, password) => {

    try{
      await signIn(email, password)
      navigate('/admin')

    } catch (error) {
        console.log(error)
    }

        
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '500px' }}>
      {errorLogin ? <div style={{ color: 'red' }}> Login or password is incorrect </div> : null}
      <Form title={'Login'} handleClick={handleLogin} />
      <div>
        If you don't have an account, create a new  <br />
        <button><NavLink to='/admin/registration'>Registration</NavLink></button>
      </div>
    </div>
  )
}

export default LoginPage