import { Link } from "react-router-dom";
import { Header } from "../components/Header";

export function MenuW() {
  return (
    <>
    <Header />
      <section className="menu-options">
        <Link to="/NewOrder">
          <button>New Order</button>
        </Link>
        <Link to="/MyOrders">
          <button>My Orders</button>
        </Link>
      </section>
      <Link to="/" className="logout"><i className="fa-solid fa-right-from-bracket"></i></Link>
    </>
  );
}
