import { Link } from 'react-router-dom';
import { useTitle } from '../../hooks';
import { Header, Footer } from '../../components';
import SignUpForm from './SignUpForm';

const SignUp = () => {
  useTitle('Sign Up');

  return (
    <>
      <div className='modal-background'>
        <Header>
          <Link to='/login' className='btn'>
            Log In
          </Link>
        </Header>
        <main>
          <section className='modal-content-center'>
            <h2 className='text-lg text-bold'>
              <span>Sign Up</span>
            </h2>
            <SignUpForm />
            <p>
              Already have an account?
              <Link to='/login'>
                <strong> Log in.</strong>
              </Link>
            </p>
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default SignUp;
