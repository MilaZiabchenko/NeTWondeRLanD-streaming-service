import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../context/AuthContext';

const LogInForm = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState('');

  const { logIn, googleSignIn } = useAuthContext();

  const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      await logIn(emailRef.current.value, passwordRef.current.value);
      navigate('/home');
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleSignIn = async e => {
    e.preventDefault();

    try {
      await googleSignIn();
      navigate('/home');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && (
        <p>
          <span>{error}</span>
        </p>
      )}
      <input
        type='email'
        ref={emailRef}
        placeholder='Email'
        autoComplete='off'
        required
      />
      <input
        type='password'
        ref={passwordRef}
        placeholder='Password'
        autoComplete='off'
        required
      />
      <button type='submit' className='btn btn-submit'>
        Log In
      </button>
      <p className='text-center'>or</p>
      <button
        type='submit'
        className='btn btn-submit'
        onClick={handleGoogleSignIn}
      >
        <i className='fa-brands fa-google'> </i> Sign In With Google
      </button>
    </form>
  );
};

export default LogInForm;
