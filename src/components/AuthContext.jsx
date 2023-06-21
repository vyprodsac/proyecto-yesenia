import { createContext, useState, useEffect } from "react";
import { auth, googleProvider } from "../firebase/config";
import { signInWithPopup, signOut } from "firebase/auth";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userName, setUserName] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setUserName(user);
      setIsLoggedIn(true);
    }
  }, []);

  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const userName = result.user?.displayName || "";
      setUserName(userName);
      setIsLoggedIn(true);
      localStorage.setItem("user", userName);
    } catch (error) {
      console.error(error);
    }
  };

  const logOut = async () => {
    try {
      await signOut(auth);
      setUserName("");
      setIsLoggedIn(false);
      localStorage.removeItem("user");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <AuthContext.Provider
      value={{ userName, isLoggedIn, signInWithGoogle, logOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};
