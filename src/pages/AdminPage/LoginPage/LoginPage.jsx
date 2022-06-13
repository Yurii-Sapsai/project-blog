import React, { useState } from 'react'
import './LoginPage.sass'
import Form from '../../../components/Form/Form'

import { useNavigate } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

import { UserAuth } from '../../../context/AuthContext'

function LoginPage() {

  const navigate = useNavigate()
  const { signIn } = UserAuth()

  const [errorLogin, setErrorLogin] = useState(false)

  const handleLogin = async (email, password) => {

    try {
      await signIn(email, password)
      navigate('/admin')
    } catch (error) {
      setErrorLogin(true)
    }
  }

  return (
    <div className='loginPage'>

      <div>
        <Form title={'Sign In'} button={'Login'} errorLogin={errorLogin} handleClick={handleLogin} />
      </div>
      <div className='info'>
        If you don't have an account, create a new
        <button><NavLink to='/admin/registration' style={{ color: 'white', textDecoration: 'none' }}>Sign Up</NavLink></button>
      </div>

    </div>
  )
}

export default LoginPage