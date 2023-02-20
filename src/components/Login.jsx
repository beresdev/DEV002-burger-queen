import { Link } from "react-router-dom";

export function Login() {
  return (
    <>
      <h1>Login</h1>
      <button>
        <Link to= "/MenuW">Iniciar Sesión</Link>
      </button>
    </>
  );
}
