import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../context/AuthContext';
import Header from '../../components/header/Header';
import Tabs from '../../components/tabs/Tabs';
import Footer from '../../components/footer/Footer';
import './Home.css';

const Home = () => {
  const { logOut } = useAuthContext();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logOut();
      navigate('/');
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <>
      <div className='showcase'>
        <Header handleLogout={handleLogout} />
      </div>
      <main className='main'>
        <Tabs />
      </main>
      <Footer />
    </>
  );
};

export default Home;
