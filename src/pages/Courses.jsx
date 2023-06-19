import coursesHero from "../assets/images/courses-hero.jpg";
import profile1 from "../assets/images/profile-1.jpg";
import profile2 from "../assets/images/profile-2.jpg";

export default function Courses() {
  return (
    <section className="courses">
      <div className="courses__container container">
        <div className="courses__content-1">
          <h2>
            <span className="fa-duotone fa-circle-user"></span> Bienvenido
            Usuario
          </h2>
          <ul className="courses__list">
            <li className="courses__item">Página principal</li>
            <li className="courses__item">Cursos</li>
            <li className="courses__item">Mis cursos</li>
            <li className="courses__item">Mis calificaciones</li>
            <li className="courses__item">Favoritos</li>
          </ul>
        </div>
        <div className="courses__content-2">
          <h2 className="">VENDIFAST Educación continua</h2>
          <div className="courses__hero">
            <img src={coursesHero} alt="" />
            <div>
              <h2 className="courses__hero-title">
                Bienvenida a la plataforma educativa
                <br />
                <br />
                Todo lo que necesitas en esta página
              </h2>
            </div>
          </div>
          <div className="courses__content-courses-1">
            <div className="courses__course">
              <img src={profile1} alt="" className="courses__course-img" />
              <p className="courses__course-title">
                Curso: Construcción de marca-online
              </p>
              <button className="courses__add-course">Añadir</button>
            </div>
            <div className="courses__course">
              <img src={profile2} alt="" className="courses__course-img" />
              <p className="courses__course-title">
                Curso: Construcción de marca-online
              </p>
              <button className="courses__add-course">Añadir</button>
            </div>
          </div>
          <div className="courses__content-courses-2">
            <p>Curso: Construcción de marca- online-2023</p>
            <h2>Lista de módulos</h2>
            <ul>
              <li>- Módulo 1: Fundamentos para la construcción de marca</li>
              <li>
                - Módulo 2: Los pilares del marketing para construir una marca
              </li>
              <li>- Módulo 3: El marketing mix en la construcción de marca</li>
              <li>
                - Modulo 4: Marketing de servicios y tecnología en la
                construcción de marca
              </li>
            </ul>
          </div>
          <div className="courses__content-courses-3">
            <p>Curso: Construcción de marca- online-2023</p>
            <iframe
              src="https://www.youtube.com/embed/7rgvapDYPo0"
              title="Tecnologías Web Mejor Pagadas | Encuesta Stack Overflow 2023"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
