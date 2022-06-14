import React from 'react';
import './RegistrationPage.sass';
import Form from '../../../components/Form/Form';

import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import { UserAuth } from '../../../context/AuthContext';


function RegistrationPage() {
  const navigate = useNavigate();

  const { createUser } = UserAuth();

  const handleRegister = async (email, password) => {
    try {
      await createUser(email, password);
      navigate('/admin');

    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className='registrationPage'>

      <Form title={'Sign Up'} button={'Registration'} handleClick={handleRegister} />
      <div className='info'>
        If you have an account, <br />
        please login
        <button><NavLink to='/admin/login' style={{ color: 'white', textDecoration: 'none' }}>Sign In</NavLink></button>
      </div>

    </div>
  )
}

export default RegistrationPage;