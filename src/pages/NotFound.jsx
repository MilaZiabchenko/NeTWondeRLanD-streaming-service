import { useNavigate } from 'react-router-dom';
import { useTitle } from '../hooks';
import { Footer } from '../components';

const NotFound = () => {
  useTitle('404: Not Found');

  const navigate = useNavigate();

  return (
    <>
      <div className='modal-background'>
        <section className='modal-content-top'>
          <h2 className='text-xxl text-center'>Not Found</h2>
          <h3 className='text-lg'>
            <span>Sorry, we couldn't find that page</span>
          </h3>
          <button
            className='btn btn-center btn-md'
            onClick={() => navigate(-1)}
          >
            <i className='fas fa-chevron-left'></i>
            Go back
          </button>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default NotFound;
