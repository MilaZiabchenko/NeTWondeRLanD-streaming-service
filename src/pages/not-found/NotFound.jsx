import { useNavigate } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className='background-image'>
      <div className='container'>
        <div className='not-found'>
          <h1 className='text-xxl text-center'>Not Found</h1>
          <h2 className='text-lg'>
            <span> Sorry, we couldn't find that page</span>
          </h2>
          <button
            className='btn btn-center btn-md'
            onClick={() => navigate(-1)}
          >
            <i className='fas fa-chevron-left'></i>
            Go back
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
