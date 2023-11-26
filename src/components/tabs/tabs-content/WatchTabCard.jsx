import { memo } from 'react';

const WatchTabCard = memo(({ source, title, text }) => (
  <article>
    <img className='watch-tab-card-image' src={source} alt='Beth' />
    <h4 className='watch-tab-card-title'>{title}</h4>
    <p className='watch-tab-card-text'>{text}</p>
  </article>
));

export default WatchTabCard;
