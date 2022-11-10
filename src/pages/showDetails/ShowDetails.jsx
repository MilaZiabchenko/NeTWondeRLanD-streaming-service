import { useParams } from 'react-router-dom';
import { useState, useEffect, useCallback } from 'react';
import useLocalStorage from '../../hooks/useLocalStorage';
import useAxios from '../../hooks/useAxios';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import './ShowDetails.css';

const regularHeartIcon = 'fa-regular fa-heart fa-3x text-center';
const likedHeartIcon = 'fa-solid fa-heart fa-3x text-center';
const addText = 'Add to Favorites';
const removeText = 'Remove from Favorites';

const ShowsItemDetails = () => {
  const { showId } = useParams();
  const { data: show } = useAxios(`https://api.tvmaze.com/shows/${showId}`);
  const [liked, setLiked] = useLocalStorage('likedShows', []);
  const [favorites, setFavorites] = useLocalStorage('favoriteShows', []);
  const [heartIcon, setIcon] = useState(regularHeartIcon);
  const [btnText, setBtnText] = useState(addText);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('likedShows'));

    if (data) {
      setLiked(data);

      if (data.includes(show?.name)) {
        setIcon(likedHeartIcon);
      }
    }
  }, [setLiked, show?.name]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('favoriteShows'));

    if (data) {
      setFavorites(data);

      if (data.includes(show?.name)) {
        setBtnText(removeText);
      }
    }
  }, [setFavorites, show?.name]);

  const handleLikes = useCallback(() => {
    if (heartIcon === regularHeartIcon) {
      const newLiked = liked.length ? [...liked, show.name] : [show.name];

      localStorage.setItem(
        'likedShows',
        JSON.stringify([...new Set(newLiked)])
      );

      setIcon(likedHeartIcon);
    }

    if (heartIcon === likedHeartIcon) {
      if (JSON.parse(localStorage.getItem('likedShows').includes(show.name))) {
        const newLiked = liked.filter(likedShow => likedShow !== show.name);

        localStorage.setItem('likedShows', JSON.stringify(newLiked));
      }

      setIcon(regularHeartIcon);
    }
  }, [heartIcon, liked, show?.name]);

  const handleFavorites = useCallback(() => {
    if (btnText === addText) {
      const newFavorites = favorites.length
        ? [...favorites, show.name]
        : [show.name];

      localStorage.setItem(
        'favoriteShows',
        JSON.stringify([...new Set(newFavorites)])
      );

      setBtnText(removeText);
    }

    if (btnText === removeText) {
      if (
        JSON.parse(localStorage.getItem('favoriteShows').includes(show.name))
      ) {
        const newFavorites = favorites.filter(favShow => favShow !== show.name);

        localStorage.setItem('favoriteShows', JSON.stringify(newFavorites));
      }

      setBtnText(addText);
    }
  }, [btnText, favorites, show?.name]);

  return (
    <>
      <Header />
      <main>
        <article className='show-details'>
          <h2>{show?.name}</h2>
          <div className='card-details'>
            {show?.summary && (
              <p>{show.summary.replace(/<\/?[\w\s]*>|<.+[\W]>/g, '')}</p>
            )}
            <p>
              <a href={show?.url} target='_blank' rel='noreferrer'>
                <span>
                  View more info about
                  <span className='text-bold'> {show?.name} </span>
                </span>
                <i className='fa-solid fa-arrow-right'></i>
              </a>
            </p>
            <p>
              <i className={heartIcon} onClick={handleLikes}></i>
            </p>
            <button className='btn btn-lg btn-center' onClick={handleFavorites}>
              {btnText}
            </button>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
};

export default ShowsItemDetails;
