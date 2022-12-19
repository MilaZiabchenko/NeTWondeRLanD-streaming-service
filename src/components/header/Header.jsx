import { Link, NavLink } from 'react-router-dom';
import './Header.css';

const Header = ({ handleLogout }) => (
  <header className='showcase-top'>
    <Link to='/home' className='logo'>
      NeTWondeRLanD
    </Link>
    <nav>
      <ul className='links-list'>
        <li>
          <NavLink to='/home'>Home</NavLink>
        </li>
        <li>
          <NavLink to='/shows'>Shows</NavLink>
        </li>
        <li>
          {' '}
          <NavLink to='/favorites'>Favorites</NavLink>
        </li>
        <li>
          <Link to='/' className='btn btn-rounded' onClick={handleLogout}>
            Log Out
          </Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
