import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import useLocalStorage from '../../hooks/useLocalStorage';
import useAxios from '../../hooks/useAxios';
import spinner from '../../images/spinner.gif';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import NotFound from '../../pages/notFound/NotFound';
import './ShowDetails.css';

const regularHeartIcon = 'fa-regular fa-heart fa-3x text-center';
const likedHeartIcon = 'fa-solid fa-heart fa-3x text-center';
const addText = 'Add to Favorites';
const removeText = 'Remove from Favorites';

const ShowDetails = () => {
  const { showId } = useParams();
  const {
    isLoading,
    data: show,
    error,
  } = useAxios(`https://api.tvmaze.com/shows/${showId}`);
  const [liked, setLiked] = useLocalStorage('likedShows', []);
  const [favorites, setFavorites] = useLocalStorage('favoriteShows', []);
  const [heartIcon, setHeartIcon] = useState(regularHeartIcon);
  const [btnText, setBtnText] = useState(addText);

  useEffect(() => {
    const likedShows = JSON.parse(localStorage.getItem('likedShows'));

    if (likedShows) {
      setLiked(likedShows);

      if (likedShows.includes(show.name)) {
        setHeartIcon(likedHeartIcon);
      }
    }
  }, [setLiked, show?.name]);

  useEffect(() => {
    const favoriteShows = JSON.parse(localStorage.getItem('favoriteShows'));

    if (favoriteShows) {
      setFavorites(favoriteShows);

      if (favoriteShows.includes(show?.name)) {
        setBtnText(removeText);
      }
    }
  }, [setFavorites, show?.name]);

  const handleLikes = () => {
    if (heartIcon === regularHeartIcon) {
      const updatedLiked = liked.length ? [...liked, show.name] : [show.name];

      localStorage.setItem(
        'likedShows',
        JSON.stringify([...new Set(updatedLiked)])
      );

      setLiked(updatedLiked);
      setHeartIcon(likedHeartIcon);
    }

    if (heartIcon === likedHeartIcon) {
      if (JSON.parse(localStorage.getItem('likedShows').includes(show.name))) {
        const updatedLiked = liked.filter(likedShow => likedShow !== show.name);

        localStorage.setItem('likedShows', JSON.stringify(updatedLiked));

        setLiked(updatedLiked);
      }

      setHeartIcon(regularHeartIcon);
    }
  };

  const handleFavorites = () => {
    if (btnText === addText) {
      const updatedFavorites = favorites.length
        ? [...favorites, show.name]
        : [show.name];

      localStorage.setItem(
        'favoriteShows',
        JSON.stringify([...new Set(updatedFavorites)])
      );

      setFavorites(updatedFavorites);
      setBtnText(removeText);
    }

    if (btnText === removeText) {
      if (
        JSON.parse(localStorage.getItem('favoriteShows').includes(show.name))
      ) {
        const updatedFavorites = favorites.filter(
          favShow => favShow !== show.name
        );

        localStorage.setItem('favoriteShows', JSON.stringify(updatedFavorites));

        setFavorites(updatedFavorites);
      }

      setBtnText(addText);
    }
  };

  return (
    <>
      {isLoading && <img src={spinner} className='spinner' alt='' />}
      {show?.id && (
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
                <button className='btn btn-transparent btn-center'>
                  <i className={heartIcon} onClick={handleLikes}></i>
                </button>
                <button
                  className='btn btn-lg btn-center'
                  onClick={handleFavorites}
                >
                  {btnText}
                </button>
              </div>
            </article>
          </main>
          <Footer />
        </>
      )}
      {error && <NotFound />}
    </>
  );
};

export default ShowDetails;
