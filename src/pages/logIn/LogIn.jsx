import { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../contexts/AuthContext';
import Footer from '../../components/footer/Footer';
import './LogIn.css';

const LogIn = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { logIn, googleSignIn } = useAuthContext();
  const [error, setError] = useState('');
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
    <>
      <header className='showcase-top'>
        <Link to='/' className='logo'>
          NeTWondeRLanD
        </Link>
      </header>
      <main>
        <div className='modal'>
          <div className='modal-content'>
            <section className='sign-in'>
              <h2 className='text-xl'>
                <span>Log In</span>
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
              <p>
                New to NeTWondeRLanD?
                <Link to='/signup'>
                  <strong className='text-black'> Sign up now.</strong>
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

export default LogIn;
