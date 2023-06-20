import { Link } from "react-router-dom";
import {} from "react";
import { auth, googleProvider } from "../firebase/config";
import { signInWithPopup, signOut } from "firebase/auth";
import { useState, useEffect } from "react";


export default function SignInSignUp() {
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
      localStorage.setItem("user", userName); // Guarda el nombre de usuario en localStorage
    } catch (error) {
      console.error(error);
    }
  };

  const logOut = async () => {
    try {
      await signOut(auth);
      setUserName("");
      setIsLoggedIn(false);
      localStorage.removeItem("user"); // Elimina el nombre de usuario de localStorage
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="sign-in-sign-up container">
      <h1 className="sign-in-sign-up__title">
        || Inicie sesión o Cree una cuenta
      </h1>

      <div className="sign-in-sign-up__content">
        <div className="sign-in-sign-up__sign-in">
          <h2 className="sign-in-sign-up__sign-in-title">Usuario existente</h2>
          <form action="" className="sign-in-sign-up__sign-in-form">
            <div className="sign-in-sign-up__sign-in-form-group">
              <label className="sign-in-sign-up__sign-in-label" htmlFor="email">
                Correo electrónico
              </label>
              <input
                type="email"
                placeholder="Correo"
                className="sign-in-sign-up__sign-in-input"
              />
            </div>
            <div className="sign-in-sign-up__sign-in-form-group">
              <label
                htmlFor="password"
                className="sign-in-sign-up__sign-in-label"
              >
                Contraseña
              </label>
              <input
                type="password"
                placeholder="Contraseña"
                className="sign-in-sign-up__sign-in-input"
              />
            </div>
            <div className="sign-in-sign-up__remember-data">
              <input type="checkbox" name="data" id="" />
              <label htmlFor="">Recordar mis datos</label>
            </div>
            <a className="sign-in-sign-up__forgot-password" href="">
              Olvidé mi contraseña
            </a>
            <Link to={"/planes"} className="sign-in-sign-up__sign-in-button">
              Iniciar sesión
            </Link>
            <button
              type="button"
              onClick={signInWithGoogle}
              className="sign-in-sign-up__sign-in-button"
            >
              Iniciar sesión con Google
            </button>
            <p>
              {isLoggedIn
                ? `Estado: Logeado - Usuario: ${userName}`
                : "Estado: No Logeado"}
            </p>
            <button
              type="button"
              onClick={logOut}
              className="sign-in-sign-up__sign-in-button"
            >
              Cerrar sesión
            </button>
          </form>
        </div>
        {/* Registrarse */}
        <div className="sign-in-sign-up__sign-up">
          <h2 className="sign-in-sign-up__sign-in-title">Usuario nuevo</h2>
          <div className="sign-in-sign-up__sign-up-container">
            <h3>
              Al registrarse obtiene acceso a 1 curso sobre ecommerce gratuito.
            </h3>
            <Link to="/registro" className="sign-in-sign-up__sign-in-button">
              Registrarse
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
