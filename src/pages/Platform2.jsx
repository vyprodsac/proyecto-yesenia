import profile1 from "../assets/images/profile-1.jpg";
import profile2 from "../assets/images/profile-2.jpg";
import profile3 from "../assets/images/profile-3.jpg";
import profile4 from "../assets/images/profile-4.jpg";
import profile5 from "../assets/images/profile-5.jpg";
import profile6 from "../assets/images/profile-6.jpg";
import profile7 from "../assets/images/profile-7.jpg";

export default function Platform2() {
  return (
    <section className="platform2">
      <div className="platform2__container container">
        <div className="platform2__hero">
          <h2>Bienvenida Luz</h2>
          <ul className="platform2__list">
            <li>
              <i className="fa-duotone fa-flag"></i> Reportar vendedor
            </li>
            <li>
              <i className="fa-duotone fa-books"></i> Cursos
            </li>
            <li>
              <i className="fa-duotone fa-comments-question"></i> Solicitar
              ayuda
            </li>
            <li>
              <i className="fa-duotone fa-cart-shopping"></i> Pedidos
            </li>
            <li>
              <i className="fa-duotone fa-cart-shopping-fast"></i> Seguir
              pedidos
            </li>
          </ul>
          
        </div>
        <div className="platform2__content">
          <div className="platform2__category">
            <h3>Categorias</h3>
            <ul>
              <li>Promociones</li>
              <li>Moda</li>
              <li>Belleza</li>
              <li>Papeleria</li>
              <li>Hogar</li>
            </ul>
          </div>
          <div className="platform2__products">
            <div className="platform2__product">
              <img src={profile1} alt="" />
              <p>Tecnologia</p>
              <p>Laptop - S/100.00</p>
              <button>Añadir al carrito</button>
            </div>
            <div className="platform2__product">
              <img src={profile2} alt="" />
              <p>Tecnologia</p>
              <p>Laptop - S/100.00</p>
              <button>Añadir al carrito</button>
            </div>
            <div className="platform2__product">
              <img src={profile3} alt="" />
              <p>Tecnologia</p>
              <p>Laptop - S/100.00</p>
              <button>Añadir al carrito</button>
            </div>
            <div className="platform2__product">
              <img src={profile4} alt="" />
              <p>Tecnologia</p>
              <p>Laptop - S/100.00</p>
              <button>Añadir al carrito</button>
            </div>
            <div className="platform2__product">
              <img src={profile5} alt="" />
              <p>Tecnologia</p>
              <p>Laptop - S/100.00</p>
              <button>Añadir al carrito</button>
            </div>
            <div className="platform2__product">
              <img src={profile6} alt="" />
              <p>Tecnologia</p>
              <p>Laptop - S/100.00</p>
              <button>Añadir al carrito</button>
            </div>
            <div className="platform2__product">
              <img src={profile7} alt="" />
              <p>Tecnologia</p>
              <p>Laptop - S/100.00</p>
              <button>Añadir al carrito</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
