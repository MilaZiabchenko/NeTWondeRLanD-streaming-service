import { Navigate } from 'react-router-dom';
import { useAuthContext } from '../contexts/AuthContext';

const ProtectedRoute = ({ children }) => {
  const { currentUser } = useAuthContext();

  return currentUser ? children : <Navigate to='/' />;
};

export default ProtectedRoute;
