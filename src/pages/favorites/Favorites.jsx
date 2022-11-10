import useLocalStorage from '../../hooks/useLocalStorage';
import useAxios from '../../hooks/useAxios';
import { useEffect } from 'react';
import spinner from '../../images/spinner.gif';
import { Link } from 'react-router-dom';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import './Favorites.css';

const Favorites = () => {
  const [favorites, setFavorites] = useLocalStorage('favoriteShows', []);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('favoriteShows'));

    if (data) {
      setFavorites(data);
    }
  }, [setFavorites]);

  const {
    isLoading,
    data: allShows,
    error,
  } = useAxios('https://api.tvmaze.com/shows');

  const favoriteShows = allShows.filter(show => favorites.includes(show.name));

  return (
    <>
      <Header />
      <main className='main'>
        <h2 className='text-lg'>Favorites</h2>
        {isLoading && <img src={spinner} className='spinner' alt='' />}
        {error && (
          <h3 className='text-lg'>
            <span>{error} :(</span>
          </h3>
        )}
        {favoriteShows.length > 0 && (
          <ul>
            {favoriteShows.map(fav => (
              <Link to={`/shows/${fav.id}`} key={fav.id}>
                <li className='favorite'>
                  <div className='image'>
                    <img src={fav.image.original} alt='Show' />
                  </div>
                  <h3>{fav.name}</h3>
                </li>
              </Link>
            ))}
          </ul>
        )}
        {!isLoading && favoriteShows.length === 0 && (
          <>
            <h3 className='text-lg'>
              <span>No shows yet...</span>
            </h3>
            <h4 className='text-center'>
              <span>Add shows you like to your favorites!</span>
            </h4>
          </>
        )}
      </main>
      <Footer />
    </>
  );
};

export default Favorites;
