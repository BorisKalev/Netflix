import { createContext, useContext, useEffect, useState } from "react";
import { auth, db } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";

const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null);

  async function signUp(email, password) {
    return createUserWithEmailAndPassword(auth, email, password).then(() => {
      setUser(null); // So that the user doesn't have access to restricted areas after signup
      return setDoc(doc(db, "users", email), {
        savedShows: [],
      });
    });
  }

  async function logIn(email, password) {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    setUser(userCredential.user); // Set the user state after login
  }

  async function logOut() {
    await signOut(auth);
    setUser(null); // Ensure user is null after logout
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("Auth state changed, currentUser:", currentUser);
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ signUp, logIn, logOut, user }}>
      {children}
    </AuthContext.Provider>
  );
}

export function UserAuth() {
  return useContext(AuthContext);
}
