import { Link } from "react-router-dom";

export default function Platform() {
  return (
    <section className="platform">
      <div className="platform__container container">
        <div className="platform__content-1">
          <span className="platform__user">
            <span className="fa-duotone fa-circle-user"></span> Bienvenido
            Usuario
          </span>
          <button className="platform__button">Ajustes</button>
          <div className="platform__filters">
            <ul className="platform__list">
              <li className="platform__item">Tecnología</li>
              <li className="platform__item">Belleza</li>
              <li className="platform__item">Hogar</li>
              <li className="platform__item">Moda</li>
              <li className="platform__item">Papeleria</li>
              <li className="platform__item">Snacks</li>
              <li className="platform__item">Mochilas y carteras</li>
              <li className="platform__item">Deportes</li>
              <li className="platform__item">Electrodomésticos</li>
            </ul>
          </div>
        </div>
        <div className="platform__content-2">
          <Link to={"/cursos-inicio"} className="platform__options">
            <span className="fa-duotone fa-books"></span> Cursos
          </Link>
          <Link className="platform__options">
            <span className="fa-duotone fa-comments-question-check"></span>{" "}
            Solicitar ayuda
          </Link>
          <Link className="platform__options">
            <span className="fa-duotone fa-cart-shopping"></span> Pedidos
          </Link>
          <Link className="platform__options">
            <span className="fa-duotone fa-cart-shopping-fast"></span> Seguir
            pedido
          </Link>
        </div>
      </div>
    </section>
  );
}
