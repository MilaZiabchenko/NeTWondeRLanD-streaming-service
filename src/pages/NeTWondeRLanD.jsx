import { Link } from 'react-router-dom';
import { Header, Tabs, Footer } from '../components';

const NeTWondeRLanD = () => (
  <>
    <div className='showcase-background'>
      <Header>
        <Link to='/login' className='btn'>
          Log In
        </Link>
      </Header>
      <div className='showcase-content'>
        <Link to='/signup' className='btn btn-xl'>
          Get Started
          <i className='fas fa-chevron-right btn-icon'></i>
        </Link>
      </div>
    </div>
    <main className='main-container'>
      <Tabs />
    </main>
    <Footer />
  </>
);

export default NeTWondeRLanD;
