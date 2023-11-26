import { Link } from 'react-router-dom';
import { EmptyList } from '../../components';

const EmptyFavorites = () => (
  <EmptyList text='No shows added to your favorites... Yet!'>
    <p className='text-md'>
      Add shows you like to the favorites, — and you'll see them here :)
    </p>
    <Link to='/shows' className='btn btn-md'>
      <i className='fas fa-chevron-left'></i>
      Go to shows
    </Link>
  </EmptyList>
);

export default EmptyFavorites;
