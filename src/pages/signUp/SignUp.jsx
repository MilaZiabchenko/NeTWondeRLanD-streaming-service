import { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../contexts/AuthContext';
import Footer from '../../components/footer/Footer';
import './SignUp.css';

const SignUp = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState('');
  const { signUp, googleSignIn } = useAuthContext();
  const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      await signUp(emailRef.current.value, passwordRef.current.value);
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
    <>
      <header className='showcase-top'>
        <Link to='/' className='logo'>
          NeTWondeRLanD
        </Link>
        <nav className='links'>
          <Link to='/login' className='btn btn-rounded'>
            Log In
          </Link>
        </nav>
      </header>
      <main>
        <div className='modal'>
          <div className='modal-content'>
            <section className='sign-in'>
              <h2 className='text-xl'>
                <span>Sign Up</span>
              </h2>
              {error && (
                <p>
                  <span>{error}</span>
                </p>
              )}
              <form onSubmit={handleSubmit}>
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
                  Sign Up
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
              <p>
                Already have an account?
                <Link to='/login'>
                  <strong className='text-black'> Log in.</strong>
                </Link>
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default SignUp;
