import { memo } from 'react';

const FavoritesCard = memo(({ show }) => (
  <div className='favorite-show-card'>
    <div className='favorite-show-image'>
      <img src={show.image.original} alt='Show' />
    </div>
    <h3>{show.name}</h3>
  </div>
));

export default FavoritesCard;
