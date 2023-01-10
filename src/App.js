import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Welcome from './pages/welcome/Welcome';
import SignUp from './pages/signUp/SignUp';
import LogIn from './pages/logIn/LogIn';
import ProtectedRoute from './pages/ProtectedRoute';
import Home from './pages/home/Home';
import Shows from './pages/Shows';
import ShowDetails from './pages/showDetails/ShowDetails';
import Favorites from './pages/favorites/Favorites';
import NotFound from './pages/notFound/NotFound';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/'>
      <Route index element={<Welcome />} />
      <Route path='signup' element={<SignUp />} />
      <Route path='login' element={<LogIn />} />
      <Route
        path='home'
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />
      <Route
        path='shows'
        element={
          <ProtectedRoute>
            <Shows />
          </ProtectedRoute>
        }
      />
      <Route
        path='shows/:showId'
        element={
          <ProtectedRoute>
            <ShowDetails />
          </ProtectedRoute>
        }
      />
      <Route
        path='favorites'
        element={
          <ProtectedRoute>
            <Favorites />
          </ProtectedRoute>
        }
      />
      <Route path='*' element={<NotFound />} />
    </Route>
  )
);

const App = () => (
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
);

export default App;
