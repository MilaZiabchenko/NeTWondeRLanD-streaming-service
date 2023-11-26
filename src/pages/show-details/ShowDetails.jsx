import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAxios, useTitle, useLocalStorage } from '../../hooks';
import {
  LIKE_ICON,
  UNLIKE_ICON,
  ADD_TO_FAVORITES,
  REMOVE_FROM_FAVORITES
} from './constants';
import {
  Header,
  LoadingSpinner,
  ErrorMessage,
  PrimaryNavigation,
  SecondaryNavigation,
  Footer
} from '../../components';
import ShowDetailsCard from './ShowDetailsCard';
import './ShowDetails.css';

const ShowDetails = () => {
  const { showId } = useParams();

  const {
    isLoading,
    error,
    data: show
  } = useAxios(`https://api.tvmaze.com/shows/${showId}`);

  const SHOW_TITLE = show?.name;

  useTitle(SHOW_TITLE);

  const [likedShows, setLikedShows] = useLocalStorage('likedShows');
  const [icon, setIcon] = useState(UNLIKE_ICON);

  const [favoriteShows, setFavoriteShows] = useLocalStorage('favoriteShows');
  const [btnText, setBtnText] = useState(ADD_TO_FAVORITES);

  useEffect(() => {
    const storedLikedShows = JSON.parse(localStorage.getItem('likedShows'));

    if (storedLikedShows) {
      setLikedShows(storedLikedShows);
      if (storedLikedShows.includes(SHOW_TITLE)) {
        setIcon(LIKE_ICON);
      }
    }
  }, [setLikedShows, SHOW_TITLE]);

  useEffect(() => {
    const storedFavoriteShows = JSON.parse(
      localStorage.getItem('favoriteShows')
    );

    if (storedFavoriteShows) {
      setFavoriteShows(storedFavoriteShows);
      if (storedFavoriteShows.includes(SHOW_TITLE)) {
        setBtnText(REMOVE_FROM_FAVORITES);
      }
    }
  }, [setFavoriteShows, SHOW_TITLE]);

  const handleLikedShows = () => {
    if (icon === UNLIKE_ICON) {
      const updatedLikedShows =
        likedShows.length > 0 ? [...likedShows, SHOW_TITLE] : [SHOW_TITLE];

      localStorage.setItem('likedShows', JSON.stringify(updatedLikedShows));

      setLikedShows(updatedLikedShows);
      setIcon(LIKE_ICON);
    }

    if (icon === LIKE_ICON) {
      const updatedLikedShows = likedShows.filter(
        likedShow => likedShow !== SHOW_TITLE
      );

      localStorage.setItem('likedShows', JSON.stringify(updatedLikedShows));

      setLikedShows(updatedLikedShows);
      setIcon(UNLIKE_ICON);
    }
  };

  const handleFavoriteShows = () => {
    if (btnText === ADD_TO_FAVORITES) {
      const updatedFavoriteShows =
        favoriteShows.length > 0
          ? [...favoriteShows, SHOW_TITLE]
          : [SHOW_TITLE];

      localStorage.setItem(
        'favoriteShows',
        JSON.stringify(updatedFavoriteShows)
      );

      setFavoriteShows(updatedFavoriteShows);
      setBtnText(REMOVE_FROM_FAVORITES);
    }

    if (btnText === REMOVE_FROM_FAVORITES) {
      const updatedFavoriteShows = favoriteShows.filter(
        favShow => favShow !== SHOW_TITLE
      );

      localStorage.setItem(
        'favoriteShows',
        JSON.stringify(updatedFavoriteShows)
      );

      setFavoriteShows(updatedFavoriteShows);
      setBtnText(ADD_TO_FAVORITES);
    }
  };

  return (
    <>
      <Header className='primary-header'>
        <PrimaryNavigation />
      </Header>
      <main className='main-container'>
        {isLoading && <LoadingSpinner />}
        {error && <ErrorMessage error={error} />}
        {show?.id && (
          <section>
            <article className='show-details'>
              <h2 className='text-lg'>{SHOW_TITLE}</h2>
              <ShowDetailsCard
                show={show}
                icon={icon}
                btnText={btnText}
                handleLikedShows={handleLikedShows}
                handleFavoriteShows={handleFavoriteShows}
              />
            </article>
            <nav className='show-details-secondary-navigation'>
              <SecondaryNavigation
                leftLink='shows'
                leftTitle='Back to Shows'
                rightLink='favorites'
                rightTitle='Go to Favorites'
              />
            </nav>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
};

export default ShowDetails;
