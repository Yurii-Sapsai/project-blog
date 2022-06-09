import React from 'react'

import Form from '../../../components/Form/Form'

import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

import { UserAuth } from '../../../context/AuthContext'


function RegistrationPage() {
  const navigate = useNavigate()

  const { createUser } = UserAuth()

  const handleRegister = async (email, password) => {

    try {
      await createUser(email, password)
      navigate('/admin')

    } catch (error) {
      console.log(error)
    }

  }

  return (
    <div>

      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '500px' }}>
        <Form title={'Registration'} handleClick={handleRegister} />
        <div>
          If you have an account, please login  <br />
          <button><NavLink to='/admin/login'>Login</NavLink></button>
        </div>
      </div>
    </div>
  )
}

export default RegistrationPage