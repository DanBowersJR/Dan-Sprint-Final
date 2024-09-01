import React, { useState, useEffect, useContext } from "react";
import { getProducts } from "../api/api";
import { Link } from "react-router-dom";
import { ShoppingCartContext } from "../context/ShoppingCartContext";
import "../styles/ProductList.css";

// ProductList component fetches and displays a list of products
const ProductList = () => {
  const [products, setProducts] = useState([]); // State to hold the list of products
  const { addToCart } = useContext(ShoppingCartContext); // Access addToCart function from ShoppingCartContext

  // Effect hook to fetch products once component mounts
  useEffect(() => {
    setProducts(getProducts()); // Fetch products and set to state
  }, []); // Empty dependency array ensures this effect runs only once after initial render

  return (
    <div className="product-list">
      <h1>Product List</h1>
      <div className="product-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            />
            <div className="product-info">
              <h2>{product.name}</h2>
              <p>${product.price}</p>
              <Link to={`/product/${product.id}`} className="details-link">
                View Details
              </Link>
              <button onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
