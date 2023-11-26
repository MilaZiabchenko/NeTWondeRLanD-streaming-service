import { Link } from 'react-router-dom';
import { useAuthContext } from '../../context/AuthContext';
import './Header.css';

const Header = ({ className, children }) => {
  const { currentUser } = useAuthContext();

  return (
    <header className={className}>
      <Link to={currentUser ? '/home' : '/'} className='logo'>
        NeTWondeRLanD
      </Link>
      {children}
    </header>
  );
};

export default Header;
