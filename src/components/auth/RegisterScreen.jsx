import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import validator from 'validator';

import { useForm } from '../../hooks/useForm';
import { removeError, setError } from '../../actions/ui';
import { startRegisterWithEmailPasswordName } from '../../actions/auth';


export const RegisterScreen = () => {

  const dispatch = useDispatch();
  const { msgError, loading } = useSelector(state => state.ui);

  const [ formValues, handleInputChange ] = useForm({
    name: 'Diego Dom',
    email: 'dab@gmail.com',
    password: 'aaabbb',
    password2: 'aaabbb'
  });

  const { name, email, password, password2 } = formValues;

  const handleLogin = (e) => {
    
    e.preventDefault();

    if (!isFormValid()) {
      return;
    }

    dispatch(startRegisterWithEmailPasswordName(email,password,name));
  };

  const isFormValid = () => {

    if (name.trim().length === 0) {
      dispatch(setError('Name is required'));
      return false;
    } else if (!validator.isEmail(email)) {
      dispatch(setError('Email is not valid'));
      return false;
    } else if (password2 !== password || password.length < 5) {
      dispatch(setError('Password should be at least 6 charactes and match with confirmation'));
      return false;
    }
    dispatch(removeError());
    return true;
  };

  return (
    <>
      <h3 className='auth__title'>Register</h3>
      <form onSubmit={handleLogin}>

        { msgError && <div className="auth__alert__error">{msgError}</div> }

        <input className='auth__input' type="text" placeholder='Name' name='name' autoComplete='off' value={ name } onChange={ handleInputChange }/>
        <input className='auth__input' type="text" placeholder='Email' name='email' autoComplete='off' value={ email } onChange={ handleInputChange }/>
        <input className='auth__input' type="password" placeholder='Password' name='password' value={ password } onChange={ handleInputChange }/>
        <input className='auth__input' type="password" placeholder='Confirm password' name='password2' value={ password2 } onChange={ handleInputChange }/>
        <button type='submit' className='btn btn__primary btn__block mb-5' disabled={ loading }>Register</button>
        <Link className='link' to='/auth/login'>Already have an account? Login</Link>
      </form>
    </>
  );
};
