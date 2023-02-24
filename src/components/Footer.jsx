import { Link } from "react-router-dom";

export function Footer({children}) {
  return (
    <section className="footer-section">
      <Link to="/MenuW">
        <button className="home-button">
          <i className="fa-solid fa-house"></i>
        </button>
      </Link>
      {children}
    </section>
  );
}
