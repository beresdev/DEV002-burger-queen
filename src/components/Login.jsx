import { Link } from "react-router-dom";

export function Login() {
  return (
    <>
    <section className="login-container">
      <div className="logo-container">
        <img src="/LasChidas_500x500.png" alt="logotipo-las-chidas" />
      </div>
      <form className="form">
        <label>User name: </label>
        <input type="text" />
        <label>Pasword: </label>
        <input type="text" />
        <button>
          <Link to="/MenuW">Iniciar Sesión</Link>
        </button>
      </form>
    </section>
    </>
  );
}
