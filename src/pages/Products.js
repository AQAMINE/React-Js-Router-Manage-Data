import { Link } from "react-router-dom";

const Products = () => {
  return (
    <section>
      <h1>Products Page</h1>
      <ul>
        <li>
          <Link to="/products/p1">RTX 3060ti</Link>
        </li>
        <li>
          <Link to="/products/p2">RTX 3070ti</Link>
        </li>
        <li>
          <Link to="/products/p3">RTX 3090ti</Link>
        </li>
      </ul>
    </section>
  );
};

export default Products;
