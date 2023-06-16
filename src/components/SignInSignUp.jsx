import { Link } from "react-router-dom";

export default function SignInSignUp() {
  return (
    <section className="sign-in-sign-up container">
      <h1 className="sign-in-sign-up__title">
        || Inicie sesión o Cree una cuenta
      </h1>
      <div className="sign-in-sign-up__content">
        {/* Iniciar sesion */}
        <div className="sign-in-sign-up__sign-in">
          <h2 className="sign-in-sign-up__sign-in-title">Usuario existente</h2>
          {/* Formulario par registrarse con correo , contraseña y un boton */}
          <form action="" className="sign-in-sign-up__sign-in-form">
            <div className="sign-in-sign-up__sign-in-form-group">
              <label className="sign-in-sign-up__sign-in-label" htmlFor="email">
                Correo electrónico
              </label>
              <input
                type="email"
                placeholder="Correo"
                className="sign-in-sign-up__sign-in-input"
              />
            </div>
            <div className="sign-in-sign-up__sign-in-form-group">
              <label
                htmlFor="password"
                className="sign-in-sign-up__sign-in-label"
              >
                Contraseña
              </label>
              <input
                type="password"
                placeholder="Contraseña"
                className="sign-in-sign-up__sign-in-input"
              />
            </div>
            <div className="sign-in-sign-up__remember-data">
              <input type="checkbox" name="data" id="" />
              <label htmlFor="">Recordar mis datos</label>
            </div>
            <a className="sign-in-sign-up__forgot-password" href="">
              Olvidé mi contraseña
            </a>
            <Link to={"/planes"} className="sign-in-sign-up__sign-in-button">
              Iniciar sesión
            </Link>
          </form>
        </div>
        {/* Registrarse */}
        <div className="sign-in-sign-up__sign-up">
          <h2 className="sign-in-sign-up__sign-in-title">Usuario nuevo</h2>
          <div className="sign-in-sign-up__sign-up-container">
            <h3>
              Al registrarse obtiene acceso a 1 curso sobre ecommerce gratuito.
            </h3>
            <Link to="/registro" className="sign-in-sign-up__sign-in-button">
              Registrarse
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
