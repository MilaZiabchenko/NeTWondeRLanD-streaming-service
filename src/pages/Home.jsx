import { useNavigate } from 'react-router-dom';
import useTitle from '../hooks/useTitle';
import { Header, PrimaryNavigation, Tabs, Footer } from '../components';

const Home = () => {
  useTitle('Home');

  return (
    <>
      <div className='showcase-background'>
        <Header className='primary-header'>
          <PrimaryNavigation />
        </Header>
      </div>
      <main className='main-container'>
        <Tabs />
      </main>
      <Footer />
    </>
  );
};

export default Home;
