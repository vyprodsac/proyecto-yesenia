import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import vevigLogo from "../assets/images/logoCalidadAlta.png";
import { useContext } from "react";
import { AuthContext } from "./AuthContext";

export default function Header() {
  const { isLoggedIn, userName, logOut, signInWithGoogle } =
    useContext(AuthContext);

  const handleLogout = () => {
    // Lógica para cerrar sesión
    logOut();
  };

  const [navigationVisible, setNavigationVisible] = useState(false);
  const handleNavigationVisible = () =>
    setNavigationVisible(!navigationVisible);

  useEffect(() => {
    const isScrolling = () => {
      const header = document.querySelector(".header");
      const windowPosition = window.scrollY > 10;
      if (header != null) {
        header.classList.toggle("header--sticky", windowPosition);
      }
    };
    isScrolling();
    window.addEventListener("scroll", isScrolling);
    return () => {
      window.removeEventListener("scroll", isScrolling);
    };
  }, []);

  return (
    <header className="header">
      <div className="header__container header__container--mobile container">
        <div className="header__brand">
          <Link to="/">
            <img
              className="header__logo"
              src={vevigLogo}
              alt="Logo empresa"
              title="Logo Empresa"
            />
          </Link>
          <Link to="/">
            <img
              className="header__logo header__logo--full"
              src={vevigLogo}
              alt="Logo empresa"
              title="Logo Empresa"
            />
          </Link>
        </div>
        <i
          className="header__hamburger fa-solid fa-bars"
          onClick={handleNavigationVisible}
          id="menu-toggle-button4"
        />
        <nav
          className={`header__navigation navigation ${
            navigationVisible ? "navigation--visible" : ""
          }`}
        >
          <div className="navigation__header">
            <div className="navigation__logo">
              <Link to="/">
                <img src={vevigLogo} alt="Logo empresa" title="Logo Empresa" />
              </Link>
            </div>
            <div className="navigation__close">
              <span
                className="fa-regular fa-circle-xmark header4__close-button"
                onClick={handleNavigationVisible}
              />
            </div>
          </div>
          <div className="navigation__body">
            <div className="navigation__container-menu ">
              <ul className="navigation__list">
                <li>
                  <Link to="/register" className="navigation__item">
                    Mi cuenta
                  </Link>
                </li>
                <li>
                  <Link to="/register" className="navigation__item">
                    Vende con nosotros
                  </Link>
                </li>
                <li>
                  <Link
                    to="/registro-iniciar-sesion"
                    className="navigation__item"
                  >
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
            <div className="navigation__login-register">
              <span className="navigation__login-register-icon fa-sharp fa-regular fa-circle-user" />
              <Link
                to="/registro-iniciar-sesion"
                className="navigation__login-register-btn"
              >
                Registrate
              </Link>
              <Link to="/cart" className="navigation__login-register-btn">
                Carrito
              </Link>
            </div>
          </div>
        </nav>
      </div>
      <div>
        <div className="header__top-content--desktop container ">
          <div className="header__top-content--desktop__item1">
            <span>
              Descubre la gran variedad de productos que tenemos para ti
            </span>
          </div>
          <div className="header__top-content--desktop__item2">
            <Link to="/" className="header__top-content--desktop__link">
              Mi cuenta
            </Link>
            <Link to="/" className="header__top-content--desktop__link">
              Nosotros
            </Link>
            <Link to="/" className="header__top-content--desktop__link">
              Vende con nosotros
            </Link>
            <Link to="/" className="header__top-content--desktop__link">
              Blog
            </Link>
          </div>
        </div>
        <div className="header__content--desktop container">
          <div className="header__container-img">
            <Link to="/">
              <img
                className="header__logo"
                src={vevigLogo}
                alt="Logo Header"
                title="Logo Header"
              />
              <img
                className="header__logo header__logo--full"
                src={vevigLogo}
                alt="Logo Header"
                title="Logo Header"
              />
            </Link>
          </div>
          <form action="post">
            <input
              type="search"
              id="site-search"
              name="q"
              className="header__content--desktop__search"
              placeholder="Búsqueda de productos..."
            />
            {/* <button className="header__content--desktop__btn">
              <span className="fa-light fa-search header__content--desktop__icon" />
            </button> */}
          </form>
          <div className="header__items-desktop">
            <Link
              to="/registro-iniciar-sesion"
              className="header__content--desktop__links"
            >
              <span className="fa-regular fa-circle-user fa-fw header__content--desktop__icon2" />
              <span className="header__content--desktop__txt-btn">
                Registrate
              </span>
            </Link>
            <Link to="/cart" className="header__content--desktop__links">
              <span className="fa-regular fa-cart-shopping header__content--desktop__icon2" />
              <span className="header__content--desktop__txt-btn">Carrito</span>
            </Link>
            <p className="header__session-user">
              {isLoggedIn ? `${userName}` : ""}
            </p>
            {isLoggedIn ? (
              <button onClick={handleLogout} className="header__logout">
                Cerrar sesión
              </button>
            ) : (
              <button onClick={signInWithGoogle}>
                <i className="logoGoogle fa-brands fa-google"></i>
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
