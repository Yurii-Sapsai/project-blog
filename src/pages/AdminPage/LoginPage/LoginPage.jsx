import React, {useState} from 'react'
import Form from '../../../components/Form/Form'
import {useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import { setUser } from '../../../store/slices/userSlice'

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

function LoginPage() {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [errorLogin, setErrorLogin] = useState(false)

  const handleLogin = (email, password) => {
          const auth = getAuth()
          signInWithEmailAndPassword(auth, email, password)
              .then(({user})=> {
                  dispatch(setUser({
                      email: user.email,
                      id: user.uid,
                      token: user.accessToken
                  }))
                  navigate('/admin')
              })
              .catch(() => {
                setErrorLogin(true)
              });
  }

  return(
      <div style={{display:'flex', flexDirection:'column' ,justifyContent:'center', alignItems:'center', height:'500px' }}>
          {errorLogin ? <div style={{color:'red'}}> Login or password is incorrect </div> : null }
          <Form title={'Login'} handleClick={handleLogin}/>
          <div>
            If you don't have an account, create a new  <br />
            <button><NavLink to='/admin/registration'>Registration</NavLink></button>
          </div>
      </div>
  )
}

export default LoginPage