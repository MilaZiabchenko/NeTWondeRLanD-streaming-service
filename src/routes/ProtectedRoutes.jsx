import { Outlet, Navigate } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';

const ProtectedRoutes = () => {
  const { currentUser } = useAuthContext();

  return currentUser ? <Outlet /> : <Navigate to='/' />;
};

export default ProtectedRoutes;
