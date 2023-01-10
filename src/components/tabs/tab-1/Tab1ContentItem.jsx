import './Tab1ContentItem.css';

const Tab1ContentItem = ({ source, title, text }) => (
  <article>
    <img className='tab-1-image' src={source} alt='' />
    <p className='text-md'>{title}</p>
    <p className='text-dark'>{text}</p>
  </article>
);

export default Tab1ContentItem;
