import { Link } from "react-router-dom";
import imgHero from "../assets/images/hero5.jpg";
export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__container container">
        <div className="hero__content">
          <h1 className="hero__title">
            Descubre la{" "}
            <span className="hero__title--special">gran variedad</span> de
            productos que tenemos para ti.
          </h1>
          <Link to={"/plataforma-inicio2"}>
            <button className="hero__btn">Conoce más aqui</button>
          </Link>
        </div>
        <div className="hero__img-container">
          <img src={imgHero} alt="" className="hero__img" />
        </div>
      </div>
    </section>
  );
}
