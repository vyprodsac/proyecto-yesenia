export default function Plans() {
  return (
    <section className="plans container">
      <h1 className="plans__title">|| Planes disponibles</h1>
      <div className="plans__plan-1">
        <h2>Plan básico</h2>
        <ul>
          <li>Herramientas básicas</li>
          <li>Cursos básicos</li>
          <li>Certificaciones básicas</li>
        </ul>
        <span>Gratis</span>
        <button>Suscríbete</button>
      </div>
      <div className="plans__plan-1">
        <h2>Plan premium</h2>
        <ul>
          <li>Ofrece más herramientas</li>
          <li>Cursos exclusivos</li>
          <li>Certificaciones exclusivas</li>
          <li>Publicidad incluida</li>
        </ul>
        <span>S/.10.00 x mes</span>
        <button>Suscríbete</button>
      </div>
    </section>
  );
}
