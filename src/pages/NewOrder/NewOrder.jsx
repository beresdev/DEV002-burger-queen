import { useState } from "react";
import { Header } from "../../components/Header/Header";
import { ProductCard } from "../../components/ProductCard/ProductCard";
import { Footer } from "../../components/Footer/Footer";
import { MenuButton } from "../../components/MenuButton/MenuButton";
import { Order } from "../../components/Bill/Order";

export function NewOrder() {
  const [isSelected, setIsSelected] = useState("breakfast");
  const [products, setProducts] = useState([]);
  const productsCopy = [...products];

  const setProductProp = (data) => {
    const index = productsCopy.findIndex((element) => element.id === data.id);
    if (index === -1) {
      const newProduct = { ...data, subtotal: data.quantity * data.price };
      setProducts([...products, newProduct]);
    } else {
      productsCopy[index].quantity += 1;
      productsCopy[index].subtotal = productsCopy[index].quantity * productsCopy[index].price;
      setProducts(productsCopy);
    }
  };

  const productOperation = (id, opertaion) => {
    const index = productsCopy.findIndex((element) => element.id === id);
    if(opertaion === 'sub') {
      if (productsCopy[index].quantity > 1) {
        productsCopy[index].quantity -= 1;
      }
    } else if (opertaion === 'add') {
        productsCopy[index].quantity += 1;
      }
    productsCopy[index].subtotal = productsCopy[index].quantity * productsCopy[index].price;
    setProducts(productsCopy);
  };

  const total = products.reduce((sum, item) => sum + item.subtotal, 0);

  return (
    <main className="main-NewOrder">
      <Header />
      <section className="products-section">
        <div className="menu-types-selector">
          <button
            className="option"
            onClick={() => {
              setIsSelected("breakfast");
            }}
          >
            Breakfast
          </button>
          <button
            className="option"
            onClick={() => {
              setIsSelected("lunchDinner");
            }}
          >
            Lunch/Dinner
          </button>
        </div>
        <div className="products-container">
          <ProductCard type={isSelected} setProductProp={setProductProp} />
        </div>
      </section>
      <section className="bill-section">
        <div className="bill-container">
          <p className="order-id">Order: mvjri9w0n</p>
          <Order products={products} productOperation={productOperation} />
          <p className="total">Total: $ {total}</p>
        </div>
        <div className="buttons-container">
          <MenuButton text="Cancel" />
          <MenuButton text="Send Kitchen" />
        </div>
      </section>
      <Footer>
        <MenuButton text="NEW ORDER" route="/NewOrder" />
        <MenuButton text="MY ORDERS" route="/MyOrders" />
      </Footer>
    </main>
  );
}
