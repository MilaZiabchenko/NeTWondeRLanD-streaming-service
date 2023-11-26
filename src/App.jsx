import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route
} from 'react-router-dom';
import {
  Error,
  NeTWondeRLanD,
  SignUp,
  LogIn,
  Home,
  Shows,
  ShowDetails,
  Favorites,
  NotFound
} from './pages';
import RootLayout from './layout/RootLayout';
import ProtectedRoutes from './routes/ProtectedRoutes';
import { AuthProvider } from './context/AuthContext';
import './App.css';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />} errorElement={<Error />}>
      <Route index element={<NeTWondeRLanD />} />
      <Route path='signup' element={<SignUp />} />
      <Route path='login' element={<LogIn />} />
      <Route element={<ProtectedRoutes />}>
        <Route path='home' element={<Home />} />
        <Route path='shows' element={<Shows />} />
        <Route path='shows/:showId' element={<ShowDetails />} />
        <Route path='favorites' element={<Favorites />} />
      </Route>
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
