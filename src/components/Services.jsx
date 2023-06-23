export default function Services() {
  return (
    <section className="services">
      <div className="container">
        <h2 className="services__title">|| Nuestros servicios</h2>
      </div>
      <div className="services__container ">
        <div className="services__content">
          <div className="services__service ">
            <div className="services__service-description services__platforma-web-1">
              <h3>Plataforma web</h3>
              <p>
                Para nuestros emprendedores le ofrecemos lo básico, para que
                pueda vender sus productos en nuestra plataforma web, así poder
                crecer de manera rápida, donde te permitirá diseñar segpun tu
                estilo y puedes subir los productos que deseas. No hay limites
                para que puedas vender por internet.
              </p>
            </div>
            <img
              className="services__platforma-web-2"
              src="https://josefacchin.com/wp-content/uploads/2021/07/crear-pagina-web-gratis.png.webp"
              alt=""
            />
          </div>
          <div className="services__service">
            <img
              src="https://www.salesforce.com/content/dam/blogs/eu/2021/digital-commerce-platform-header.jpg"
              alt=""
            />
            <div className="services__service-description">
              <h3>Clientes</h3>
              <p>
                Para nuestros emprendedores le ofrecemos lo básico, para que
                pueda vender sus productos en nuestra plataforma web, así poder
                crecer de manera rápida, donde te permitirá diseñar segpun tu
                estilo y puedes subir los productos que deseas. No hay limites
                para que puedas vender por internet.
              </p>
            </div>
          </div>
          <div className="services__service ">
            <div className="services__service-description services__cursos-privados-1">
              <h3>Cursos privados</h3>
              <p>
                Para nuestros emprendedores le ofrecemos lo básico, para que
                pueda vender sus productos en nuestra plataforma web, así poder
                crecer de manera rápida, donde te permitirá diseñar segpun tu
                estilo y puedes subir los productos que deseas. No hay limites
                para que puedas vender por internet.
              </p>
            </div>
            <img
              className="services__cursos-privados-2"
              src="https://www.esan.edu.pe/images/blog/2017/07/31/1500x844-elearning.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}
