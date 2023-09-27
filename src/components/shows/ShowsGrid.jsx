import { memo } from 'react';
import './ShowsGrid.css';

const ShowsGrid = ({ children }) => (
  <section className='cards'>{children}</section>
);

export default memo(ShowsGrid);
