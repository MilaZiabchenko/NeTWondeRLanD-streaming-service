import { Outlet } from 'react-router-dom';
import ScrollToTop from '../components/ScrollToTop';

const RootLayout = () => (
  <ScrollToTop>
    <Outlet />
  </ScrollToTop>
);

export default RootLayout;
