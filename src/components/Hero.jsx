import { Link } from "react-router-dom";
// import imgHero from "../assets/images/hero5.jpg";
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
            <button className="hero__btn">Conoce más productos aqui</button>
          </Link>
        </div>
        <div className="hero__img-container">
          {/* <img src={imgHero} alt="" className="hero__img" /> */}
          <img
            src="https://images.pexels.com/photos/7620627/pexels-photo-7620627.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            className="hero__img"
          />
        </div>
      </div>
    </section>
  );
}
