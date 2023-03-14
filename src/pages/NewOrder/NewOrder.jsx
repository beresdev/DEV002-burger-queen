import { useState } from "react";
import { Header } from "../../components/Header/Header";
import { ProductCard } from "../../components/ProductCard/ProductCard";
import { Footer } from "../../components/Footer/Footer";
import { MenuButton } from "../../components/MenuButton/MenuButton";
import { Order } from "../../components/Bill/Order";
import { TablesForm } from '../../components/tablesForm/tableForm'

export function NewOrder({orderId}) {
  const [isSelected, setIsSelected] = useState("breakfast");
  const [products, setProducts] = useState([]);
  const productsCopy = [...products];
  const [table, setTable] = useState(1);

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

  const productOperation = (id, operation) => {
    const index = productsCopy.findIndex((element) => element.id === id);
    if(operation === 'sub') {
      if (productsCopy[index].quantity > 1) {
        productsCopy[index].quantity -= 1;
      }
    } else if (operation === 'add') {
        productsCopy[index].quantity += 1;
      }
    productsCopy[index].subtotal = productsCopy[index].quantity * productsCopy[index].price;

    if(operation === 'del') {
        productsCopy.splice(index,1)
      }

    setProducts(productsCopy);
  };

  const settingTable = (id) => {
    setTable(id);
  }

  
  const total = products.reduce((sum, item) => sum + item.subtotal, 0);
  
  const createObjectOrder = () => {
    const order = {
      orderId: orderId,
      table: table,
      products: products,
      total: total,
      status: 1
    }
    console.log(order)
    return order;
  }

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
          <div className="order-info">
            <TablesForm settingTable={settingTable}/>
            <p className="order-id">Order id: {orderId}</p>
          </div>
          <Order products={products} productOperation={productOperation} />
          <p className="total">Total: $ {total}</p>
        </div>
        <div className="buttons-container">
          <button className='menu-button'>Cancel</button>
          <button className='menu-button' onClick={()=>{createObjectOrder()}}>Send Kitchen</button>
        </div>
      </section>
      <Footer>
        <MenuButton text="NEW ORDER" route="/NewOrder"/>
        <MenuButton text="MY ORDERS" route="/MyOrders" />
      </Footer>
    </main>
  );
}
