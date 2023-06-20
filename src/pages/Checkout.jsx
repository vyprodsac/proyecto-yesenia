export default function Checkout() {
  return (
    <section className="checkout">
      <h1 className="checkout__title">Checkout</h1>
      <div className="checkout__container container">
        {/* Datos personales + facturacion | Tipo de envio o retiro + cupon y boton de finalizar compra */}
        <div className="checkout__data">
          <h2>Datos personales</h2>
          <form action="">
            <label htmlFor="">Nombres y apellidos</label>
            <input type="text" placeholder="Escriba aquí..." />
            <label htmlFor="">Correo electronico</label>
            <input type="email" placeholder="Escriba aquí..." />
            <label htmlFor="">Teléfono</label>
            <input type="number" name="" id="" />
            <label htmlFor="">Dirección de entrega</label>
            <input type="text" placeholder="Escriba aquí..." />
            <label htmlFor="">Referencia</label>
            <input type="text" placeholder="Escriba aquí..." />
          </form>
        </div>
        <div className="checkout__payment">
          <h2>Datos de pago</h2>
          <form action="">
            <label htmlFor="">Número de tarjeta</label>
            <input type="number" name="" id="" placeholder="Escriba aquí..." />
            <label htmlFor="">Fecha de vencimiento</label>
            <input type="date" name="" id="" />
            <label htmlFor="">CVV</label>
            <input type="number" name="" id="" />
          </form>
        </div>
        <div className="checkout__shipment">
          <h2>Método de envio</h2>
          <form action="">
            <div className="checkout__shipment-radio">
              <input type="radio" name="envio" id="" />
              <label htmlFor="">Envio a domicilio</label>
            </div>
            <div className="checkout__shipment-radio">
              <input type="radio" name="envio" id="" />
              <label htmlFor="">Retiro en tienda</label>
            </div>
          </form>
          <button className="checkout__pay">Finalizar compra</button>
        </div>
      </div>
    </section>
  );
}
