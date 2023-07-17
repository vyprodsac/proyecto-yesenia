import { Link } from "react-router-dom";

export default function Plans() {
  return (
    <section className="plans ">
      <h1 className="plans__title">|| Planes disponibles</h1>
      <div className="plans__container container">
        <div className="plans__plan">
          <h2 className="plans__plan-title">Plan básico</h2>
          <ul className="plans__characteristics">
            <li>Herramientas básicas</li>
            <li>Cursos básicos</li>
            <li>Certificaciones básicas</li>
          </ul>
          {/* <span className="plans__price">Gratis</span> */}
          <Link to={"/perfil-plataforma"} className="plans__button">
            Suscríbete - Gratis
          </Link>
        </div>
        <div className="plans__plan">
          <h2 className="plans__plan-title">Plan plus</h2>
          <ul className="plans__characteristics">
            <li>Ofrece más herramientas</li>
            <li>Cursos exclusivos</li>
            <li>Publicidad incluida</li>
          </ul>
          {/* <span className="plans__price">S/.10.00 x mes</span> */}
          <Link to={"/perfil-plataforma"} className="plans__button">
            Suscríbete - S/.10.00 x mes
          </Link>
          a
        </div>
      </div>
    </section>
  );
}
