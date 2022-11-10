import React from 'react';
import spinner from '../../images/spinner.gif';
import { Link } from 'react-router-dom';
import ShowsGridItem from './showsGridItem/ShowsGridItem';
import './ShowsGrid.css';

const ShowsGrid = ({ shows, isLoading }) =>
  isLoading ? (
    <img src={spinner} className='spinner' alt='' />
  ) : (
    <section className='cards'>
      {shows.map(show => (
        <Link to={`/shows/${show.id}`} key={show.id}>
          <ShowsGridItem show={show} />
        </Link>
      ))}
    </section>
  );

export default React.memo(ShowsGrid);
