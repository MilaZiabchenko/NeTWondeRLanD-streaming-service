import { memo } from 'react';
import { Link } from 'react-router-dom';
import ShowsCard from './ShowsCard';

const ShowsList = memo(({ shows }) => (
  <ul className='shows-grid'>
    {shows.map(show => (
      <li key={show.id}>
        <Link to={`/shows/${show.id}`}>
          <ShowsCard show={show} />
        </Link>
      </li>
    ))}
  </ul>
));

export default ShowsList;
