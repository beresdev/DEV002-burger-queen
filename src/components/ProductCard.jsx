import data from "../menu.json";

export function ProductCard(type) {
  let key = Object.values(type).toString();
  return data[key].map((data) => (
    <div className="product" key={data.id}>
      <p className="product-name">{data.item}</p>
      <p className="product-price">{data.price}</p>
    </div>
  ));
}
