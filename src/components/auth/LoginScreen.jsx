import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { useForm } from '../../hooks/useForm'
import { startLoginEmailPassword, startGoogleLogin } from '../../actions/auth'
import { removeError, setError } from '../../actions/ui'

export const LoginScreen = () => {

  const dispatch = useDispatch();
  const { msgError, loading } = useSelector(state => state.ui);

  const [ formValues, handleInputChange ] = useForm({
    email: 'dab@gmail.com',
    password: 'aaabbb'
  });

  const { email, password } = formValues;

  const handleLogin = (e) => {
    
    e.preventDefault();

    if (!isFormValid()) {
      return;
    }

    dispatch(startLoginEmailPassword(email, password));
  };

  const handleGoogleLogin = () => {
    dispatch(startGoogleLogin());
  };

  const isFormValid = () => {
    if (email.trim().length === 0) {
      dispatch(setError('Email is required'));
      return false;
    } else if (password.trim().length === 0) {
      dispatch(setError('Password is required'));
      return false;
    }
    dispatch(removeError());
    return true;
  };

  return (
    <div className='animate__animated animate__fadeIn animate__slow'>
      <h3 className='auth__title'>Login</h3>
      <form onSubmit={handleLogin}>
      { msgError && <div className="auth__alert__error">{msgError}</div> }
        <input className='auth__input' type="email" placeholder='Email' name='email' autoComplete='off' value={email} onChange={ handleInputChange }/>
        <input className='auth__input' type="password" placeholder='Password' name='password' value={password} onChange={ handleInputChange } />
        <button type='submit' className='btn btn__primary btn__block' disabled={ loading }>Login</button>
        <div className='auth__social__networks'>
          <p>Login with social networks</p>
          <div className="google-btn" onClick={ handleGoogleLogin }>
            <div className="google-icon-wrapper">
                <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
            </div>
            <p className="btn-text">
                <b>Sign in with google</b>
            </p>
          </div>
        </div>
        <Link className='link' to='/auth/register'>Create new account</Link>
      </form>
    </div>
  )
}
