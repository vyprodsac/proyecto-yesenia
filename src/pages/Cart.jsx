import { Link } from "react-router-dom";

export default function Cart() {
  return (
    <section className="cart">
      <div className="cart__container container">
        <h1>Resumen de la compra</h1>
        <div className="cart__summary">
          <div className="cart__product-summary">
            <div className="cart__details">
              <h2>
                Zapatilla Adidas Tensaur Sport Training Cierre de Cordones
                Blanco GW6422
              </h2>
              <p>Talla: 14.5</p>
              <p>Color: Blanco - Negro</p>
              <p>Precio unitario :S/.100</p>
              <p>Cantidad: 2 u.</p>
            </div>
            <img
              src="https://assets.adidas.com/images/w_600,f_auto,q_auto/aa53a0a800c846abb44aae8a00367e1d_9366/Zapatillas_Tensaur_Sport_Training_Cierre_de_Cordones_Blanco_GW6422_01_standard.jpg"
              alt=""
            />
          </div>
          <div className="cart__product-summary">
            <div className="cart__details">
              <h2>
                Zapatilla Adidas Tensaur Sport Training Cierre de Cordones
                Blanco GW6422
              </h2>
              <p>Talla: 14.5</p>
              <p>Color: Blanco - Negro</p>
              <p>Precio unitario :S/.100</p>
              <p>Cantidad: 2 u.</p>
            </div>
            <img
              src="https://assets.adidas.com/images/w_600,f_auto,q_auto/aa53a0a800c846abb44aae8a00367e1d_9366/Zapatillas_Tensaur_Sport_Training_Cierre_de_Cordones_Blanco_GW6422_01_standard.jpg"
              alt=""
            />
          </div>
          <div className="cart__product-summary">
            <div className="cart__details">
              <h2>
                Zapatilla Adidas Tensaur Sport Training Cierre de Cordones
                Blanco GW6422
              </h2>
              <p>Talla: 14.5</p>
              <p>Color: Blanco - Negro</p>
              <p>Precio unitario :S/.100</p>
              <p>Cantidad: 2 u.</p>
            </div>
            <img
              src="https://assets.adidas.com/images/w_600,f_auto,q_auto/aa53a0a800c846abb44aae8a00367e1d_9366/Zapatillas_Tensaur_Sport_Training_Cierre_de_Cordones_Blanco_GW6422_01_standard.jpg"
              alt=""
            />
          </div>
          <h2 className="cart__total">Total: S/400.00</h2>
        </div>
        <Link to="/check-out" className="cart__button">
          <button>Finalizar compra</button>
        </Link>
      </div>
    </section>
  );
}
