import { Link } from 'react-router-dom';
import Tabs from '../../components/tabs/Tabs';
import Footer from '../../components/footer/Footer';
import './Welcome.css';

const Welcome = () => {
  return (
    <>
      <div className='showcase'>
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
        <div className='showcase-content'>
          <Link to='/signup' className='btn btn-xl'>
            Get Started
            <i className='fas fa-chevron-right btn-icon'></i>
          </Link>
        </div>
      </div>
      <main className='main'>
        <Tabs />
      </main>
      <Footer />
    </>
  );
};

export default Welcome;
