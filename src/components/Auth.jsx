import { useState } from "react";
import { auth, googleProvider } from "../firebase/config";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";


export default function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      localStorage.setItem("user", email); // Guarda el nombre de usuario en localStorage
    } catch (error) {
      console.error(error);
    }
  };

  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const userName = result.user?.displayName || "";
      localStorage.setItem("user", userName); // Guarda el nombre de usuario en localStorage
    } catch (error) {
      console.error(error);
    }
  };

  const logOut = async () => {
    try {
      await signOut(auth);

      localStorage.removeItem("user"); // Elimina el nombre de usuario de localStorage
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="auth">
      <input
        type="text"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={signIn}>Sign In</button>
      <button onClick={signInWithGoogle}>Sing In With Google</button>
      <button onClick={logOut}>Logout</button>
    </div>
  );
}
