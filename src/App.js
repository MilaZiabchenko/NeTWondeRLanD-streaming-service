import { BrowserRouter, Routes, Route } from 'react-router-dom';
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

const App = () => (
  <>
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Welcome />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/login' element={<LogIn />} />
          <Route
            path='/home'
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path='/shows'
            element={
              <ProtectedRoute>
                <Shows />
              </ProtectedRoute>
            }
          />
          <Route
            path='/shows/:showId'
            element={
              <ProtectedRoute>
                <ShowDetails />
              </ProtectedRoute>
            }
          />
          <Route
            path='/favorites'
            element={
              <ProtectedRoute>
                <Favorites />
              </ProtectedRoute>
            }
          />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </>
);

export default App;
