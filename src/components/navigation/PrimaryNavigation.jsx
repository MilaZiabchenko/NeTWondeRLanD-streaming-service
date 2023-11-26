import { useNavigate, NavLink } from 'react-router-dom';
import { useAuthContext } from '../../context/AuthContext';
import './Navigation.css';

const PrimaryNavigation = () => {
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
    <nav>
      <ul className='links-list'>
        <li>
          <NavLink to='/home'>Home</NavLink>
        </li>
        <li>
          <NavLink to='/shows'>Shows</NavLink>
        </li>
        <li>
          <NavLink to='/favorites'>Favorites</NavLink>
        </li>
        <li>
          <button className='btn' onClick={handleLogout}>
            Log Out
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default PrimaryNavigation;
