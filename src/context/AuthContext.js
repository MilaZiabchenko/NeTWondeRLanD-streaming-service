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
  const [currentUser, setCurrentUser] = useState({});

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

  const contextValue = useMemo(
    () => ({ currentUser, signUp, logIn, logOut, googleSignIn }),
    [currentUser, signUp, logIn, logOut, googleSignIn]
  );

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      setCurrentUser(user);
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

const useAuthContext = () => {
  const context =  useContext(AuthContext);

  if (context === null) {
    throw new Error('AuthContext has to be used within AuthProvider')
  }

  return context;
}

export { AuthProvider, useAuthContext };
