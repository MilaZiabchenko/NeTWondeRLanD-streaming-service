import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route
} from 'react-router-dom';
import {
  Welcome,
  SignUp,
  LogIn,
  Home,
  Shows,
  ShowDetails,
  Favorites,
  NotFound
} from './pages';
import ProtectedRoute from './routes/ProtectedRoute';
import { AuthProvider } from './context/AuthContext';
import './App.css';

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
