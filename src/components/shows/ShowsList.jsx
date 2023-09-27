import { Link } from 'react-router-dom';
import ShowsListItem from './ShowsListItem';

const ShowsList = ({ shows }) => (
  <>
    {shows.map(show => (
      <Link to={`/shows/${show.id}`} key={show.id}>
        <ShowsListItem show={show} />
      </Link>
    ))}
  </>
);

export default ShowsList;
