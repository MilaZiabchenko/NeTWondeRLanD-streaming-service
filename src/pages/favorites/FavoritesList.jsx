import { memo } from 'react';
import { Link } from 'react-router-dom';
import FavoritesCard from './FavoritesCard';

const FavoritesList = memo(({ favoriteShows }) => (
  <ul className='favorite-shows-list'>
    {favoriteShows.map(show => (
      <li key={show.id}>
        <Link to={`/shows/${show.id}`}>
          <FavoritesCard show={show} />
        </Link>
      </li>
    ))}
  </ul>
));

export default FavoritesList;
