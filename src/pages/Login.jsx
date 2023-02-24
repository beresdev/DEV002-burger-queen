import { Link } from "react-router-dom";

export function Login() {
  return (
    <>
    <section className="login-container">
      <div className="logo-container">
        <img src="/LasChidas_500x500.png" alt="logotipo-las-chidas" />
      </div>
      <form className="form">
        <label>Username: </label>
        <input type="text" />
        <label>Password: </label>
        <input type="password" />
        <button>
          <Link to="/MenuW">Iniciar Sesión</Link>
        </button>
      </form>
    </section>
    </>
  );
}
