import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  useMemo
} from 'react';
import { auth } from '../firebase/firebaseConfig';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup
} from 'firebase/auth';

const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});

  const currentUser = useMemo(() => user, [user]);

  const signUp = useCallback(
    (email, password) => createUserWithEmailAndPassword(auth, email, password),
    []
  );

  const logIn = useCallback(
    (email, password) => signInWithEmailAndPassword(auth, email, password),
    []
  );

  const logOut = useCallback(() => signOut(auth), []);

  const googleSignIn = useCallback(() => {
    const googleAuthProvider = new GoogleAuthProvider();

    return signInWithPopup(auth, googleAuthProvider);
  }, []);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider
      value={{ currentUser, signUp, logIn, logOut, googleSignIn }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuthContext = () => {
  const context = useContext(AuthContext);

  if (context === null) {
    throw new Error('AuthContext has to be used within AuthProvider');
  }

  return context;
};

export { AuthProvider, useAuthContext };
