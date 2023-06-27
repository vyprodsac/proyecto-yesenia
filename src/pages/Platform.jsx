import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
export default function Platform() {
  const handleSendInformation = () => {
    const MySwal = withReactContent(Swal);
    MySwal.fire({
      title: <p>Información enviada</p>,
      position: "center",
      icon: "success",
      showConfirmButton: false,
      timer: 2000,
    });
  };
  return (
    <section className="platform">
      <div className="platform__container container">
        <div className="platform__content-1">
          <span className="platform__user">
            <span className="fa-duotone fa-circle-user"></span> Bienvenido
            Usuario
          </span>

          <button className="platform__button">Ajustes</button>
          <Link className="platform__button" to={"/agregar-producto"}>
            Agregar productos
          </Link>
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
          <div className="platform__content-2-hero">
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
          <div>
            <h3>Ajustes</h3>
            <form className="platform__form">
              <div className="platform__form-group">
                <label htmlFor="">Nombre de la marca:</label>
                <input type="text" />
              </div>
              <p>Seleccione color de la marca: </p>
              <div id="swatch platform__form-group--color">
                <input type="color" id="color" name="color" />
              </div>
              <div className="platform__form-group">
                <label htmlFor="">Subir imagen</label>
                <input type="file" name="" id="" />
              </div>
              <button
                type="button"
                className="platform__btn-form"
                onClick={handleSendInformation}
              >
                Enviar información
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
