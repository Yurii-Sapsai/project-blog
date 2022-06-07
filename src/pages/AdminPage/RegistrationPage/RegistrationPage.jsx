import React from 'react'
import Header from '../../../components/Header/Header'
import Form from '../../../components/Form/Form'

import { useDispatch } from 'react-redux'
import { setUser } from '../../../store/slices/userSlice'

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
      <Header />
      <div style={{display:'flex', justifyContent:'center', alignItems:'center', height:'500px' }}>
          <Form title={'Registration'} handleClick={handleRegister} />
      </div>
    </div>
  )
}

export default RegistrationPage