import { createContext, useContext, useState, useEffect } from 'react';
import { auth } from '../firebase/firebaseConfig';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({});

  const signUp = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password);

  const logIn = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);

  const logOut = () => signOut(auth);

  const googleSignIn = () => {
    const googleAuthProvider = new GoogleAuthProvider();

    return signInWithPopup(auth, googleAuthProvider);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      setCurrentUser(user);
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

const useAuthContext = () => useContext(AuthContext);

export { AuthProvider, useAuthContext };
