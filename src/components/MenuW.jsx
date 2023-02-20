import { Link } from "react-router-dom";

export function MenuW() {
  return (
    <>
      <h1>MenuW</h1>
      <button>
        <Link to="/NewOrder">New Order</Link>
      </button>
      <button>
        <Link to="/MyOrders">My Orders</Link>
      </button>
      <button>
        <Link to ="/">LogOut</Link>
      </button>
    </>
  );
}
