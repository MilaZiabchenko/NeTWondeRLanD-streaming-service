import { Link } from 'react-router-dom';
import './Header.css';

const Header = ({ handleLogout }) => (
  <header className='showcase-top'>
    <Link to='/home' className='logo'>
      NeTWondeRLanD
    </Link>
    <nav className='links'>
      <Link to='/home'>Home</Link>
      <Link to='/shows'>Shows</Link>
      <Link to='/favorites'>Favorites</Link>
      <Link to='/' className='btn btn-rounded' onClick={handleLogout}>
        Log Out
      </Link>
    </nav>
  </header>
);

export default Header;
