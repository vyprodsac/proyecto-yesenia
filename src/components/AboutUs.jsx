export default function AboutUs() {
  return (
    <section className="about-us container">
      <h1 className="about-us__title">|| Sobre Nosotros</h1>
      <div className="about-us__wrapper">
        <p className="about-us__text">
          <h2 className="about-us__subtitle">
            || Somos una empresa{" "}
            <span className="about-us__subtitle--bold">sostenible</span>
          </h2>
          En VENDIFAST no solo encuentras lo que necesitas, sino también
          productos de mejor calidad, el mejor diseño y al mejor precio.
          Contamos con diferentes tipos de emprendedores, donde ofrecen una
          variedad de productos únicos para nuestros clientes. Así este buscando
          una compra en especial, puede contar con nosotros y nuestros
          productos, siempre con un servicio de calidad hasta el final. Revise
          nuestra página y nuestras redes sociales
          <br />
          <button className="about-us__button">Leer más</button>
        </p>
        <img
          className="about-us__img"
          src="https://images.pexels.com/photos/3962291/pexels-photo-3962291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
      </div>
    </section>
  );
}
