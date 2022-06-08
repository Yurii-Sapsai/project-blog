import React from 'react'

import Form from '../../../components/Form/Form'

import { useDispatch } from 'react-redux'
import { setUser } from '../../../store/slices/userSlice'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

function RegistrationPage() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleRegister = (email, password) => {
    const auth = getAuth();

    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(setUser({
          email: user.email,
          id: user.uid,
          token: user.accessToken
        }))
        navigate('/admin')
      })
      .catch((item) => console.log(item))
  }

  return (
    <div>
   
      <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', height:'500px' }}>
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