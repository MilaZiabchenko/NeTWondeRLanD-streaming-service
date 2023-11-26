import { memo } from 'react';
import mapArrayToList from '../../utils/mapArrayToList';

const ShowsCard = memo(({ show }) => (
  <article className='show-card'>
    <div className='show-card-content'>
      <div className='show-card-front'>
        <img src={show.image.original} alt='Show' />
      </div>
      <div className='show-card-back'>
        <h1>{show.name}</h1>
        <ul>
          <li>
            <strong>Language:</strong> {show.language}
          </li>
          {show.genres && (
            <li>
              <strong>Genres:</strong> {mapArrayToList(show.genres)}
            </li>
          )}
          <li>
            <strong>Premiered:</strong> {show.premiered}
          </li>
          {show.ended && (
            <li>
              <strong>Ended:</strong> {show.ended}
            </li>
          )}
          {show.rating.average && (
            <li>
              <strong>Rating:</strong> {show.rating.average}
            </li>
          )}
        </ul>
      </div>
    </div>
  </article>
));

export default ShowsCard;
