import { useRouteError, Link } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';
import { useTitle } from '../hooks';
import { Footer } from '../components';

const Error = () => {
  useTitle('Error');

  const { currentUser } = useAuthContext();

  const error = useRouteError();

  console.error(error.message);

  return (
    <>
      <div className='modal-background'>
        <section className='modal-content-top'>
          <h2 className='text-xxl text-center'>Oops, error!</h2>
          <h3 className='text-lg'>
            <span>Something went wrong :(</span>
          </h3>
          <Link
            to={currentUser ? '/home' : '/'}
            className='btn btn-center btn-md'
          >
            <i className='fas fa-chevron-left'></i> Back to homepage
          </Link>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Error;
