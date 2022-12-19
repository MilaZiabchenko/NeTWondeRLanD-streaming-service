import { memo } from 'react';
import { Link } from 'react-router-dom';
import ShowsGridItem from './showsGridItem/ShowsGridItem';
import './ShowsGrid.css';

const ShowsGrid = ({ shows }) => (
  <section className='cards'>
    {shows.map(show => (
      <Link to={`/shows/${show.id}`} key={show.id}>
        <ShowsGridItem show={show} />
      </Link>
    ))}
  </section>
);

export default memo(ShowsGrid);
