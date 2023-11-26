import { useState, useEffect, useMemo } from 'react';
import { useTitle, useAxios, useLocalStorage } from '../../hooks';
import {
  Header,
  LoadingSpinner,
  ErrorMessage,
  PrimaryNavigation,
  Footer
} from '../../components';
import EmptyFavorites from './EmptyFavorites';
import FavoritesList from './FavoritesList';
import './Favorites.css';

const Favorites = () => {
  useTitle('Favorites');

  const {
    isLoading,
    error,
    data: allShows
  } = useAxios('https://api.tvmaze.com/shows');

  const [storedFavoriteShows, setStoredFavoriteShows] =
    useLocalStorage('favoriteShows');
  const [favoritesListIsEmpty, setFavoritesListIsEmpty] = useState(false);

  useEffect(() => {
    const favoriteShowsFromLocalStorage = JSON.parse(
      localStorage.getItem('favoriteShows')
    );

    if (favoriteShowsFromLocalStorage) {
      setStoredFavoriteShows(favoriteShowsFromLocalStorage);
      if (favoriteShowsFromLocalStorage.length === 0) {
        setFavoritesListIsEmpty(true);
      }
    }
  }, [setStoredFavoriteShows]);

  const favoriteShows = useMemo(
    () => allShows.filter(({ name }) => storedFavoriteShows.includes(name)),
    [allShows, storedFavoriteShows]
  );

  return (
    <>
      <Header className='primary-header'>
        <PrimaryNavigation />
      </Header>
      <main className='main-container'>
        <h2 className='text-xl'>Favorites</h2>
        {isLoading && <LoadingSpinner />}
        {error && <ErrorMessage error={error} />}
        {favoritesListIsEmpty && <EmptyFavorites />}
        {favoriteShows.length > 0 && (
          <FavoritesList favoriteShows={favoriteShows} />
        )}
      </main>
      <Footer />
    </>
  );
};

export default Favorites;
