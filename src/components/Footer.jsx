import { Link } from "react-router-dom";
import footerTarjetas from "../assets/images/footer-tarjetas.png";

export default function Footer() {
  return (
    <div className="footer">
      <div>
        <svg
          className="waves"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 24 150 28"
          preserveAspectRatio="none"
          shapeRendering="auto"
        >
          <defs>
            <path
              id="gentle-wave"
              d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
            />
          </defs>
          <g className="parallax">
            <use xlinkHref="#gentle-wave" x="48" y="5" fill="#b3dbd5" />
            <use xlinkHref="#gentle-wave" x="48" y="0" fill="#2c7775" />
            <use xlinkHref="#gentle-wave" x="48" y="3" fill="#44a798" />
          </g>
        </svg>
      </div>
      <div className="footer__container">
        <div className="container footer__container--content">
          <div className="footer__account">
            <h2 className="footer__titles">Mi cuenta</h2>
            <ul className="footer__account-list">
              <li className="footer__account-item">
                <Link className="footer__account-link">Registrate</Link>
              </li>
              <li className="footer__account-item">
                <Link className="footer__account-link">Inicia Sesión</Link>
              </li>
              <li className="footer__account-item">
                <Link className="footer__account-link">Seguir tu pedido</Link>
              </li>
            </ul>
          </div>
          <div className="footer__about-us">
            <h2 className="footer__titles">Acerca de nosotros</h2>
            <ul className="footer__about-us-list">
              <li className="footer__about-us-item">
                <Link className="footer__about-us-link">Quienes Somos</Link>
              </li>
              <li className="footer__about-us-item">
                <Link className="footer__about-us-link">
                  Terminos y condiciones
                </Link>
              </li>
              <li className="footer__about-us-item">
                <Link className="footer__about-us-link">
                  Trabaja con nosotros
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer__customer-support">
            <h2 className="footer__titles">Atención al cliente</h2>
            <ul className="footer__customer-support-list">
              <li className="footer__customer-support-item">
                <Link className="footer__customer-support-link">
                  Pregutas Frecuentes
                </Link>
              </li>
              <li className="footer__customer-support-item">
                <Link className="footer__customer-support-link">
                  Libro de reclamaciones
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer__contact">
            <h2 className="footer__titles">Contacto</h2>
            <ul className="footer__contact-list">
              <li className="footer__contact-item">
                <Link className="footer__contact-link">+51 999 999 999</Link>
              </li>
              <li className="footer__contact-item">
                <Link className="footer__contact-link">
                  marketing@ventifastperú.com
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="footer__bottom-container container">
          <img className="footer__img" src={footerTarjetas} alt="" />
          <ul className="footer__social-list">
            <li className="footer__social-item">
              <a
                href="#"
                className="footer__social-link fa-brands fa-facebook"
              />
            </li>
            <li>
              <a
                href="#"
                className="footer__social-link fa-brands fa-instagram"
              />
            </li>
            <li>
              <a
                href="#"
                className="footer__social-link fa-brands fa-youtube"
              />
            </li>
            <li>
              <a href="#" className="footer__social-link fa-brands fa-tiktok" />
            </li>
            <li>
              <a
                href="#"
                className="footer__social-link fa-brands fa-twitter"
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
