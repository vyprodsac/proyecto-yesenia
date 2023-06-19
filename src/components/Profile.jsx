import { Link } from "react-router-dom";
import profile1 from "../assets/images/profile-1.jpg";
import profile2 from "../assets/images/profile-2.jpg";
import profile3 from "../assets/images/profile-3.jpg";
import profile4 from "../assets/images/profile-4.jpg";
import profile5 from "../assets/images/profile-5.jpg";
import profile6 from "../assets/images/profile-6.jpg";
import profile7 from "../assets/images/profile-7.jpg";

export default function Profile() {
  return (
    <section className="profile">
      <div className="profile__container container">
        <h1 className="profile__title">|| Bienvenido a la plataforma</h1>
        <span className="profile__subtitle">Elige tu perfil</span>
        <div className="profile__content">
          <div className="profile__profiles">
            <div>
              <img src={profile1} alt="" />
              <Link to={"/plataforma-inicio"} className="profile__img-name">
                Tecnología
              </Link>
            </div>
          </div>
          <div className="profile__profiles">
            <div>
              <img src={profile2} alt="" />
              <Link to={"/plataforma-inicio"} className="profile__img-name">
                Artesania
              </Link>
            </div>
          </div>
          <div className="profile__profiles">
            <div>
              <img src={profile3} alt="" />
              <Link to={"/plataforma-inicio"} className="profile__img-name">
                Papeleria
              </Link>
            </div>
          </div>
          <div className="profile__profiles">
            <div>
              <img src={profile4} alt="" />
              <Link to={"/plataforma-inicio"} className="profile__img-name">
                Moda y Belleza
              </Link>
            </div>
          </div>
          <div className="profile__profiles">
            <div>
              <img src={profile5} alt="" />
              <Link to={"/plataforma-inicio"} className="profile__img-name">
                Belleza
              </Link>
            </div>
          </div>
          <div className="profile__profiles">
            <div>
              <img src={profile6} alt="" />
              <Link to={"/plataforma-inicio"} className="profile__img-name">
                Hogar
              </Link>
            </div>
          </div>
          <div className="profile__profiles">
            <div>
              <img src={profile7} alt="" />
              <Link to={"/plataforma-inicio"} className="profile__img-name">
                Manualidades
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
