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
            <h2>Mi cuenta</h2>
            <ul>
              <li>Registrate</li>
              <li>Inicia Sesión</li>
              <li>Seguir tu pedido</li>
            </ul>
          </div>
          <div className="footer__about-us">
            <h2>Acerca de nosotros</h2>
            <ul>
              <li>Quienes Somos</li>
              <li>Terminos y condiciones</li>
              <li>Trabaja con nosotros</li>
            </ul>
          </div>
          <div className="footer__customer-support">
            <h2>Atención al cliente</h2>
            <ul>
              <li>Pregutas Frecuentes</li>
              <li>Libro de reclamaciones</li>
            </ul>
          </div>
          <div className="footer__contact">
            <h2>Contacto</h2>
            <ul>
              <li>+51 999 999 999</li>
              <li>marketing@ventifastperú.com</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
