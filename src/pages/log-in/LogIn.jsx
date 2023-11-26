import { Link } from 'react-router-dom';
import { useTitle } from '../../hooks';
import { Header, Footer } from '../../components';
import LogInForm from './LogInForm';

const LogIn = () => {
  useTitle('Log In');

  return (
    <>
      <div className='modal-background'>
        <Header />
        <main>
          <section className='modal-content-center'>
            <h2 className='text-lg text-bold'>
              <span>Log In</span>
            </h2>
            <LogInForm />
            <p>
              New to NeTWondeRLanD?
              <Link to='/signup'>
                <strong> Sign up now.</strong>
              </Link>
            </p>
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default LogIn;
