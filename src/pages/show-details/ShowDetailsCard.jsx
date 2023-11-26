import removeTags from '../../utils/removeTags';

const ShowDetailsCard = ({
  show,
  icon,
  btnText,
  handleLikedShows,
  handleFavoriteShows
}) => (
  <div className='show-details-card'>
    <p>{removeTags(show.summary)}</p>
    <p>
      <a href={show.url} target='_blank' rel='noreferrer'>
        <span>
          Learn more about <span className='text-bold'>{show.name}</span>
        </span>
        <i className='fa-solid fa-arrow-right'></i>
      </a>
    </p>
    <button
      className='btn btn-transparent btn-center'
      onClick={handleLikedShows}
    >
      <i className={icon}></i>
    </button>
    <button className='btn btn-lg btn-center' onClick={handleFavoriteShows}>
      {btnText}
    </button>
  </div>
);

export default ShowDetailsCard;
