import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <section className="sign-up">
      <div className="sign-up__container container">
        <form action="" className="sign-up__form">
          <h2 className="sign-up__title">Registro</h2>
          <div className="sign-up__form-group">
            <label htmlFor="">Correo electrónico:</label>
            <input type="email" name="" id="" placeholder="Digite aqui..." />
          </div>
          <div className="sign-up__form-group">
            <label htmlFor="">Contraseña:</label>
            <input type="password" name="" id="" placeholder="Digite aqui..." />
          </div>
          <div className="sign-up__form-group">
            <label htmlFor="">Repita la contraseña: </label>
            <input type="password" name="" id="" placeholder="Digite aqui..." />
          </div>

          <h2 className="sign-up__title">Información del negocio</h2>
          <div className="sign-up__form-group">
            <label htmlFor="">Nombre del emprendimiento:</label>
            <input type="email" name="" id="" placeholder="Digite aqui..." />
          </div>
          <div className="sign-up__form-group">
            <label htmlFor="">Dirección registrada del emprendimiento:</label>
            <input type="email" name="" id="" placeholder="Digite aqui..." />
          </div>
          <div className="sign-up__form-group">
            <label htmlFor="">Departamento:</label>
            <input type="email" name="" id="" placeholder="Digite aqui..." />
          </div>
          <div className="sign-up__form-group-2">
            <div className="sign-up__form-group-2--1">
              <label htmlFor="">Provincia:</label>
              <input type="email" name="" id="" placeholder="Digite aqui..." />
            </div>
            <div className="sign-up__form-group-2--1">
              <label htmlFor="">Distrito:</label>
              <input type="email" name="" id="" placeholder="Digite aqui..." />
            </div>
          </div>
          <div className="sign-up__form-group-2">
            <div className="sign-up__form-group-2--1">
              <label htmlFor="">Número de DNI:</label>
              <input type="email" name="" id="" placeholder="Digite aqui..." />
            </div>
            <div className="sign-up__form-group-2--1">
              <label htmlFor="">Distrito:</label>
              <input type="file" name="" id="" />
            </div>
          </div>
          <h2 className="sign-up__title">Información del emprededor</h2>
          <div className="sign-up__form-group">
            <label htmlFor="">Nombres y apellidos completos: </label>
            <input type="password" name="" id="" placeholder="Digite aqui..." />
          </div>
          <div className="sign-up__form-group-2">
            <div className="sign-up__form-group-2--1">
              <label htmlFor="">Nacionalidad:</label>
              <input type="email" name="" id="" placeholder="Digite aqui..." />
            </div>
            <div className="sign-up__form-group-2--1">
              <label htmlFor="">Fecha de nacimiento:</label>
              <input type="date" name="" id="" />
            </div>
          </div>
          <div className="sign-up__form-group-2">
            <div className="sign-up__form-group-2--1">
              <label htmlFor="">Nacionalidad:</label>
              <input type="email" name="" id="" placeholder="Digite aqui..." />
            </div>
            <div className="sign-up__form-group-2--1">
              <label htmlFor="">Número de DNI o pasaporte:</label>
              <input type="number" name="" id="" />
            </div>
          </div>
          <div className="sign-up__form-group-2">
            <div className="sign-up__form-group-2--1">
              <label htmlFor="">Teléfono:</label>
              <input type="number" name="" id="" placeholder="Digite aqui..." />
            </div>
            <div className="sign-up__form-group-2--1">
              <label htmlFor="">Correo electrónico:</label>
              <input type="email" name="" id="" />
            </div>
          </div>
          <div className="sign-up__form-group">
            <label htmlFor="">Dirección: </label>
            <input type="text" name="" id="" placeholder="Digite aqui..." />
          </div>
          <Link to="/registro" className="sign-in-sign-up__sign-in-button">
            Registrarse
          </Link>
        </form>
      </div>
    </section>
  );
}
