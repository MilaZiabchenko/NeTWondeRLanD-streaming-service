import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import useLocalStorage from '../../hooks/useLocalStorage';
import useAxios from '../../hooks/useAxios';
import spinner from '../../assets/spinner.gif';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import NotFound from '../../pages/not-found/NotFound';
import './ShowDetails.css';

const DISLIKE_ICON = 'fa-regular fa-heart fa-3x text-center';
const LIKE_ICON = 'fa-solid fa-heart fa-3x text-center';
const ADD_TO_FAVORITES = 'Add to Favorites';
const REMOVE_FROM_FAVORITES = 'Remove from Favorites';

const ShowDetails = () => {
  const { showId } = useParams();
  const {
    isLoading,
    data: show,
    error
  } = useAxios(`https://api.tvmaze.com/shows/${showId}`);
  const [liked, setLiked] = useLocalStorage('likedShows', []);
  const [favorites, setFavorites] = useLocalStorage('favoriteShows', []);
  const [icon, setIcon] = useState(DISLIKE_ICON);
  const [btnText, setBtnText] = useState(ADD_TO_FAVORITES);

  useEffect(() => {
    const likedShows = JSON.parse(localStorage.getItem('likedShows'));

    if (likedShows) {
      setLiked(likedShows);

      if (likedShows.includes(show?.name)) {
        setIcon(LIKE_ICON);
      }
    }
  }, [setLiked, show?.name]);

  useEffect(() => {
    const favoriteShows = JSON.parse(localStorage.getItem('favoriteShows'));

    if (favoriteShows) {
      setFavorites(favoriteShows);

      if (favoriteShows.includes(show?.name)) {
        setBtnText(REMOVE_FROM_FAVORITES);
      }
    }
  }, [setFavorites, show?.name]);

  const handleLikes = () => {
    if (icon === DISLIKE_ICON) {
      const updatedLiked = liked.length ? [...liked, show.name] : [show.name];

      localStorage.setItem(
        'likedShows',
        JSON.stringify([...new Set(updatedLiked)])
      );

      setLiked(updatedLiked);
      setIcon(LIKE_ICON);
    }

    if (icon === LIKE_ICON) {
      if (JSON.parse(localStorage.getItem('likedShows').includes(show.name))) {
        const updatedLiked = liked.filter(likedShow => likedShow !== show.name);

        localStorage.setItem('likedShows', JSON.stringify(updatedLiked));

        setLiked(updatedLiked);
      }

      setIcon(DISLIKE_ICON);
    }
  };

  const handleFavorites = () => {
    if (btnText === ADD_TO_FAVORITES) {
      const updatedFavorites = favorites.length
        ? [...favorites, show.name]
        : [show.name];

      localStorage.setItem(
        'favoriteShows',
        JSON.stringify([...new Set(updatedFavorites)])
      );

      setFavorites(updatedFavorites);
      setBtnText(REMOVE_FROM_FAVORITES);
    }

    if (btnText === REMOVE_FROM_FAVORITES) {
      if (
        JSON.parse(localStorage.getItem('favoriteShows').includes(show.name))
      ) {
        const updatedFavorites = favorites.filter(
          favShow => favShow !== show.name
        );

        localStorage.setItem('favoriteShows', JSON.stringify(updatedFavorites));

        setFavorites(updatedFavorites);
      }

      setBtnText(ADD_TO_FAVORITES);
    }
  };

  if (isLoading) return <img src={spinner} className='spinner' alt='' />;

  if (error)
    return (
      <h3 className='text-lg'>
        <span>Oops, ${error.message} :(</span>
      </h3>
    );

  return show?.id ? (
    <>
      <Header />
      <main>
        <article className='show-details'>
          <h2>{show.name}</h2>
          <div className='card-details'>
            {show.summary && (
              <p>{show.summary.replace(/<\/?[\w\s]*>|<.+[\W]>/g, '')}</p>
            )}
            <p>
              <a href={show.url} target='_blank' rel='noreferrer'>
                <span>
                  View more info about
                  <span className='text-bold'> {show.name} </span>
                </span>
                <i className='fa-solid fa-arrow-right'></i>
              </a>
            </p>
            <button
              className='btn btn-transparent btn-center'
              onClick={handleLikes}
            >
              <i className={icon}></i>
            </button>
            <button className='btn btn-lg btn-center' onClick={handleFavorites}>
              {btnText}
            </button>
          </div>
        </article>
      </main>
      <Footer />
    </>
  ) : (
    <NotFound />
  );
};

export default ShowDetails;
